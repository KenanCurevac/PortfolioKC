import "./Sections.css";
import { forwardRef } from "react";
import quizapp from "../../assets/quizapp.png";
import moviedb from "../../assets/moviedb.png";
import { useTranslation } from "react-i18next";
import { Fade, Zoom } from "react-awesome-reveal";

export default forwardRef(function Projects(_, ref) {
  const { t } = useTranslation();

  function openProject(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="green-bg" ref={ref}>
      <Zoom triggerOnce delay={200}>
        <div className="section-title">{t("projects.title")}</div>
      </Zoom>
      <div className="section-group early-direction-reverse">
        <Zoom delay={600} duration={1400} triggerOnce>
          <div className="topic-container">
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
        </Zoom>
        <Fade direction="right" delay={800} duration={1400} triggerOnce>
          <img className="topic-image" src={quizapp} alt="Quiz-App" />
        </Fade>
      </div>
      <div className="section-group early-direction-reverse">
        <Zoom delay={600} duration={1400} triggerOnce>
          <div className="topic-container">
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
        </Zoom>
        <Fade direction="right" delay={800} duration={1400} triggerOnce>
          <img className="topic-image" src={moviedb} alt="Movie Database" />
        </Fade>
      </div>
    </div>
  );
});
