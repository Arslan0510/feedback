import { apis } from "../../../services"
import { SET_DASHBOARD_DATA } from "../../constants";

export const getDashBoardData = async ({ cbSuccess, cbFailure, dispatch }) => {
    try {
        const { data } = await apis.dashboard();
        console.log('[DATA FROM BACKEND]', data);
        dispatch({
            type: SET_DASHBOARD_DATA,
            payload: data
        });
        cbSuccess();
    } catch (e) {
        console.log('[ERROR GETTING DATA FROM BACKEND]');
        cbFailure();
    }
}