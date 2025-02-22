import React from "react";
import Laptop from "../assets/laptop.jpg";
import "./Content.css"; // Import your CSS file

export default function Education() {
  return (
    <div
      className="analytics-container"
      style={{ backgroundColor: "#001F1F", color: "white" }}
    >
      <div className="title" style={{ color: "#00df9a" }}>
        Bildung
      </div>
      <div className="analytics-content">
        <div className="analytics-text-content">
          <h1 className="analytics-title" style={{ color: "#00df9a" }}>
            Studium
          </h1>
          <p className="analytics-description">
            Ich habe einen Bachelor-Abschluss in Verkehrsingenieurwesen von der
            Universität in Sarajevo, Bosnien-Herzegowina, mit dem Schwerpunkt
            Straßenverkehr.
          </p>
          {/*<button className="analytics-button">Get Started</button>*/}
        </div>
        <img className="analytics-image" src={Laptop} alt="Laptop" />
      </div>
      <div className="analytics-content">
        <div className="analytics-text-content">
          <h1 className="analytics-title" style={{ color: "#00df9a" }}>
            Sprachen
          </h1>
          <p className="analytics-description">
            Ich verfüge über ein C1-Zertifikat des Goethe-Instituts für Deutsch.
            Zudem spreche ich fließend Englisch (C1-Niveau).
          </p>
        </div>
        <img className="analytics-image" src={Laptop} alt="Laptop" />
      </div>
    </div>
  );
}
