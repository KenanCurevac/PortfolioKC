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
  onToggleMobileMenu,
  className,
  language,
  onLanguageChange,
  isMobile,
}) {
  const { t } = useTranslation();

  return (
    <List className={className}>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(aboutSection);
          isMobile && onToggleMobileMenu(false);
        }}
        style={{ whiteSpace: "nowrap" }}
      >
        {isMobile && <PersonIcon />} {t("navbar.about")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(educationSection);
          isMobile && onToggleMobileMenu(false);
        }}
      >
        {isMobile && <SchoolIcon />} {t("navbar.education")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(careerSection);
          isMobile && onToggleMobileMenu(false);
        }}
      >
        {isMobile && <BusinessIcon />} {t("navbar.career")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(projectsSection);
          isMobile && onToggleMobileMenu(false);
        }}
      >
        {isMobile && <CodeIcon />} {t("navbar.projects")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(contactSection);
          isMobile && onToggleMobileMenu(false);
        }}
      >
        {isMobile && <EmailIcon />} {t("navbar.contact")}
      </ListItem>
      <Dropdown language={language} onLanguageChange={onLanguageChange} />
    </List>
  );
}
