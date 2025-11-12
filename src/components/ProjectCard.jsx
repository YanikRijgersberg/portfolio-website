import React from "react";
import "../css/App.css";

const ProjectCard = ({ title, description, image, github, demo }) => {
  return (
    <div className="Pcard">
      <img src={image} alt={title} className="Pimg" />
      <div className="Pcontent">
        <h3 className="Ptitle">{title}</h3>
        <p className="Pdesc">{description}</p>
        <div className="Pbtns">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="Pbtn"
            >
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="Pbtn"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
