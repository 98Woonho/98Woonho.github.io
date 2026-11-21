// 사이트에 나오는 소개·경력·기술. 문구는 여기서 고치면 된다.
// MCP·Skill 프로젝트는 각 저장소의 showcase/ 에서 빌드할 때 가져온다 (showcase.config.json).

export const profile = {
  name: "이운호",
  nameEn: "Woonho Lee",
  role: "Software Developer",
  headline: ["여러 현장을 거쳐,", "지금은 코드로 문제를 풉니다."],
  intro: [
    "개발 외에도 여러 일을 경험하며, 기술보다 먼저 그것을 쓰는 사람이 무엇을 불편해하는지 보는 법을 배웠습니다.",
    "지금은 실무 개발자로 일하며, 새로운 기술은 직접 만들어 보면서 익히고 있습니다.",
  ],
  email: "9woonho8@gmail.com",
  github: "https://github.com/98Woonho",
};

export const experience = [
  {
    period: "2025.03 ~ 현재",
    title: "소프트웨어 개발자",
    org: "버스 운수회사 사내 IT",
    body: "사내 ERP의 교통사고·정비 기능을 개발하고 유지보수했습니다. 지금은 이 ERP를 웹으로 옮기는 일과, 승무사원·관리직이 쓰는 모바일 앱 개발을 맡고 있습니다. 운행기록계 데이터 수집 운영과 서버·보안 구축도 함께 담당합니다.",
  },
  {
    period: "2024.05 - 2024.07",
    title: "자바 백엔드 개발자 양성과정",
    org: "코리아 IT 아카데미 대구",
    body: "NCS 기반 실무 중심 과정. Spring Boot로 쇼핑몰 웹 서비스를 클론 코딩하고 팀 프로젝트를 진행했습니다.",
  },
  {
    period: "2023.06 - 2024.03",
    title: "웹개발 과정",
    org: "코리아 IT 아카데미 대구",
    body: "Java, C, Python 기초와 Spring Boot 웹 개발을 배우고, React와 Node.js로 웹 사이트를 만들었습니다.",
  },
];

export const skills = [
  { group: "AI · 에이전트 도구", items: ["TypeScript", "MCP SDK", "Claude Code · Skill", "Vitest"] },
  { group: "Backend", items: ["Java", "Spring Boot", "MyBatis", "Oracle", "Node.js", "Express", "MySQL"] },
  { group: "Frontend", items: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "HTML / CSS"] },
  { group: "Mobile", items: ["Flutter", "Dart", "Riverpod", "FCM"] },
  { group: "인프라 · 운영", items: ["Linux (Rocky)", "Nginx", "IPsec VPN", "Shell · cron", "Python", "Oracle (PL/SQL · Scheduler)"] },
  { group: "레거시", items: ["MiPlatform", "Java Servlet"] },
  { group: "협업 · 배포", items: ["Git · GitHub", "GitHub Actions", "npm 배포"] },
];

/** 진행 중이거나 운영 중인 항목에 강조 배지를 단다 */
export const isLive = (status) => status === "진행 중" || status === "운영 중";

// 실무 프로젝트 (사내 개발, 소스 비공개). 회사명·서비스명은 일반화해서 적는다.
// 사내 시스템 보안을 위해 화면 스크린샷은 비공개하며, 시스템 아키텍처(flows)와 역할 위주로 정리한다.
export const workProjects = [
  {
    id: "web-erp",
    group: "app",
    name: "사내 웹 ERP 전환",
    period: "2026.08 ~ 현재",
    status: "진행 중",
    kind: "웹 · 사내 프로젝트",
    tagline: "CS형 ERP를 웹으로 옮기고 고도화합니다.",
    summary:
      "기존 클라이언트-서버형 ERP의 기능을 React와 Spring Boot 기반 웹으로 이관하는 프로젝트입니다. 10개 시스템, 약 300개 화면 규모로 여러 개발자가 함께 진행하고 있고, 저는 교통안전관리 영역과 웹메일을 중심으로 맡았습니다.",
    role: "교통안전관리 영역 · 웹메일 담당 (팀 프로젝트)",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Spring Boot", "Java 21", "MyBatis", "JPA", "Oracle", "JWT"],
    metrics: [
      { value: "약 300", label: "전체 화면 규모 (팀)" },
      { value: "10개", label: "업무 시스템 (팀)" },
      { value: "약 280", label: "제 커밋 수" },
      { value: "진행 중", label: "상태" },
    ],
    flows: [
      {
        title: "웹 ERP 서비스 구조",
        steps: [
          { label: "사용자 브라우저", sub: "React 19 SPA" },
          { label: "웹 서버 / 프록시", sub: "Nginx" },
          { label: "API 백엔드", sub: "Spring Boot · JWT" },
          { label: "업무 도메인", sub: "교통안전 · 웹메일 · 권한" },
          { label: "사내 Oracle DB", sub: "MyBatis · JPA" },
        ],
      },
    ],
    highlights: [
      {
        title: "사고관리 이관",
        body: "기존 화면 3개를 하나로 통합했습니다. 지도에서 사고 위치를 고르고, 기존과 같은 모양의 A4 보고서를 출력하며, Excel 내보내기와 전자결재 상신까지 한 화면에서 처리합니다.",
      },
      {
        title: "교통안전 대시보드 (신규)",
        body: "무사고 일수, 사고 다발 지점, 위험 운전자 등 10개 위젯을 크기 조절이 되는 그리드에 배치했습니다. 조직 권한에 따라 보이는 데이터 범위가 달라지며, 집계 쿼리를 개선해 DB 로그가 급증하던 문제를 해결했습니다.",
      },
      {
        title: "개인별 안전운전 진단 (신규)",
        body: "월별 운전 점수를 노선·근속·연령대 평균과 비교하는 성적표입니다. 위험 운전 지점 지도와 A4 출력을 제공하고, 서버에서도 조회 권한을 한 번 더 검증합니다.",
      },
      {
        title: "ERP 내장 웹메일",
        body: "스레드 보기, 스팸 차단, 예약 발송, 사용자별 용량 제한, 첨부 ZIP 다운로드와 .eml 내보내기를 구현했습니다.",
      },
      {
        title: "공제 요율 관리 · 음주측정 모니터링",
        body: "요율표 Excel 업로드와 확정 흐름, 음주측정 실시간 현황, 출발 30분 전까지 측정하지 않은 승무사원 알림을 만들었습니다.",
      },
      {
        title: "팀 공통 구조에 참여",
        body: "기존 메뉴 코드를 기준으로 화면을 등록하는 구조, 탭형 작업 공간, 화면 권한을 클라이언트와 서버 양쪽에서 검증하는 방식 위에서 개발했습니다.",
      },
    ],
    images: [],
  },
  {
    id: "mobile-app",
    group: "app",
    name: "승무사원·관리직 모바일 앱",
    period: "2026.04 ~ 현재",
    status: "진행 중",
    kind: "모바일 · 사내 프로젝트",
    tagline: "버스 승무사원과 관리직이 현장에서 쓰는 업무 앱입니다.",
    summary:
      "배차 확인, 전자결재, 급여명세, 사고 접수, 실시간 버스 위치를 한 앱에서 제공합니다. Flutter 앱과 Spring Boot 서버를 함께 개발했고, 제가 주 개발자로 전체 커밋의 약 84%를 맡았습니다.",
    role: "주 개발자 (앱 + 서버)",
    tech: ["Flutter", "Dart", "Riverpod", "go_router", "Dio", "Spring Boot", "Java 21", "MyBatis", "Oracle", "FCM"],
    metrics: [
      { value: "42개", label: "화면" },
      { value: "약 105개", label: "API" },
      { value: "약 310", label: "제 커밋 수" },
      { value: "진행 중", label: "상태" },
    ],
    flows: [
      {
        title: "모바일 앱 연동 아키텍처",
        steps: [
          { label: "모바일 앱", sub: "Flutter · 승무/관리직" },
          { label: "DMZ 웹 서버", sub: "Nginx 리버스 프록시" },
          { label: "앱 백엔드", sub: "Spring Boot · FCM" },
          { label: "기존 ERP API", sub: "업무 규칙 중계" },
          { label: "사내 Oracle DB", sub: "내부망 연동" },
        ],
      },
    ],
    highlights: [
      {
        title: "로그인 유지와 토큰 관리",
        body: "JWT 발급을 직접 구현했습니다. 리프레시 토큰은 해시로만 저장하고 사용할 때마다 교체하며, 여러 요청이 동시에 만료돼도 갱신은 한 번만 보내고 원래 요청을 재시도합니다.",
      },
      {
        title: "기존 ERP와 연동",
        body: "업무 규칙을 앱 서버에 다시 만들지 않고 ERP의 API를 중계합니다. 승무사원에게 허용하지 않는 기능은 막고, ERP가 응답하지 않을 때는 사용자에게 이해되는 안내를 보여줍니다. 결재 문서 화면도 ERP와 같은 코드를 빌드해 재사용합니다.",
      },
      {
        title: "현장 사고 접수",
        body: "사진 촬영과 리사이즈, GPS 기반 주소 자동 입력, 다중 파일 업로드를 한 흐름으로 만들었습니다. 저장 요청이 시간 초과되면 실제 저장 여부를 확인한 뒤 결과를 알려줍니다.",
      },
      {
        title: "실시간 버스 위치",
        body: "WebView에 지도를 띄우고 공공 버스 API를 연동했습니다. 서버에서 결과를 짧게 캐시해 호출 수를 줄였습니다.",
      },
      {
        title: "역할별 화면과 푸시 알림",
        body: "역할에 맞춰 메뉴를 구성하고, 승무사원은 로그인하면 배차 화면으로 바로 이동합니다. 푸시 알림을 누르면 로그인 상태를 확인한 뒤 해당 화면을 엽니다.",
      },
    ],
    images: [],
  },
  {
    id: "legacy-erp",
    group: "app",
    name: "사내 ERP 개발 · 유지보수",
    period: "2025.03 ~ 2026.08",
    status: "완료",
    kind: "데스크톱(CS) · 사내 프로젝트",
    tagline: "MiPlatform 기반 클라이언트-서버형 ERP를 개발하고 운영했습니다.",
    summary:
      "MiPlatform과 Servlet으로 만든 사내 ERP에서 교통사고와 정비 기능을 개발하고, 시스템 전반의 개선과 유지보수를 맡았습니다. 이때 업무 흐름을 익힌 경험이 이후 웹 ERP 전환의 바탕이 되었습니다.",
    role: "교통사고·정비 기능 개발, 전반 개선·유지보수",
    tech: ["MiPlatform", "Java Servlet", "Oracle"],
    // TODO: 사용자가 알려주면 구체적인 수치·사례로 교체 (화면 수, 개선 사례 등)
    metrics: [
      { value: "17개월", label: "개발·운영 기간" },
      { value: "교통사고", label: "주요 기능 개발" },
      { value: "정비", label: "주요 기능 개발" },
      { value: "완료", label: "웹 ERP로 이관" },
    ],
    flows: [
      {
        title: "클라이언트-서버(CS) ERP 구조",
        steps: [
          { label: "CS 전용 클라이언트", sub: "사내 PC · MiPlatform" },
          { label: "사내 인트라넷", sub: "전용망 통신" },
          { label: "애플리케이션 서버", sub: "Java Servlet" },
          { label: "사내 Oracle DB", sub: "교통사고 · 정비 데이터" },
        ],
      },
    ],
    highlights: [
      {
        title: "교통사고 · 정비 기능 개발",
        body: "사고 접수와 처리, 정비 관리 업무를 담당 부서와 협의하며 화면과 서버 로직으로 구현했습니다.",
      },
      {
        title: "개선과 유지보수",
        body: "현업의 요청을 받아 화면과 기능을 고치고, 운영 중 발생한 문제를 해결했습니다.",
      },
      {
        title: "웹 전환으로 이어진 경험",
        body: "기존 화면과 업무 규칙을 직접 다뤄 본 경험을 바탕으로, 웹 ERP에서 같은 업무를 옮길 때 무엇을 유지하고 무엇을 개선할지 판단할 수 있었습니다.",
      },
    ],
    images: [],
  },

  // ── 운영 · 인프라 (group: "ops") ──────────────────────────────────────────
  // 업무 일지·보고서를 바탕으로 정리. IP·장비 정보·서버 경로·파일/테이블명·업체명·실명·영업소 이름은 쓰지 않는다.
  // flows: 상단 흐름도. cases[].at = { flow, step } 이면 해당 흐름도 단계에 사례 번호 배지가 붙는다.
  {
    id: "dtg-pipeline",
    group: "ops",
    name: "운행기록계(DTG) 데이터 파이프라인 운영",
    period: "2025.05 ~ 현재",
    status: "운영 중",
    kind: "운영 · 데이터 수집",
    tagline: "버스에서 DB까지, 현장 데이터가 끊기지 않게 지킵니다.",
    summary:
      "Wi-Fi 방식 운행기록계의 데이터가 차고지 AP와 수집 PC를 거쳐 전산실 서버로 전송되고, 분석 프로그램과 스케줄러를 통해 DB에 쌓입니다. 이 과정을 운영하면서 구간마다 생기는 장애의 원인을 분석해 해결하고, 모두 일지로 남겼습니다.",
    role: "운영 · 장애 원인 분석 및 개선 (일지로 문서화)",
    tech: ["Oracle", "PL/SQL", "Oracle Scheduler", "Windows Server", "FTP", "라이브러리 의존성 분석"],
    metrics: [
      { value: "3분 → 1분", label: "GPS 수집 주기" },
      { value: "Wi-Fi 자동 수집", label: "차고지 AP가 운행기록계를 탐지" },
      { value: "매일 자정", label: "3개월 지난 GPS 데이터 자동 정리" },
      { value: "1~3영업일", label: "장애 처리 소요 (3건)" },
    ],
    flows: [
      {
        title: "데이터가 DB까지 가는 길",
        steps: [
          { label: "운행기록계", sub: "버스 · Wi-Fi" },
          { label: "차고지 AP", sub: "운행기록계 탐지" },
          { label: "차고지 수집 PC", sub: "수집 · 필터링 · 병합" },
          { label: "전산실 서버", sub: "정해진 시간에 전송" },
          { label: "분석 프로그램 · 스케줄러", sub: "운행 데이터 분석" },
          { label: "Oracle DB", sub: "저장" },
        ],
        note: "번호는 아래 사례가 발생한 구간입니다.",
      },
    ],
    cases: [
      {
        tag: "개선",
        title: "GPS 수집 주기를 1분으로 줄이고, 쌓이는 데이터는 자동으로 정리",
        at: { flow: 0, step: 4 },
        rows: [
          { label: "배경", text: "운행기록계의 GPS 데이터가 3분 간격으로 수집되고 있었습니다." },
          { label: "조치", text: "수집 주기를 1분으로 바꾸고, 수정 전후의 운행 경로를 비교해 확인했습니다. 데이터가 3배로 늘어나는 것에 대비해 3개월이 지난 데이터를 지우는 프로시저를 만들고 매일 자정에 실행되도록 DB 스케줄러에 등록했습니다." },
          { label: "결과", text: "경로 기록이 3배 촘촘해졌고, 테이블 크기는 보존 기간(3개월)으로 관리됩니다." },
        ],
      },
      {
        tag: "장애",
        title: "일부 영업소 차량의 운행기록이 DB에 들어오지 않음",
        at: { flow: 0, step: 3 },
        rows: [
          { label: "증상", text: "한 영업소 차량의 운행기록계 데이터가 누락됐습니다. 자체 점검 중 발견했습니다." },
          { label: "원인", text: "업로드 경로로 파일을 옮기는 전송 프로그램의 영업소 목록에 해당 영업소 코드가 빠져 있어, 파일을 이동하지도 인식하지도 못했습니다." },
          { label: "조치", text: "전송 프로그램에 영업소 코드를 추가하고 수정 전후를 비교해 확인했습니다." },
          { label: "결과", text: "정상 업로드로 복구했습니다. (3영업일)" },
        ],
      },
      {
        tag: "장애",
        title: "신규 영업소에서만 파일 전송 시간이 DB에 기록되지 않음",
        at: { flow: 0, step: 2 },
        rows: [
          { label: "증상", text: "신규 영업소에 운행기록계 시스템을 설치한 뒤, 이 영업소에서만 파일 전송 이력이 DB로 올라오지 않았습니다. 기존 영업소는 모두 정상이었습니다." },
          { label: "원인", text: "기존 영업소는 DB 전송 기능이 들어간 전용 라이브러리가 포함된 프로그램을 쓰고 있었습니다. 신규 영업소는 설치 업체가 제조사 순정 최신 버전을 설치해 이 라이브러리가 없었습니다." },
          { label: "조치", text: "신규 영업소의 설정값을 따로 백업 → 정상 동작하는 영업소의 프로그램 폴더를 그대로 이식 → 백업한 설정값 복원 → 현장 담당자가 전송 테스트 → DB 입력값 검증, 5단계로 절차를 설계했습니다." },
          { label: "결과", text: "전송 시간이 DB에 정상 기록되는 것을 확인했습니다. (1영업일)" },
        ],
      },
      {
        tag: "장애",
        title: "처리가 끝난 파일이 삭제되지 않고 쌓여 전송이 지연됨",
        at: { flow: 0, step: 2 },
        rows: [
          { label: "증상", text: "무결성 검사와 FTP 전송을 맡는 처리 프로그램에서 처리 완료 파일이 계속 쌓이면서 전송이 늦어졌습니다. 현업 담당자의 요청으로 시작했습니다." },
          { label: "원인", text: "수집 → 오류 데이터 필터링 → 기존 운행일자 데이터와 병합의 3단계 중, 병합 단계의 이력 폴더에서 오류가 나 병합과 삭제가 멈췄습니다. 제조사 기술지원을 받아 처리 구조를 확인했습니다." },
          { label: "조치", text: "프로그램 종료 → 이력 폴더 삭제 → 뷰어 재실행으로 폴더 재생성 확인 → 수집기 재실행 후 정상 수집과 파일 삭제 확인 순서로 복구했습니다." },
          { label: "결과", text: "수집과 삭제가 정상으로 돌아왔습니다. (2영업일)" },
        ],
      },
    ],
    process: "모든 작업은 번호가 붙은 개발일지·장애처리일지로 남기고, 검토와 결재를 받았습니다.",
    images: [],
  },
  {
    id: "app-server",
    group: "ops",
    name: "모바일 앱 서버 구축",
    status: "완료",
    kind: "인프라 · 서버 구축",
    tagline: "외부에서 앱을 테스트하고 배포할 서버를 DMZ에 세웠습니다.",
    summary:
      "모바일 앱을 외부에서 테스트하고 배포할 Linux 서버를 가상화 환경의 DMZ에 구축했습니다. 방화벽은 방향마다 용도를 나눠 열고, Nginx 리버스 프록시로 API 요청을 앱 서버에 전달합니다. 빌드부터 재시작까지는 배포 스크립트 하나로 묶었습니다.",
    role: "서버 구성 · 배포 스크립트 · 문서화",
    tech: ["Rocky Linux", "Nginx", "VMware", "Shell", "GitHub", "Spring Boot"],
    metrics: [
      { value: "2영업일", label: "서버 구축" },
      { value: "명령 1번", label: "빌드 · 배포" },
      { value: "방향별 4종", label: "용도를 나눈 방화벽 정책" },
      { value: "DMZ", label: "리버스 프록시로 API 전달" },
    ],
    flows: [
      {
        title: "앱 서버 접속 구조",
        steps: [
          { label: "스마트폰 · PC", sub: "외부 테스트 접속" },
          { label: "방화벽", sub: "방향별 정책" },
          { label: "DMZ · Nginx", sub: "리버스 프록시" },
          { label: "앱 서버", sub: "Spring Boot" },
          { label: "사내 DB", sub: "내부망" },
        ],
      },
    ],
    cases: [
      {
        tag: "구축",
        title: "방향별 방화벽 정책과 한 번에 끝나는 배포",
        at: { flow: 0, step: 2 },
        rows: [
          { label: "배경", text: "외부에서 앱을 테스트하고 배포할 서버가 필요했습니다. 정식 배포 전이라 DMZ에 두고, 배포 때 보안 정책을 다시 검토하기로 했습니다." },
          { label: "구성", text: "Rocky Linux 9를 가상화 환경에 설치하고 Nginx를 올렸습니다. 방화벽은 방향별로 용도를 나눠 열었습니다. 외부에서는 웹 포트만, 서버에서 사내로는 DB 포트만, 사내에서는 관리 접속만 허용하고, 서버에서 외부로는 패키지 설치와 외부 API 연동용으로 열었습니다. API 경로는 Nginx 리버스 프록시로 앱 서버에 전달합니다." },
          { label: "배포", text: "GitHub 소스를 가져와 앱과 서버를 빌드하고 서버를 재시작하는 과정을 배포 스크립트 하나로 묶었습니다." },
          { label: "결과", text: "서버 구축은 2영업일에 마쳤고, 이후 배포는 명령 한 번으로 끝납니다." },
        ],
      },
    ],
    process: "작업은 개발일지와 구축 완료 보고서로 남기고, 검토와 결재를 받았습니다.",
    images: [],
  },
  {
    id: "card-data-vpn",
    group: "ops",
    name: "교통카드 데이터 VPN 수집 환경",
    status: "완료",
    kind: "인프라 · 네트워크",
    tagline: "교통카드 사업자의 일일 데이터를 VPN으로 받아 DB에 쌓습니다.",
    summary:
      "외부 교통카드 사업자와 IPsec VPN으로 연결해, 매일 보내오는 데이터를 수신하고 파싱해 사내 DB에 자동으로 적재하는 환경을 만들었습니다. 라우팅, 터널 구간의 패킷 크기, 장비 재부팅 때의 링크 문제까지 네트워크 구간을 직접 다뤘습니다.",
    role: "네트워크 구성 · 수집 스크립트 · 문서화",
    tech: ["IPsec VPN", "정적 라우팅", "SFTP", "Python", "Shell · cron", "Oracle"],
    metrics: [
      { value: "매일 자동", label: "데이터 수신 · DB 적재" },
      { value: "2대", label: "VPN 장비 운영 · 예비 (같은 설정)" },
      { value: "MSS · STP", label: "터널 · 링크 문제 대응" },
      { value: "58영업일", label: "구축 기간" },
    ],
    flows: [
      {
        title: "교통카드 데이터 수집 구조",
        steps: [
          { label: "교통카드 사업자", sub: "일일 데이터 송신" },
          { label: "IPsec VPN", sub: "운영 · 예비 2대" },
          { label: "DMZ 수집 서버", sub: "수신 · 파싱" },
          { label: "사내 Oracle DB", sub: "자동 적재" },
        ],
      },
    ],
    cases: [
      {
        tag: "구축",
        title: "외부 사업자와 VPN으로 연결하는 데이터 수집 환경",
        at: { flow: 0, step: 1 },
        rows: [
          { label: "배경", text: "교통카드 사업자가 매일 보내는 데이터를 안전하게 받아 DB에 쌓아야 했습니다." },
          { label: "네트워크", text: "수집 서버에 전용 경로를 지정하고 정적 라우팅으로 사업자 방향 트래픽이 VPN 장비를 지나가게 했습니다. 터널 암호화로 헤더가 커져 큰 패킷이 끊기는 문제는 MSS를 조정해 막았습니다. VPN 장비를 재부팅할 때 상위 스위치와 신호가 충돌해 링크가 막히지 않도록 STP를 끄는 조치도 했습니다." },
          { label: "수집", text: "수신 · 적재 완료 · 오류 · 로그 폴더를 나누고, 파싱과 DB 적재 스크립트를 만들었습니다. 수신 시간대에는 일정 간격으로 재시도하고, 이후 한 번 더 실행하도록 스케줄을 걸었습니다." },
          { label: "결과", text: "VPN 장비를 운영 1대, 예비 1대(같은 설정)로 두어 장애에 대비했습니다. 구축에 58영업일이 걸렸고 구축 완료 보고서로 마무리했습니다." },
        ],
      },
    ],
    process: "작업은 개발일지와 구축 완료 보고서로 남기고, 검토와 결재를 받았습니다.",
    images: [],
  },
  {
    id: "erp-security",
    group: "ops",
    name: "사내 ERP 보안 개선",
    status: "완료",
    kind: "보안 · 성능",
    tagline: "평문으로 저장되던 비밀번호와 평문으로 오가던 통신을 걷어냈습니다.",
    summary:
      "사내 ERP의 보안 문제 두 가지를 고쳤습니다. DB에 평문으로 저장되던 비밀번호를 두 시스템이 함께 검증할 수 있는 BCrypt 해시로 바꿨고, 평문 XML로 오가던 통신을 바이너리로 바꿔 노출을 막고 데이터량을 약 78% 줄였습니다.",
    role: "방식 비교 · 두 시스템 적용 · 검증",
    tech: ["BCrypt", "Java Servlet", "Spring Boot", "MiPlatform", "Oracle", "패킷 분석"],
    metrics: [
      { value: "평문 → BCrypt", label: "비밀번호 저장 방식" },
      { value: "−78%", label: "통신 데이터량 (36.3MB → 7.9MB)" },
      { value: "2개 시스템", label: "같은 해시를 서로 검증" },
      { value: "XML → 바이너리", label: "통신 포맷" },
    ],
    flows: [
      {
        title: "사내 ERP 로그인 · 통신 구조",
        steps: [
          { label: "CS 클라이언트", sub: "MiPlatform" },
          { label: "통신 구간", sub: "XML → 바이너리" },
          { label: "애플리케이션 서버", sub: "Servlet · BCrypt 검증" },
          { label: "공용 사용자 테이블", sub: "BCrypt 해시 (60자)" },
          { label: "웹 ERP", sub: "같은 해시로 검증" },
        ],
        note: "번호는 아래 사례가 적용된 구간입니다.",
      },
    ],
    cases: [
      {
        tag: "보안",
        title: "평문 비밀번호를 BCrypt로 — 두 시스템을 한꺼번에 바꿔야 했던 이유",
        at: { flow: 0, step: 3 },
        rows: [
          { label: "문제", text: "비밀번호가 DB에 평문으로 저장돼 있어, 조회 권한만 있으면 전 직원의 비밀번호를 볼 수 있었습니다. 게다가 두 시스템(레거시 ERP, 웹 ERP)이 같은 사용자 테이블을 쓰고 있어서 한쪽만 바꾸면 다른 쪽 로그인이 깨지는 구조였습니다." },
          { label: "방식 선정", text: "평문, 양방향 암호화(키가 유출되면 전체 노출), 빠른 해시(무차별 대입에 취약), BCrypt를 비교했습니다. 단방향이고 솔트가 들어 있으며 연산 비용을 조절할 수 있는 BCrypt를 골랐습니다." },
          { label: "적용", text: "두 시스템이 서로 다른 라이브러리를 쓰지만 같은 표준 형식과 같은 비용으로 맞춰 서로의 해시를 검증할 수 있게 했습니다. BCrypt는 솔트 때문에 SQL의 WHERE 절로 비교할 수 없어, 레거시 ERP는 비밀번호 검증을 SQL에서 애플리케이션 코드로 옮겼습니다." },
          { label: "함정 대응", text: "해시는 60자 고정이라 컬럼 폭을 늘렸고, 아직 평문인 계정만 골라 일괄 변환했습니다. 화면의 입력칸이 값을 소문자로 바꾸는 속성이 있어 해시가 깨질 수 있다는 점을 미리 찾아 제거했습니다." },
          { label: "검증", text: "전 계정이 해시로 저장된 것과, 같은 비밀번호를 설정한 테스트 계정 두 개의 해시값이 서로 다른 것을 확인했습니다." },
        ],
      },
      {
        tag: "보안 · 성능",
        title: "소스 없는 라이브러리를 건드리지 않고 통신 포맷을 바이너리로",
        at: { flow: 0, step: 1 },
        rows: [
          { label: "발견", text: "플랫폼 벤더의 방문 교육 중, 송수신 데이터가 평문 XML이고 불필요한 메타데이터까지 실려 용량이 큰 것을 발견했습니다. 대량 조회 때 응답이 눈에 띄게 느렸습니다." },
          { label: "원인", text: "통신 방식을 정하는 설정이 라이브러리 안에 고정돼 있고 원본 소스가 없어, 직접 고치거나 다시 빌드할 수 없었습니다." },
          { label: "조치", text: "라이브러리를 수정하는 대신, 프로젝트에 같은 패키지 경로를 만들고 설정 파일을 두어 통신 방식을 바이너리로 지정했습니다." },
          { label: "결과", text: "패킷 분석 도구로 데이터가 바이너리로 바뀌어 평문 노출이 막힌 것과, 통신량이 36.3MB에서 7.9MB로 약 78% 줄어든 것을 확인했습니다. (2영업일)" },
        ],
      },
    ],
    process: "모든 작업은 개발일지로 남기고, 검토와 결재를 받았습니다.",
    images: [],
  },
];

// 이전 웹 프로젝트 (교육 과정·개인)
export const webProjects = [
  {
    name: "LOLStats",
    period: "2025.01 ~",
    description: "라이엇 API를 이용한 League of Legends 전적·정보 검색 사이트입니다.",
    tech: ["Spring Boot", "MySQL", "JavaScript", "Axios"],
    links: [
      { label: "GitHub", url: "https://github.com/98Woonho/LOLStats" },
      { label: "사이트", url: "http://lolstats.o-r.kr/" },
    ],
  },
  {
    name: "WH-Cinema",
    period: "2024.06 - 2024.07",
    description: "현재·예정 상영작 목록과 영화 예매, 회원 기능을 갖춘 영화 예매 사이트입니다. (1인 개발)",
    tech: ["React", "Node.js", "Express", "MySQL"],
    links: [
      { label: "GitHub", url: "https://github.com/98Woonho/WH-Cinema" },
      { label: "시연 영상", url: "https://www.youtube.com/watch?v=uxvdwvAKuI0&t=16s" },
    ],
  },
  {
    name: "Healthy-grass",
    period: "2024.05 - 2024.07",
    description: "상품 구매·관리, 리뷰 기능을 갖춘 농축산물 쇼핑몰입니다. (3인 개발)",
    tech: ["Spring Boot", "MySQL", "JavaScript", "Bootstrap"],
    links: [{ label: "GitHub", url: "https://github.com/98Woonho/Healthy-grass" }],
  },
  {
    name: "ITHotel",
    period: "2024.01 - 2024.02",
    description: "챗봇 기능을 더한 호텔 예약 사이트입니다. 예약, 관리자 호텔 관리, 회원 기능을 구현했습니다. (3인 개발)",
    tech: ["Spring Boot", "MySQL", "JavaScript", "Bootstrap"],
    links: [
      { label: "GitHub", url: "https://github.com/98Woonho/ITHotel" },
      { label: "시연 영상", url: "https://www.youtube.com/watch?v=DTQzaR3oxDE" },
    ],
  },
];
