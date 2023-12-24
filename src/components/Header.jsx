/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-[#121212] py-4 shadow-xl fixed w-full z-10">
      <nav className="container md:max-w-7xl px-6 mx-auto flex justify-between items-center">
        {/* left  */}
        <div className="text-white hover:text-emerald-400">
          <a href="#hero" className="text-emerald-500 font-extrabold">
            Fernando
          </a>
        </div>
        {/* right */}
        <div className="hidden md:block space-x-2">
          <a className="text-white hover:text-emerald-400" href="#about">
            About
          </a>
          <a className="text-white hover:text-emerald-400" href="#projects">
            Projects
          </a>
          <a className="text-white hover:text-emerald-400" href="#tools">
            Tools
          </a>
          <a className="text-white hover:text-emerald-400" href="#experience">
            Experience
          </a>
          <a className="text-white hover:text-emerald-400" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
