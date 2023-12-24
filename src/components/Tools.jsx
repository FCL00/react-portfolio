import ToolsCards from "./partials/ToolsCards";
// import { tools } from "../data/Data";
import icons from "./partials/Icons";

export default function Tools() {
  function displayTools(icon, index) {
    return <ToolsCards key={index} id={index} icon={icon} />;
  }

  // function displayTools(tool, index) {
  //   return (
  //     <ToolsCards
  //       key={index}
  //       icon={tool.icon}
  //       color={tool.color}
  //       label={tool.label}
  //     />
  //   );
  // }

  return (
    <section id="tools" className="md:h-screen bg-[#181818]">
      <div className="container md:max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3  text-start py-16 md:py-32 space-y-3">
        <h1 className="text-emerald-500 text-3xl md:text-5xl font-bold md:text-center w-full">
          Tools That I Used
        </h1>
        <div className="text-white md:text-center w-full">
          <p>
            In my toolkit, I leverage a diverse array of tools including React,
            Node.js, Laravel, Git, and more. With a focus on clean code and
            efficient solutions, I create dynamic and visually appealing digital
            experiences. From database management to front-end frameworks, each
            tool contributes to crafting seamless and innovative applications.
          </p>
        </div>
        {icons.map(displayTools)}
      </div>
    </section>
  );
}
