import Axios from "axios";
import {memoryStrings} from "../configs";
import {environment} from "./environment";

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

export const axiosGet = async ({
  address: route,
  data,
  guarded: isGuarded,
  testData,
}) => {
  // console.log("[LINK TO BE APPROACHED] GET", data);
  if (environment.mock) if (testData) return await mockAPI(testData);
  return await Axios.get(
    route + (data ? data : ""),
    isGuarded
      ? {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem(memoryStrings.authorizationToken),
          },
        }
      : null
  );
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
            Authorization:
              "Bearer " +
              localStorage.getItem(memoryStrings.authorizationToken),
          },
        }
      : null
  );
};

const mockAPI = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("[THIS DATA IS COMING FROM A MOCK JSON]");
      resolve({data});
    }, 500);
  });
