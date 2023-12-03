import "./WorkedCardStyle.css";
import pro2 from "../asset/pro2.png";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkedCard = (props) => {
  const { imgSrc, title, view, text } = props;
  return (
    <div className="project-card">
      <img src={imgSrc}></img>
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <NavLink to={view} className="btn">
            View
          </NavLink>
          <NavLink to={view} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkedCard;
