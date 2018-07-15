import React from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <div data-test="todos-container">
      <h1>Todos</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todos;
