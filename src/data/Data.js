import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faVuejs,
  faLaravel,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const tools = [
  { icon: faHtml5, color: "#e34c26", label: "HTML5", size: "2xl" },
  { icon: faCss3, color: "#264de4", label: "CSS3", size: "2xl" },
  { icon: faJs, color: "#f0db4f", label: "JavaScript", size: "2xl" },
  { icon: faReact, color: "#00ccff", label: "React.js", size: "2xl" },
  { icon: faVuejs, color: "#44BA81", label: "Vue.js", size: "2xl" },
  { icon: faLaravel, color: "#EC271B", label: "Laravel", size: "2xl" },
  { icon: faPython, color: "#eeff00", label: "Python", size: "2xl" },
];

const skills = [
  { skillName: "Web Development", icon: "./skills/marketplace.png" },
  {
    skillName: "App Development",
    icon: "./skills/online-shopping.png",
  },
  { skillName: "UI/UX Design", icon: "./skills/design.png" },
  { skillName: "Cloud Computing", icon: "./skills/edge-computing.png" },
];

const projects = [
  {
    title: "QuizGuard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam quos architecto temporibus eveniet dolorum voluptate officiis nulla ipsum eius.",
    img: "./assets/",
    link: "...",
    tags: ["react.js", "tailwindcss"],
  },
  {
    title: "QuizGuard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam quos architecto temporibus eveniet dolorum voluptate officiis nulla ipsum eius.",
    img: "./assets/",
    link: "...",
    tags: ["react.js", "tailwindcss"],
  },
  {
    title: "QuizGuard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam quos architecto temporibus eveniet dolorum voluptate officiis nulla ipsum eius.",
    img: "./assets/",
    link: "...",
    tags: ["react.js", "tailwindcss"],
  },
];

const WorkExp = [{ date: "02/" }];

export { skills, tools, projects, WorkExp };
