import "./Sections.css";
import { forwardRef } from "react";
import goethe from "../../assets/goethe.png";
import university from "../../assets/univerzitet.png";
import { useTranslation } from "react-i18next";
import { Fade, Zoom } from "react-awesome-reveal";

export default forwardRef(function Education(_, ref) {
  const { t } = useTranslation();

  return (
    <div className="green-bg" ref={ref}>
      <Zoom triggerOnce delay={200}>
        <div className="section-title">{t("education.title")}</div>
      </Zoom>
      <div className="section-group">
        <Zoom delay={600} duration={1400} triggerOnce>
          <div className="topic-container">
            <h1 className="topic-title" style={{ color: "#00df9a" }}>
              {t("education.section1.subtitle")}
            </h1>
            <p className="topic-description">
              {t("education.section1.paragraph")}
            </p>
          </div>
        </Zoom>
        <Fade direction="right" delay={800} duration={1400} triggerOnce>
          <img
            className="topic-image"
            src={university}
            alt="University of Sarajevo"
          />
        </Fade>
      </div>
      <div className="section-group">
        <Zoom delay={600} duration={1400} triggerOnce>
          <div className="topic-container">
            <h1 className="topic-title" style={{ color: "#00df9a" }}>
              {t("education.section2.subtitle")}
            </h1>
            <p className="topic-description">
              {t("education.section2.paragraph")}
            </p>
          </div>
        </Zoom>
        <Fade direction="right" delay={800} duration={1400} triggerOnce>
          <div className="square-image-container">
            <img className="square-image" src={goethe} alt="Goethe-Institut" />
          </div>
        </Fade>
      </div>
    </div>
  );
});
