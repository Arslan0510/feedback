import { SET_PROJECTS, SET_COMPLETED_PROJECTS } from "../constants";

const INITIAL_STATE = {
  projects: [],
  completedProjects: [],
};

const reducer_projects = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return { ...state, projects: action.payload };
    case SET_COMPLETED_PROJECTS:
      return { ...state, completedProjects: action.payload };
    default:
      return state;
  }
};

export default reducer_projects;
