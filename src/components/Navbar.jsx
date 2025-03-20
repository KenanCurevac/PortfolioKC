import "./Navbar.css";
import { useState } from "react";
import logo from "../assets/port-logo-org.png";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./NavLinks";

export default function Navbar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  function toggleDrawer(newOpen) {
    setOpenDrawer(newOpen);
  }

  return (
    <div className="navbar">
      <img src={logo} className="navbar-logo" />
      <NavLinks {...props} className="navbar-links" />
      <Button onClick={() => toggleDrawer(true)} className="mobile-menu">
        <MenuIcon />
      </Button>
      <Drawer
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        anchor="right"
      >
        <Button
          className="navbar-close-button"
          onClick={() => toggleDrawer(false)}
        >
          <CloseIcon />
        </Button>
        <NavLinks
          {...props}
          onToggleDrawer={toggleDrawer}
          className="drawer-list"
        />
      </Drawer>
    </div>
  );
}
