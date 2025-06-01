import "./Hero.css";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import { Fade, Zoom } from "react-awesome-reveal";

export default function Hero(props) {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <Navbar {...props} />
      <div className="hero-content">
        <div className="upper-group">
          <Fade triggerOnce direction="up">
            <p className="hero-pretitle">{t("hero.subtitle")}</p>{" "}
          </Fade>
          <Zoom triggerOnce>
            <h1 className="hero-title">
              {t("hero.title")}{" "}
              <span
                style={{
                  color: "#00df9a",
                }}
              >
                Kenan Ćurevac.
              </span>
            </h1>{" "}
          </Zoom>
        </div>
        <Fade triggerOnce direction="up" delay={200}>
          <p className="hero-description">{t("hero.paragraph")}</p>
        </Fade>
      </div>
    </div>
  );
}
