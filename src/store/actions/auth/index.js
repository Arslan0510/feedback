import firebase from "firebase";
import { apis, memoryStrings } from "../../../services";

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
    localStorage.setItem(memoryStrings.authorizationToken, loginData.token);
    cbSuccess();
  } catch (e) {
    cbFailure(e.message);
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
    localStorage.setItem(memoryStrings.authorizationToken, registerData.token);
    cbSuccess(registerData);
  } catch (e) {
    cbFailure(e.message);
  }
};
