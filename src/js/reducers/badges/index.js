const initialState = {
  fetched: false,
  fetching: false,
  data: [
    {
      id: 0,
      name: "Osiągnięcie #1",
      img: "/badge2.png",
    },
    {
      id: 1,
      name: "Rozwiąż 5 zadań",
      img: "/badge2.png",
    },
    {
      id: 2,
      name: "Osiągnięcie #3",
      img: "/badge2.png",
    },
  ],
};

export default function reducer(state = initialState, action) {
  // const newState = Object.assign({}, state, {
  //   data: state.data.slice(),
  // });

  return state;
}
