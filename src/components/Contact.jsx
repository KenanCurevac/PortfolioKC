import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Import your CSS file
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const formRef = useRef();

  function handleForm(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_x7yhy59",
        "template_fzo6gtm",
        formRef.current,
        "Lg4RZhibkuSe1v_fb"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message, please try again.");
        }
      );

    setFormData({ user_name: "", user_email: "", message: "" });
  };

  return (
    <div className="analytics-container">
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
                onChange={handleForm}
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
                onChange={handleForm}
              />
            </div>
          </div>

          <div>
            <InputLabel htmlFor="textfield">Deine Nachricht</InputLabel>
            <TextField
              id="textfield"
              name="message"
              placeholder="Hallo, lass uns über mögliche Zusammenarbeit sprechen!"
              multiline
              rows={3}
              variant="filled"
              value={formData.message}
              onChange={handleForm}
            />
          </div>

          <button className="sauce-button" type="submit" id="submit-button">
            Senden
          </button>
        </form>
      </div>

      <div className="analytics-content"></div>
    </div>
  );
}
