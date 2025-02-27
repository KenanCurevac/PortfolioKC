import { useEffect } from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import react from "../assets/react.svg";
import cb from "../assets/cb.jpg";

export default function AboutMe() {
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
        Über mich
      </div>
      <div className="section-group direction-reverse">
        <img
          className="topic-image"
          src={cb}
          alt="Photo"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="800"
          style={{ maxHeight: "550px" }}
        />
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="topic-title" style={{ color: "#002E2E" }}>
            Ein paar Worte über mich
          </h1>
          <div className="topic-description" style={{ color: "#002E2E" }}>
            <p style={{ textIndent: "40px" }}>
              Ich bin Kenan Ćurevac, ein 27-jähriger Ingenieur mit einem
              Bachelor-Abschluss in Verkehrsingenieurwesen von der Universität
              in Sarajevo, wo ich auch lebe. Seit meiner Kindheit begleitet mich
              die deutsche Sprache und Kultur, was sich in meinen fließenden
              Deutschkenntnissen widerspiegelt - ich bin mit dem deutschen
              Fernsehen groß geworden!
            </p>
            <p>
              Ich sammelte eineinhalb Jahre Erfahrung im Bereich
              Qualitätssicherung (QA). Diese Zeit hat mir sehr geholfen um ein
              gutes Verständnis für Zuverlässigkeit und Teamarbeit zu
              entwickeln. Ich habe auch eine große Affinität zur Mathematik.
              Schon in der Schule habe ich an Mathematikwettbewerben
              teilgenommen und Freude am analytischem Denken entwickelt.
            </p>
            <p>
              Ich lege großen Wert auf detailgenaue Arbeit und bin ein
              lösungsorientierter Teamplayer. Ich bin motiviert, mich
              kontinuierlich weiterzuentwickeln und in meinem Berufsleben stetig
              zu lernen und zu wachsen. Lernen wir uns kennen und schauen Sie
              sich meine Projekte an - ich freue mich auf Ihre Nachricht!
            </p>
          </div>
        </div>
      </div>
      <div className="section-group direction-reverse">
        <img
          className="topic-image"
          src={react}
          alt="React"
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
            Frontend-Kenntnisse
          </h1>
          <p
            className="topic-description"
            style={{ color: "#002E2E", fontSize: "24px" }}
          >
            Javascript, React.js, TypeScript, MaterialUI, GitHub
          </p>
        </div>
      </div>
    </div>
  );
}
