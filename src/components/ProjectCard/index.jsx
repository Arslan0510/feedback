import React from "react";

import { colors } from "../../services/configs";
import "./card.css";

const ProjectCard = ({ project }) => {
  const {
    clientName,
    developers,
    isCompleted,
    projectName,
    projectDescription,
  } = project;

  return (
    <div className='Container containerHeight'>
      {isCompleted ? (
        <div className='Top'>
          <div
            className='TagContainer'
            style={{ backgroundColor: colors.green }}>
            <div>Completed</div>
          </div>
        </div>
      ) : (
        <div className='Top'>
          <div
            className='TagContainer'
            style={{ backgroundColor: colors.appColor }}>
            <div>Awaiting Feedback</div>
          </div>
        </div>
      )}
      <div className='Content'>
        <div style={{ width: 310 }}>
          <h4 className='Title'>{projectName ? projectName : "No title"}</h4>
          <p className='Subtitle'>
            {projectDescription
              ? projectDescription
              : "No description available"}
          </p>
          <p className='CTA'>
            Developer Name:{" "}
            {developers.length !== 0
              ? developers.map((dev) => dev.name)
              : "Not available"}
          </p>
          <p className='CTA'>
            Client Name: {clientName ? clientName : "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
