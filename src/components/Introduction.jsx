/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import SkillCard from "./partials/SkillCard";
import { skills } from "../data/Data";
import { animations } from "./partials/animations";

function displayCards(skill, index) {
  return (
    <SkillCard
      skill={skill.skillName}
      key={index}
      id={index}
      animationData={animations[index]}
    />
  );
}

export default function Introduction() {
  return (
    <section className="md:h-screen bg-[#181818]" id="about">
      <div className="container md:max-w-7xl mx-auto px-6 md:px-9 flex flex-col text-start md:text-center py-16 md:py-32 space-y-3">
        <h1 className="text-emerald-500 text-3xl  md:text-5xl font-bold ">
          About Me
        </h1>
        <p className=" text-white md:text-lg ">
          I am a passionate web designer with expertise in creating delightful
          user experiences. I am a skilled software developer with experience in
          JAVA, C#, and Python, with proficiency in web development technologies
          including React.js, Vue.js, and Tailwind CSS and backends like
          codeIgniter, Laravel, Flask. I specialize in crafting clean,
          responsive, and visually appealing interfaces that leave a lasting
          impression.
        </p>
        <div className="pt-8 px-6 flex flex-col md:flex-row gap-4">
          {skills.map(displayCards)}
        </div>
      </div>
    </section>
  );
}
