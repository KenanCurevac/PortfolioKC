import "./Sections.css";
import { forwardRef } from "react";
import quizapp from "../../assets/quizapp.png";
import moviedb from "../../assets/moviedb.png";
import pintheplace from "../../assets/pin-the-place.png";
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
              Pin the Place
            </h1>
            <p className="topic-description">
              {t("projects.section3.paragraph1")}
            </p>
            <p className="topic-description">
              {t("projects.section3.paragraph2")}
            </p>
            <p className="topic-description" style={{ marginBottom: "0px" }}>
              {t("projects.section3.paragraph3")}
            </p>
            <p className="topic-description">
              {t("projects.section3.paragraph4")}
            </p>
            <div className="button-container">
              <button
                className="project-button fullstack-button"
                onClick={() =>
                  openProject("https://pin-the-place-kenan.vercel.app/")
                }
              >
                {t("projects.button1")}
              </button>
              <button
                className="project-button fullstack-button"
                onClick={() =>
                  openProject("https://github.com/KenanCurevac/PinThePlace")
                }
              >
                Frontend Code
              </button>
              <button
                className="project-button fullstack-button"
                onClick={() =>
                  openProject(
                    "https://github.com/KenanCurevac/PinThePlaceBackend",
                  )
                }
              >
                Backend Code
              </button>
            </div>
          </div>
        </Zoom>
        <Fade direction="right" delay={800} duration={1400} triggerOnce>
          <img
            className="topic-image project-image"
            src={pintheplace}
            alt="Pin the Place"
          />
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
            <div className="button-container">
              <button
                className="project-button frontend-button"
                onClick={() =>
                  openProject("https://film-atlas-kenan.vercel.app/")
                }
              >
                {t("projects.button1")}
              </button>
              <button
                className="project-button frontend-button"
                onClick={() =>
                  openProject("https://github.com/KenanCurevac/MovieDB")
                }
              >
                {t("projects.button2")}
              </button>
            </div>
          </div>
        </Zoom>
        <Fade direction="right" delay={800} duration={1400} triggerOnce>
          <img
            className="topic-image project-image"
            src={moviedb}
            alt="Movie Database"
          />
        </Fade>
      </div>
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
            <p className="topic-description">
              {t("projects.section1.paragraph3")}
            </p>
            <div className="button-container">
              <button
                className="project-button frontend-button"
                onClick={() =>
                  openProject("https://quiz-app-kenan.vercel.app/")
                }
              >
                {t("projects.button1")}
              </button>
              <button
                className="project-button frontend-button"
                onClick={() =>
                  openProject("https://github.com/KenanCurevac/QuizApp")
                }
              >
                {t("projects.button2")}
              </button>
            </div>
          </div>
        </Zoom>
        <Fade direction="right" delay={800} duration={1400} triggerOnce>
          <img
            className="topic-image project-image"
            src={quizapp}
            alt="Quiz-App"
          />
        </Fade>
      </div>
    </div>
  );
});
