import React from "react";
import { Grid } from "@material-ui/core";
import "./DetailCard.css";

const DetailCard = ({ project }) => {
  return (
    <Grid className='rootContainer'>
      <Grid xs={12} sm={12} md={8}>
        <div className='card'>
          <div className='cardHeader'>
            <h4 className='cardTitleWhite'>{project.projectName}</h4>
            <p className='cardCategoryWhite'>
              {project.isCompleted ? "Completed" : "Await Feedback"}
            </p>
          </div>
          <div className='cardBody'>
            <h3>{project.projectDescription}</h3>
          </div>
          <div className='cardFooter'>
            <div>
              <h6>Developer</h6>
              <div className='footerItems'>
                <p>{project.developerName}</p>
                <p>{project.developerEmail}</p>
              </div>
            </div>
            <div>
              <h6>Team Lead</h6>
              <div className='footerItems'>
                <p>{project.teamLeadName}</p>
                <p>{project.teamLeadEmail}</p>
              </div>
            </div>
            <div>
              <h6>Client</h6>
              <div className='footerItems'>
                <p>{project.clientName}</p>
                <p>{project.clientEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default DetailCard;
