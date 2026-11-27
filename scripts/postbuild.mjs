/**
 * GitHub Pages 는 서버 라우팅이 없어서, /projects/xxx 같은 주소로 바로 들어오거나 새로고침하면 404가 난다.
 * 빌드 결과의 index.html 을 각 경로의 index.html 로 복사해 두고(200 응답), 나머지는 404.html 로 받아 앱이 처리한다.
 */
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const index = join(dist, "index.html");
const { projects } = JSON.parse(readFileSync(join(root, "src", "generated", "showcase.json"), "utf8"));
const { workProjects, workProjectRedirects } = await import(pathToFileURL(join(root, "src", "data", "profile.js")).href);

const routes = [...projects.map((p) => `projects/${p.id}`), ...workProjects.map((p) => `work/${p.id}`), ...Object.keys(workProjectRedirects).map((id) => `work/${id}`)];
for (const route of routes) {
  mkdirSync(join(dist, route), { recursive: true });
  copyFileSync(index, join(dist, route, "index.html"));
}
copyFileSync(index, join(dist, "404.html"));
console.log(`경로별 index.html ${routes.length}개와 404.html 생성`);
