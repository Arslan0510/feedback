import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Dashboard, Feedback, Projects, ProjectDetails } from "./app-flow";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { routes } from "../services";
import { Sidebar } from "../components";

const index = ({ isAuthorized }) => {
  return (
    <>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop
        position='bottom-center'
        pauseOnFocusLoss
        pauseOnHover
        rtl={false}
      />
      <Switch>
        {!isAuthorized ? (
          <>
            <Route path={routes.login} component={Login} />
            <Route path={routes.register} component={Register} />
            <Redirect to={routes.login} />
          </>
        ) : (
          <>
            <Sidebar />
            <Route exact path={routes.dashboard} component={Dashboard} />
            <Route path={routes.feedback} component={Feedback} />
            <Route
              path={`${routes.projectDetails}/:id`}
              component={ProjectDetails}
            />
            <Route path={routes.projects} component={Projects} />
            <Redirect from='/' to={routes.dashboard} />
          </>
        )}
      </Switch>
    </>
  );
};

export default index;
