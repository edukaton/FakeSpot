export const fetchQuestion = () => (dispatch) => {
  fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(res => dispatch({ type: "QUESTION_FETCHED", payload: res }));
};
