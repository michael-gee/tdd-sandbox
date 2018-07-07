import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

import reducers from '../reducers';

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

export default store;