import "./Hero.css";
import React from "react";
import { ReactTyped } from "react-typed";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="hero-content">
        <p className="hero-subtitle">FRONTEND SOFTWARE ENTWICKLER</p>
        <h1 className="hero-title">
          Hallo, ich bin{" "}
          <span
            style={{
              color: "#00df9a",
            }}
          >
            Kenan Ćurevac.
          </span>
        </h1>
        <div className="hero-typed-container">
          <p className="hero-description">
            Mit Leidenschaft für Frontend-Entwicklung, entwickle ich
            benutzerfreundliche Anwendungen und freue mich auf die
            Zusammenarbeit mit einem motivierten Team.
          </p>
        </div>
      </div>
    </div>
  );
}
