import React from "react";
import Laptop from "../assets/laptop.jpg";
import "./Analytics.css"; // Import your CSS file

function Analytics() {
  return (
    <div className="analytics-container">
      <div className="analytics-content">
        <img className="analytics-image" src={Laptop} alt="Laptop" />
        <div className="analytics-text-content">
          <p className="analytics-subtitle">DATA ANALYTICS DASHBOARD</p>
          <h1 className="analytics-title">Manage Data Analytics Centrally</h1>
          <p className="analytics-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="analytics-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
