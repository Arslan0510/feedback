import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../../../components";
import { apis } from "../../../services";

import "./projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const gettingData = async () => {
    const { data } = await apis.projects();
    setProjects(data.feedbacks);
  };

  useEffect(() => {
    gettingData();
    return () => null;
  }, []);

  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>Projects</h1>
        <div className='row'>
          {projects &&
            projects.map((project) => (
              <div className='col-sm-4' key={project.id}>
                <ProjectCard
                  title={project.projectName}
                  projectDesc={project.projectDescription}
                  completed={project.isCompleted}
                  developerName={project.developerName}
                />
              </div>
            ))}
        </div>
        <div className='float'>
          <Link to='/feedback' className='fa fa-plus my-float' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
