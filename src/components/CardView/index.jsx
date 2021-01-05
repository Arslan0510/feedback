import React from "react";
import FloatingButton from "../FloatingButton";
import ProjectCard from "../ProjectCard";

const CardView = ({ title, getProjects, list, history }) => {
  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>{title}</h1>
        <div className='row'>
          <FloatingButton
            onPress={getProjects}
            icon='fa-retweet'
            mainStyle='float'
          />
          {list &&
            list.map((project) => (
              <div
                className='col-sm-4 mt-2'
                key={project.id}
                onClick={() => history.push(`/projectDetails/${project.id}`)}>
                <ProjectCard project={project} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardView;
