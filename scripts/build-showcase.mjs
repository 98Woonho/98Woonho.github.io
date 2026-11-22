/**
 * 포트폴리오에 소개할 MCP·Skill 프로젝트 자료를 모은다 (dev·build 전에 자동 실행).
 *
 *   node scripts/build-showcase.mjs          npm에 배포된 서버를 실행해 도구 목록을 받음 (배포용)
 *   node scripts/build-showcase.mjs --local  옆 폴더의 로컬 서버 빌드를 실행함 (push 전 확인용)
 *
 * 프로젝트마다(showcase.config.json):
 *   - 이 저장소의 showcase/<id>/showcase.json, showcase/<id>/demos/*.json 을 읽고
 *   - 서버를 MCP 클라이언트로 실행해 실제 도구 목록과 버전을 받는다.
 *       npx 로 최신 패키지를 실행한다. 로컬이면 server.local 의 진입 파일을 node 로 실행한다.
 *       (db-scout-mcp 는 npm 패키지가 Java 서버를 실행하는 실행기라 Java 21이 필요하다)
 *   - 데모 시나리오를 터미널 모양 애니메이션 SVG로 그린다.
 * 결과: src/generated/showcase.json, public/showcase/<id>/<데모>.svg  (둘 다 git에 넣지 않음)
 * 사이트는 녹화된 데모만 재생하고 LLM을 실행하지 않는다.
 */
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { renderReplaySvg } from "./replay-svg.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const local = process.argv.includes("--local");
const config = JSON.parse(readFileSync(join(root, "showcase.config.json"), "utf8"));

const readJson = (path) => JSON.parse(readFileSync(path, "utf8"));

/** 서버 실행 명령. 도구 목록만 받고 도구는 호출하지 않으므로 인증키·DB 설정 없이 실행한다. */
function serverCommand(server) {
  if (server.type !== "npm") throw new Error(`알 수 없는 서버 종류: ${server.type}`);
  if (local) {
    const entry = resolve(root, server.local);
    if (!existsSync(entry)) throw new Error(`로컬 서버가 없습니다: ${entry} (옆 폴더에서 먼저 빌드하세요)`);
    return { command: process.execPath, args: [entry] };
  }
  const npx = ["npx", "-y", `${server.package}@latest`];
  const [command, ...args] = process.platform === "win32" ? ["cmd", "/c", ...npx] : npx;
  return { command, args };
}

/** MCP 서버를 실행해 도구 목록과 버전을 받는다. */
async function listTools(server) {
  const { command, args } = serverCommand(server);
  // 같은 이름의 패키지 폴더 안에서 npx 를 실행하면 실패하므로 임시 폴더에서 실행한다.
  // DB_SCOUT_URL 을 비워 두어, 이 PC의 환경변수와 상관없이 db-scout 가 내장 샘플 DB로 뜨게 한다.
  const transport = new StdioClientTransport({ command, args, cwd: tmpdir(), stderr: "ignore", env: { ...process.env, DB_SCOUT_URL: "" } });
  const client = new Client({ name: "portfolio-build", version: "1.0.0" });
  await client.connect(transport);
  try {
    const { tools } = await client.listTools();
    const info = client.getServerVersion();
    return { tools, version: info?.version };
  } finally {
    await client.close();
  }
}


/** 도구 설명의 첫 문장만 (LLM용 사용 안내는 빼고). "FROM ... JOIN"의 말줄임표(...)는 문장 끝으로 보지 않는다. */
const firstSentence = (d = "") => d.split(/(?<=[^.]\.|다)\s/)[0];

function groupTools(id, tools, groups = []) {
  const byName = new Map(tools.map((t) => [t.name, t]));
  const used = new Set();
  const result = groups.map(({ group, tools: names }) => ({
    group,
    items: names.map((name) => {
      const t = byName.get(name);
      if (!t) throw new Error(`${id}: 도구 분류의 ${name} 이(가) 서버에 없습니다`);
      used.add(name);
      return { name, title: t.title ?? "", summary: firstSentence(t.description) };
    }),
  }));
  const rest = tools.filter((t) => !used.has(t.name));
  if (rest.length) {
    console.warn(`! ${id}: 도구 분류에 없는 도구를 '기타'로 넣습니다: ${rest.map((t) => t.name).join(", ")}`);
    result.push({ group: "기타", items: rest.map((t) => ({ name: t.name, title: t.title ?? "", summary: firstSentence(t.description) })) });
  }
  return result;
}

/** 데모 시나리오의 필수 항목 확인 */
function checkDemo(path, d) {
  for (const key of ["id", "title", "prompt"]) {
    if (typeof d[key] !== "string" || !d[key]) throw new Error(`${path}: ${key} 가 없습니다`);
  }
  if (!Array.isArray(d.steps) || d.steps.length === 0) throw new Error(`${path}: steps 가 비어 있습니다`);
  if (!Array.isArray(d.answer) || d.answer.length === 0) throw new Error(`${path}: answer 가 비어 있습니다`);
}

const publicDir = join(root, "public", "showcase");
rmSync(publicDir, { recursive: true, force: true });

const projects = [];
for (const project of config.projects) {
  const dir = join(root, project.dir);
  const showcase = readJson(join(dir, "showcase.json"));
  const { tools, version } = await listTools(project.server);

  const outDir = join(publicDir, showcase.id);
  mkdirSync(outDir, { recursive: true });
  const demos = [];
  for (const path of showcase.demos ?? []) {
    const d = readJson(join(dir, path));
    checkDemo(`${project.dir}/${path}`, d);
    writeFileSync(join(outDir, `${d.id}.svg`), renderReplaySvg(d));
    demos.push({ id: d.id, title: d.title, skill: d.skill, summary: d.summary, prompt: d.prompt, svg: `/showcase/${showcase.id}/${d.id}.svg` });
  }

  const { $comment, schema, demos: _d, toolGroups, ...rest } = showcase;
  projects.push({
    ...rest,
    version,
    repo: project.repo,
    toolCount: tools.length,
    tools: groupTools(showcase.id, tools, toolGroups),
    demos,
  });
  console.log(`✓ ${showcase.id} v${version}: 도구 ${tools.length}개, 데모 ${demos.length}개 (${local ? "로컬 빌드" : "배포된 서버"})`);
}

const genDir = join(root, "src", "generated");
mkdirSync(genDir, { recursive: true });
writeFileSync(join(genDir, "showcase.json"), JSON.stringify({ projects }, null, 2) + "\n");
