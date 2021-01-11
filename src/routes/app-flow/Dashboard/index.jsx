import React from "react";
import firebase from "firebase";

import { Card, Layout } from "../../../components";

import "./dashboard.css";

const Dashboard = ({ history }) => {
  return (
    <Layout title='Dashboard'>
      <div className='alert alert-danger' role='alert'>
        This template is under maintenance!
      </div>
      <Card />
      <button
        className='btn btn-sm btn-primary'
        onClick={() => {
          firebase.auth().signOut();
          history.replace("/login");
        }}>
        Sign Out
      </button>
    </Layout>
  );
};

export default Dashboard;
