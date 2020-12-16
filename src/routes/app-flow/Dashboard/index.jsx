import React from "react";
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
      </div>
    </div>
  );
};

export default Dashboard;
