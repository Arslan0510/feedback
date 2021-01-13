import React from "react";
import FloatingButton from "../FloatingButton";
import ProjectCard from "../ProjectCard";

const CardView = ({ getProjects, list, history }) => {
  return (
    <div className='row'>
      <FloatingButton
        onPress={getProjects}
        icon='fa-retweet'
        mainStyle='float'
      />
      {list.length !== 0 ? (
        list.map((project) => (
          <div
            className='col-sm-4 mt-2'
            key={project._id}
            onClick={() => history.push(`/projectDetails/${project._id}`)}>
            <ProjectCard project={project} />
          </div>
        ))
      ) : (
        <h3>There is no projects in the database to show.</h3>
      )}
    </div>
  );
};

export default CardView;
