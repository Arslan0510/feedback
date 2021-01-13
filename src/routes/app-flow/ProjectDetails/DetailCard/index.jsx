import React, { Fragment } from "react";
import FloatingButton from "../../../../components/FloatingButton";

import "./DetailCard.css";

const DetailCard = ({ project }) => {
  const {
    clientName,
    clientEmail,
    developers,
    isCompleted,
    projectName,
    projectDescription,
    teamLeadName,
    teamLeadEmail,
  } = project;

  return (
    <div className='row h-100'>
      <div className='col-sm-8 my-auto'>
        <div className='card'>
          <div className='cardHeader'>
            <h4 className='cardTitleWhite'>
              {projectName ? projectName : "No name available"}
            </h4>
            <p className='cardCategoryWhite'>
              {isCompleted ? "Completed" : "Await Feedback"}
            </p>
          </div>
          <div className='cardFooter'>
            <div>
              <h6>Developer</h6>
              <div className='footerItems'>
                {developers.length !== 0 &&
                  developers.map((developer) => (
                    <Fragment key={developer.email}>
                      <p>{developer.name}</p>
                      <p>{developer.email}</p>
                    </Fragment>
                  ))}
              </div>
            </div>
            <div>
              <h6>Team Lead</h6>
              <div className='footerItems'>
                <p>{teamLeadName}</p>
                <p>{teamLeadEmail}</p>
              </div>
            </div>
            <div>
              <h6>Client</h6>
              <div className='footerItems'>
                <p>{clientName}</p>
                <p>{clientEmail}</p>
              </div>
            </div>
          </div>
          <div className='cardBody'>
            <h4>
              {projectDescription
                ? projectDescription
                : "No description available"}
            </h4>
          </div>
        </div>
        <FloatingButton icon='fa-trash' mainStyle='float-red' />
      </div>
    </div>
  );
};

export default DetailCard;
