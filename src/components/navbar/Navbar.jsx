import "./Navbar.css";
import { useState, useEffect } from "react";
import logo from "../../assets/port-logo-org.png";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./NavLinks";
import { Fade } from "react-awesome-reveal";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileMenu from "./MobileMenu";

export default function Navbar(props) {
  const [language, setLanguage] = useState("en");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function handleLanguageChange(language) {
    setLanguage(language);
  }

  function toggleMobileMenu(newOpen) {
    setOpenMobileMenu(newOpen);
  }

  const closeMobileMenu = useMediaQuery("(min-width:1050px)");

  useEffect(() => {
    if (closeMobileMenu) {
      toggleMobileMenu(false);
    }
  }, [closeMobileMenu]);

  return (
    <Fade direction="down" delay={200} triggerOnce>
      <div className="navbar">
        <img src={logo} className="navbar-logo" />

        <NavLinks
          {...props}
          className="navbar-links"
          language={language}
          onLanguageChange={handleLanguageChange}
          isMobile={false}
        />

        <Button
          onClick={() => toggleMobileMenu(true)}
          className="sidenav-open-button"
        >
          <MenuIcon />
        </Button>

        <MobileMenu
          {...props}
          openMobileMenu={openMobileMenu}
          onToggleMobileMenu={toggleMobileMenu}
          language={language}
          onLanguageChange={handleLanguageChange}
        />
      </div>
    </Fade>
  );
}
