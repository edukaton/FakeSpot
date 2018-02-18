const initialState = {
  fetched: false,
  fetching: false,
  data: [],
};

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state, {
    data: state.data.slice(),
  });

  const deepDataCopy = Object.assign({}, newState.data[newState.data.length - 1]);
  newState.data[newState.data.length - 1] = deepDataCopy;

  // console.log(action);

  switch (action.type) {
    case "QUESTION/USER_SUBMIT": {
      newState.data[newState.data.length - 1].userAnswer = action.payload;
      newState.data[newState.data.length - 1].wasAnswered = true;

      return newState;
    }

    case "QUESTION_FETCHED": {
      newState.fetched = true;

      newState.data.push(
        {
          ...action.payload,

          wasAnswered: false,
          userAnswer: {
            sources: [],
            isTrue: null,
          },
        },
      );

      return newState;
    }


    // no default
  }

  return state;
}
