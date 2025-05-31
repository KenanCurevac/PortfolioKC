import "./Sections.css";
import { forwardRef } from "react";
import bloola from "../../assets/bloola.png";
import ccc from "../../assets/ccc.jpg";
import { useTranslation } from "react-i18next";
import { Fade, Zoom } from "react-awesome-reveal";

export default forwardRef(function Career(_, ref) {
  const { t } = useTranslation();

  return (
    <div className="white-bg" ref={ref}>
      <Zoom triggerOnce delay={200}>
        <div className="section-title long-title">{t("career.title")}</div>
      </Zoom>
      <div className="section-group direction-reverse">
        <Fade direction="left" delay={800} duration={1400} triggerOnce>
          <img className="topic-image" src={bloola} alt="Bloola GmbH" />{" "}
        </Fade>
        <Zoom delay={600} duration={1400} triggerOnce>
          <div className="topic-container">
            <h1 className="topic-title"> {t("career.section1.subtitle")}</h1>
            <p className="topic-description">
              {t("career.section1.paragraph")}
            </p>
          </div>
        </Zoom>
      </div>
      <div className="section-group direction-reverse">
        <Fade direction="left" delay={800} duration={1400} triggerOnce>
          <img className="topic-image" src={ccc} alt="CCC Call Center" />{" "}
        </Fade>
        <Zoom delay={600} duration={1400} triggerOnce>
          <div className="topic-container">
            <h1 className="topic-title">{t("career.section2.subtitle")}</h1>
            <p className="topic-description">
              {t("career.section2.paragraph")}
            </p>
          </div>{" "}
        </Zoom>
      </div>
    </div>
  );
});
