import "./ContactForm.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const formRef = useRef();

  const buttonIsDisabled =
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
      .then(() => {
        onOpenSnackbar(t("contact.snackbar.success"), "success");
      })
      .catch(() => onOpenSnackbar(t("contact.snackbar.error"), "error"));

    setFormData({ user_name: "", user_email: "", message: "" });
    setTouched({
      user_name: false,
      user_email: false,
      message: false,
    });
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
      <div className="email-input-container">
        <div className="email-input">
          <InputLabel htmlFor="name">{t("contact.formLabel.name")}</InputLabel>
          <TextField
            id="name"
            name="user_name"
            variant="filled"
            value={formData.user_name}
            onInput={handleForm}
            helperText={
              warning.user_name && touched.user_name
                ? t("contact.errorMessage.name")
                : ""
            }
            required
            error={warning.user_name && touched.user_name}
            onBlur={handleBlur}
            color="success"
            title={t("contact.tooltip.name")}
          />
        </div>
        <div className="email-input">
          <InputLabel htmlFor="email">
            {t("contact.formLabel.email")}
          </InputLabel>
          <TextField
            id="email"
            type="email"
            name="user_email"
            variant="filled"
            value={formData.user_email}
            onInput={handleForm}
            helperText={
              warning.user_email && touched.user_email
                ? t("contact.errorMessage.email")
                : ""
            }
            required
            error={warning.user_email && touched.user_email}
            onBlur={handleBlur}
            color="success"
            title={t("contact.tooltip.email")}
          />
        </div>
      </div>
      <div>
        <InputLabel htmlFor="textfield">
          {t("contact.formLabel.message")}
        </InputLabel>
        <TextField
          id="textfield"
          name="message"
          placeholder={t("contact.placeholder")}
          multiline
          rows={3}
          variant="filled"
          value={formData.message}
          onInput={handleForm}
          helperText={
            warning.message && touched.message
              ? t("contact.errorMessage.message")
              : ""
          }
          required
          error={warning.message && touched.message}
          onBlur={handleBlur}
          color="success"
          title={t("contact.tooltip.message")}
        />
      </div>
      <div style={{ margin: "auto" }}>
        <button
          className="send-email-button"
          type="submit"
          disabled={buttonIsDisabled}
        >
          {t("contact.submitButton")}
        </button>
      </div>
    </form>
  );
}
