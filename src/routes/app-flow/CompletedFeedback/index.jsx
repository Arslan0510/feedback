import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { getAllProjects } from "../../../store/actions";
import { Loader, ProjectCard } from "../../../components";

import "../Projects/projects.css";

const CompletedFeedback = (props) => {
  const { completedProjects } = useSelector((state) => state.reducer_projects);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const isCompleted = true;

  useEffect(() => {
    if (completedProjects.length === 0) {
      getProjects();
    } else {
      console.log("completedProject", completedProjects);
    }
  }, []);

  const getProjects = () => {
    setLoading(true);
    getAllProjects({
      isCompleted,
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

  const handleClick = (id) => {
    props.history.push(`/projectDetails/${id}`);
  };

  const pageRefresh = () => {
    getProjects();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>Feedback</h1>
        <div className='row'>
          <div className='float'>
            <button
              onClick={pageRefresh}
              className='fa fa-retweet fa-lg my-float'
            />
          </div>
          {completedProjects &&
            completedProjects.map((project) => (
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
      </div>
    </div>
  );
};

export default CompletedFeedback;
