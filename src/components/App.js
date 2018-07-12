import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Routes/Home";
import Counter from "./Routes/Counter";
import Error from "./Routes/Error";

import Header from "./Header";

import "../styles/App.css";

const App = props => {
  return (
    <Router data-test="browser-router">
      <div data-test="app-container">
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route
              render={() => <Error title="404 - URL Not Found" />}
              data-test="error-route"
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
