import { SET_PROJECTS } from "../constants";

const INITIAL_STATE = {
    projects: []
}

const reducer_projects = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return { ...state, projects: action.payload };
        default:
            return state;
    }
}

export default reducer_projects;