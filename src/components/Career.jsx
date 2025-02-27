import { useEffect } from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import bloola from "../assets/bloola.png";
import ccc from "../assets/ccc.jpg";

export default function Career() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="section-container">
      <div
        className="section-title"
        style={{ color: "#00df9a" }}
        data-aos="zoom-in"
        data-aos-duration="600"
      >
        Berufserfahrung
      </div>
      <div className="section-group direction-reverse">
        <img
          className="topic-image"
          src={bloola}
          alt="Bloola GmbH"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="800"
        />
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="topic-title" style={{ color: "#002E2E" }}>
            QA bei Bloola GmbH
          </h1>
          <div className="topic-description" style={{ color: "#002E2E" }}>
            <p>
              Als QA bei der deutschen Firma Bloola GmbH war ich für die
              Durchführung manueller Tests einer Web-App zuständig. Sowohl die
              Kommunikation mit internationalen Kollegen als auch die
              Testdokumentation erfolgten auf Englisch.
            </p>
          </div>
        </div>
      </div>
      <div className="section-group direction-reverse">
        <img
          className="topic-image"
          src={ccc}
          alt="CCC Call Center"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="800"
        />
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="topic-title" style={{ color: "#002E2E" }}>
            Tätigkeit als Call Agent
          </h1>
          <p className="topic-description" style={{ color: "#002E2E" }}>
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
}
