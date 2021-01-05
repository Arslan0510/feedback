import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DetailCard from "./DetailCard";

const ProjectDetails = () => {
  const { projects } = useSelector((state) => state.reducer_projects);
  const { id } = useParams();

  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>Project Details</h1>
        <DetailCard project={projects.find((el) => el.id === id)} />
      </div>
    </div>
  );
};

export default ProjectDetails;
