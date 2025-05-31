import "./Contact.css";
import { forwardRef, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";
import { Zoom, Fade } from "react-awesome-reveal";

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

      <Zoom delay={200} triggerOnce>
        <div className="contact-title">{t("contact.title")}</div>
      </Zoom>
      <Fade direction="down" delay={400} duration={1400} triggerOnce>
        <div className="icons-container">
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
      </Fade>
      <Fade direction="down" delay={400} duration={1400} triggerOnce>
        <div className="separator">
          <div className="separator-line"></div>
          <div className="separator-or">{t("contact.or")}</div>
          <div className="separator-line"></div>
        </div>
      </Fade>
      <Fade direction="down" delay={400} duration={1200} triggerOnce>
        <div className="contact-form-container">
          <div className="call-to-mail">
            <h1>{t("contact.subtitle")}</h1>
            <p>
              {t("contact.paragraphStart")} <br />
              {t("contact.paragraphEnd")}
            </p>
          </div>
          <ContactForm onOpenSnackbar={handleOpenSnackbar} />
        </div>
      </Fade>
    </div>
  );
});
