import "./Sections.css";
import { forwardRef } from "react";
import bloola from "../../assets/bloola.png";
import ccc from "../../assets/ccc.jpg";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default forwardRef(function Career(_, ref) {
  const { t } = useTranslation();

  return (
    <div className="white-bg" ref={ref}>
      <div className="section-title long-title" data-aos="zoom-in">
        {t("career.title")}
      </div>
      <div className="section-group direction-reverse">
        <img
          className="topic-image"
          src={bloola}
          alt="Bloola GmbH"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="800"
        />
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="topic-title"> {t("career.section1.subtitle")}</h1>
          <p className="topic-description">{t("career.section1.paragraph")}</p>
        </div>
      </div>
      <div className="section-group direction-reverse">
        <img
          className="topic-image"
          src={ccc}
          alt="CCC Call Center"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="800"
        />
        <div
          className="topic-container"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="topic-title">{t("career.section2.subtitle")}</h1>
          <p className="topic-description">{t("career.section2.paragraph")}</p>
        </div>
      </div>
    </div>
  );
});
