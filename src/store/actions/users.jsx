import { SIGN_IN_USER } from "../constants";

export function signInUser(user) {
  console.log("🚀 ~ file: users.jsx ~ line 4 ~ signInUser ~ user", user);
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
}
