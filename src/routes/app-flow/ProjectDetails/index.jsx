import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailCard from "./DetailCard";

const ProjectDetails = (props) => {
  const [projectDetails, setProjectDetails] = useState();
  const { projects } = useSelector((state) => state.reducer_projects);

  useEffect(() => {
    var project = projects.filter((el) => el.id === props.match.params.id);
    var obj = Object.assign({}, project);
    setProjectDetails(obj[0]);
  }, []);

  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>Project Details</h1>
        {projectDetails && <DetailCard project={projectDetails} />}
      </div>
    </div>
  );
};

export default ProjectDetails;
