import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Dashboard from "./app-flow/Dashboard";
import Login from "./auth/Login";
import Register from "./auth/Register";

const index = () => {
  return (
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      {<Redirect from='/' to='/login' />}
    </Switch>
  );
};

export default index;
