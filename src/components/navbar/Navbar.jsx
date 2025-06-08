import "./Navbar.css";
import { useState, useEffect } from "react";
import logo from "../../assets/port-logo-org.png";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./NavLinks";
import { Fade } from "react-awesome-reveal";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar(props) {
  const [language, setLanguage] = useState("de");
  const [openDrawer, setOpenDrawer] = useState(false);

  function toggleDrawer(newOpen) {
    setOpenDrawer(newOpen);
  }

  const closeDrawer = useMediaQuery("(min-width:1050px)");

  useEffect(() => {
    if (closeDrawer) {
      toggleDrawer(false);
    }
  }, [closeDrawer]);

  return (
    <Fade direction="down" delay={200} triggerOnce>
      <div className="navbar">
        <img src={logo} className="navbar-logo" />
        <NavLinks
          {...props}
          className="navbar-links"
          language={language}
          onLanguageChange={(event) => setLanguage(event.target.value)}
        />

        <Button
          onClick={() => toggleDrawer(true)}
          className="sidenav-open-button"
        >
          <MenuIcon />
        </Button>
        <Drawer
          open={openDrawer}
          onClose={() => toggleDrawer(false)}
          anchor="right"
        >
          <div className="sidenav-top">
            <img src={logo} className="sidenav-logo" />
            <Button
              className="sidenav-close-button"
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon />
            </Button>
          </div>
          <NavLinks
            {...props}
            onToggleDrawer={toggleDrawer}
            className="sidenav-links"
            language={language}
            onLanguageChange={(event) => setLanguage(event.target.value)}
          />
        </Drawer>
      </div>
    </Fade>
  );
}
