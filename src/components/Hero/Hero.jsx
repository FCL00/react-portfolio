import { motion } from "framer-motion";
import heroBackground from "src/assets/backgrounds/hero.jpg";
import "./Hero.css";
export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div className="hero-container">
        <h1 className="hero-h1">
          Hi,
          <span className=""> I'm Fernando</span>
        </h1>
        <h1 className="text-white text-4xl font-bold">
          <span className="text-outline-black text-emerald-400">
            Fullstack Web Developer
          </span>
        </h1>
        <p className=" text-white md:text-lg ">
          Im a passionate web developer and UI/UX enthusiast, dedicated to
          crafting meaningful and user-friendly digital experiences. I strive to
          bring ideas to life through clean, efficient, and visually appealing
          code.
        </p>
        <div className="flex space-x-1 justify-start md:justify-center">
          <a
            href="#contact"
            className="text-white border-2 border-emerald-500 p-2 bg-[#181818] rounded-md hover:bg-emerald-500 hover:text-black"
          >
            Contact Me
          </a>
          <button className="text-white border-2 border-emerald-500 p-2  bg-[#181818] rounded-md hover:bg-emerald-500 hover:text-black">
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}
