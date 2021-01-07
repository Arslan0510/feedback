import { user, projects } from "../mocks";

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
  projects: new endPoint("/feedback", "GET", true, projects),
  completedProjects: new endPoint(
    "/feedback?isCompleted=true",
    "GET",
    true,
    projects
  ),
  developer: new endPoint("/developers", "POST", true, projects),
};

export default endPoints;
