const initialState = {
  fetched: false,
  fetching: false,
  data: [
    "Kto stworzył tego newsa?",
    "W jakim celu ten news został stworzony?",
    "Czemu widzę tego newsa?",
    "Czemu ten news przyciąga Twoją uwagę?",
    "Czy ten news wzbudza w Tobie silne emocje?",
    "Czy ten news nie jest aby zbyt śmieszny, dziwny lub fantastyczny?",
    "Czy news jest napisany caps lockiem?",
    "Czy jest użyta nadmierna interpunkcja?",
    "Czy news wyjawia Ci jakiś sekret, o którym wcześniej nie słyszałeś?",
    "Jakie jest źródło tej informacji?",
    "W ilu źródłach pojawia się informacja?",
    "Czy źródło podaje imię i nazwisko autora newsa?",
    "Z jakiej strony jest informacja ? Informacyjnej, satyrycznej, naukowej, rozrywkowej?",
    "Czy widzisz datę opublikowania newsa?",
    "Czy informacja cytuje jakieś eksperckie źródła?",

  ],
};

export default function reducer(state = initialState, action) {
  // const newState = Object.assign({}, state, {
  //   data: state.data.slice(),
  // });

  return state;
}
