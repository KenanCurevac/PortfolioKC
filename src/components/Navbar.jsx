import "./Navbar.css";
import { useEffect, useState } from "react";
import logo from "../assets/port-logo-org.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar({
  scrollToSection,
  aboutRef,
  educationRef,
  careerRef,
  projectsRef,
  contactRef,
}) {
  const [open, setOpen] = useState(false);

  function toggleDrawer(newOpen) {
    setOpen(newOpen);
  }

  useEffect(() => {
    AOS.init();
  }, []);

  const drawerList = (
    <List className="drawer-list">
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(aboutRef);
          toggleDrawer(false);
        }}
      >
        Über mich
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(educationRef);
          toggleDrawer(false);
        }}
      >
        Bildung
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(careerRef);
          toggleDrawer(false);
        }}
      >
        Berufserfahrung
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(projectsRef);
          toggleDrawer(false);
        }}
      >
        Projekte
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(contactRef);
          toggleDrawer(false);
        }}
      >
        Kontakt
      </ListItem>
    </List>
  );

  return (
    <div
      className="navbar"
      data-aos="fade-down"
      data-aos-delay="400"
      data-aos-duration="800"
    >
      <img src={logo} className="navbar-logo" />
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
      <Button onClick={() => toggleDrawer(true)} className="mobile-menu">
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="right">
        <Button
          onClick={() => toggleDrawer(false)}
          className="navbar-close-button"
        >
          <CloseIcon />
        </Button>
        {drawerList}
      </Drawer>
    </div>
  );
}
