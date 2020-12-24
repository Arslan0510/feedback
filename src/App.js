import React, { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import firebase from "firebase";

import { history } from "./helpers";
import store from "./store/store";
import Routes from "./routes";
import { firebaseConfig } from "./services";
import "./App.css";

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(null);
  // const dispatch = useDispatch();

  const authListener = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthorized(user);
        // dispatch(saveUser({ user: user }));
      } else {
        setIsAuthorized(null);
        // dispatch(saveUser({ user: null }));
      }
    });
  };

  useEffect(() => {
    authListener();
    return () => null;
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes isAuthorized={isAuthorized} />
      </Router>
    </Provider>
  );
};

export default App;
