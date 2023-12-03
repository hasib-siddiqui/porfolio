import "./WorkedCardStyle.css";
import WorkedCard from "./WorkedCard";
import WorkedCardData from "./WorkCardData";

import React from "react";

const Work = () => {
  return (
    <div className="worked-container">
      <h1 className="project-heading">Project.</h1>
      <div className="project-container">
        {WorkedCardData.map((val, ind) => {
          return (
            <WorkedCard
              key={ind}
              imgSrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
