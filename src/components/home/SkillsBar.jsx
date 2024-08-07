import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, description, isScrolled }) {
  return (
    <div style={{ width: "95%", height: "130px" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      />
      <p>{description}</p>
    </div>
  );
}

export default SkillsBar;
