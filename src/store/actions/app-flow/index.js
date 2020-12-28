import { apis } from "../../../services";
import { SET_PROJECTS } from "../../constants";

export const feedback = async ({ data, cbSuccess, cbFailure }) => {
  try {
    const { data: feedbackData } = await apis.feedback(data);
    console.log(
      "🚀 ~ file: index.js ~ line 7 ~ feedback ~ feedbackData",
      feedbackData
    );
    cbSuccess();
  } catch (e) {
    console.log("[ERROR SIGNING IN]", e);
    cbFailure(e.toString());
  }
};

export const getAllProjects = async ({ cbSuccess, cbFailure, dispatch }) => {
  try {
    const { data } = await apis.projects();
    dispatch({
      type: SET_PROJECTS,
      payload: data.feedbacks,
    });
    cbSuccess();
  } catch (e) {
    cbFailure();
  }
};
