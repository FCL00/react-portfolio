/* eslint-disable no-unused-vars */
import react from "react";
import ExpCard from "./partials/ExpCards";

export default function Experience() {
  return (
    <section id="experience" className="md:h-screen bg-[#202020]">
      <div className="container md:max-w-7xl mx-auto px-6 md:px-9 py-16  md:py-32">
        <h1 className="text-start text-emerald-500 text-3xl  md:text-5xl font-bold md:text-center mb-8">
          Work Experience
        </h1>
        <ol className="relative border-s border-gray-200 dark:border-emerald-700">
          <ExpCard />
          <ExpCard />
          <ExpCard />
          <ExpCard />
        </ol>
      </div>
    </section>
  );
}
