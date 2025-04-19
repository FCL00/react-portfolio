import ToolsCards from "./ToolsCards";
import Icons from "@/assets/icons";
// import "./Tool.css";


export default function Tools() {
  return (
    <section id="tools" className="md:min-h-screen lg:min-h-[850px]">
      <div className="px-6 py-16 mx-auto md:max-w-7xl text-start md:text-center md:pt-32">
        {/* Title */}
        <h1 className="w-full mb-6 text-3xl font-bold text-white md:text-5xl">
          Tools That I Use
        </h1>

        {/* Description */}
        <div className="w-full max-w-4xl mx-auto mb-10 text-white">
          <p className="text-[#606060]">
            In my toolkit, I leverage a diverse array of tools including React,
            Node.js, Laravel, Git, and more. With a focus on clean code and
            efficient solutions, I create dynamic and visually appealing digital
            experiences. From database management to front-end frameworks, each
            tool contributes to crafting seamless and innovative applications.
          </p>
        </div>

        {/* Tool Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {Icons.map((icon, index) => (
            <ToolsCards key={index} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
