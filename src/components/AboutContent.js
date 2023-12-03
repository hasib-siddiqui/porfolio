import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React1 from "../asset/react1.jpg";
import React2 from "../asset/react2.webp";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react front-end developer. I create responsive secure website for
          my clint
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
