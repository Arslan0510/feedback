import firebase from "firebase";
import { apis } from "../../../services";

export const signIn = async ({ data, cbSuccess, cbFailure }) => {
  try {
    const { email, password } = data;
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const token = await user.getIdToken();
    const { data: loginData } = await apis.login({
      email,
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
    const { data: registerData } = await apis.register({
      email,
      token,
      uid: user.uid,
    });
    console.log("[SIGNUP RESPONSE]", registerData);
    cbSuccess();
  } catch (e) {
    console.log("[ERROR SIGNING UP]", e);
    cbFailure();
  }
};
