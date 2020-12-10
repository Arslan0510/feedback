import endPoints from "./endPoints";
import api from "./api";

export const apis = {
  login: (data) => api(endPoints.login, data),
  register: (data) => api(endPoints.register, data),
};
