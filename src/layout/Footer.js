import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "../components/ScrollToTop";

export default function Footer() {
  return (
    <>
      <ScrollToTop />
      <div className="bg-secondary mt-md-1 py-3">
        <ul className="list-group d-flex flex-row justify-content-center">
          <li className="list-group-item rounded-2 mx-2">
            <a
              href="https://github.com/prasathvjkmr"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="fs-5 align-middle" />
            </a>
          </li>
          <li className="list-group-item rounded-2 mx-2">
            <a
              href="https://codepen.io/prasathvjkmr"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCodepen} className="fs-5 align-middle" />
            </a>
          </li>
          <li className="list-group-item rounded-2 mx-2">
            <a
              href="https://www.linkedin.com/in/prasathvjkmr"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="fs-5 align-middle"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
