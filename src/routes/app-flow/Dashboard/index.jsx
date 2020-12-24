import React from "react";
import firebase from "firebase";

import { Card } from "../../../components";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>Dashboard</h1>
        <div className='alert alert-danger' role='alert'>
          This template is under maintenance!
        </div>
        <Card />
        <button
          className='btn btn-sm btn-primary'
          onClick={() => firebase.auth().signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
