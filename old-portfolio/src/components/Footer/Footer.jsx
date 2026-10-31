import {
  faLinkedin,
  faSquareFacebook,
  faViber,
  faTelegram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "./SocialIcon";
import "./Footer.css";

const contactIcons = [
  { icon: faLinkedin, url: "https://www.linkedin.com/in/fernando-lagahit-524095292/", label: "LinkedIn" },
  { icon: faSquareFacebook, url: "https://www.facebook.com/fernando.lagahit.52", label: "Facebook" },
  { icon: faViber, url: "#", label: "Viber" },
  { icon: faTelegram, url: "#", label: "Telegram" },
  { icon: faDiscord, url: "#", label: "Discord" },
  { icon: faGithub, url: "https://github.com/FCL00", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:justify-between footer-container">
      <p className="text-sm text-[#696969]">
        © {new Date().getFullYear()} Fernando Lagahit. All rights reserved.
      </p>
      <div className="flex items-center gap-3">
        {contactIcons.map((item, index) => (
          <SocialIcon
            key={index}
            icon={item.icon}
            url={item.url}
            label={item.label}
          />
        ))}
      </div>
    </footer>
  );
}
