import { completeQuestion } from "../user";

const userToken = String(Math.floor(Math.random() * 10000000));

export const fetchQuestion = () => (dispatch, getState) => {
  const { lastQuestion } = getState().questions;

  // fetch(`/api/questions/${lastQuestion}`)
  fetch(`/api/question/${userToken}`)
    .then(res => res.json())
    .then(res => dispatch({ type: "QUESTION_FETCHED", payload: res }));
};

export const submitAnswers = (data, challange) => (dispatch) => {
  dispatch({ type: "QUESTION/USER_SUBMIT", payload: data });
  dispatch(completeQuestion());

  if (data.isTrue === challange.isTrue) {
    dispatch({ type: "SET_STATE", payload: "answerSuccess" });
    dispatch({ type: "USER/ADD_POINTS", payload: 100 });
  } else {
    dispatch({ type: "SET_STATE", payload: "answerFail" });
  }

  return {};
};

export const setState = state => ({ type: "SET_STATE", payload: state });
