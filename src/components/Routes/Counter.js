import React, { Component } from "react";

import { Button } from "reactstrap";

import "../../styles/Counter.css";

class Counter extends Component {
  state = {
    counter: 0,
    errorShown: false
  };

  onCounterChange = changeType => {
    const { counter, errorShown } = this.state;

    if (changeType === "decrement" && counter === 0) {
      if (errorShown === false) {
        this.setState({ errorShown: true });
      }
      return;
    } else if (changeType === "increment") {
      this.setState({ counter: this.state.counter + 1 });
      if (errorShown === true) this.setState({ errorShown: false });
      return;
    } else if (changeType === "decrement") {
      this.setState({ counter: this.state.counter - 1 });
      if (errorShown === true) this.setState({ errorShown: false });
      return;
    }
  };

  renderErrorDisplay = () => {
    if (this.state.errorShown === false) {
      return;
    } else {
      return (
        <h3 className="error-display" data-test="error-display">
          *** The count cannot go below zero! ***
        </h3>
      );
    }
  };

  render() {
    return (
      <div className="counter-wrapper" data-test="counter-container">
        <h1>TDD SandBox</h1>

        <h2 data-test="count-display">
          The counter is currently {this.state.counter}!
        </h2>

        {this.renderErrorDisplay()}

        <Button
          className="counter-btn"
          onClick={() => this.onCounterChange("increment")}
          data-test="increment-button"
        >
          Increment
        </Button>

        <Button
          className="counter-btn"
          onClick={() => this.onCounterChange("decrement")}
          data-test="decrement-button"
        >
          Decrement
        </Button>
      </div>
    );
  }
}

export default Counter;
