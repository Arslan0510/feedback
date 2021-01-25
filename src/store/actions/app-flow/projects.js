import {apis} from "../../../services";
import {SET_PROJECTS, SET_COMPLETED_PROJECTS} from "../../constants";
import buildUrl from "build-url";

export const feedback = async ({data, cbSuccess, cbFailure}) => {
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
  size,
  stopLoading,
  projects,
}) => {
  try {
    if (!isCompleted) {
      const {data} = await apis.projects(`?size=${size}`);
      if (!stopLoading)
        dispatch({
          type: SET_PROJECTS,
          payload: data.feedbacks,
        });
      else {
        const arr = [...projects, ...data.feedbacks];
        dispatch({
          type: SET_PROJECTS,
          payload: arr,
        });
      }
    } else {
      const {data} = await apis.completedProjects();
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

export const getProjectByName = async ({search, cbSuccess, cbFailure}) => {
  try {
    if (search.byProjectName) {
      const {data} = await apis.projectSearchByName(
        `?search=${search.byProjectName}`
      );
      cbSuccess(data.feedbacks);
    } else {
      const {data} = await apis.projectSearchByClient(
        `?search=${search.byClientName}`
      );
      cbSuccess(data.feedbacks);
    }
  } catch (e) {
    cbFailure(e.message);
  }
};
