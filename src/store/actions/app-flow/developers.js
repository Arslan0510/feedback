import { apis } from "../../../services";
import { SET_DEVELOPERS } from "../../constants";
import { teamLeadName, techStackName } from "../../../services";

export const allDevelopers = async ({ cbSuccess, cbFailure, dispatch }) => {
  try {
    const { data } = await apis.allDevelopers();
    const { data: teamLeads } = await apis.teamLeads();
    dispatch({
      type: SET_DEVELOPERS,
      payload: data.developers,
    });
    cbSuccess(data.developers, teamLeads.developers);
  } catch (e) {
    cbFailure(e.message);
  }
};

export const addDeveloper = async ({ data, cbSuccess, cbFailure }) => {
  try {
    await apis.developer(data);
    cbSuccess();
  } catch (e) {
    cbFailure(e.message);
  }
};

export const getTeamLead = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.teamLeads();
    cbSuccess(teamLeadName(data.developers));
  } catch (e) {
    cbFailure(e.message);
  }
};

export const getTechStack = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.techStack();
    cbSuccess(techStackName(data.data));
  } catch (e) {
    cbFailure(e.message);
  }
};
