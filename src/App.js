import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { history } from "./helpers";
import store from "./store/store";
import Routes from "./routes";
import "./App.css";

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
