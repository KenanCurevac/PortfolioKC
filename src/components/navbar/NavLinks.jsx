import "./NavLinks.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";

export default function NavLinks({
  scrollToSection,
  aboutSection,
  educationSection,
  careerSection,
  projectsSection,
  contactSection,
  onToggleDrawer,
  className,
  language,
  onLanguageChange,
}) {
  const { t } = useTranslation();

  const isDrawer = className === "sidenav-links";

  return (
    <List className={className}>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(aboutSection);
          {
            isDrawer && onToggleDrawer(false);
          }
        }}
        style={{ whiteSpace: "nowrap" }}
      >
        {isDrawer && <PersonIcon />} {t("navbar.about")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(educationSection);
          {
            isDrawer && onToggleDrawer(false);
          }
        }}
      >
        {isDrawer && <SchoolIcon />} {t("navbar.education")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(careerSection);
          {
            isDrawer && onToggleDrawer(false);
          }
        }}
      >
        {isDrawer && <BusinessIcon />} {t("navbar.career")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(projectsSection);
          {
            isDrawer && onToggleDrawer(false);
          }
        }}
      >
        {isDrawer && <CodeIcon />} {t("navbar.projects")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(contactSection);
          {
            isDrawer && onToggleDrawer(false);
          }
        }}
      >
        {isDrawer && <EmailIcon />} {t("navbar.contact")}
      </ListItem>
      <Dropdown language={language} onLanguageChange={onLanguageChange} />
    </List>
  );
}
