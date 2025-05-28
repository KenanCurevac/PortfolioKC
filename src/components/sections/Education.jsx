import "./Sections.css";
import { forwardRef } from "react";
import goethe from "../../assets/goethe.png";
import university from "../../assets/univerzitet.png";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default forwardRef(function Education(_, ref) {
  const { t } = useTranslation();

  return (
    <div className="green-bg" ref={ref}>
      <div className="section-title" data-aos="zoom-in">
        {t("education.title")}
      </div>
      <div className="section-group">
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="topic-title" style={{ color: "#00df9a" }}>
            {t("education.section1.subtitle")}
          </h1>
          <p className="topic-description">
            {t("education.section1.paragraph")}
          </p>
        </div>
        <img
          className="topic-image"
          src={university}
          alt="University of Sarajevo"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="800"
        />
      </div>
      <div className="section-group">
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="topic-title" style={{ color: "#00df9a" }}>
            {t("education.section2.subtitle")}
          </h1>
          <p className="topic-description">
            {t("education.section2.paragraph")}
          </p>
        </div>
        <div className="square-image-container">
          <img
            className="square-image"
            src={goethe}
            alt="Goethe-Institut"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          />
        </div>
      </div>
    </div>
  );
});
