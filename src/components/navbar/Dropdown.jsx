import "./Dropdown.css";
import { useState, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import german from "../../assets/germany-flag-icon.png";
import english from "../../assets/united-kingdom-flag-icon.png";
import CheckIcon from "@mui/icons-material/Check";

export default function Dropdown({ language, onLanguageChange }) {
  const [selectOpen, setSelectOpen] = useState(false);
  const { i18n } = useTranslation();

  function handleChangeLanguage(event) {
    i18n.changeLanguage(event.target.value);
    onLanguageChange(event);
    setSelectOpen(false);
  }

  useEffect(() => {
    function handleClose() {
      if (selectOpen) {
        setSelectOpen(false);
      }
    }

    window.addEventListener("scroll", handleClose, true);
    window.addEventListener("resize", handleClose);

    return () => {
      window.removeEventListener("scroll", handleClose, true);
      window.removeEventListener("resize", handleClose);
    };
  }, [selectOpen]);

  return (
    <ListItem className="language-dropdown">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          open={selectOpen}
          onOpen={() => setSelectOpen(true)}
          onClose={() => setSelectOpen(false)}
          value={language}
          onChange={handleChangeLanguage}
          inputProps={{ "aria-label": "Without label" }}
          variant="standard"
          disableUnderline
          renderValue={(selected) => (
            <div className="selected-flag-wrap">
              <img
                src={selected === "de" ? german : english}
                alt={selected}
                className="selected-flag"
              />
            </div>
          )}
        >
          <MenuItem value="en">
            <img src={english} alt="English" className="flag" /> English
            {language === "en" && <CheckIcon className="checkmark" />}
          </MenuItem>
          <MenuItem value="de">
            <img src={german} alt="Deutsch" className="flag" /> Deutsch
            {language === "de" && <CheckIcon className="checkmark" />}
          </MenuItem>
        </Select>
      </FormControl>
    </ListItem>
  );
}
