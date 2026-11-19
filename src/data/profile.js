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
    body: "사내 ERP의 교통사고·정비 기능을 개발하고 유지보수했습니다. 지금은 이 ERP를 웹으로 옮기는 일과, 승무사원·관리직이 쓰는 모바일 앱 개발을 맡고 있습니다.",
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
  { group: "레거시", items: ["MiPlatform", "Java Servlet"] },
  { group: "협업 · 배포", items: ["Git · GitHub", "GitHub Actions", "npm 배포"] },
];

// 실무 프로젝트 (사내 개발, 소스 비공개). 회사명·서비스명은 일반화해서 적는다.
// 스크린샷: public/work/<id>/ 에 파일을 넣고 images 항목에 src: "/work/<id>/01.png" 만 채우면 된다.
// src 가 없으면 "준비 중" 자리표시만 보인다. 이름·사번·차량번호·금액·로고는 가리고 올릴 것.
export const workProjects = [
  {
    id: "web-erp",
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
    images: [
      { caption: "교통안전 대시보드", device: "desktop" },
      { caption: "개인별 안전운전 진단", device: "desktop" },
      { caption: "사고관리 · 위치 선택", device: "desktop" },
      { caption: "웹메일", device: "desktop" },
    ],
  },
  {
    id: "mobile-app",
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
    images: [
      { caption: "로그인", device: "phone" },
      { caption: "배차 현황", device: "phone" },
      { caption: "사고 접수", device: "phone" },
      { caption: "실시간 버스 위치", device: "phone" },
    ],
  },
  {
    id: "legacy-erp",
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
    images: [
      { caption: "교통사고 관리", device: "desktop" },
      { caption: "정비 관리", device: "desktop" },
    ],
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
