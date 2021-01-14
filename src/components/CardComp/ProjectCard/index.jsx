import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./card.css";

const ProjectCard = ({ project }) => {
  const {
    clientName,
    teamLeadName,
    projectManagerName,
    developers,
    isCompleted,
    projectName,
    projectDescription,
    _id,
  } = project;
  const history = useHistory();

  // return (
  //   <div className='Container containerHeight'>
  //     {isCompleted ? (
  //       <div className='Top'>
  //         <div
  //           className='TagContainer'
  //           style={{ backgroundColor: colors.green }}>
  //           <div>Completed</div>
  //         </div>
  //       </div>
  //     ) : (
  //       <div className='Top'>
  //         <div
  //           className='TagContainer'
  //           style={{ backgroundColor: colors.appColor }}>
  //           <div>Awaiting Feedback</div>
  //         </div>
  //       </div>
  //     )}
  //     <div className='Content'>
  //       <div style={{ width: 310 }}>
  //         <h4 className='Title'>{projectName ? projectName : "No title"}</h4>
  //         <p className='Subtitle'>
  //           {projectDescription
  //             ? projectDescription
  //             : "No description available"}
  //         </p>
  //         <p className='CTA'>
  //           Developer Name:{" "}
  //           {developers.length !== 0
  //             ? developers.map((dev) => dev.name)
  //             : "Not available"}
  //         </p>
  //         <p className='CTA'>
  //           Client Name: {clientName ? clientName : "Not available"}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className='col-4 p-3 m-0 position-relative'>
      <Card className='w-100 m-0 position-relative'>
        <Card.Header className='row m-0 justify-content-between align-items-center'>
          <h4 className='font-weight-light  p-0 m-0'>{projectName}</h4>
          <span
            className={`${
              isCompleted ? "badge-success" : "badge-danger"
            } px-2 py-1 rounded small font-weight-bold`}>
            {isCompleted ? "Completed" : "Awaiting feedback"}
          </span>
        </Card.Header>
        <Card.Body>
          {/* <Card.Text> */}
          <h5 className='font-weight-light'>Team</h5>
          <div className='row p-0 m-0'>
            {developers.map(({ developerName }, i) => (
              <Button
                variant='light'
                size='sm'
                className='p-1 px-3 m-1 rounded-pill border'>
                {developerName}
              </Button>
            ))}
          </div>
          <p className='description-text p-0 m-0'>{projectDescription}</p>
          {/* <p className="p-0 m-0">
              <strong>Team lead</strong> {teamLeadName}
            </p> */}
          <p className='p-0 m-0'>
            <strong>Client</strong> {clientName}
          </p>
          {/* <p className="p-0 m-0">
              <strong>Project manager</strong> {projectManagerName}
            </p> */}
          {/* </Card.Text> */}
          <div className='text-right'>
            <Button
              onClick={() => history.push(`/projectDetails/${_id}`)}
              variant='secondary'
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
