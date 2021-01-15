import React from "react";
import {Card} from "react-bootstrap";

const TechStackCard = ({index, tech}) => {
  return (
    <div className='col-md-3'>
      <Card border='success' style={{margin: 5}}>
        <Card.Header>Tech Stack {index + 1}</Card.Header>
        <Card.Body>
          <p>
            <strong>Tech:</strong> {tech.name}
          </p>
          <p>
            <strong>Platform:</strong> {tech.platform}
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TechStackCard;
