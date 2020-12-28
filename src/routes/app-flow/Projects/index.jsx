import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAllProjects } from "../../../store/actions";
import { Loader } from "../../../components";
import ProjectCard from "./ProjectCard";

import "./projects.css";

const Projects = (props) => {
  const { projects } = useSelector((state) => state.reducer_projects);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projects.length === 0) {
      setLoading(true);
      getAllProjects({
        dispatch,
        cbSuccess: () => {
          setLoading(false);
        },
        cbFailure: () => {
          setLoading(false);
        },
      });
    }
  }, []);

  const handleClick = (id) => {
    props.history.push(`/projectDetails/${id}`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>Projects</h1>
        <div className='row'>
          {projects &&
            projects.map((project) => (
              <div
                className='col-sm-4'
                key={project.id}
                onClick={() => handleClick(project.id)}>
                <ProjectCard
                  title={project.projectName}
                  projectDesc={project.projectDescription}
                  completed={project.isCompleted}
                  developerName={project.developerName}
                  clientName={project.clientName}
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
