import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "src/data/Data";
import { animations } from "src/assets/animations/animations";
import "./Introduction.css";
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
    <section className="intro-section" id="about">
      <div className="intro-container">
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
        <div className="card-container">{skills.map(displayCards)}</div>
      </div>
    </section>
  );
}
