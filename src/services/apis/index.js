import endPoints from "./endPoints";
import api from "./api";
import Axios from "axios";
import { environment } from "./environment";

Axios.defaults.baseURL = environment.baseUrl;
Axios.defaults.headers = { "Content-Type": "application/json" }

export const apis = {
  login: (data) => api(endPoints.login, data),
  register: (data) => api(endPoints.register, data),
};
