import React, { useEffect } from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import goethe from "../assets/goethe.png";
import university from "../assets/univerzitet.png";

export default function Education() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="analytics-container"
      style={{ backgroundColor: "#001F1F", color: "white" }}
    >
      <div
        className="title"
        style={{ color: "#00df9a" }}
        data-aos="zoom-in"
        data-aos-duration="600"
      >
        Bildung
      </div>
      <div className="analytics-content">
        <div
          className="analytics-text-content"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="analytics-title" style={{ color: "#00df9a" }}>
            Studium
          </h1>
          <p className="analytics-description">
            Ich habe einen Bachelor-Abschluss in Verkehrsingenieurwesen von der
            Universität in Sarajevo, Bosnien-Herzegowina, mit dem Schwerpunkt
            Straßenverkehr.
          </p>
        </div>
        <img
          className="analytics-image"
          src={university}
          alt="University of Sarajevo"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="800"
        />
      </div>
      <div className="analytics-content">
        <div
          className="analytics-text-content"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="analytics-title" style={{ color: "#00df9a" }}>
            Sprachen
          </h1>
          <p className="analytics-description">
            Ich verfüge über ein C1-Zertifikat des Goethe-Instituts für Deutsch.
            Zudem spreche ich fließend Englisch (C1-Niveau).
          </p>
        </div>
        <div
          style={{
            width: "35vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="goethe-image"
            src={goethe}
            alt="Goethe-Institut"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          />
        </div>
      </div>
    </div>
  );
}
