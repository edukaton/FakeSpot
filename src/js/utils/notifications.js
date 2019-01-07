export const requestPermission = () => new Promise((resolve, reject) => {
  try {
    resolve(Notification.requestPermission());
  } catch (error) {
    if (error instanceof TypeError) {
      Notification.requestPermission(resolve);
    } else {
      reject(error);
    }
  }
});
