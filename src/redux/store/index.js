import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";

import reducers from "../reducers";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleWare();

const middleware = [sagaMiddleWare];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

sagaMiddleWare.run(rootSaga);

export default store;
