import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import actions from "../../redux/actions/todos-actions";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "./Todos.css";

export class Todos extends Component {
  triggerAddTodo = input => {
    input = input.trim();

    console.log(this.props);

    if (input !== "") {
      this.props.addTodo(input);
    }
  };

  render() {
    const { todos, todosCount } = this.props;

    return (
      <div id="todos-container" data-test="todos-container">
        <h1>Todos</h1>
        <h2>{todosCount}</h2>
        {/* {this.triggerAddTodo("as")} */}
        <TodoInput data-test="todo-input-component" />
        <TodoList todos={todos} data-test="todo-list-component" />
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    })
  ).isRequired,
  todosCount: PropTypes.number.isRequired
};

const mapStateToProps = ({ todos, todosCount }) => {
  return {
    todos,
    todosCount
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo: actions.addTodo }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
