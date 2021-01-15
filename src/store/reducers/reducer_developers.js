import {SET_DEVELOPERS, SET_TECH_STACK} from "../constants";

const INITIAL_STATE = {
  developers: [],
  techStack: [],
};

const reducer_developers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DEVELOPERS:
      return {...state, developers: action.payload};
    case SET_TECH_STACK:
      return {...state, techStack: action.payload};
    default:
      return state;
  }
};

export default reducer_developers;
