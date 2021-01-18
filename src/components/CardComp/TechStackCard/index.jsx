import React from "react";
import { Card } from "react-bootstrap";

const TechStackCard = ({ index, tech }) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 flex-fill'>
      <Card className="shadow">
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
