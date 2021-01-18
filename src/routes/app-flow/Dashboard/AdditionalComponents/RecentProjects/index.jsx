import React from "react";
import {ProjectCard} from "../../../../../components";
import DashboardItem from "../DashboardItem";

const RecentProjects = ({recentFeedbacks}) => {
  return (
    <DashboardItem title='Recent projects'>
      <div className='row w-100 p-0 m-0'>
        {recentFeedbacks.map((el) => (
          <ProjectCard project={el} />
        ))}
      </div>
    </DashboardItem>
  );
};

export default RecentProjects;
