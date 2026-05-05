import "./MobileMenu.css";
import logo from "../../assets/port-logo-org.png";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./NavLinks";

export default function MobileMenu({
  openMobileMenu,
  onToggleMobileMenu,
  language,
  onLanguageChange,
  ...props
}) {
  return (
    <Drawer
      open={openMobileMenu}
      onClose={() => onToggleMobileMenu(false)}
      anchor="right"
    >
      <div className="sidenav-top">
        <img src={logo} className="sidenav-logo" alt="Logo" />
        <Button
          className="sidenav-close-button"
          onClick={() => onToggleMobileMenu(false)}
        >
          <CloseIcon />
        </Button>
      </div>
      <NavLinks
        {...props}
        onToggleMobileMenu={onToggleMobileMenu}
        className="sidenav-links"
        language={language}
        onLanguageChange={onLanguageChange}
        isMobile
      />
    </Drawer>
  );
}
