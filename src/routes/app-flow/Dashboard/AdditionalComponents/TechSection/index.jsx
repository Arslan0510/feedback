import React from "react";
import {TechStackCard} from "../../../../../components";
import DashboardItem from "../DashboardItem";

const TechSection = ({techStacks, title}) => {
  return (
    <DashboardItem title={title}>
      <div className='row w-100 p-0 m-0 '>
        {techStacks.map((tech, i) => (
          <TechStackCard tech={tech} key={tech._id} index={i} />
        ))}
      </div>
    </DashboardItem>
  );
};

export default TechSection;
