import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";

import "./card.css";

const ProjectCard = ({ project }) => {
  const {
    clientName,
    developers,
    isCompleted,
    projectName,
    projectDescription,
    _id,
  } = project;
  const history = useHistory();

  return (
    <div className='col-4 p-3 m-0 position-relative'>
      <Card className='w-100 m-0 position-relative'>
        <Card.Header className='row m-0 p-2 justify-content-between align-items-center'>
          <h5 className='font-weight-light  p-0 m-0'>{projectName}</h5>
          <span
            className={`${
              isCompleted ? "badge-success" : "badge-danger"
            } px-2 py-1 rounded small font-weight-bold`}>
            {isCompleted ? "Completed" : "Awaiting feedback"}
          </span>
        </Card.Header>
        <Card.Body className='p-3'>
          <h6 className='font-weight-light text-capitalize'>Team</h6>
          <ScrollContainer style={{ cursor: "grab" }}>
            <div className='row p-0 m-0 width-max-content'>
              {developers.map(({ developerName }, i) => (
                <Button
                  style={{ cursor: "inherit" }}
                  variant='light'
                  size='sm'
                  className='p-1 px-3 m-1 rounded-pill border'>
                  <small className='p-0 m-0'>{developerName}</small>
                </Button>
              ))}
            </div>
          </ScrollContainer>
          <p className='description-text p-0 m-0'>{projectDescription}</p>
          <p className='p-0 m-0 small'>
            <strong>Client</strong> {clientName}
          </p>
          <div className='text-right'>
            <Button
              onClick={() => history.push(`/projectDetails/${_id}`)}
              variant='light'
              className='border'
              size='sm'>
              View details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
