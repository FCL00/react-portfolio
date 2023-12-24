/* eslint-disable no-unused-vars */
import react from "react";
import { projects } from "../data/Data";

import WorkCards from "./partials/WorkCards";

export default function Project() {
  function displayProjects(item, index) {
    return (
      <WorkCards
        title={item.title}
        desc={item.desc}
        img={item.img}
        tag={item.tags}
        key={index}
      />
    );
  }

  return (
    <section
      id="projects"
      className="bg-[#202020]"
      style={{
        backgroundImage: "url('')",
      }}
    >
      <div className="container md:max-w-7xl mx-auto px-6 py-16 md:py-32 md:text-center space-y-3">
        <h1 className="text-emerald-500 text-3xl  md:text-5xl font-bold ">
          My Recent Works
        </h1>
        <p className="text-white">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
        <div className="container md:max-w-7xl mx-auto px-6 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
          {projects.map(displayProjects)}
        </div>
        <div className="text-center">
          <a
            href=""
            className="text-emerald-500 text-center hover:text-emerald-400"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
