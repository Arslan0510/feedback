import { SET_DASHBOARD_DATA } from "../constants";

const INITIAL_STATE = {
    dashboardData: {}
};

const reducer_dashboard = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DASHBOARD_DATA:
            return { ...state, dashboardData: action.payload };
        default:
            return state;
    }
};

export default reducer_dashboard;
