import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  AddDeveloper,
  AddFeedback,
  CompletedFeedback,
  Dashboard,
  Projects,
  ProjectDetails,
} from "./app-flow";
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
          </>
        ) : (
          <>
            <Sidebar />
            <Route exact path={routes.dashboard} component={Dashboard} />
            <Route path={routes.feedback} component={AddFeedback} />
            <Route path={routes.cFeedback} component={CompletedFeedback} />
            <Route
              path={`${routes.projectDetails}/:id`}
              component={ProjectDetails}
            />
            <Route path={routes.projects} component={Projects} />
            <Route path={routes.addDeveloper} component={AddDeveloper} />
            {/* <Redirect from='/' to={routes.dashboard} /> */}
          </>
        )}
      </Switch>
    </>
  );
};

export default index;
