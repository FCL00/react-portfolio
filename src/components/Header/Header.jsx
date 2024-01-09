import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [expand, setExpand] = useState(false);

  function expandHandler() {
    setExpand((prevState) => {
      return !prevState;
    });
    console.log(expand);
  }
  return (
    <nav className="bg-[#121212] py-4 shadow-xl fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6">
        {/* left  */}
        <div className="text-white hover:text-emerald-400">
          <a href="#hero" className="text-emerald-500 font-extrabold">
            Fernando
          </a>
        </div>
        {/* button */}
        <div className="flex md:hidden  md:order-2 space-x-3 md:space-x-0">
          <button
            aria-controls="navbar-sticky"
            aria-expanded={expand}
            onClick={expandHandler}
          >
            <FontAwesomeIcon className="text-white" icon={faBars} />
          </button>
        </div>
        {/* right */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            expand ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col py-2 space-y-2 md:py-0 md:space-y-0  md:p-0 md:flex-row">
            <li>
              <a
                className="block py-2 px-3 text-white md:py-0 hover:text-emerald-400 hover:bg-[#181818] rounded-md"
                href="#about"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-white md:py-0 hover:text-emerald-400 hover:bg-[#181818] rounded-md"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-white md:py-0 hover:text-emerald-400 hover:bg-[#181818] rounded-md"
                href="#tools"
              >
                Tools
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-white md:py-0 hover:text-emerald-400 hover:bg-[#181818] rounded-md"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-white md:py-0 hover:text-emerald-400 hover:bg-[#181818] rounded-md"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
