import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-text-content">
          <h1 className="newsletter-title">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="newsletter-description">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="newsletter-form-container">
          <div className="newsletter-form">
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter Email"
            />
            <button className="newsletter-button">Notify Me</button>
          </div>
          <p className="newsletter-privacy">
            We care about the protection of your data. Read our{" "}
            <span className="newsletter-privacy-link">Privacy Policy.</span>
          </p>
        </div>
      </div>{" "}
      {/* Correctly closing newsletter-content */}
    </div>
  );
}

export default Newsletter;
