import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import logo from "../../assets/logo.png";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

export default function Footer() {
  return (
    <div className="footer--container">
        <div className="blur blur-f"></div>
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={insta} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
