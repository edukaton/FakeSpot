import { combineReducers } from "redux";

import user from "./user";
import state from "./state";
import badges from "./badges";
import questions from "./questions";
import notifications from "./notifications";

export default combineReducers({
  user,
  state,
  badges,
  questions,
  notifications,
});
