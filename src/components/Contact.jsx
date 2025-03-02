import "./Contact.css";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
    severity: "",
  });

  useEffect(() => {
    AOS.init();
  }, []);

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
    <div className="contact-container">
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
        Kontakt
      </div>
      <div
        className="icons-container"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <LinkedInIcon className="icon" />
        <a href="https://github.com/KenanCurevac" target="_blank">
          <GitHubIcon className="icon" />
        </a>
      </div>
      <div className="separator" data-aos="fade-up" data-aos-duration="600">
        <div className="separator-line"></div>
        <div className="separator-or">oder</div>
        <div className="separator-line"></div>
      </div>
      <div
        className="contact-form-container"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="call-to-mail">
          <h1>Schreib mir eine Nachricht!</h1>
          <p>
            Hast du eine Frage oder ein Angebot oder möchtest du einfach <br />
            Hallo sagen?
          </p>
        </div>
        <ContactForm onOpenSnackbar={handleOpenSnackbar} />
      </div>
    </div>
  );
}
