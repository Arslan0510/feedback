import { combineReducers } from "redux";
import reducer_auth from "./reducer_auth";
import reducer_developers from "./reducer_developers";
import reducer_projects from "./reducer_projects";
import reducer_dashboard from "./reducer_dashboard";

export default combineReducers({
  reducer_auth,
  reducer_developers,
  reducer_projects,
  reducer_dashboard,
});