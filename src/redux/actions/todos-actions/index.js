import {
  ADD_TODO_INIT,
  INCREMENT_GLOBAL_COUNT,
  ADD_TODO
} from "../../constants";

const todosActions = {
  incrementGlobalCount() {
    return {
      type: INCREMENT_GLOBAL_COUNT
    };
  },

  addTodoInit(todo) {
    return {
      type: ADD_TODO_INIT,
      todo
    };
  },

  addTodo(todo, globalCount) {
    const id = `todo${globalCount}`;

    return {
      type: ADD_TODO,
      newTodo: { id, message: todo }
    };
  }
};

export default todosActions;
