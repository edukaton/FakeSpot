export const completeQuestion = () => (dispatch, getState) => {
  dispatch({ type: "USER/COMPLETE_QUESTION" });
  const { user } = getState();

  if (user.data.questionsCompleted >= 1 && user.data.badgesCollected.indexOf(1) < 0) {
    dispatch({ type: "USER/GIVE_BADGE", payload: 1 });

    Notification.requestPermission()
      .then((result) => {
        if (result === "granted") {
          const not = new Notification("Odblokowałeś osiągnięcie!", {
            body: "Rozwiąż 5 zadań",
            icon: "/badge2.png",
          });
        }
      });
  }
};
