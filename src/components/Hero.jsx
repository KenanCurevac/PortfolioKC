import "./Hero.css";
import React from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-subtitle">GROWING WITH DATA ANALYTICS</p>
        <h1 className="hero-title">Grow with data.</h1>
        <div className="hero-typed-container">
          <p className="hero-description">Fast, flexible financing for</p>
          <ReactTyped
            className="hero-typed-text"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="hero-info">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
}
