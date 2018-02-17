import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import reducer from "./reducers";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ));
/* eslint-enable */


export default store;
