import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={() => <div />} />
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById("app"));
