import "./Hero.css";
import Navbar from "./Navbar";
import "aos/dist/aos.css";

export default function Hero(props) {
  return (
    <div className="hero-container">
      <Navbar {...props} />
      <div className="hero-content" data-aos="fade-up" data-aos-duration="1200">
        <p className="hero-pretitle">FRONTEND SOFTWARE ENTWICKLER</p>
        <h1 className="hero-title" data-aos="zoom-in">
          Hallo, ich bin{" "}
          <span
            style={{
              color: "#00df9a",
            }}
          >
            Kenan Ćurevac.
          </span>
        </h1>
        <p className="hero-description">
          Mit Leidenschaft für Frontend-Entwicklung, entwickle ich
          benutzerfreundliche Anwendungen und freue mich auf die Zusammenarbeit
          mit einem motivierten Team.
        </p>
      </div>
    </div>
  );
}
