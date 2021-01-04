import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { getAllProjects } from "../../../store/actions";
import { Loader, ProjectCard } from "../../../components";

import "./projects.css";

const Projects = ({ history }) => {
  const { projects } = useSelector(state => state.reducer_projects);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projects.length === 0) {
      getProjects();
    }
  }, []);

  const getProjects = () => {
    setLoading(true);
    getAllProjects({
      dispatch,
      cbSuccess: () => {
        setLoading(false);
      },
      cbFailure: (err) => {
        setLoading(false);
        toast.error(err);
      },
    });
  };


  if (loading) {
    return <Loader />;
  }

  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>Projects</h1>
        <div className='row'>
          <div className='float'>
            <button
              onClick={getProjects}
              className='fa fa-retweet fa-lg my-float'
            />
          </div>
          {projects &&
            projects.map((project) => (
              <div
                className='col-sm-4'
                key={project.id}
                onClick={() => history.push(`/projectDetails/${project.id}`)}>
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
      </div>
    </div>
  );
};

export default Projects;
