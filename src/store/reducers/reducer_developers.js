import { SET_DEVELOPERS } from "../constants";

const INITIAL_STATE = {
  developers: [],
};

const reducer_developers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DEVELOPERS:
      return { ...state, developers: action.payload };
    default:
      return state;
  }
};

export default reducer_developers;
