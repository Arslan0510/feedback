import React from "react";
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {
  AddDeveloper,
  AddFeedback,
  CompletedFeedback,
  Dashboard,
  Developers,
  Projects,
  ProjectDetails,
  TechStack,
} from "./app-flow";
import {Login, Register} from "./auth";
import {routes} from "../services";
import {Sidebar} from "../components";

const index = ({isAuthorized}) => {
  return (
    <>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop
        position='bottom-center'
        pauseOnFocusLoss
        pauseOnHover
        rtl={false}
      />
      <BrowserRouter>
        {!isAuthorized ? (
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path={routes.login} component={Login} />
            <Route exact path={routes.register} component={Register} />
            <Route path='*' component={NotFound} />
          </Switch>
        ) : (
          <>
            <Sidebar />
            <Switch>
              <Route exact path={routes.dashboard} component={Dashboard} />
              <Route exact path={routes.feedback} component={AddFeedback} />
              <Route
                exact
                path={routes.cFeedback}
                component={CompletedFeedback}
              />
              <Route
                exact
                path={routes.projectDetails}
                component={ProjectDetails}
              />
              <Route exact path={routes.projects} component={Projects} />
              <Route
                exact
                path={routes.addDeveloper}
                component={AddDeveloper}
              />
              <Route exact path={routes.developers} component={Developers} />
              <Route exact path={routes.techStack} component={TechStack} />
              <Route path='*' component={Dashboard} />
            </Switch>
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default index;

export const NotFound = () => (
  <div className='w-100 h-100 d-flex flex-column p-0 m-0 justify-content-center align-items-center'>
    <h1 className='text-secondary'>404!</h1>
    <br />
    <p>The page you are looking for is not found</p>
    <Link to={routes.login} style={{textDecoration: "none"}}>
      <div className='btn-light px-4 py-2 rounded'>Go to login</div>
    </Link>
  </div>
);
