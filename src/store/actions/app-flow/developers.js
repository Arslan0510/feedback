import { apis } from "../../../services";
import { teamLeadName, techStackName } from "../../../utils/newArray";

export const allDevelopers = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.allDevelopers();
    cbSuccess(data.developers);
  } catch (e) {
    cbFailure(e.message);
  }
};

export const addDeveloper = async ({ data, cbSuccess, cbFailure }) => {
  // console.log("🚀 ~ file: developers.js ~ line 14 ~ addDeveloper ~ data", data);
  try {
    await apis.developer(data);
    cbSuccess();
  } catch (e) {
    cbFailure(e.message);
  }
};

export const getDesignation = async ({ cbSuccess, cbFailure }) => {
  try {
    await apis.designations();
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
