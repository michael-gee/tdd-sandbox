import { ADD_TODO, INCREMENT_GLOBAL_COUNT } from "../../constants";

export const initialState = {
  globalCount: 2,
  todos: [
    {
      id: "todo1",
      message: "this is the first to do!"
    },
    {
      id: "todo2",
      message: "this is the second to do!"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_GLOBAL_COUNT:
      const newGlobalCount = state.globalCount + 1;
      return { ...state, globalCount: newGlobalCount };

    case ADD_TODO:
      return { ...state, todos: [action.newTodo, ...state.todos] };

    default:
      return state;
  }
};
