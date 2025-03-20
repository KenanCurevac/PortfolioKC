import "./Sections.css";
import { forwardRef } from "react";
import bloola from "../../assets/bloola.png";
import ccc from "../../assets/ccc.jpg";

export default forwardRef(function Career(_, ref) {
  return (
    <div className="white-bg" ref={ref}>
      <div className="section-title long-title">Berufserfahrung</div>
      <div className="section-group direction-reverse">
        <img className="topic-image" src={bloola} alt="Bloola GmbH" />
        <div className="topic-container">
          <h1 className="topic-title">QA bei Bloola GmbH</h1>
          <p className="topic-description">
            Als QA bei der deutschen Firma Bloola GmbH war ich für die
            Durchführung manueller Tests einer Web-App zuständig. Sowohl die
            Kommunikation mit internationalen Kollegen als auch die
            Testdokumentation erfolgten auf Englisch.
          </p>
        </div>
      </div>
      <div className="section-group direction-reverse">
        <img className="topic-image" src={ccc} alt="CCC Call Center" />
        <div className="topic-container">
          <h1 className="topic-title">Tätigkeit als Call Agent</h1>
          <p className="topic-description">
            Als Call Agent in einem Call Center konnte ich meine Fähigkeiten im
            Bereich Kommunikation, Empathie und Verkauf deutlich ausbauen. Dabei
            war ich für die Betreuung und Beratung deutscher Kunden sowie für
            den Abschluss von Strom-, Gas-, Internet- und Telefonverträgen
            zuständig.
          </p>
        </div>
      </div>
    </div>
  );
});
