import { motion, useReducedMotion } from "framer-motion";
import dashboard from "@/assets/backgrounds/dashboard.png";
import hero from "@/assets/backgrounds/hero.png";
import styles from "./Hero.module.css";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center py-16 bg-[#121212] text-white relative overflow-hidden`}
    >
      <img
        src={hero}
        alt="Hero background"
        loading="lazy"
        className="absolute inset-0 z-0 object-cover w-full h-full"
        width="1920"
        height="1080"
        style={{ objectFit: "cover" }}
      />

      <div className="container relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <h1 className="mt-32 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          Hi, I'm Fernando
        </h1>

        <p className="max-w-3xl text-lg md:text-xl">
          I build exceptional web experiences with a focus on performance,
          scalability, and user satisfaction
        </p>

        {!prefersReducedMotion ? (
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 mt-4 text-white bg-[#121212] border border-gray-400 rounded-md cursor-pointer"
          >
            Get in touch!
          </motion.a>
        ) : (
          <a
            href="#contact"
            className="px-6 py-2 mt-4 text-white bg-[#121212] border border-gray-400 rounded-md cursor-pointer"
          >
            Get in touch!
          </a>
        )}

        {/* Glowing Dashboard Section */}
        <div className="relative flex items-center justify-center w-full max-w-5xl mt-10">
          {/* Glowing background */}
          <div className="absolute top-0 z-0 w-full h-full bg-white blur-md opacity-10" />

          {/* Dashboard Image */}
          <div className="relative">
            <img
              src={dashboard}
              alt="Dashboard preview"
              loading="lazy"
              width="1200"
              height="800"
              className={`relative z-10 w-full rounded-2xl ${styles.heroImage} object-cover`}
            />
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="w-full absolute md:-bottom-20 left-0 right-0 md:h-48 lg:h-[400px] pointer-events-none bg-gradient-to-b from-transparent to-[#121212] rounded-b-2xl" />
    </section>
  );
}
