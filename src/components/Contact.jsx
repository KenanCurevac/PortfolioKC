import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [error, setError] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });
  const [touched, setTouched] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const formRef = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  function handleForm(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));

    if (event.target.value.trim().length > 0 && event.target.validity.valid) {
      setError((prevError) => ({
        ...prevError,
        [event.target.name]: false,
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        [event.target.name]: true,
      }));
    }
  }

  function handleBlur(event) {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [event.target.name]: true,
    }));
  }

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

  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_x7yhy59",
        "template_fzo6gtm",
        formRef.current,
        "Lg4RZhibkuSe1v_fb"
      )
      .then(() =>
        handleOpenSnackbar("Nachricht erfolgreich gesendet!", "success")
      )
      .catch(() =>
        handleOpenSnackbar(
          "Nachricht konnte nicht gesendet werden, bitte versuche es erneut.",
          "error"
        )
      );

    setFormData({ user_name: "", user_email: "", message: "" });
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

      <div
        className="contact-title"
        style={{ color: "#00df9a" }}
        data-aos="zoom-in"
        data-aos-duration="600"
      >
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

        <form
          className="contact-form"
          id="home-contact"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <div className="email-input-container">
            <div className="email-input">
              <InputLabel
                htmlFor="name"
                style={{
                  color: "#002e2e",
                }}
              >
                Dein Name
              </InputLabel>
              <TextField
                id="name"
                name="user_name"
                variant="filled"
                value={formData.user_name}
                onInput={handleForm}
                helperText={
                  error.user_name && touched.user_name
                    ? "Bitte geben Sie Ihren Namen ein"
                    : ""
                }
                required
                error={error.user_name && touched.user_name}
                onBlur={handleBlur}
                color="success"
              />
            </div>
            <div className="email-input">
              <InputLabel
                htmlFor="email"
                style={{
                  color: "#002e2e",
                }}
              >
                E-mail Adresse
              </InputLabel>
              <TextField
                id="email"
                type="email"
                name="user_email"
                variant="filled"
                value={formData.user_email}
                onInput={handleForm}
                helperText={
                  error.user_email && touched.user_email
                    ? "Bitte geben Sie eine gültige E-Mail-Adresse ein"
                    : ""
                }
                required
                error={error.user_email && touched.user_email}
                onBlur={handleBlur}
                color="success"
              />
            </div>
          </div>

          <div>
            <InputLabel
              htmlFor="textfield"
              style={{
                color: "#002e2e",
              }}
            >
              Deine Nachricht
            </InputLabel>
            <TextField
              id="textfield"
              name="message"
              placeholder="Hallo, lass uns über eine mögliche Zusammenarbeit sprechen!"
              multiline
              rows={3}
              variant="filled"
              value={formData.message}
              onInput={handleForm}
              helperText={
                error.message && touched.message
                  ? "Bitte schreiben Sie eine Nachricht"
                  : ""
              }
              required
              error={error.message && touched.message}
              onBlur={handleBlur}
              color="success"
            />
          </div>

          <button
            className="send-email-button"
            type="submit"
            id="submit-button"
            disabled={
              Object.values(error).includes(true) ||
              Object.values(formData).some((value) => value.trim() === "")
            }
          >
            Senden
          </button>
        </form>
      </div>
    </div>
  );
}
