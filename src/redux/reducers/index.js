import { combineReducers } from "redux";
import todosReducer from "./todos-reducer";
import todosCountReducer from "./todos-count-reducer";

export default combineReducers({
  todos: todosReducer,
  todosCount: todosCountReducer
});
