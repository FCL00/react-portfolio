/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-[#121212] p-3 shadow-xl">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* left  */}
        <div className=" text-white hover:text-emerald-400">
          <a href="">Fernando</a>
        </div>
        {/* right */}
        <div className="space-x-2">
          <a className=" text-white hover:text-emerald-400" href="#">
            About
          </a>
          <a className=" text-white hover:text-emerald-400" href="#">
            Projects
          </a>
          <a className=" text-white hover:text-emerald-400" href="#">
            Experience
          </a>
          <a className=" text-white hover:text-emerald-400" href="#">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
