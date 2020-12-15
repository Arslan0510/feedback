import { apis } from "../../../services";

export const feedback = async ({ data, cbSuccess, cbFailure }) => {
  console.log("🚀 ~ file: index.js ~ line 4 ~ feedback ~ data", data);
  try {
    // const { projectName, developerName, clientName, teamLeadName } = data;
    const { data: loginData } = await apis.feedback(data);
    console.log("[LOGIN RESPONSE]", loginData);
    cbSuccess();
  } catch (e) {
    console.log("[ERROR SIGNING IN]", e);
    cbFailure(e.toString());
  }
};
