import React from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

import "./Home.css";

const Home = props => {
  return (
    <div id="home-container" data-test="home-container">
      <h1 id="home-title">TDD SandBox</h1>

      <Link to="/counter">
        <Button className="home-btn">Counter</Button>
      </Link>

      <Link to="/todos">
        <Button className="home-btn">Todos</Button>
      </Link>
    </div>
  );
};

export default Home;
