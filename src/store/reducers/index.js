import { combineReducers } from "redux";
import reducer_auth from "./reducer_auth";
import reducer_projects from "./reducer_projects";

export default combineReducers({
  reducer_auth,
  reducer_projects,
});
