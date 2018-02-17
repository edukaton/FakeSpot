import { combineReducers } from "redux";

import questions from "./questions";
import state from "./state";

export default combineReducers({
  questions,
  state,
});
