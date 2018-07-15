import React, { Component } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class Todos extends Component {
  render() {
    return (
      <div data-test="todos-container">
        <h1>Todos</h1>
        <TodoInput />
        <TodoList todos={["this is a todo"]} />
      </div>
    );
  }
}

export default Todos;
