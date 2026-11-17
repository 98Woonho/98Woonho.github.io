# 포트폴리오

https://98woonho.github.io

React 19 + Vite. GitHub Actions로 빌드해 GitHub Pages에 배포합니다.

## MCP·Skill 프로젝트는 각 저장소에서 가져옵니다

AI 에이전트 도구 프로젝트는 이 저장소에 내용을 복사하지 않습니다. 빌드할 때 각 저장소의 `showcase/` 폴더와 npm 패키지에서 가져옵니다.

| 가져오는 것 | 어디서 |
|---|---|
| 소개, 링크, 설치 안내, 도구 분류 | 저장소의 `showcase/showcase.json` |
| 데모 (녹화된 대화) | 저장소의 `showcase/demos/*.json` → 터미널 모양 애니메이션 SVG로 변환 |
| MCP 도구 목록 | npm 패키지를 MCP 서버로 실행해 받은 실제 목록 |

사이트는 녹화된 데모만 재생하고 **LLM을 실행하지 않습니다.** 방문자는 자기 Claude에 설치해서 직접 써 봅니다.

새 프로젝트를 추가하려면 해당 저장소에 `showcase/`를 만들고 [showcase.config.json](showcase.config.json)에 한 줄을 넣습니다. 상세 페이지는 `/projects/<id>`에 생깁니다.

## 개발

```bash
npm install
npm run showcase:local   # 옆 폴더(../mcp 등)의 showcase/ 와 로컬 빌드를 사용 (push 전 확인)
npm run showcase         # GitHub에 올라간 showcase/ 와 npm 패키지를 사용 (배포와 같음)
npm run dev              # http://localhost:5173
npm run build            # dist/ 생성 (경로별 index.html, 404.html 포함)
```

`src/generated/`와 `public/showcase/`는 `npm run showcase`가 만드는 파일이라 git에 넣지 않습니다.

## 구조

```
src/
  data/profile.js        # 소개 문구, 경력, 기술, 웹 프로젝트 (여기서 고치면 됨)
  pages/Home.jsx         # 메인 (소개, 프로젝트, 경력, 기술, 연락)
  pages/ProjectDetail.jsx # MCP·Skill 프로젝트 상세 (/projects/:id)
  components/            # 메뉴, 데모 재생, 복사 버튼
  styles.css             # 다크·라이트 모드
scripts/
  build-showcase.mjs     # 각 저장소의 showcase/ + npm 도구 목록 → src/generated, public/showcase
  replay-svg.mjs         # 데모 시나리오 → 애니메이션 SVG
  postbuild.mjs          # GitHub Pages 새로고침 404 방지 (경로별 index.html, 404.html)
.github/workflows/deploy.yml  # push, 수동 실행, 매주 월요일 자동 배포
```
