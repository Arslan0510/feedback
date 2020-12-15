import firebase from "firebase";
import { apis } from "../../../services";

export const signIn = async ({ data, cbSuccess, cbFailure }) => {
  try {
    const { email, password } = data;
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const token = await user.getIdToken();
    console.log("[TOKEN]", token, user.uid);
    const { data: loginData } = await apis.login({
      email,
      password,
      token,
      uid: user.uid,
    });
    console.log("[LOGIN RESPONSE]", loginData);
    cbSuccess();
  } catch (e) {
    console.log("[ERROR SIGNING IN]", e);
    cbFailure("Incorrect email or password");
  }
};

export const signUp = async ({ data, cbSuccess, cbFailure }) => {
  try {
    const { email, password } = data;
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const token = await user.getIdToken();
    console.log("[TOKEN]", token);
    cbSuccess();
  } catch (e) {
    console.log("[ERROR SIGNING UP]", e);
    cbFailure();
  }
};
