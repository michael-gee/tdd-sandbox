import React from "react";
import PropTypes from "prop-types";

import "./TodoList.css";

function renderTodos(todos) {
  function renderItems(todosObj) {
    for (let property in todosObj) {
      return (
        <li
          id={todosObj[property].id}
          className="list-item"
          key={todosObj[property].id}
        >
          {todosObj[property].message}
        </li>
      );
    }
  }

  if (Object.keys(todos).length === 0) {
    return (
      <div id="no-todos-display" data-test="no-todos-display-message">
        Currently there are 0 to dos. Type in a to do in the input field
        provided to get started!
      </div>
    );
  } else {
    return (
      <ul id="todos-list" data-test="todos-list">
        {renderItems(todos)}
      </ul>
    );
  }
}

const TodoList = props => {
  const { todos } = props;

  return <div data-test="todoList-container">{renderTodos(todos)}</div>;
};

TodoList.propTypes = {
  todos: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TodoList;
