const initialState = {
  fetched: false,
  fetching: false,
  data: [
    {
      id: 0,
      name: "Osiągnięcie #1",
      img: "/badges/1.png",
    },
    {
      id: 1,
      name: "Rozwiąż 5 zadań",
      img: "/badges/2.png",
    },
    {
      id: 2,
      name: "Osiągnięcie #3",
      img: "/badges/3.png",
    },
    {
      id: 3,
      name: "Osiągnięcie #4",
      img: "/badges/3.png",
    },
    {
      id: 4,
      name: "Osiągnięcie #5",
      img: "/badges/4.png",
    },
    {
      id: 5,
      name: "Osiągnięcie #6",
      img: "/badges/5.png",
    },
    {
      id: 6,
      name: "Osiągnięcie #7",
      img: "/badges/6.png",
    },
  ],
};

export default function reducer(state = initialState, action) {
  // const newState = Object.assign({}, state, {
  //   data: state.data.slice(),
  // });

  return state;
}
