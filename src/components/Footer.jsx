import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactLinks from "./partials/ContactLinks";
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

export default function Footer() {
  function displayIcons(item, index) {
    return <ContactLinks key={index} icon={item} />;
  }

  return (
    <footer className="bg-[#121212] text-white py-8">
      <div className="container md:max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between ">
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
