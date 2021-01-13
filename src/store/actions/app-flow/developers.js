import { apis } from "../../../services";
import { teamLeadName, techStackName } from "../../../services";

export const allDevelopers = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.allDevelopers();
    const { data: teamLeads } = await apis.teamLeads();
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
