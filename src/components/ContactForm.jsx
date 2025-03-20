import "./ContactForm.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

export default function ContactForm({ onOpenSnackbar }) {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [warning, setWarning] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });
  const [touched, setTouched] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  const formRef = useRef();

  const isButtonDisabled =
    Object.values(warning).includes(true) ||
    Object.values(formData).some((value) => value.trim() === "");

  function handleForm(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));

    if (event.target.value.trim().length > 0 && event.target.validity.valid) {
      setWarning((prevWarning) => ({
        ...prevWarning,
        [event.target.name]: false,
      }));
    } else {
      setWarning((prevWarning) => ({
        ...prevWarning,
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

  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_x7yhy59",
        "template_fzo6gtm",
        formRef.current,
        "Lg4RZhibkuSe1v_fb"
      )
      .then(() => onOpenSnackbar("Nachricht erfolgreich gesendet!", "success"))
      .catch(() =>
        onOpenSnackbar(
          "Nachricht konnte nicht gesendet werden, bitte versuche es erneut.",
          "error"
        )
      );

    setFormData({ user_name: "", user_email: "", message: "" });
    setTouched({
      user_name: false,
      user_email: false,
      message: false,
    });
  }

  return (
    <form
      className="contact-form"
      id="home-contact"
      ref={formRef}
      onSubmit={sendEmail}
    >
      <div className="email-input-container">
        <div className="email-input">
          <InputLabel htmlFor="name">Dein Name</InputLabel>
          <TextField
            id="name"
            name="user_name"
            variant="filled"
            value={formData.user_name}
            onInput={handleForm}
            helperText={
              warning.user_name && touched.user_name
                ? "Bitte geben Sie Ihren Namen ein"
                : ""
            }
            required
            error={warning.user_name && touched.user_name}
            onBlur={handleBlur}
            color="success"
            title="Bitte geben Sie Ihren Namen ein"
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
              warning.user_email && touched.user_email
                ? "Bitte geben Sie eine gültige E-Mail-Adresse ein"
                : ""
            }
            required
            error={warning.user_email && touched.user_email}
            onBlur={handleBlur}
            color="success"
            title="Bitte geben Sie eine gültige E-Mail-Adresse ein"
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
            warning.message && touched.message
              ? "Bitte schreiben Sie eine Nachricht"
              : ""
          }
          required
          error={warning.message && touched.message}
          onBlur={handleBlur}
          color="success"
          title="Bitte schreiben Sie eine Nachricht"
        />
      </div>
      <div style={{ margin: "auto" }}>
        <button
          className="send-email-button"
          type="submit"
          id="submit-button"
          disabled={isButtonDisabled}
        >
          Senden
        </button>
      </div>
    </form>
  );
}
