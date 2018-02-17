import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./base.sass";

import Main from "./views/Main";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

render(<App />, document.getElementById("app"));
