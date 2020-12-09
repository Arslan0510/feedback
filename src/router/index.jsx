import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Dashboard from "../containers/Dashboard";
import Login from "../containers/Login";
import Register from "../containers/Register";

export default function index() {
  return (
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      {<Redirect from='/' to='/login' />}
    </Switch>
  );
}
