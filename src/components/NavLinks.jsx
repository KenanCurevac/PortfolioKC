import "./NavLinks.css";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import german from "../assets/germany-flag-icon.png";
import english from "../assets/united-kingdom-flag-icon.png";
import CheckIcon from "@mui/icons-material/Check";

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
  const [language, setLanguage] = useState("english");
  const { i18n } = useTranslation();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  const handleChange = (event) => {
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
        Über mich
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
        Bildung
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
        Berufserfahrung
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
        Projekte
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
        Kontakt
      </ListItem>
      <ListItem className="dropdown-lang">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={language}
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
            variant="standard"
            disableUnderline
            renderValue={(selected) => (
              <div className="top-flag-wrap">
                <img
                  src={selected === "english" ? english : german}
                  alt={selected}
                  className="top-flag"
                />
              </div>
            )}
          >
            <MenuItem value="english">
              <img src={english} alt="English" className="flag" /> English{" "}
              {language === "english" && (
                <CheckIcon className="dropdown-flag" />
              )}
            </MenuItem>
            <MenuItem value="german">
              <img src={german} alt="German" className="flag" /> Deutsch
              {language === "german" && <CheckIcon className="dropdown-flag" />}
            </MenuItem>
          </Select>
        </FormControl>
      </ListItem>
    </List>
  );
}
