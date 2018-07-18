import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import actions from "../../redux/actions/todos-actions";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "./Todos.css";

export class Todos extends Component {
  triggerAddTodoInit = input => {
    input = input.trim();

    if (input !== "") {
      this.props.addTodoInit(input);
    }
  };

  render() {
    const { todosObj } = this.props;

    return (
      <div id="todos-container" data-test="todos-container">
        <h1>Todos</h1>
        <TodoInput
          triggerAddTodoInit={this.triggerAddTodoInit}
          data-test="todo-input-component"
        />
        <TodoList todos={todosObj.todos} data-test="todo-list-component" />
      </div>
    );
  }
}

Todos.propTypes = {
  todosObj: PropTypes.shape({
    globalCount: PropTypes.number.isRequired,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

const mapStateToProps = ({ todosObj }) => {
  return { todosObj };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodoInit: actions.addTodoInit }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
