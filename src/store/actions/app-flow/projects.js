import { apis } from "../../../services";
import { SET_PROJECTS, SET_COMPLETED_PROJECTS } from "../../constants";

export const feedback = async ({ data, cbSuccess, cbFailure }) => {
  try {
    await apis.feedback(data);
    cbSuccess();
  } catch (e) {
    cbFailure(e.message, e.response.data.error);
  }
};

export const getAllProjects = async ({
  cbSuccess,
  cbFailure,
  dispatch,
  isCompleted,
}) => {
  try {
    if (!isCompleted) {
      const { data } = await apis.projects();
      dispatch({
        type: SET_PROJECTS,
        payload: data.feedbacks,
      });
    } else {
      const { data } = await apis.completedProjects();
      dispatch({
        type: SET_COMPLETED_PROJECTS,
        payload: data.feedbacks,
      });
    }
    cbSuccess();
  } catch (e) {
    cbFailure(e.message);
  }
};
