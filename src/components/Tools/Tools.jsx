import ToolsCards from "./ToolsCards";
import icons from "src/assets/Icons";
import "./Tool.css";
export default function Tools() {
  function displayTools(icon, index) {
    return <ToolsCards key={index} id={index} icon={icon} />;
  }

  return (
    <section id="tools" className="tools-section">
      <div className="tools-container">
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
