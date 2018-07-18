import { all } from "redux-saga/effects";

import { todosSagas } from "../sagas/todos-sagas";

export default function* rootSaga() {
  yield all([...todosSagas]);
}
