import { SIGN_IN_USER } from "../constants";

const INITIAL_STATE = {
  user: null,
};

const reducer_auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default reducer_auth;
