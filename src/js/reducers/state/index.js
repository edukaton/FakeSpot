const initialState = {
  // state: "playing",
  state: "splash",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_STATE": {
      return { state: action.payload };
    }

    // no default
  }

  return state;
}
