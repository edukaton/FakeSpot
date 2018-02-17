import { put, takeLatest } from "redux-saga/effects";

export default function* onFetchRecords() {
  yield takeLatest("QUESTION/FETCH", async function* () {
    const data = await fetch("http://localhost:3000/posts")
      .then(resp => resp.json());

    yield put({ type: "QUESTION/FETCH", data });
  });
}
