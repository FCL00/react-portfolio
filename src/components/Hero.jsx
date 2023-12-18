/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import img from "../assets/Fernando.jpg";
export default function Hero() {
  return (
    <section
      className="bg-[#181818] md:h-screen px-9 flex items-center bg-center bg-cover bg-blend-overlay bg-black/20 bg-fixed pb-16 md:pb-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="container py-16  md:max-w-7xl mx-auto flex flex-col md:text-center space-y-3">
        <h1 className="text-white text-5xl  md:text-7xl font-bold">
          Hey, Im Fernando
        </h1>
        <h1 className="text-white text-3xl font-bold">
          <span className="text-outline-black text-emerald-400">
            Im Fullstack developer
          </span>
        </h1>
        <p className=" text-white md:text-lg ">
          Im a passionate web developer and UI/UX enthusiast, dedicated to
          crafting meaningful and user-friendly digital experiences. I strive to
          bring ideas to life through clean, efficient, and visually appealing
          code.
        </p>
        <div className="flex space-x-1 justify-start md:justify-center">
          <button className="text-white border-2 border-emerald-500 p-2 bg-black rounded-md hover:bg-emerald-500 hover:text-black">
            Contact Me
          </button>
          <button className="text-white border-2 border-emerald-500 p-2  bg-black rounded-md hover:bg-emerald-500 hover:text-black">
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}
