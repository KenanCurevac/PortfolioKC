import "./Contact.css";
import { forwardRef, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactForm from "./ContactForm";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default forwardRef(function Contact(_, ref) {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const { t } = useTranslation();

  function handleOpenSnackbar(message, severity) {
    setSnackbarState({ open: true, message: message, severity: severity });
  }

  function handleCloseSnackbar(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarState({
      open: false,
      message: "",
      severity: "",
    });
  }

  return (
    <div className="contact-container" ref={ref}>
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          severity={snackbarState.severity}
          variant="filled"
          sx={{ width: "23vw" }}
        >
          {snackbarState.message}
        </Alert>
      </Snackbar>

      <div className="contact-title" data-aos="zoom-in" data-aos-duration="600">
        {t("contact.title")}
      </div>
      <div
        className="icons-container"
        data-aos="zoom-in-down"
        data-aos-duration="800"
      >
        <a
          href="https://www.linkedin.com/in/kenan-curevac-2624a4357/"
          target="_blank"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://github.com/KenanCurevac" target="_blank">
          <GitHubIcon className="icon" />
        </a>
      </div>
      <div
        className="separator"
        data-aos="zoom-in-down"
        data-aos-duration="800"
      >
        <div className="separator-line"></div>
        <div className="separator-or">{t("contact.or")}</div>
        <div className="separator-line"></div>
      </div>
      <div className="contact-form-container" data-aos="zoom-in-down">
        <div className="call-to-mail">
          <h1>{t("contact.subtitle")}</h1>
          <p>
            {t("contact.paragraphStart")} <br />
            {t("contact.paragraphEnd")}
          </p>
        </div>
        <ContactForm onOpenSnackbar={handleOpenSnackbar} />
      </div>
    </div>
  );
});
