/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactLinks(props) {
  return (
    <a href="#" className="text-white hover:text-emerald-300">
      <FontAwesomeIcon
        className="h-10 w-10"
        icon={props.icon}
        style={{ color: "#4ade80" }}
      />
    </a>
  );
}
