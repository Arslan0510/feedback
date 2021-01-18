import React from "react";
import {DCard} from "../../../../../components";
import DashboardItem from "../DashboardItem";

const DeveloperSection = ({developerList, title}) => {
  return (
    <DashboardItem title={title}>
      <div className='row w-100 p-0 m-0'>
        {developerList.map((el) => (
          <DCard developer={el} />
        ))}
      </div>
    </DashboardItem>
  );
};

export default DeveloperSection;
