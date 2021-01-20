import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Layout, Loader} from "../../../components";
import {getDashBoardData} from "../../../store/actions";
import {checkArrayData} from "../../../services/utils";
import {
  DeveloperSection,
  FilterDrawer,
  RecentProjects,
  TechSection,
} from "./AdditionalComponents";

const Dashboard = ({history}) => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout
      button='btn-primary'
      icon='fa-filter'
      title='Dashboard'
      onRefresh={() => setIsOpen(true)}>
      <FilterDrawer isOpen={isOpen} isClose={() => setIsOpen(false)} />
      {checkArrayData(recentFeedbacks) && (
        <RecentProjects recentFeedbacks={recentFeedbacks} />
      )}
      {checkArrayData(teamLeads) && (
        <DeveloperSection developerList={teamLeads} title='Team Leads' />
      )}
      {checkArrayData(seniorDevelopers) && (
        <DeveloperSection
          developerList={seniorDevelopers}
          title='Senior developers'
        />
      )}
      {checkArrayData(midLevelDevelopers) && (
        <DeveloperSection
          developerList={midLevelDevelopers}
          title='Mid Level developers'
        />
      )}
      {checkArrayData(juniorDevelopers) && (
        <DeveloperSection
          developerList={juniorDevelopers}
          title='Junior developers'
        />
      )}
      {checkArrayData(techStacks) && (
        <TechSection techStacks={techStacks} title='Tech Stack' />
      )}
    </Layout>
  );
};

export default Dashboard;
