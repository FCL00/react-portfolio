import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [expand, setExpand] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setCurrentPage(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function expandHandler() {
    setExpand((prevState) => {
      return !prevState;
    });
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
          <ul className="flex flex-col py-2 space-y-2 md:py-0 md:space-y-0 md:p-0 md:flex-row">
            <li>
              <a
                className={`block py-2 px-3  md:py-0 rounded-md ${
                  currentPage === "#about"
                    ? "text-emerald-500 md:text-emerald-500 bg-[#181818] md:bg-transparent"
                    : "text-white"
                }`}
                href="#about"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`block py-2 px-3  md:py-0 rounded-md ${
                  currentPage === "#projects"
                    ? "text-emerald-500 md:text-emerald-500 bg-[#181818] md:bg-transparent"
                    : "text-white"
                }`}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={`block py-2 px-3  md:py-0 rounded-md ${
                  currentPage === "#tools"
                    ? "text-emerald-500 md:text-emerald-500 bg-[#181818] md:bg-transparent"
                    : "text-white"
                }`}
                href="#tools"
              >
                Tools
              </a>
            </li>
            <li>
              <a
                className={`block py-2 px-3  md:py-0 rounded-md ${
                  currentPage === "#experience"
                    ? "text-emerald-500 md:text-emerald-500 bg-[#181818] md:bg-transparent"
                    : "text-white"
                }`}
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className={`block py-2 px-3  md:py-0 rounded-md ${
                  currentPage === "#contact"
                    ? "text-emerald-500 md:text-emerald-500 bg-[#181818] md:bg-transparent"
                    : "text-white"
                }`}
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
