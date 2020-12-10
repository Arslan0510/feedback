import { user } from "../mocks";

function endPoint(address, type, guarded, testData) {
  this.address = address;
  this.type = type;
  this.guarded = guarded;
  this.testData = testData;
}

const endPoints = {
  login: new endPoint("/user", "GET", true, user),
  register: new endPoint("/register", "POST", true, user),
};

export default endPoints;
