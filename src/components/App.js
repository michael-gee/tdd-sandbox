import React, { Component } from "react";

import "../styles/App.css";

class App extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div className="app" data-test="component-app">
        <h1>TDD SandBox</h1>

        <h2 data-test="count-display">
          The counter is currently {this.state.counter}!
        </h2>

        <button
          className="app-btn"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          data-test="increment-button"
        >
          Increment
        </button>

        <button
          className="app-btn"
          onClick={() => {
            this.state.counter === 0
              ? false
              : this.setState({
                  counter: this.state.counter - 1
                });
          }}
          data-test="decrement-button"
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
