import React from "react";
import logoDark from "../../img/logo-dark.svg";
import "./Navbar.css";

const navbar = () => {

  const onClick = () => {
    window.location.href = "./assets/downloads/hanyafifi-cv-en.pdf";
  };

  return (
    <div className="container">
      <div className="navbar-wrapper">
        <div className="nav-branding">
          <img src={logoDark} alt="hanyafifi.dev dark theme logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li className="current">Home</li>
            <li>Portfolio</li>
            <li>ًWork</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-buttons">
          <button onClick={onClick} className="btn-cv">Download CV</button>
          <span className="btn-dark-light">Toggle</span>
        </div>
      </div>
    </div>
  );
};

export default navbar;
