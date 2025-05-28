import "./Sections.css";
import { forwardRef } from "react";
import react from "../../assets/react.svg";
import cvPicture from "../../assets/cv-picture.png";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default forwardRef(function AboutMe(_, ref) {
  const { t } = useTranslation();

  return (
    <div className="white-bg" ref={ref}>
      <div className="section-title" data-aos="zoom-in">
        {t("about.title")}
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
          <h1 className="topic-title">{t("about.section1.subtitle")}</h1>
          <div className="topic-description">
            <p style={{ textIndent: "40px" }}>
              {t("about.section1.paragraph1")}
            </p>
            <p>{t("about.section1.paragraph2")}</p>
            <p>{t("about.section1.paragraph3")}</p>
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
          <h1 className="topic-title">{t("about.section2.subtitle")}</h1>
          <p className="topic-description" style={{ fontSize: "24px" }}>
            Javascript, React.js, TypeScript, GitHub, Redux Toolkit, SCSS,
            MaterialUI
          </p>
        </div>
      </div>
    </div>
  );
});
