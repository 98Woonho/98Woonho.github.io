// 사이트에 나오는 소개·경력·기술. 문구는 여기서 고치면 된다.
// MCP·Skill 프로젝트는 각 저장소의 showcase/ 에서 빌드할 때 가져온다 (showcase.config.json).

export const profile = {
  name: "이운호",
  nameEn: "Woonho Lee",
  role: "Software Developer",
  // 첫 화면 6초 안에 읽히도록: 무엇을 하는 사람인지 → 증거 수치(heroStats) 순서
  headline: ["웹과 모바일 서비스를 만들고,", "서버와 데이터 흐름까지 운영합니다."],
  current: { org: "태영운송그룹 전산실", since: "2025.03" },
  focus: ["웹 · 모바일 풀스택", "운영 · 인프라", "AI 에이전트 도구"],
  intro: [
    "운송 현장의 업무를 웹·모바일 서비스로 옮기고, 기존 ERP와 데이터 수집 시스템을 함께 다룹니다. 시스템 간 호환성을 맞추고 장애 원인을 추적한 경험을 바탕으로, AI 에이전트가 데이터를 활용하는 도구도 만들고 있습니다.",
  ],
  email: "9woonho8@gmail.com",
  github: "https://github.com/98Woonho",
  // 이력서 PDF. public/ 에 파일을 넣고 경로를 적으면 첫 화면과 메뉴에 '이력서' 버튼이 생긴다 (예: "/resume.pdf")
  resume: "",
};

// 첫 화면 증거 수치. 아래 프로젝트 데이터에 이미 있는 값만 쓴다.
export const heroStats = [
  {
    value: "−78%",
    label: "동일 조회의 통신량 감소",
    note: "Fiddler 측정 · 36.3MB → 7.9MB",
    to: "/work/erp#case-2",
  },
  {
    value: "2개 시스템",
    label: "공용 계정의 BCrypt 전환",
    note: "레거시·웹 ERP의 로그인·비밀번호 변경 확인",
    to: "/work/erp#case-1",
  },
];

// 대표 성과 (벤토). to 의 #case-n 은 상세 페이지 사례 번호(1부터)다.
export const featured = [
  {
    to: "/work/erp#case-1",
    tag: "보안",
    title: "사용자 테이블을 공유하는 두 ERP의 비밀번호 전환",
    problem: "레거시 ERP와 웹 ERP가 같은 사용자 테이블을 써서, 한쪽만 바꾸면 다른 쪽 로그인이 깨지는 구조였습니다.",
    result: "해시 형식과 검증 방식을 맞추고, 기존 계정의 비밀번호 저장 방식을 BCrypt로 전환했습니다.",
  },
  {
    to: "/work/erp#case-2",
    tag: "성능",
    value: "−78%",
    title: "소스 없는 라이브러리의 통신 포맷 변경",
    problem: "원본 소스가 없어 라이브러리를 수정하거나 다시 빌드할 수 없었습니다.",
    result: "설정 파일로 통신 포맷을 바꾸고, 같은 조회의 통신량이 36.3MB → 7.9MB로 줄어든 것을 확인했습니다.",
  },
  {
    to: "/work/dtg-pipeline#case-3",
    tag: "장애",
    title: "신규 영업소만 전송 기록이 빠지는 문제",
    problem: "설치 업체가 순정 버전을 깔아 전용 라이브러리가 없었습니다.",
    result: "정상 영업소와 설치 구성을 비교해 누락된 전용 라이브러리를 확인하고, 영업소 설정을 유지한 채 복구했습니다.",
  },
];

export const experience = [
  {
    period: "2025.03 ~ 현재",
    title: "소프트웨어 개발자",
    org: "태영운송그룹 전산실",
    rank: "계장", // 직급. 경력증명서 표기와 맞춘다
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
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "Oracle · PL/SQL", "MyBatis"],
  },
  {
    group: "Web · Mobile",
    items: ["TypeScript", "React", "Flutter · Dart", "Riverpod", "FCM"],
  },
  {
    group: "AI · 에이전트 도구",
    items: ["MCP SDK", "Spring AI", "JSqlParser", "Claude Skill"],
  },
  {
    group: "운영 · 배포",
    items: ["Linux", "Nginx", "IPsec VPN", "Python", "GitHub Actions"],
  },
];

/** 진행 중이거나 운영 중인 항목에 강조 배지를 단다 */
export const isLive = (status) => status === "진행 중" || status === "운영 중";

// 실무 프로젝트 (사내 개발, 소스 비공개). 회사명은 경력에 적고, 내부 시스템·서비스명은 일반화해서 적는다.
// 사내 시스템 보안을 위해 화면 스크린샷은 비공개하며, 시스템 아키텍처(flows)와 역할 위주로 정리한다.
// 통합 전 상세 주소와 사례 링크를 새 위치로 연결한다.
export const workProjectRedirects = {
  "web-erp": {
    id: "erp",
    hashes: { "#case-1": "#case-3", "#case-2": "#highlights" },
  },
  "legacy-erp": {
    id: "erp",
  },
  "erp-security": {
    id: "erp",
  },
  "app-server": {
    id: "mobile-app",
    hash: "#deployment",
    hashes: { "#overview": "#deployment", "#cases": "#deployment", "#case-1": "#deployment" },
  },
};

export const workProjects = [
  {
    id: "erp",
    group: "app",
    name: "사내 ERP 개발·웹 전환",
    period: "2025.03 ~ 현재",
    status: "진행 중",
    kind: "웹 · 사내 프로젝트",
    tagline: "기존 ERP의 업무를 웹으로 옮기고, 인증 호환성과 통신량을 개선했습니다.",
    summary: "MiPlatform·Servlet ERP의 교통사고·정비 개발을 맡은 뒤, 2026년 8월부터 웹 전환에서 교통안전관리와 웹메일을 담당하고 있습니다. 전체 전환은 10개 시스템·약 300개 화면 규모의 팀 프로젝트입니다.",
    role: "교통사고·정비 개발, 웹 교통안전·웹메일 담당",
    tech: ["Java", "Spring Boot", "React", "TypeScript", "MyBatis", "Oracle", "MiPlatform", "Servlet"],
    metrics: [
      { value: "−78%", label: "동일 조회의 통신량 · 36.3MB → 7.9MB" },
      { value: "3개 → 1개", label: "사고관리 화면 통합" },
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
        title: "공용 사용자 테이블을 쓰는 두 ERP의 BCrypt 전환",
        summary: "해시 형식과 검증 방식을 맞춰 전환하고, 두 시스템의 로그인·비밀번호 변경을 확인했습니다.",
        compare: {
          kind: "text",
          label: "DB에 저장되는 비밀번호",
          before: {
            text: "myPass123",
            note: "평문 그대로",
          },
          after: {
            text: "$2a$10$ + 솔트 22자 + 해시 31자",
            note: "60자 BCrypt 해시 (형식 예시)",
          },
        },
        at: { flow: 1, step: 3 },
        rows: [
          { label: "문제", text: "비밀번호가 DB에 평문으로 저장돼 있었습니다. 레거시 ERP와 웹 ERP가 같은 사용자 테이블을 사용하므로, 저장 방식과 검증 방식을 한쪽만 바꾸면 다른 쪽에서 로그인할 수 없었습니다." },
          { label: "적용", text: "복호화가 필요 없는 BCrypt를 선택하고 두 시스템의 라이브러리가 같은 해시 형식을 검증하도록 맞췄습니다. 레거시의 SQL 직접 비교는 애플리케이션의 BCrypt 검증으로 옮겼습니다." },
          { label: "전환 제약", text: "60자 해시를 저장할 수 있도록 컬럼 폭을 늘리고, 아직 평문인 계정만 골라 일괄 변환했습니다. 화면 입력값을 소문자로 바꾸는 속성이 해시를 변형할 수 있어 함께 제거했습니다." },
          { label: "검증", text: "전 계정의 해시 저장과 동일 비밀번호를 가진 두 테스트 계정의 서로 다른 해시값을 확인했습니다. 전환 후 레거시 ERP와 웹 ERP 양쪽에서 로그인과 비밀번호 변경을 확인했습니다." },
        ],
      },
      {
        tag: "통신량 개선",
        title: "소스 없는 라이브러리를 건드리지 않고 통신 포맷을 바이너리로",
        summary: "라이브러리 소스를 수정하지 않고 설정 파일로 포맷을 변경해, 측정한 통신량을 약 78% 줄였습니다.",
        compare: {
          kind: "bar",
          unit: "MB",
          label: "같은 조회의 통신 데이터량",
          before: {
            value: 36.3,
            text: "평문 XML",
          },
          after: {
            value: 7.9,
            text: "바이너리",
          },
        },
        at: { flow: 1, step: 1 },
        rows: [
          { label: "제약", text: "통신이 평문 XML로 오갔고 불필요한 메타데이터가 포함돼 있었습니다. 설정이 고정된 라이브러리의 원본 소스가 없어 직접 수정·빌드할 수 없었습니다." },
          { label: "변경", text: "프로젝트에 같은 패키지 경로의 설정 파일을 두어 통신 포맷을 바이너리로 지정했습니다." },
          { label: "검증", text: "Fiddler로 동일 조회의 전후 트래픽을 측정해 36.3MB → 7.9MB를 확인했습니다. 약 78%는 해당 조회의 통신량 감소율이며, 포맷 전환 자체가 암호화를 뜻하지는 않습니다." },
        ],
      },
      {
        tag: "업무 이관",
        title: "사고관리 3개 화면을 하나의 업무 흐름으로 통합",
        summary: "위치 입력부터 보고서 출력·Excel 내보내기·전자결재 상신까지 한 화면에 모았습니다.",
        at: { flow: 0, step: 3 },
        rows: [
          { label: "제약", text: "웹으로 이관하면서 현업의 A4 보고서 양식과 전자결재 흐름을 유지해야 했습니다." },
          { label: "변경", text: "기존 3개 화면을 사고 한 건의 처리 흐름에 맞춰 통합했습니다. 지도 위치 선택, 보고서 출력, Excel 내보내기와 결재 상신을 한 화면에서 처리합니다." },
        ],
      },
    ],
    highlights: [
      {
        title: "교통안전 조회",
        body: "조직별 데이터 범위를 적용한 10개 위젯 대시보드와 개인별 운전 진단을 구현했습니다. 진단 조회는 서버에서도 권한을 검증하며, 집계 쿼리를 개선해 DB 로그가 급증하던 문제를 해결했습니다.",
      },
      {
        title: "ERP 내장 웹메일",
        body: "스레드 보기, 스팸 차단, 예약 발송, 사용자별 용량 제한, 첨부 ZIP 다운로드와 .eml 내보내기를 구현했습니다.",
      },
      {
        title: "공제 요율 관리 · 음주측정 모니터링",
        body: "요율표 Excel 업로드와 확정 흐름, 음주측정 실시간 현황, 출발 30분 전까지 측정하지 않은 승무사원 알림을 만들었습니다.",
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
    tagline: "Flutter 앱과 Spring Boot 서버를 개발하고 기존 ERP와 연동합니다.",
    summary: "승무사원과 관리직의 배차 확인, 전자결재, 급여명세, 사고 접수와 버스 위치 조회를 위한 앱입니다. 앱과 서버 개발, ERP 연동과 내부 테스트용 서버 구성을 맡았습니다.",
    role: "주 개발자 (앱 + 서버)",
    tech: ["Flutter", "Dart", "Riverpod", "Spring Boot", "Oracle", "FCM", "Nginx", "Rocky Linux"],
    metrics: [
      { value: "42개", label: "구현 화면" },
      { value: "약 105개", label: "앱 서버 API" },
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
    cases: [
      {
        tag: "인증",
        title: "동시 요청의 토큰 갱신 공유",
        summary: "동시에 만료된 요청은 하나의 토큰 갱신 결과를 기다렸다가 원래 요청을 재시도합니다.",
        at: { flow: 0, step: 2 },
        rows: [
          { label: "문제", text: "여러 API 요청 중 인증 토큰이 만료되면 갱신 요청도 동시에 발생할 수 있습니다. 사용할 때마다 바뀌는 리프레시 토큰을 여러 요청이 함께 사용하는 상황을 처리해야 했습니다." },
          { label: "구현", text: "앱에서 진행 중인 토큰 갱신을 공유해 갱신 요청을 한 번만 보내고, 나머지 요청은 결과를 기다린 뒤 재시도하도록 구현했습니다. 서버는 리프레시 토큰을 해시로 저장하고 사용할 때마다 교체합니다." },
        ],
      },
      {
        tag: "저장 처리",
        title: "저장 응답이 끊기면 실제 저장 여부를 확인",
        summary: "응답 시간 초과를 곧바로 저장 실패로 처리하지 않고, 기능별 확인 방법으로 저장 결과를 조회합니다.",
        at: { flow: 0, step: 2 },
        rows: [
          { label: "문제", text: "사고 접수 등 저장 요청의 응답이 늦거나 끊겨도 서버에서는 이미 저장됐을 수 있습니다. 이때 실패로 단정해 다시 저장하면 중복 처리로 이어질 수 있습니다." },
          { label: "구현", text: "쓰기 요청의 공통 처리에서 시간 초과·서버 오류가 발생하면 화면에서 정한 방법으로 실제 저장 여부를 확인합니다. 결과를 확인하지 못하면 성공이나 실패를 단정하지 않고 관리자 문의를 안내합니다." },
          { label: "적용 범위", text: "저장 여부를 다시 조회할 수 있는 기능에 적용한 처리입니다. 결재 승인처럼 되돌리기 어려운 쓰기는 재조회만으로 중복 실행 방지를 보장할 수 없어 요청 ID를 통한 별도 처리가 필요합니다." },
        ],
        anchor: "case-3",
      },
    ],
    highlights: [
      {
        anchor: "case-2",
        title: "ERP 업무 규칙 재사용",
        body: "업무 규칙은 ERP에 두고 앱 서버에서 API를 중계합니다. 앱에 필요한 접근 제한과 오류 안내를 처리하고, 결재 문서 화면도 ERP와 같은 코드로 빌드합니다.",
      },
      {
        title: "현장 사고 접수",
        body: "사진 촬영·리사이즈, GPS 주소 입력과 다중 파일 업로드를 한 흐름으로 구현했습니다.",
      },
      {
        title: "버스 위치와 알림",
        body: "공공 API의 버스 위치를 짧게 캐시해 조회하고, 역할별 메뉴와 로그인 상태에 따른 푸시 알림 이동을 구현했습니다.",
      },
      {
        anchor: "deployment",
        title: "내부 테스트 서버와 배포",
        body: "DMZ에 Linux·Nginx 서버를 구성하고 용도별 방화벽 정책을 적용했습니다. 소스 가져오기·앱과 서버 빌드·재시작은 배포 스크립트로 묶었습니다.",
      },
    ],
    images: [],
    validation: "현재 개발·내부 테스트 중이며, 테스트 인원은 1명입니다.",
  },
  {
    id: "dtg-pipeline",
    group: "ops",
    name: "운행기록계(DTG) 데이터 파이프라인 운영",
    period: "2025.05 ~ 현재",
    status: "운영 중",
    kind: "운영 · 데이터 수집",
    tagline: "수집·전송·병합·DB 기록을 나눠 확인하며 데이터 누락과 지연을 복구합니다.",
    summary: "운행기록계 데이터가 차고지 수집 PC와 전산실 서버를 거쳐 Oracle DB에 저장되는 흐름을 운영합니다. 데이터 누락·지연의 원인을 구간별로 확인하고, 수집 주기와 보존 정책을 개선했습니다.",
    role: "데이터 수집 운영·장애 원인 분석 및 복구",
    tech: ["Oracle", "PL/SQL", "Oracle Scheduler", "Windows Server", "FTP"],
    metrics: [
      { value: "3분 → 1분", label: "GPS 수집 주기 변경" },
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
        summary: "GPS 수집 간격을 3분에서 1분으로 줄이고, 늘어나는 데이터에 대비해 보존·정리 정책을 함께 적용했습니다.",
        compare: {
          kind: "interval",
          label: "설정 주기 기준 1시간당 위치 기록 수",
          before: {
            value: 3,
            text: "3분 간격 · 20개",
          },
          after: {
            value: 1,
            text: "1분 간격 · 60개",
          },
        },
        at: { flow: 0, step: 4 },
        rows: [
          { label: "변경", text: "GPS 수집 주기를 3분에서 1분으로 줄이고, 늘어나는 데이터에 대비해 3개월 보존·매일 자정 자동 정리 정책을 함께 적용했습니다." },
          { label: "확인", text: "수정 전후 운행 경로를 비교하고, 오래된 GPS 데이터를 삭제하는 프로시저를 DB 스케줄러에 등록했습니다." },
        ],
      },
      {
        tag: "장애",
        title: "신규 영업소에서만 파일 전송 시간이 DB에 기록되지 않음",
        summary: "정상 영업소와 설치 구성을 비교해 누락된 전용 라이브러리를 확인하고, 영업소 설정을 유지한 채 복구했습니다.",
        at: { flow: 0, step: 2 },
        rows: [
          { label: "증상", text: "신규 영업소에서만 파일 전송 이력이 DB에 기록되지 않았고 기존 영업소는 정상이었습니다." },
          { label: "원인", text: "정상 영업소와 비교하니 신규 설치본에는 DB 기록을 담당하는 전용 라이브러리가 없었습니다. 제조사 순정 버전과 사내 사용 버전의 차이였습니다." },
          { label: "복구·확인", text: "영업소 설정을 백업하고 정상 프로그램을 이식한 뒤 설정을 복원했습니다. 현장 담당자의 전송 테스트와 DB 기록을 확인해 1영업일에 복구했습니다." },
        ],
        anchor: "case-3",
      },
    ],
    images: [],
    highlights: [
      {
        anchor: "case-2",
        title: "영업소 코드 누락 복구",
        body: "전송 프로그램의 영업소 목록에서 빠진 코드를 추가하고 정상 업로드를 확인했습니다.",
      },
      {
        anchor: "case-4",
        title: "병합 단계의 전송 지연 복구",
        body: "제조사 기술지원으로 병합 이력 폴더의 오류를 확인했습니다. 폴더 재생성과 수집기 재실행 후 수집·파일 삭제가 정상으로 돌아온 것을 확인했습니다.",
      },
    ],
  },
  {
    id: "card-data-vpn",
    group: "ops",
    name: "교통카드 데이터 VPN 수집 환경",
    status: "완료",
    kind: "인프라 · 네트워크",
    tagline: "교통카드 사업자의 일일 데이터를 VPN으로 받아 DB에 쌓습니다.",
    summary: "외부 교통카드 사업자와 IPsec VPN으로 연결하고, 일일 수신 파일을 파싱해 사내 Oracle DB에 자동 적재하는 환경을 구축했습니다.",
    role: "VPN·라우팅 구성, 수신·적재 스크립트 개발",
    tech: ["IPsec VPN", "SFTP", "Python", "Shell · cron", "Oracle"],
    metrics: [
      { value: "매일 자동", label: "교통카드 데이터 수신·DB 적재" },
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
        summary: "네트워크 연결부터 파일 수신·파싱·DB 적재까지 구성하고, 재시도와 예비 장비를 준비했습니다.",
        at: { flow: 0, step: 1 },
        rows: [
          { label: "연결", text: "정적 라우팅으로 사업자 방향 트래픽이 VPN 장비를 지나가도록 구성했습니다. 터널 구간에서 큰 패킷이 끊기는 문제는 MSS를 조정해 대응했습니다." },
          { label: "수집", text: "수신·적재 완료·오류 파일을 구분하고 파싱과 DB 적재 스크립트를 구현했습니다. 수신 시간대 재시도와 후속 실행을 스케줄에 등록했습니다." },
          { label: "운영", text: "운영 VPN 장비와 같은 설정의 예비 장비를 준비하고, 수신·적재 과정의 로그를 남기도록 구성했습니다." },
        ],
      },
    ],
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
