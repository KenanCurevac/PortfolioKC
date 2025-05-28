import "./Hero.css";
import Navbar from "./Navbar";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Hero(props) {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <Navbar {...props} />
      <div className="hero-content">
        <div className="upper-group">
          <p className="hero-pretitle" data-aos="fade-up">
            {t("hero.subtitle")}
          </p>
          <h1 className="hero-title" data-aos="zoom-in" data-aos-duration="600">
            {t("hero.title")}{" "}
            <span
              style={{
                color: "#00df9a",
              }}
            >
              Kenan Ćurevac.
            </span>
          </h1>
        </div>
        <p className="hero-description" data-aos="fade-up">
          {t("hero.paragraph")}
        </p>
      </div>
    </div>
  );
}
