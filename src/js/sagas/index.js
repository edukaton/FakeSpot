import { put, takeLatest } from "redux-saga/effects";

export default function* onFetchRecords() {
  yield takeLatest("QUESTION/FETCH", async function* fetchRecords() {
    console.log(1);
    yield put(() => ({ type: "ASD" }));
  });
}
