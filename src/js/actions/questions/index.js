import { completeQuestion } from "../user";

export const fetchQuestion = () => (dispatch, getState) => {
  const { lastQuestion } = getState().questions;

  // fetch(`/api/questions/${lastQuestion}`)
  fetch("/api/question")
    .then(res => res.json())
    .then(res => dispatch({ type: "QUESTION_FETCHED", payload: res }));
};

export const submitAnswers = (data, challange) => (dispatch) => {
  dispatch({ type: "QUESTION/USER_SUBMIT", payload: data });

  if (data.isTrue === challange.isTrue) {
    dispatch(completeQuestion());
    dispatch({ type: "SET_STATE", payload: "answerSuccess" });
    dispatch({ type: "USER/ADD_POINTS", payload: 100 });
  } else {
    dispatch({ type: "SET_STATE", payload: "answerFail" });
  }

  return {};
};

export const setState = state => ({ type: "SET_STATE", payload: state });
