import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailCard from "./DetailCard";

const ProjectDetails = (props) => {
  const { projects } = useSelector((state) => state.reducer_projects);

  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>Project Details</h1>
        <DetailCard project={projects.find((el) => el.id === props.match.params.id)} />
      </div>
    </div>
  );
};

export default ProjectDetails;
