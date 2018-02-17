const initialState = {
  fetched: false,
  fetching: false,
  data: [
    {
      id: 0,
      text: "Znajdująca się na skraju Układu Słonecznego Planeta X zagraża Ziemi!",
      difficulty: 0,
      category: "polityka",
      isTrue: true,
      lifeLines: [
        {
          id: 0,
          title: "1. Koło ratunkowe",
          text: "google keywords",
        },
        {
          id: 1,
          title: "2. Koło ratunkowe",
          text: "dobre źródła",
        },
      ],

      wasAnswered: false,
      userAnswer: {
        sources: [],
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

  console.log(action);

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
