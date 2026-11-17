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
    period: "2025 ~ 현재",
    title: "실무 개발자",
    org: "재직 중",
    body: "현업에서 서비스를 개발하고 운영하고 있습니다.",
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
  { group: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express", "MySQL"] },
  { group: "Frontend", items: ["JavaScript", "React", "HTML / CSS"] },
  { group: "협업 · 배포", items: ["Git · GitHub", "GitHub Actions", "npm 배포"] },
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
