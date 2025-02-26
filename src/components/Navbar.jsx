import "./Navbar.css";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/port-logo-org.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar({
  scrollToSection,
  aboutRef,
  educationRef,
  careerRef,
  projectsRef,
  contactRef,
}) {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div
      className="navbar"
      data-aos="fade-down"
      data-aos-delay="400"
      data-aos-duration="800"
    >
      <img src={logo} className="navbar-title" />
      <ul className="navbar-links">
        <li className="navbar-item" onClick={() => scrollToSection(aboutRef)}>
          Über mich
        </li>
        <li
          className="navbar-item"
          onClick={() => scrollToSection(educationRef)}
        >
          Bildung
        </li>
        <li className="navbar-item" onClick={() => scrollToSection(careerRef)}>
          Berufserfahrung
        </li>
        <li
          className="navbar-item"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projekte
        </li>
        <li className="navbar-item" onClick={() => scrollToSection(contactRef)}>
          Kontakt
        </li>
      </ul>
      <div onClick={handleNav} className="navbar-menu-icon">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? "navbar-mobile-menu active" : "navbar-mobile-menu"}>
        <h1 className="navbar-title-mobile">REACT.</h1>
        <li className="navbar-item-mobile">Home</li>
        <li className="navbar-item-mobile">Company</li>
        <li className="navbar-item-mobile">Resources</li>
        <li className="navbar-item-mobile">About</li>
        <li className="navbar-item-mobile">Contact</li>
      </ul>
    </div>
  );
}
