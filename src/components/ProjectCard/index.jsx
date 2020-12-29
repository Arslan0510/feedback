import React from "react";

import { colors } from "../../services/configs";
import "./card.css";

const ProjectCard = ({
  title,
  projectDesc,
  completed,
  developerName,
  clientName,
}) => (
  <div className='Container containerHeight'>
    {completed ? (
      <div className='Top'>
        <div className='TagContainer' style={{ backgroundColor: colors.green }}>
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
