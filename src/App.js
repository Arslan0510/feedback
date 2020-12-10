import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import firebase from "firebase";

import { history } from "./helpers";
import store from "./store/store";
import Routes from "./routes";
import firebaseConfig from "./firebase";
import "./App.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
