import "./Sections.css";
import { forwardRef } from "react";
import react from "../../assets/react.svg";
import cvPicture from "../../assets/cv-picture.png";
import { useTranslation } from "react-i18next";
import { Fade, Zoom } from "react-awesome-reveal";

export default forwardRef(function AboutMe(_, ref) {
  const { t } = useTranslation();

  return (
    <div className="white-bg" ref={ref}>
      <Zoom triggerOnce delay={200}>
        <div className="section-title">{t("about.title")}</div>
      </Zoom>
      <div className="section-group direction-reverse">
        <Fade direction="left" delay={800} duration={1400} triggerOnce>
          <img
            className="topic-image"
            src={cvPicture}
            alt="Photo"
            style={{ maxHeight: "550px" }}
          />
        </Fade>
        <Zoom delay={600} duration={1400} triggerOnce>
          <div className="topic-container">
            <h1 className="topic-title">{t("about.section1.subtitle")}</h1>
            <div className="topic-description">
              <p style={{ textIndent: "40px" }}>
                {t("about.section1.paragraph1")}
              </p>
              <p>{t("about.section1.paragraph2")}</p>
              <p>{t("about.section1.paragraph3")}</p>
            </div>
          </div>
        </Zoom>
      </div>
      <div className="section-group direction-reverse">
        <Fade direction="left" delay={800} duration={1400} triggerOnce>
          <img className="topic-image" src={react} alt="React" />{" "}
        </Fade>
        <Zoom delay={600} duration={1400} triggerOnce>
          <div className="topic-container">
            <h1 className="topic-title">{t("about.section2.subtitle")}</h1>
            <p className="topic-description" style={{ fontSize: "24px" }}>
              Javascript, React.js, TypeScript, GitHub, Redux Toolkit, SCSS,
              MaterialUI
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
});
