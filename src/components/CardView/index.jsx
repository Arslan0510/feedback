import React from "react";
import { NoProjects } from "../../assets";
// import FloatingButton from "../FloatingButton";
import NoContent from "../NoContent";
import ProjectCard from "../ProjectCard";

const CardView = ({ getProjects, list, history }) => {
  return (
    <div className='col-12 p-0 m-0 h-100'>
      {/* <FloatingButton
        onPress={getProjects}
        icon='fa-retweet'
        mainStyle='float'
      /> */}
      {list.length !== 0 ?
        <div className="row p-0 m-0 w-100">
          {list.map((project) => <ProjectCard project={project} />)}
        </div>
        :
        <NoContent imgSrc={NoProjects} title="Your added projects will appear here" />
      }
    </div>
  );
};

export default CardView;
