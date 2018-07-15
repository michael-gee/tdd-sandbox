import React, { Component } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "./Todos.css";

class Todos extends Component {
  render() {
    return (
      <div id="todos-container" data-test="todos-container">
        <h1>Todos</h1>
        <TodoInput />
        <TodoList
          todos={{ todo1: { id: "todo1", message: "this is my first todo" } }}
        />
      </div>
    );
  }
}

export default Todos;
