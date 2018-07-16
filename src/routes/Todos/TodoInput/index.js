import React, { Component } from "react";

import { Button } from "reactstrap";

import "./TodoInput.css";

class TodoInput extends Component {
  state = {
    userInput: ""
  };

  handleInputChange = e => {
    this.setState({ userInput: e.currentTarget.value });
  };

  render() {
    const { userInput, handleInputChange } = this.state;

    return (
      <div id="todo-input-container" data-test="todoInput-container">
        <label>Add to do item:</label>
        <input
          value={userInput}
          onChange={handleInputChange}
          id="todo-input"
          type="text"
          data-test="todo-input"
        />
        <Button id="todo-submit-btn" data-test="todo-submit-button">
          Submit
        </Button>
      </div>
    );
  }
}

export default TodoInput;
