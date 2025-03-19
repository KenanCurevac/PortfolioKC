import "./Sections.css";
import { forwardRef } from "react";
import "aos/dist/aos.css";
import quizapp from "../../assets/quizapp.png";
import moviedb from "../../assets/moviedb.png";

export default forwardRef(function Projects(_, ref) {
  function openProject(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="green-bg" ref={ref}>
      <div className="section-title" data-aos="zoom-in" data-aos-duration="600">
        Projekte
      </div>
      <div className="section-group early-direction-reverse">
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="topic-title" style={{ color: "#00df9a" }}>
            Quiz-App
          </h1>
          <p className="topic-description">
            Quiz-App ist eine interaktive Quiz-Anwendung, die aus 10 Fragen mit
            jeweils vier Antwortmöglichkeiten besteht. Nach Beantwortung aller
            Fragen erhält der Nutzer eine Auswertung seiner Antworten.
          </p>
          <p className="topic-description">
            Technologien: React, TypeScript, Material UI, The Trivia API
          </p>
          <button
            className="project-button"
            onClick={() => openProject("https://quiz-app-kenan.vercel.app/")}
          >
            Zum Projekt
          </button>
        </div>
        <img
          className="topic-image"
          src={quizapp}
          alt="Quiz-App"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="800"
        />
      </div>
      <div className="section-group early-direction-reverse">
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="topic-title" style={{ color: "#00df9a" }}>
            Film Atlas
          </h1>
          <p className="topic-description">
            Film Atlas ist eine umfassende Filmdatenbank, die es Nutzern
            ermöglicht, nach Filmen, Fernsehserien und Personen, die in der
            Film- und Fernsehbranche tätig sind, zu suchen und Informationen
            über diese zu erhalten.
          </p>
          <p className="topic-description">
            Die Datenbank listet nicht nur aktuelle Kinofilme und beliebte
            Serien auf, sondern bietet auch einen Ausblick auf kommende Filme
            (mit Trailern) und Serien sowie eine Übersicht der aktuell im TV
            laufenden Serien. Abgerundet wird das Angebot durch Top-Listen der
            am besten bewerteten Produktionen.
          </p>
          <p className="topic-description">
            Technologien: React, TypeScript, Material UI, The Movie Database API
          </p>
          <button
            className="project-button"
            onClick={() => openProject("https://movie-db-kenan.vercel.app/")}
          >
            Zum Projekt
          </button>
        </div>
        <img
          className="topic-image"
          src={moviedb}
          alt="Movie Database"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="800"
        />
      </div>
    </div>
  );
});
