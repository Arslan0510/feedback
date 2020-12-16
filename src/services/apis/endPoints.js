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
  feedback: new endPoint("/feedback", "POST", false, user),
  projects: new endPoint("/projects", "GET", false, projects),
};

export default endPoints;
