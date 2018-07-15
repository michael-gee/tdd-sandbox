import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../../routes/Home";
import Counter from "../../routes/Counter";
import Todos from "../../routes/Todos";
import Error from "../../routes/Error";

import Header from "../Header";

import "./App.css";

const App = props => {
  return (
    <Router data-test="browser-router">
      <div data-test="app-container">
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/todos" component={Todos} />
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
