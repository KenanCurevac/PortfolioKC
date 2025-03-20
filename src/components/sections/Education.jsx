import "./Sections.css";
import { forwardRef } from "react";
import goethe from "../../assets/goethe.png";
import university from "../../assets/univerzitet.png";

export default forwardRef(function Education(_, ref) {
  return (
    <div className="green-bg" ref={ref}>
      <div className="section-title">Bildung</div>
      <div className="section-group">
        <div className="topic-container">
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
        />
      </div>
      <div className="section-group">
        <div className="topic-container">
          <h1 className="topic-title" style={{ color: "#00df9a" }}>
            Sprachen
          </h1>
          <p className="topic-description">
            Ich verfüge über ein C1-Zertifikat des Goethe-Instituts für Deutsch.
            Zudem spreche ich fließend Englisch (C1-Niveau).
          </p>
        </div>
        <div className="square-image-container">
          <img className="square-image" src={goethe} alt="Goethe-Institut" />
        </div>
      </div>
    </div>
  );
});
