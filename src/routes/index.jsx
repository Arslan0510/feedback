import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { routes } from "../services";
import Dashboard from "./app-flow/Dashboard";
import Login from "./auth/Login";
import Register from "./auth/Register";

const index = () => {
  return (
    <Switch>
      <Route exact path={routes.dashboard} component={Dashboard} />
      <Route path={routes.login} component={Login} />
      <Route path={routes.register} component={Register} />
      <Redirect from='/' to={routes.login} />
    </Switch>
  );
};

export default index;
