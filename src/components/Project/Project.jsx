import react from "react";


import github from "@/assets/icons/github.png";
import styles from  "./Project.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/Data";

// TODO: Improve accessibility by adding alt text to all images, including icons.
// TODO: Refactor the CSS for better performance using CSS Grid for layout management.
// TODO: Optimize the motion animations for better performance on low-end devices.
export default function Project() {

  return (
    <>
      <section id="projects" className="min-h-screen px-6 py-16 mx-auto space-y-3 md:max-w-7xl md:px-9 text-start md:text-center md:py-32">
        <div className="mb-4 space-y-3 text-white">
          <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">My Recent Works</h1>
          <div className="w-full max-w-4xl mx-auto mb-32 text-white">
            <p className="text-[#696969]">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described with
              links to code repositories and live demos in it. It reflects my
              ability to solve complex problems, work with different technologies,
              and manage projects effectively.
            </p>
          </div>
        </div>
        <ul id="">
          { projects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project}/>
            ))
          }
        </ul>
      </section>
    </>
  );
}
