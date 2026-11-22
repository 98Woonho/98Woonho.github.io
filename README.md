# 포트폴리오

https://98woonho.github.io

React 19 + Vite. GitHub Actions로 빌드해 GitHub Pages에 배포합니다.

## MCP·Skill 프로젝트

소개 자료는 이 저장소의 `showcase/<id>/`에 두고, MCP 도구 목록은 빌드할 때 **배포된 서버를 실제로 실행해** 받습니다. 프로젝트 저장소에는 포트폴리오용 파일을 두지 않습니다.

| 내용 | 어디서 |
|---|---|
| 소개, 링크, 설치 안내, 도구 분류 | `showcase/<id>/showcase.json` |
| 데모 (녹화된 대화) | `showcase/<id>/demos/*.json` → 터미널 모양 애니메이션 SVG로 변환 |
| MCP 도구 목록과 버전 | 배포된 서버를 MCP 클라이언트로 실행해 받은 실제 목록 (`showcase.config.json`의 `server`) |

| 프로젝트 | 배포용 빌드 | `--local` |
|---|---|---|
| korea-transit-mcp | `npx korea-transit-mcp@latest` | 옆 폴더의 `dist/index.js` |
| db-scout-mcp | `npx db-scout-mcp@latest` (Java 서버를 실행하는 실행기라 Java 21 필요) | 옆 폴더의 `npm/launch.js`(로컬 빌드 jar 실행) |

사이트는 녹화된 데모만 재생하고 **LLM을 실행하지 않습니다.** 방문자는 자기 Claude에 설치해서 직접 써 봅니다.

새 프로젝트를 추가하려면 `showcase/<id>/showcase.json`을 만들고 [showcase.config.json](showcase.config.json)에 항목을 넣습니다. 상세 페이지는 `/projects/<id>`에 생깁니다. 데모는 실제 실행 기록을 바탕으로 만들고, 캡션에 날짜·모델·버전을 적습니다.

## 개발

```bash
npm install
npm run showcase:local   # 옆 폴더(../mcp, ../db-scout-mcp)의 로컬 서버 빌드로 도구 목록을 받음 (배포 전 확인)
npm run showcase         # npm에 배포된 서버로 도구 목록을 받음 (배포와 같음)
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
showcase/<id>/            # MCP·Skill 프로젝트 소개 자료와 데모 시나리오
scripts/
  build-showcase.mjs     # showcase/ + 배포된 서버의 도구 목록 → src/generated, public/showcase
  replay-svg.mjs         # 데모 시나리오 → 애니메이션 SVG
  postbuild.mjs          # GitHub Pages 새로고침 404 방지 (경로별 index.html, 404.html)
.github/workflows/deploy.yml  # push, 수동 실행, 매주 월요일 자동 배포
```
