import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards-container">
      <div className="cards-content">
        <div className="card">
          <img className="card-image" src={Single} alt="Single User" />
          <h2 className="card-title">Single User</h2>
          <p className="card-price">$149</p>
          <div className="card-features">
            <p className="card-feature">500 GB Storage</p>
            <p className="card-feature">1 Granted User</p>
            <p className="card-feature">Send up to 2 GB</p>
          </div>
          <button className="card-button">Start Trial</button>
        </div>
        <div className="card card-highlighted">
          {" "}
          {/* Added a class for highlighted card */}
          <img className="card-image" src={Double} alt="Double User" />
          <h2 className="card-title">Double User</h2> {/* Corrected title */}
          <p className="card-price">$299</p> {/* Example corrected price */}
          <div className="card-features">
            <p className="card-feature">1 TB Storage</p>{" "}
            {/* Example corrected feature */}
            <p className="card-feature">2 Granted Users</p>{" "}
            {/* Example corrected feature */}
            <p className="card-feature">Send up to 5 GB</p>{" "}
            {/* Example corrected feature */}
          </div>
          <button className="card-button card-button-highlighted">
            Start Trial
          </button>{" "}
          {/* Added a class for highlighted button */}
        </div>
        <div className="card">
          <img className="card-image" src={Triple} alt="Triple User" />
          <h2 className="card-title">Triple User</h2> {/* Corrected title */}
          <p className="card-price">$449</p> {/* Example corrected price */}
          <div className="card-features">
            <p className="card-feature">2 TB Storage</p>{" "}
            {/* Example corrected feature */}
            <p className="card-feature">3 Granted Users</p>{" "}
            {/* Example corrected feature */}
            <p className="card-feature">Send up to 10 GB</p>{" "}
            {/* Example corrected feature */}
          </div>
          <button className="card-button">Start Trial</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
