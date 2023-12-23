/* eslint-disable no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faViber,
  faTelegram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// #10b981
export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-8">
      <div className="container md:max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between ">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl text-emerald-500 font-semibold">Fernando </h2>
          <p className="text-sm">Building a better future.</p>
          {/* <p className="text-sm">&copy; 2023 All rights reserved.</p> */}
        </div>
        <div className="flex space-x-1 items-center">
          <a href="#" className="text-white hover:text-emerald-300">
            <FontAwesomeIcon
              className="h-10 w-10"
              icon={faLinkedin}
              style={{ color: "#4ade80" }}
            />
          </a>
          <a href="#" className="text-white hover:text-emerald-300">
            <FontAwesomeIcon
              className="h-10 w-10"
              icon={faSquareFacebook}
              style={{ color: "#4ade80" }}
            />
          </a>
          <a href="#" className="text-white hover:text-emerald-300">
            <FontAwesomeIcon
              className="h-10 w-10"
              icon={faViber}
              style={{ color: "#4ade80" }}
            />
          </a>
          <a href="#" className="text-white hover:text-emerald-300">
            <FontAwesomeIcon
              className="h-10 w-10"
              icon={faTelegram}
              style={{ color: "#4ade80" }}
            />
          </a>
          <a href="#" className="text-white hover:text-emerald-300">
            <FontAwesomeIcon
              className="h-10 w-10"
              icon={faGithub}
              style={{ color: "#4ade80" }}
            />
          </a>
          <a href="#" className="text-white hover:text-emerald-300">
            <FontAwesomeIcon
              className="h-10 w-10"
              icon={faDiscord}
              style={{ color: "#4ade80" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
