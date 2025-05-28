import "./NavLinks.css";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import german from "../assets/germany-flag-icon.png";
import english from "../assets/united-kingdom-flag-icon.png";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "react-i18next";

export default function NavLinks({
  scrollToSection,
  aboutSection,
  educationSection,
  careerSection,
  projectsSection,
  contactSection,
  onToggleDrawer,
  className,
}) {
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <List className={className}>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(aboutSection);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        {t("navbar.about")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(educationSection);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        {t("navbar.education")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(careerSection);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        {t("navbar.career")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(projectsSection);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        {t("navbar.projects")}
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(contactSection);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        {t("navbar.contact")}
      </ListItem>
      <ListItem className="dropdown-lang">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={language}
            onChange={handleChangeLanguage}
            inputProps={{ "aria-label": "Without label" }}
            variant="standard"
            disableUnderline
            renderValue={(selected) => (
              <div className="top-flag-wrap">
                <img
                  src={selected === "en" ? english : german}
                  alt={selected}
                  className="top-flag"
                />
              </div>
            )}
          >
            <MenuItem value="en">
              <img src={english} alt="English" className="flag" /> English{" "}
              {language === "en" && <CheckIcon className="dropdown-flag" />}
            </MenuItem>
            <MenuItem value="de">
              <img src={german} alt="Deutsch" className="flag" /> Deutsch
              {language === "de" && <CheckIcon className="dropdown-flag" />}
            </MenuItem>
          </Select>
        </FormControl>
      </ListItem>
    </List>
  );
}
