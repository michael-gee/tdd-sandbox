import React from "react";
import PropTypes from "prop-types";

import "./TodoList.css";

function renderTodos(todos) {
  if (todos.length === 0) {
    return (
      <div id="no-todos-display" data-test="no-todos-display-message">
        Currently there are 0 to dos. Type in a to do in the input field
        provided to get started!
      </div>
    );
  } else {
    return (
      <ul id="todos-list" data-test="todos-list">
        {todos.map(item => {
          return (
            <li className="list-item" key={item.id}>
              {item.message}
            </li>
          );
        })}
      </ul>
    );
  }
}

const TodoList = props => {
  const { todos } = props;

  return <div data-test="todoList-container">{renderTodos(todos)}</div>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TodoList;
