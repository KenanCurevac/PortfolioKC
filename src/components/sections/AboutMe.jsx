import "./Sections.css";
import { forwardRef } from "react";
import react from "../../assets/react.svg";
import cvPicture from "../../assets/cv-picture.png";
import "aos/dist/aos.css";

export default forwardRef(function AboutMe(_, ref) {
  return (
    <div className="white-bg" ref={ref}>
      <div className="section-title" data-aos="zoom-in">
        Über mich
      </div>
      <div className="section-group direction-reverse">
        <img
          className="topic-image"
          src={cvPicture}
          alt="Photo"
          style={{ maxHeight: "550px" }}
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="800"
        />
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="topic-title">Ein paar Worte über mich</h1>
          <div className="topic-description">
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
          data-aos-delay="200"
        >
          <h1 className="topic-title">Frontend-Kenntnisse</h1>
          <p className="topic-description" style={{ fontSize: "24px" }}>
            Javascript, React.js, TypeScript, MaterialUI, GitHub
          </p>
        </div>
      </div>
    </div>
  );
});
