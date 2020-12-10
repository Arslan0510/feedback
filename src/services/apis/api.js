import Axios from "axios";
import { environment } from "./environment";
import { user } from "../mocks";

const api = (endPoint, data) => {
  endPoint.data = data;
  switch (endPoint.type) {
    case "GET":
      return axiosGet(endPoint);
    case "POST":
      return axiosPost(endPoint);
    default:
      break;
  }
};
export default api;

export const axiosGet = async ({ testData }) => {
  //   console.log("[LINK TO BE APPROACHED] GET", testData);
  if (environment.mock) if (testData) return await mockAPI(testData);
};

export const axiosPost = async ({
  address: route,
  data,
  guarded: isGuarded,
  testData,
}) => {
  //   console.log("[LINK TO BE APPROACHED] POST ", testData);
  if (environment.mock) if (testData) return await mockAPI(testData);
  return await Axios.post(
    route,
    data,
    isGuarded
      ? {
          headers: {
            Authorization: "ak " + environment.key,
          },
        }
      : null
  );
};

const mockAPI = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("[THIS DATA IS COMING FROM A MOCK JSON]");
      resolve({ data });
    }, 500);
  });
