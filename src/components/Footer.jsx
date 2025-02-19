import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <h1 className="footer-title">REACT.</h1>
          <p className="footer-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="footer-social-icons">
            <FaFacebookSquare size={30} className="footer-social-icon" />
            <FaInstagram size={30} className="footer-social-icon" />
            <FaTwitterSquare size={30} className="footer-social-icon" />
            <FaGithubSquare size={30} className="footer-social-icon" />
            <FaDribbbleSquare size={30} className="footer-social-icon" />
          </div>
        </div>
        <div className="footer-links-container">
          {" "}
          {/* Container for the links */}
          <div className="footer-links">
            <h6 className="footer-link-title">Solutions</h6>
            <ul className="footer-link-list">
              <li className="footer-link-item">Analytics</li>
              <li className="footer-link-item">Marketing</li>
              <li className="footer-link-item">Commerce</li>
              <li className="footer-link-item">Insights</li>
            </ul>
          </div>
          <div className="footer-links">
            <h6 className="footer-link-title">Support</h6>
            <ul className="footer-link-list">
              <li className="footer-link-item">Pricing</li>
              <li className="footer-link-item">Documentation</li>
              <li className="footer-link-item">Guides</li>
              <li className="footer-link-item">API Status</li>
            </ul>
          </div>
          <div className="footer-links">
            <h6 className="footer-link-title">Company</h6>
            <ul className="footer-link-list">
              <li className="footer-link-item">About</li>
              <li className="footer-link-item">Blog</li>
              <li className="footer-link-item">Jobs</li>
              <li className="footer-link-item">Press</li>
              <li className="footer-link-item">Careers</li>
            </ul>
          </div>
          <div className="footer-links">
            <h6 className="footer-link-title">Legal</h6>
            <ul className="footer-link-list">
              <li className="footer-link-item">Claim</li>
              <li className="footer-link-item">Policy</li>
              <li className="footer-link-item">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
