import React from "react";
import {Badge, Card} from "react-bootstrap";

import Photo from "./Photo.png";
import "./DCard.css";

const DCard = ({developer}) => {
  const {developerImage, developerName, designation, techStack} = developer;
  return (
    <Card className='card-container'>
      {/* <Badge className='pro' variant='primary'>
        Phaedrian
      </Badge> */}
      <Card.Img src={developerImage ? developerImage : Photo} />
      <Card.Body>
        <Card.Title>{developerName ? developerName : "Undefined"}</Card.Title>
        <Card.Text>
          {designation ? designation.replace(/_/g, " ") : "Undefined"}
        </Card.Text>
        <div class='skills'>
          <h6>Skills</h6>
          <ul>
            {techStack.length !== 0 ? (
              techStack.map((tech) => <li>{tech.name}</li>)
            ) : (
              <li>No Skill</li>
            )}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DCard;
