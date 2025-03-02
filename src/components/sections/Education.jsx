import "./Sections.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import goethe from "../../assets/goethe.png";
import university from "../../assets/univerzitet.png";

export default function Education() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="green-bg">
      <div className="section-title" data-aos="zoom-in" data-aos-duration="600">
        Bildung
      </div>
      <div className="section-group">
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="topic-title" style={{ color: "#00df9a" }}>
            Studium
          </h1>
          <p className="topic-description">
            Ich habe einen Bachelor-Abschluss in Verkehrsingenieurwesen von der
            Universität in Sarajevo, Bosnien-Herzegowina, mit dem Schwerpunkt
            Straßenverkehr.
          </p>
        </div>
        <img
          className="topic-image"
          src={university}
          alt="University of Sarajevo"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="800"
        />
      </div>
      <div className="section-group">
        <div
          className="topic-content"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="topic-title" style={{ color: "#00df9a" }}>
            Sprachen
          </h1>
          <p className="topic-description">
            Ich verfüge über ein C1-Zertifikat des Goethe-Instituts für Deutsch.
            Zudem spreche ich fließend Englisch (C1-Niveau).
          </p>
        </div>
        <div className="square-image-container">
          <img
            className="square-image"
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
