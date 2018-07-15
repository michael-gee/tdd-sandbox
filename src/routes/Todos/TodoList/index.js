import React from "react";
import PropTypes from "prop-types";

function renderTodos(todos) {
  console.log(todos);
}

const TodoList = props => {
  const { todos } = props;

  return <div data-test="todoList-container">{renderTodos(todos)}</div>;
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
