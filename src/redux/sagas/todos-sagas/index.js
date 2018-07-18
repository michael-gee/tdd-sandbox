import { take, put, fork, select } from "redux-saga/effects";
import { ADD_TODO_INIT } from "../../constants";

import actions from "../../actions/todos-actions";

const globalCount = state => state.todosObj.globalCount;

export function* watchNewTodos() {
  while (true) {
    const action = yield take(ADD_TODO_INIT);

    yield put(actions.incrementGlobalCount());

    const currentCount = yield select(globalCount);

    yield put(actions.addTodo(action.todo, currentCount));
  }
}

export const todosSagas = [fork(watchNewTodos)];
