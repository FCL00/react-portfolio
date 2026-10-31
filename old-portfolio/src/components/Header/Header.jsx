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
    <nav className="fixed z-40 w-full py-4 glass-effect">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-6 mx-auto">
        {/* left  */}
        <div className="text-white hover:text-emerald-400">
          <a href="#hero" className="font-extrabold text-white">
            Fernando
          </a>
        </div>
        {/* button */}
        <div className="flex space-x-3 md:hidden md:order-2 md:space-x-0">
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
                    ? "text-white bg-[#181818] md:bg-transparent"
                    : " text-white md:text-[#696969]"
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
                    ? "text-white bg-[#181818] md:bg-transparent"
                    : " text-white md:text-[#696969]"
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
                    ? "text-white bg-[#181818] md:bg-transparent"
                    : " text-white md:text-[#696969]"
                }`}
                href="#tools"
              >
                Tools
              </a>
            </li>
            {/* <li>
              <a
                className={`block py-2 px-3  md:py-0 rounded-md ${
                  currentPage === "#experience"
                    ? "text-white bg-[#181818] md:bg-transparent"
                    : "text-[#696969] md:text-[#696969]"
                }`}
                href="#experience"
              >
                Experience
              </a>
            </li> */}
            <li>
              <a
                className={`block py-2 px-3  md:py-0 rounded-md ${
                  currentPage === "#contact"
                    ? "text-white  bg-[#181818] md:bg-transparent"
                    : "text-white md:text-[#696969]"
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
