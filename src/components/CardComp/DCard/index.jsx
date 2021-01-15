import React from "react";
import {Badge, Card} from "react-bootstrap";

import Photo from "./Photo.png";
import "./DCard.css";

const DCard = ({developer}) => {
  const {developerImage, developerName, designation, techStack} = developer;
  return (
    <Card className='card-container'>
      <Badge className='best-stories' variant='primary'>
        {designation ? designation.replace(/_/g, " ") : "Undefined"}
      </Badge>
      <Card.Img src={developerImage ? developerImage : Photo} />
      <Card.Body>
        <Card.Title>{developerName ? developerName : "Undefined"}</Card.Title>

        <div class='skills'>
          <h6>Skills</h6>
          <ul>
            {techStack.length !== 0 ? (
              techStack.map((tech) => (
                <Badge className='badgeStyle' variant='secondary'>
                  {tech.name}
                </Badge>
              ))
            ) : (
              <Badge className='badgeStyle' variant='secondary'>
                No Skill
              </Badge>
            )}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DCard;
