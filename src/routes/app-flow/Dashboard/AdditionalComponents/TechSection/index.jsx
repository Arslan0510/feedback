import React from "react";
import {TechStackCard} from "../../../../../components";
import DashboardItem from "../DashboardItem";

const TechSection = ({developerList, title}) => {
  return (
    <DashboardItem title={title}>
      <div className='row w-100 p-0 m-0 '>
        {developerList.map((tech, i) => (
          <TechStackCard tech={tech} key={tech._id} index={i} />
        ))}
      </div>
    </DashboardItem>
  );
};

export default TechSection;
