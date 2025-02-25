import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

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
  });

  const formRef = useRef();

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

  function handleOpenSnackbar(message) {
    setSnackbarState({ open: true, message: message });
  }

  function handleCloseSnackbar(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarState({
      open: false,
      message: "",
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
      .then(() => handleOpenSnackbar("Message sent successfully!"))
      .catch(() =>
        handleOpenSnackbar("Failed to send message, please try again.")
      );

    setFormData({ user_name: "", user_email: "", message: "" });
  }

  return (
    <div className="analytics-container">
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarState.message}
      />

      <div className="title" style={{ color: "#00df9a" }}>
        Kontakt
      </div>
      <div className="inner-content">
        <div className="contact-title">
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
          <div className="email-inputs">
            <div className="email-input">
              <InputLabel htmlFor="name">Dein Name</InputLabel>
              <TextField
                id="name"
                name="user_name"
                variant="filled"
                value={formData.user_name}
                onInput={handleForm}
                helperText={
                  error.user_name && touched.user_name
                    ? "Please enter your name"
                    : ""
                }
                required
                error={error.user_name && touched.user_name}
                onBlur={handleBlur}
              />
            </div>
            <div className="email-input">
              <InputLabel htmlFor="email">E-mail Adresse</InputLabel>
              <TextField
                id="email"
                type="email"
                name="user_email"
                variant="filled"
                value={formData.user_email}
                onInput={handleForm}
                helperText={
                  error.user_email && touched.user_email
                    ? "Please enter a correct e-mail"
                    : ""
                }
                required
                error={error.user_email && touched.user_email}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <InputLabel htmlFor="textfield">Deine Nachricht</InputLabel>
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
                error.message && touched.message ? "Please write a message" : ""
              }
              required
              error={error.message && touched.message}
              onBlur={handleBlur}
            />
          </div>

          <button
            className="sauce-button"
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

      <div className="analytics-content"></div>
    </div>
  );
}
