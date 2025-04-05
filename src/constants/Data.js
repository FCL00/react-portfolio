import Shoppie from "@/assets/works/Shoppie.png";
import Shoppy from "@/assets/works/Shoppy.png";
import Collection from "@/assets/works/Collection.png";
import BudgetBay from "@/assets/works/browser-budget-bay.png";
import ShoppieType2 from "@/assets/works/Shoppie-type-2.png";
const skills = [
  { skillName: "Web Development" },
  { skillName: "App Development" },
  { skillName: "UI/UX Design" },
  { skillName: "Cloud Computing" },
];

const projects = [
  {
    title: "Budget Bay",
    desc: "This is a budget bay saas application its designed to provide a seamless shopping experience with a modern and responsive user interface.",
    img: BudgetBay,
    link: "https://github.com/FCL00/shoppie",
    tags: ["react.js", "tailwindcss"],
  },
  {
    title: "Shoppie",
    desc: "This Laravel-based website is designed to provide a seamless shopping experience with a modern and responsive user interface. ",
    img: ShoppieType2,
    link: "https://github.com/FCL00/shoppie",
    tags: ["react.js", "tailwindcss"],
  },
  {
    title: "Shoppy Admin Dashboard",
    desc: "This project is a React application that uses Recharts for data visualization and Tailwind CSS for styling. It includes a LineChart component, responsive layout, and a sample data visualization example.",
    img: Shoppy,
    link: "https://react-admin-beta-rust.vercel.app",
    tags: ["react.js", "tailwindcss"],
  },
  {
    title: "Daily UI",
    desc: "A collection of UI designs created as a part of the Daily UI Challenge. Each design in this collection reflects a commitment to creativity, user-centric and aesthetics",
    img: Collection,
    link: "https://github.com/FCL00/Daily-UI-Challenge",
    tags: ["react.js", "tailwindcss"],
  },
];

const WorkExp = [
  {
    startDate: "February 20, 2023",
    endDate: "March 20, 2023",
    role: "Intern",
    task: "As an intern at the Philippine Navy, I actively contributed to cybersecurity initiatives. My responsibilities included conducting security assessments, identifying vulnerabilities, and implementing measures to enhance the overall cybersecurity posture.",
    company: "Philippine Navy",
  },
  {
    startDate: "February 20, 2023",
    endDate: "March 20, 2023",
    role: "Web Developer",
    task: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi error quia adipisci, voluptatum veritatis porro repudiandae officiis blanditiis ex.",
    company: "Company A",
  },
  {
    startDate: "February 20, 2023",
    endDate: "March 20, 2023",
    role: "Web Developer",
    task: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi error quia adipisci, voluptatum veritatis porro repudiandae officiis blanditiis ex.",
    company: "Company A",
  },
  
];

export { skills, projects, WorkExp };
