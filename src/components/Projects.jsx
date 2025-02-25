import React, { useEffect } from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import quizapp from "../assets/quizapp.png";
import moviedb from "../assets/moviedb.png";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  function openProject(url) {
    window.open(url, "_blank");
  }

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
        Projekte
      </div>
      <div className="analytics-content">
        <div
          className="analytics-text-content"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h1 className="analytics-title" style={{ color: "#00df9a" }}>
            Quiz-App
          </h1>
          <div className="analytics-description">
            <p>
              Quiz-App ist eine interaktive Quiz-Anwendung, die aus 10 Fragen
              mit jeweils vier Antwortmöglichkeiten besteht. Nach Beantwortung
              aller Fragen erhält der Nutzer eine Auswertung seiner Antworten.
            </p>
            <p>Technologien: React, TypeScript, Material UI, The Trivia API</p>
          </div>
          <button
            className="analytics-button"
            onClick={() => openProject("https://quiz-app-kenan.vercel.app/")}
          >
            Zum Projekt
          </button>
        </div>
        <img
          className="analytics-image"
          src={quizapp}
          alt="Quiz-App"
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
            Film Atlas
          </h1>
          <div className="analytics-description">
            <p>
              Film Atlas ist eine umfassende Filmdatenbank, die es Nutzern
              ermöglicht, nach Filmen, Fernsehserien und Personen, die in der
              Film- und Fernsehbranche tätig sind, zu suchen und Informationen
              über diese zu erhalten.
            </p>
            <p>
              Die Datenbank listet nicht nur aktuelle Kinofilme und beliebte
              Serien auf, sondern bietet auch einen Ausblick auf kommende Filme
              (mit Trailern) und Serien sowie eine Übersicht der aktuell im TV
              laufenden Serien bietet. Abgerundet wird das Angebot durch
              Top-Listen der am besten bewerteten Produktionen.
            </p>
            <p>
              Technologien: React, TypeScript, Material UI, The Movie Database
              API
            </p>
          </div>
          <button
            className="analytics-button"
            onClick={() => openProject("https://movie-db-kenan.vercel.app/")}
          >
            Zum Projekt
          </button>
        </div>
        <img
          className="analytics-image"
          src={moviedb}
          alt="Movie Database"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="800"
        />
      </div>
    </div>
  );
}
