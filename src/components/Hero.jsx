import "./Hero.css";
import Navbar from "./Navbar";
import "aos/dist/aos.css";

export default function Hero(props) {
  return (
    <div className="hero-container">
      <Navbar {...props} />
      <div className="hero-content">
        <div className="upper-group">
          <p className="hero-pretitle" data-aos="fade-up">
            FRONTEND SOFTWARE ENTWICKLER
          </p>
          <h1 className="hero-title" data-aos="zoom-in" data-aos-duration="600">
            Hallo, ich bin{" "}
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
          Mit Leidenschaft für Frontend-Entwicklung, entwickle ich
          benutzerfreundliche Anwendungen und freue mich auf die Zusammenarbeit
          mit einem motivierten Team.
        </p>
      </div>
    </div>
  );
}
