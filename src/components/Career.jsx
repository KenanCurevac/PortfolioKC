import Laptop from "../assets/laptop.jpg";
import "./Content.css"; // Import your CSS file

export default function Career() {
  return (
    <div className="analytics-container">
      <div className="title" style={{ color: "#00df9a" }}>
        Berufserfahrung
      </div>
      <div className="analytics-content">
        <img className="analytics-image" src={Laptop} alt="Laptop" />
        <div className="analytics-text-content">
          <h1 className="analytics-title" style={{ color: "#002E2E" }}>
            QA bei Bloola GmbH
          </h1>
          <div className="analytics-description" style={{ color: "#002E2E" }}>
            <p>
              Als QA bei der deutschen Firma Bloola GmbH war ich für die
              Durchführung manueller Tests einer Web-App zuständig. Sowohl die
              Kommunikation mit internationalen Kollegen als auch die
              Testdokumentation erfolgten auf Englisch.
            </p>
          </div>
        </div>
      </div>
      <div className="analytics-content">
        <img className="analytics-image" src={Laptop} alt="Laptop" />
        <div className="analytics-text-content">
          <h1 className="analytics-title" style={{ color: "#002E2E" }}>
            Tätigkeit als Call Agent
          </h1>
          <p className="analytics-description" style={{ color: "#002E2E" }}>
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
