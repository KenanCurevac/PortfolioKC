import "./Sections.css";
import { forwardRef } from "react";
import quizapp from "../../assets/quizapp.png";
import moviedb from "../../assets/moviedb.png";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default forwardRef(function Projects(_, ref) {
  const { t } = useTranslation();

  function openProject(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="green-bg" ref={ref}>
      <div className="section-title" data-aos="zoom-in">
        {t("projects.title")}
      </div>
      <div className="section-group early-direction-reverse">
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="topic-title" style={{ color: "#00df9a" }}>
            Quiz-App
          </h1>
          <p className="topic-description">
            {t("projects.section1.paragraph1")}
          </p>
          <p className="topic-description">
            {t("projects.section1.paragraph2")}
          </p>
          <button
            className="project-button"
            onClick={() => openProject("https://quiz-app-kenan.vercel.app/")}
          >
            {t("projects.button")}
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
          data-aos-delay="200"
        >
          <h1 className="topic-title" style={{ color: "#00df9a" }}>
            Film Atlas
          </h1>
          <p className="topic-description">
            {t("projects.section2.paragraph1")}
          </p>
          <p className="topic-description">
            {t("projects.section2.paragraph2")}
          </p>
          <p className="topic-description">
            {t("projects.section2.paragraph3")}
          </p>
          <button
            className="project-button"
            onClick={() => openProject("https://movie-db-kenan.vercel.app/")}
          >
            {t("projects.button")}
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
