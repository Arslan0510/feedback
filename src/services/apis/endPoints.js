import {user, projects} from "../mocks";

function endPoint(address, type, guarded, testData) {
  this.address = address;
  this.type = type;
  this.guarded = guarded;
  this.testData = testData;
}

const endPoints = {
  login: new endPoint("/user/login", "POST", false, user),
  register: new endPoint("/user/register", "POST", false, user),
  feedback: new endPoint("/feedback", "POST", true, projects),
  projects: new endPoint("/feedback/lazyFeedback", "GET", true, projects),
  projectSearchByName: new endPoint("/feedback/project", "GET", true, projects),
  projectSearchByClient: new endPoint(
    "/feedback/client",
    "GET",
    true,
    projects
  ),
  completedProjects: new endPoint(
    "/feedback?isCompleted=true",
    "GET",
    true,
    projects
  ),
  developer: new endPoint("/developers", "POST", true, projects),
  allDevelopers: new endPoint("/developers", "GET", true, projects),
  teamLeads: new endPoint(
    "/developers?designation=TEAMLEAD",
    "GET",
    true,
    projects
  ),
  techStack: new endPoint("/tech-stack", "GET", true, projects),
  dashboard: new endPoint("/dashboard", "GET", true, projects),
};

export default endPoints;
