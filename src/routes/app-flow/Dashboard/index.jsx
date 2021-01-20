import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Layout, Loader} from "../../../components";
import {getDashBoardData} from "../../../store/actions";
import {checkArrayData, techStackName} from "../../../services/utils";
import {
  DeveloperSection,
  FilterDrawer,
  RecentProjects,
  TechSection,
} from "./AdditionalComponents";

const Dashboard = ({history}) => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState({
    recent_projects: true,
    team_leads: true,
    senior_developer: true,
    mid_level_developer: true,
    junior_developer: true,
    tech_stack: true,
  });
  const {dashboardData} = useSelector(
    ({reducer_dashboard}) => reducer_dashboard
  );
  const dispatch = useDispatch();
  const {
    juniorDevelopers,
    midLevelDevelopers,
    recentFeedbacks,
    seniorDevelopers,
    teamLeads,
    techStacks,
  } = dashboardData;

  useEffect(() => {
    getDashBoardData({
      dispatch,
      cbSuccess: () => setLoading(false),
      cbFailure: () => setLoading(false),
    });
  }, []);

  const handleDropdown = (options) => {
    const finalArr = [];
    teamLeads.forEach((el) =>
      el.techStack.forEach((ele) =>
        options.forEach((el2) => {
          if (ele._id === el2.id) {
            finalArr.push(el);
          }
        })
      )
    );
    console.log(
      "🚀 ~ file: index.jsx ~ line 47 ~ handleDropdown ~ finalArr",
      finalArr
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout
      button='btn-primary'
      icon='fa-filter'
      title='Dashboard'
      onRefresh={() => setIsOpen(true)}>
      <FilterDrawer
        checked={filter}
        isOpen={isOpen}
        isClose={() => setIsOpen(false)}
        handleChange={handleDropdown}
        options={techStackName(techStacks)}
        onChange={(value) => setFilter({...filter, [value]: !filter[value]})}
      />
      {checkArrayData(recentFeedbacks) && filter.recent_projects && (
        <RecentProjects recentFeedbacks={recentFeedbacks} />
      )}
      {checkArrayData(teamLeads) && filter.team_leads && (
        <DeveloperSection developerList={teamLeads} title='Team Leads' />
      )}
      {checkArrayData(seniorDevelopers) && filter.senior_developer && (
        <DeveloperSection
          developerList={seniorDevelopers}
          title='Senior developers'
        />
      )}
      {checkArrayData(midLevelDevelopers) && filter.mid_level_developer && (
        <DeveloperSection
          developerList={midLevelDevelopers}
          title='Mid Level developers'
        />
      )}
      {checkArrayData(juniorDevelopers) && filter.junior_developer && (
        <DeveloperSection
          developerList={juniorDevelopers}
          title='Junior developers'
        />
      )}
      {checkArrayData(techStacks) && filter.tech_stack && (
        <TechSection techStacks={techStacks} title='Tech Stack' />
      )}
    </Layout>
  );
};

export default Dashboard;
