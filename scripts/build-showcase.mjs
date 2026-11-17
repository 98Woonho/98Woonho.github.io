/**
 * 포트폴리오에 소개할 MCP·Skill 프로젝트 자료를 모은다 (dev·build 전에 자동 실행).
 *
 *   node scripts/build-showcase.mjs          각 저장소의 showcase/ 를 GitHub에서 가져옴 (배포용)
 *   node scripts/build-showcase.mjs --local  showcase.config.json 의 local 경로를 씀 (push 전 확인용)
 *
 * 프로젝트마다:
 *   - showcase/showcase.json, showcase/demos/*.json 을 읽고
 *   - npm 패키지(로컬이면 dist/index.js)를 MCP 서버로 실행해 실제 도구 목록을 받고
 *   - 데모 시나리오를 터미널 모양 애니메이션 SVG로 그린다.
 * 결과: src/generated/showcase.json, public/showcase/<프로젝트>/<데모>.svg  (둘 다 git에 넣지 않음)
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

/** 저장소의 showcase/ 아래 파일을 읽는다 (로컬 경로 또는 GitHub raw) */
function reader(project) {
  if (local) {
    const base = resolve(root, project.local, "showcase");
    if (!existsSync(base)) throw new Error(`로컬 경로에 showcase/ 가 없습니다: ${base}`);
    return async (path) => JSON.parse(readFileSync(join(base, path), "utf8"));
  }
  const base = `https://raw.githubusercontent.com/${project.repo}/${project.ref}/showcase`;
  return async (path) => {
    const res = await fetch(`${base}/${path}`);
    if (!res.ok) throw new Error(`${base}/${path} → HTTP ${res.status}`);
    return res.json();
  };
}

/** MCP 서버를 실행해 도구 목록을 받는다. 인증키 없이도 서버는 뜬다(도구 호출은 하지 않음). */
async function listTools(project, npmName) {
  let command;
  let args;
  if (local) {
    command = process.execPath;
    args = [resolve(root, project.local, "dist", "index.js")];
    if (!existsSync(args[0])) throw new Error(`로컬 서버가 빌드되지 않았습니다: ${args[0]} (npm run build)`);
  } else {
    // 같은 이름의 패키지 폴더 안에서 npx 를 실행하면 실패하므로 임시 폴더에서 실행한다
    const npx = ["npx", "-y", `${npmName}@latest`];
    [command, ...args] = process.platform === "win32" ? ["cmd", "/c", ...npx] : npx;
  }
  const transport = new StdioClientTransport({ command, args, cwd: tmpdir(), stderr: "ignore" });
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

/** 도구 설명의 첫 문장만 (LLM용 사용 안내는 빼고) */
const firstSentence = (d = "") => d.split(/(?<=[.다])\s/)[0];

function groupTools(tools, groups = []) {
  const byName = new Map(tools.map((t) => [t.name, t]));
  const used = new Set();
  const result = groups.map(({ group, tools: names }) => ({
    group,
    items: names.map((name) => {
      const t = byName.get(name);
      if (!t) throw new Error(`showcase.json 의 도구 ${name} 이(가) 서버에 없습니다`);
      used.add(name);
      return { name, title: t.title ?? "", summary: firstSentence(t.description) };
    }),
  }));
  const rest = tools.filter((t) => !used.has(t.name));
  if (rest.length) result.push({ group: "기타", items: rest.map((t) => ({ name: t.name, title: t.title ?? "", summary: firstSentence(t.description) })) });
  return result;
}

const publicDir = join(root, "public", "showcase");
rmSync(publicDir, { recursive: true, force: true });

const projects = [];
for (const project of config.projects) {
  const read = reader(project);
  const showcase = await read("showcase.json");
  const { tools, version } = await listTools(project, showcase.npm);

  const outDir = join(publicDir, showcase.id);
  mkdirSync(outDir, { recursive: true });
  const demos = [];
  for (const path of showcase.demos ?? []) {
    const d = await read(path);
    writeFileSync(join(outDir, `${d.id}.svg`), renderReplaySvg(d));
    demos.push({ id: d.id, title: d.title, skill: d.skill, summary: d.summary, prompt: d.prompt, svg: `/showcase/${showcase.id}/${d.id}.svg` });
  }

  const { $comment, schema, demos: _d, toolGroups, ...rest } = showcase;
  projects.push({ ...rest, version, repo: project.repo, toolCount: tools.length, tools: groupTools(tools, toolGroups), demos });
  console.log(`✓ ${showcase.id} v${version}: 도구 ${tools.length}개, 데모 ${demos.length}개 (${local ? "로컬" : "GitHub"})`);
}

const genDir = join(root, "src", "generated");
mkdirSync(genDir, { recursive: true });
writeFileSync(join(genDir, "showcase.json"), JSON.stringify({ projects }, null, 2) + "\n");
