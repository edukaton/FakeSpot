const initialState = {
  fetched: false,
  fetching: false,
  data: [
    {
      text: "Znajdująca się na skraju Układu Słonecznego Planeta X zagraża Ziemi!",
      isTrue: true,
      wasAnswered: false,
      userAnswer: {
        sources: {},
        isTrue: null,
      },
    },
  ],
};

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state, {
    data: state.data.slice(),
  });

  const deepDataCopy = Object.assign({}, newState.data[newState.data.length - 1]);
  newState.data[newState.data.length - 1] = deepDataCopy;

  switch (action.type) {
    case "QUESTION/USER_SUBMIT": {
      newState.data[newState.data.length - 1].userAnswer = action.payload;
      newState.data[newState.data.length - 1].wasAnswered = true;

      return newState;
    }

    // no default
  }

  return state;
}
