import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-secondary">
        <div className="container-fluid">
          <AnchorLink className="navbar-brand" href="#intro">
            <img
              className="logoImage border border-light border-opacity-75"
              src={Logo}
              alt="Logo"
              width="30"
              height="30"
            />
          </AnchorLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <AnchorLink
                  className="nav-link active text-light"
                  href="#about"
                  aria-current="page"
                >
                  About
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link text-light" href="#experience">
                  Experience
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link text-light" href="#skills">
                  Skills
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link text-light" href="#projects">
                  Projects
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link text-light" href="#education">
                  Education
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link text-light" href="#contact">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
