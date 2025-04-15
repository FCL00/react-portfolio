import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcon({icon, url, label}) {
  return (
    <a href={url} className="text-white hover:text-emerald-300" aria-label={label} target="_blank">
      <FontAwesomeIcon
        className="w-10 h-10"
        icon={icon}
        style={{ color: "#303030" }}
      />
    </a>
  );
}
