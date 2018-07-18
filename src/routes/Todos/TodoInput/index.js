import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button } from "reactstrap";

import "./TodoInput.css";

class TodoInput extends Component {
  state = {
    userInput: ""
  };

  todoInputField = React.createRef();

  handleInputChange = e => {
    this.setState({ userInput: e.currentTarget.value });
  };

  handleTodoInputSubmit = () => {
    this.props.triggerAddTodoInit(this.state.userInput);

    this.todoInputField.current.value = "";
    this.todoInputField.current.focus();
  };

  render() {
    return (
      <div id="todo-input-container" data-test="todoInput-container">
        <label>Add to do item:</label>
        <input
          value={this.userInput}
          onChange={this.handleInputChange}
          ref={this.todoInputField}
          id="todo-input"
          type="text"
          data-test="todo-input"
        />
        <Button
          id="todo-submit-btn"
          onClick={this.handleTodoInputSubmit}
          data-test="todo-submit-button"
        >
          Submit
        </Button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  triggerAddTodoInit: PropTypes.func.isRequired
};

export default TodoInput;
