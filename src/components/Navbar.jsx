import "./Navbar.css";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">REACT.</h1>
      <ul className="navbar-links">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Company</li>
        <li className="navbar-item">Resources</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Contact</li>
      </ul>
      <div onClick={handleNav} className="navbar-menu-icon">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? "navbar-mobile-menu active" : "navbar-mobile-menu"}>
        <h1 className="navbar-title-mobile">REACT.</h1>
        <li className="navbar-item-mobile">Home</li>
        <li className="navbar-item-mobile">Company</li>
        <li className="navbar-item-mobile">Resources</li>
        <li className="navbar-item-mobile">About</li>
        <li className="navbar-item-mobile">Contact</li>
      </ul>
    </div>
  );
}
