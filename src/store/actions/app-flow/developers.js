import axios from "axios";
import {apis} from "../../../services";
import {SET_DEVELOPERS, SET_TECH_STACK} from "../../constants";
import {developerNames, teamLeadName, techStackName} from "../../../services";

export const allDevelopers = async ({cbSuccess, cbFailure, dispatch}) => {
  try {
    const {data} = await apis.allDevelopers();
    const {data: teamLeads} = await apis.teamLeads();
    if (dispatch)
      dispatch({
        type: SET_DEVELOPERS,
        payload: data.developers,
      });
    cbSuccess(data.developers, teamLeads.developers);
  } catch (e) {
    cbFailure(e.message);
  }
};

export const addDeveloper = async ({data, cbSuccess, cbFailure}) => {
  var result = new FormData();
  result.append("developerName", data.developerNames);
  result.append("developerEmail", data.developerEmail);
  data.techStack.forEach((el) => result.append("techStack[]", el));
  result.append("designation", data.designation);
  result.append("teamLead", data.teamLead);
  if (data.developerImage) result.append("developerImage", data.developerImage);

  var config = {
    method: "post",
    url: "http://localhost:3000/developers",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authorizationToken"),
      "content-Type": "multipart/form-data",
    },
    data: result,
  };

  try {
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.result));
        cbSuccess();
      })
      .catch(function (error) {
        console.log(error);
        cbFailure(error);
      });
  } catch (e) {
    cbFailure(e.message);
  }
};

export const getTeamLead = async ({cbSuccess, cbFailure}) => {
  try {
    const {data} = await apis.teamLeads();
    cbSuccess(teamLeadName(data.developers));
  } catch (e) {
    cbFailure(e.message);
  }
};

export const getTechStack = async ({cbSuccess, cbFailure, dispatch}) => {
  try {
    const {data} = await apis.techStack();
    if (dispatch)
      dispatch({
        type: SET_TECH_STACK,
        payload: data.data,
      });
    cbSuccess(techStackName(data.data));
  } catch (e) {
    cbFailure(e.message);
  }
};

export const getAllDevelopers = async ({cbSuccess, cbFailure}) => {
  try {
    const {data} = await apis.allDevelopers();
    cbSuccess(developerNames(data.developers));
  } catch (e) {
    cbFailure(e.message);
  }
};
