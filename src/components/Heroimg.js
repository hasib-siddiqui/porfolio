import "./heroimgstyle.css";
import introimg from "../asset/intro-bg.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={introimg}></img>
      </div>
      <div className="content">
        <p>Hi,I'M A Web-Devloper</p>
        <h1>React Devloper</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>

          <Link to="/Contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
