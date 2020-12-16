import React from "react";
import "./card.css";

const ProjectCard = ({
  title,
  projectDesc,
  titleColor = "white",
  subtitleColor = "white",
  completed,
  developerName,
}) => (
  <div className='Container'>
    {completed ? (
      <div className='Top'>
        <div className='TagContainer' style={{ backgroundColor: "#5cb85c" }}>
          <div>Completed</div>
        </div>
      </div>
    ) : (
      <div className='Top'>
        <div className='TagContainer' style={{ backgroundColor: "#00c2c7" }}>
          <div>In Process</div>
        </div>
      </div>
    )}
    {(title || projectDesc) && (
      <div className='Content'>
        <div>
          {title && (
            <h4 className='Title' color={titleColor}>
              {title}
            </h4>
          )}
          {projectDesc && (
            <p className='Subtitle' color={subtitleColor}>
              {projectDesc}
            </p>
          )}
          {developerName && <p className='CTA'>{developerName}</p>}
        </div>
      </div>
    )}
  </div>
);

export default ProjectCard;
