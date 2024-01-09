import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactLinks from "./ContactLinks";
import {
  faLinkedin,
  faSquareFacebook,
  faViber,
  faTelegram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  faLinkedin,
  faSquareFacebook,
  faViber,
  faTelegram,
  faDiscord,
  faGithub,
];

import "./Footer.css";

export default function Footer() {
  function displayIcons(item, index) {
    return <ContactLinks key={index} icon={item} />;
  }

  return (
    <footer className="bg-[#121212] text-white py-8">
      <div className="footer-container">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl text-emerald-500 font-semibold">Fernando </h2>
          <p className="text-sm">Building a better future.</p>
        </div>
        <div className="flex space-x-1 items-center">
          {icons.map(displayIcons)}
        </div>
      </div>
    </footer>
  );
}
