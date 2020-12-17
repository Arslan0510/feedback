import React from "react";
import "./card.css";

const ProjectCard = ({
  title,
  projectDesc,
  completed,
  developerName,
  clientName,
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
          <div>Awaiting Feedback</div>
        </div>
      </div>
    )}
    {(title || projectDesc) && (
      <div className='Content'>
        <div style={{ width: 310 }}>
          {title && <h4 className='Title'>{title}</h4>}
          {projectDesc && <p className='Subtitle'>{projectDesc}</p>}
          {developerName && (
            <p className='CTA'>Developer Name: {developerName}</p>
          )}
          {clientName && <p className='CTA'>Client Name: {clientName}</p>}
        </div>
      </div>
    )}
  </div>
);

export default ProjectCard;
