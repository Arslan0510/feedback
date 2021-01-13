import Axios from "axios";

import api from "./api";
import endPoints from "./endPoints";
import { environment } from "./environment";

Axios.defaults.baseURL = environment.baseUrl;
Axios.defaults.headers = { "Content-Type": "application/json" };

export const apis = {
  login: (data) => api(endPoints.login, data),
  register: (data) => api(endPoints.register, data),
  feedback: (data) => api(endPoints.feedback, data),
  projects: () => api(endPoints.projects),
  completedProjects: () => api(endPoints.completedProjects),
  allDevelopers: () => api(endPoints.allDevelopers),
  developer: (data) => api(endPoints.developer, data),
  designations: () => api(endPoints.designations),
  teamLeads: () => api(endPoints.teamLeads),
  techStack: () => api(endPoints.techStack),
};
