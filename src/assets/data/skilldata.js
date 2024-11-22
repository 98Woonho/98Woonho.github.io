const skillData = {
	skillList: [
		{
			label: "HTML/CSS",
			detail: ["기본적인 구조의 페이지를 개발할 수 있습니다.", "반응형 페이지를 개발할 수 있습니다."],
			icon: "fab fa-html5",
		},
		{
			label: "Javascript",
			detail: ["여러 방식(XHR, Fetch, Axios)으로 서버와의 통신을 할 수 있습니다.", "Vanilla JS를 이용한 웹 제작에 능숙합니다.", "HTML 문서의 구조를 제어할 수 있습니다."],
			icon: "fab fa-js-square",
		},
		{
			label: "React",
			detail: ["페이지를 컴포넌트화 하여서 보다 쉽게 비동기 페이지를 구현할 수 있습니다.", "간단한 영화예약 사이트를 제작한 경험이 있습니다.", "라우터를 사용하여 사용자 경험을 향상 시킬 수 있습니다."],
			icon: "fab fa-react",
		},
		{
			label: "Node.js",
			detail: ["Node.js가 작동하는 법에 대해 이해하고 있습니다.", "express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.", "비동기 처리를 할 수 있습니다."],
			icon: "fab fa-node",
		},
		{
			label: "Git/Github",
			detail: ["깃과 깃헙을 사용하여 다른 개발자들과 협업을 할 수 있습니다.", "프로젝트 관리 경험이 있습니다."],
			icon: "fab fa-git-square",
		},
		{
			label: "SpringBoot",
			detail: ["RESTful API를 구현할 수 있습니다.", "팀 혹은 개인으로 개발한 경험이 많습니다.", "JDBC를 사용하여 데이터베이스와 연동하거나 ORM(JPA, Hibernate)을 활용한 데이터 처리 경험이 있습니다.", "Spring Security와 JWT를 이용해 보안을 강화할 수 있습니다."],
			icon: "fa-solid fa-power-off",
		},
		{
			label: "Java",
			detail: ["객체지향 프로그래밍(OOP)의 기본 원칙을 이해하고 설계에 활용할 수 있습니다.", "컬렉션 프레임워크를 활용하여 데이터를 효율적으로 처리할 수 있습니다.", "Java 8 이상의 스트림 API와 람다식을 활용하여 코드를 간결하고 효율적으로 작성할 수 있습니다."],
			icon: "fa-brands fa-java"
		},
	],

	experienceList: [
		{
			period: "",
			position: "",
			company: "",
			explain: "",
		},
	],

	educationList: [
		{
			period: "2023.06 - 2024.03",
			position: "웹개발 과정",
			company: "코리아 IT 아카데미 대구",
			explain: "기초 언어(Java, C, Python)들을 학습하고 SpringBoot를 이용한 웹개발에 대해 학습하고 프로젝트를 통해 웹 사이트를 개발하였습니다. 또한 React와 Node.js를 이용하여 간단한 웹 사이트를 개발하였습니다.",
		},
		{
			period: "2024.05 - 2024.07",
			position: "자바 백엔드 개발자 양성과정",
			company: "코리아 IT 아카데미 대구",
			explain: " NCS능력단위를 기반으로 하는 실무중심의 교육으로, SpringBoot를 이용하여 나이키 쇼핑몰 사이트를 클론 코딩하여 쇼핑몰 웹 서비스를 구축 해보고, 프로젝트를 통해 웹 사이트를 개발하였습니다.",
		},
	],
};

export default skillData;
