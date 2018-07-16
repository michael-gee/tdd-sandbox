import { ADD_TODO } from "../../constants";

const todoActions = {
  addTodo(todo = {}) {
    return {
      type: ADD_TODO,
      payload: todo
    };
  }
};

export default todoActions;
