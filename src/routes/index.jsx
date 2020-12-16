import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { Dashboard, Feedback, Projects } from "./app-flow";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { routes } from "../services";
import { Sidebar } from "../components";

const index = () => {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route exact path={routes.dashboard} component={Dashboard} />
        <Route path={routes.login} component={Login} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.feedback} component={Feedback} />
        <Route path={routes.projects} component={Projects} />
        <Redirect from='/' to={routes.projects} />
      </Switch>
    </>
  );
};

export default index;
