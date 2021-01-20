import React, {useEffect, useState} from "react";
import {Provider} from "react-redux";
import firebase from "firebase";

import store from "./store/store";
import Routes from "./routes";
import {firebaseConfig} from "./services";
import "./App.css";

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState();
  // const dispatch = useDispatch();

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthorized(user);
      } else {
        setIsAuthorized(null);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Provider store={store}>
      {isAuthorized !== undefined ? (
        <Routes isAuthorized={isAuthorized} />
      ) : null}
    </Provider>
  );
};

export default App;
