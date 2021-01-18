import React from "react";
import {Badge, Card} from "react-bootstrap";
import _ from "lodash";

import {Photo} from "../../../assets";
import {getDeveloperBadge, getBadgeClasses} from "../../../services/utils";
import "./DCard.css";

const imageSize = 120;
const DCard = ({developer}) => {
  const {developerImage, developerName, designation, techStack} = developer;

  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <Card className='text-center overflow-hidden'>
        <Badge className={getDeveloperBadge(designation)}>
          {_.capitalize(
            designation ? designation.replace(/_/g, " ") : "Junior developer"
          )}
        </Badge>
        <div className='w-100 text-center'>
          <img
            alt=''
            className='rounded-circle my-2'
            style={{
              width: imageSize,
              height: imageSize,
              objectFit: "cover",
            }}
            src={developerImage ? developerImage : Photo}
          />
        </div>
        <Card.Body className='text-secondary p-0 m-0 pb-3 px-3'>
          <Card.Title className='p-0 m-0 font-weight-light pb-2'>
            {_.capitalize(developerName ?? "Undefined")}
          </Card.Title>
          <div className='border p-2 w-100 text-left rounded'>
            <h6>Skills</h6>
            <ul className='p-0 m-0'>
              {techStack.length !== 0 ? (
                techStack.map((tech) => (
                  <Badge className={getBadgeClasses()}>
                    {_.capitalize(tech.name)}
                  </Badge>
                ))
              ) : (
                <Badge
                  className='badgeStyle rounded-pill px-2 py-1'
                  variant='secondary'>
                  {_.capitalize("No Skill")}
                </Badge>
              )}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DCard;
