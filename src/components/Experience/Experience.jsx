import react from "react";
import ExpCard from "./ExpCards";
import { WorkExp } from "src/data/Data";
import "./Experience.css";
export default function Experience(props) {
  function displayWorkExp(work, index) {
    return (
      <ExpCard
        key={index}
        startDate={work.startDate}
        endDate={work.endDate}
        role={work.role}
        company={work.company}
        task={work.task}
      />
    );
  }
  return (
    <section id="experience" className="md:h-screen bg-[#202020]">
      <div className="experience-container">
        <h1 className="experience-h1">Work Experience</h1>
        <ol className="relative border-s border-gray-200 dark:border-emerald-700">
          {WorkExp.map(displayWorkExp)}
        </ol>
      </div>
    </section>
  );
}
