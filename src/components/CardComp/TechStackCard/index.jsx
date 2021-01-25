import React from "react";
import {Card} from "react-bootstrap";

const TechStackCard = ({footer, handleClick, index, tech}) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 flex-fill'>
      <Card className='shadow'>
        <Card.Header>Tech Stack {index && index + 1}</Card.Header>
        <Card.Body>
          <p>
            <strong>Tech:</strong> {tech.name}
          </p>
          <p>
            <strong>Platform:</strong> {tech.platform}
          </p>
        </Card.Body>
        {footer && (
          <Card.Footer>
            <button
              className='btn btn-sm btn-primary'
              onClick={() => handleClick(tech.name)}>
              Developers
            </button>
          </Card.Footer>
        )}
      </Card>
    </div>
  );
};

export default TechStackCard;
