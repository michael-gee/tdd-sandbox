import React, { Component } from "react";
import { connect } from "react-redux";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "./Todos.css";

export class Todos extends Component {
  render() {
    const { todos, todosCount } = this.props;

    return (
      <div id="todos-container" data-test="todos-container">
        <h1>Todos</h1>
        <h2>{todosCount}</h2>
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    );
  }
}

const mapStateToProps = ({ todos, todosCount }) => {
  return {
    todos,
    todosCount
  };
};

export default connect(mapStateToProps)(Todos);
