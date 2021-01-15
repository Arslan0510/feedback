import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Loader } from "../../../components";
import { getDashBoardData } from "../../../store/actions";
import { DashboardItem, RecentProjects } from "./AdditionalComponents";
import firebase from "firebase";

const Dashboard = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { dashboardData } = useSelector(({ reducer_dashboard }) => reducer_dashboard);
  const {
    juniorDevelopers,
    midLevelDevelopers,
    recentFeedbacks,
    seniorDevelopers,
    success,
    teamLeads,
    techStacks,
  } = dashboardData;

  useEffect(() => {
    getDashBoardData({
      dispatch,
      cbSuccess: () => setLoading(false),
      cbFailure: () => setLoading(false)
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout title='Dashboard'>
      <DashboardItem title="Recent projects">
        <RecentProjects recentFeedbacks={recentFeedbacks} />
      </DashboardItem>
    </Layout>
  );
};

export default Dashboard;
