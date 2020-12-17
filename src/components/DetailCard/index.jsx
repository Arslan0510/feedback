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
              <h6>Developer Name</h6>
              <div className='footerItems'>{project.developerName}</div>
            </div>
            <div>
              <h6>Team Lead Name</h6>
              <div className='footerItems'>{project.teamLeadName}</div>
            </div>
            <div>
              <h6>Client Name</h6>
              <div className='footerItems'>{project.clientName}</div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default DetailCard;
