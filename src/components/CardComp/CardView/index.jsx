import React from "react";
import {NoProjects} from "../../../assets";
import NoContent from "../../OtherComp/NoContent";
import ProjectCard from "../ProjectCard";

const CardView = ({list}) => {
  return (
    <div className='col-12 p-0 m-0'>
      {list.length > 0 ? (
        <div className='row p-0 m-0 w-100 align-items-center'>
          {list.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <NoContent
          imgSrc={NoProjects}
          title='Your added projects will appear here'
        />
      )}
    </div>
  );
};

export default CardView;
