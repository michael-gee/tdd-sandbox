import React from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

import "./Home.css";

const Home = props => {
  return (
    <div className="home-container" data-test="home-container">
      <h1>Routes:</h1>

      <Link to="/counter">
        <Button className="home-btn">Counter</Button>
      </Link>
    </div>
  );
};

export default Home;
