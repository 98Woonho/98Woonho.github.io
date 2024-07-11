// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Lee",
  middleName: "Woon",
  lastName: "Ho",
  message: "자바 백엔드 개발자를 꿈꾸는 이운호입니다.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/98Woonho",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/w.ho_____/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UCfx7DRn0VNFK8uAGMemFNUA",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/woonho.jpg"),
  imageSize: 375,
  message:
    "영남대학교 전자공학과를 졸업했습니다. 전공 수업에서 처음 접해본 코딩에 흥미를 가져, 개발자를 꿈꾸게 되었습니다. 졸업 후, 코리아IT아카데미에서 웹개발 과정을 통해 웹개발에 대한 지식을 쌓았고, 프로젝트를 통해 팀원들과의 원활한 소통과 협업으로 문제를 해결하는 능력을 기르게 되었으며, 백엔드 분야에 관심을 가지기 시작해서 지금은 백엔드 개발자를 꿈꾸고 있습니다. 주도적이고 창의적인 접근을 통해 현업에서 필요로 하는 솔루션을 제공하는 백엔드 개발자로서, 지속적인 성장과 혁신에 힘쓰고 있습니다.",
    resume: "https://drive.google.com/file/d/1w4inORQtfjWkxVTzWZgHXGLV9KGcRu3_/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "98Woonho", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 85, description: "객체 지향 프로그래밍에 대해 이해하고 있습니다. 개발문서를 참고하여 원하는 기능을 개발할 수 있습니다."},
    { name: "HTML", value: 70, description: "기본적인 구조의 페이지를 개발할 수 있습니다. 반응형 페이지 개발에 익숙해지기 위해 공부하고 있습니다." },
    { name: "CSS", value: 70, description: "기본적이고 자주 사용되는 스타일을 페이지에 적용할 수 있습니다. 더 많은 스타일을 적용하기 위해 공부하고 있습니다."},
    { name: "JavaScript", value: 90, description: "페이지에 다양한 이벤트 적용, 여러 방식으로 서버와의 통신을 할 수 있습니다. 비동기 통신을 통한 댓글 기능을 구현한 경험이 있습니다."},
    { name: "SpringBoot", value: 80, description: "MVC 패턴을 이용하여 혼자 혹은 팀으로 웹서비스를 개발 할 수 있습니다. 다양한 SpringBoot 프로젝트 경험이 있습니다."},
    { name: "React", value: 65, description: "페이지를 컴포넌트화 하여서 보다 쉽게 비동기 페이지를 구현할 수 있고, 간단한 웹 서비스를 구현한 경험이 있습니다." },
    { name: "Node.js", value: 65, description: "다양한 기능에 걸맞는 CRUD를 구현할 수 있습니다." },
    { name: "MySQL", value: 80, description: "다양한 프로젝트 경험으로 인해, 많은 DB를 설계해보았고, 정규화를 통해 효율적인 DB를 설계해본 경험이 있습니다. SQLD 자격증을 보유하고 있습니다." },
  ],
  softSkills: [
    { name: "목표 지향", value: 80 },
    { name: "협력", value: 90 },
    { name: "긍정적 사고", value: 75 },
    { name: "적응력", value: 85 },
    { name: "문제 해결", value: 75 },
    { name: "공감 능력", value: 90 },
    { name: "조직력", value: 70 },
    { name: "창의성", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "저는 현재 제 능력을 기여할 회사를 찾고 있습니다. 언제든 연락주세요!",
  email: "lkj1150@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
