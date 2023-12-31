import { motion } from "framer-motion";
import heroBackground from "src/assets/backgrounds/hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#181818] h-screen flex items-center bg-center bg-cover bg-blend-overlay bg-black/20 bg-fixed py-16"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div className="container px-6 py-16 md:px-16 md:max-w-7xl mx-auto flex flex-col md:text-center space-y-3">
        <h1 className="text-white text-5xl  md:text-7xl font-bold">
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
