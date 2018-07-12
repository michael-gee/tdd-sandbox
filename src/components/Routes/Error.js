import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404 - Page not found!</h1>

      <div>
        Navigate back to the<Link to="/"> homepage</Link>
      </div>
    </div>
  );
};

export default Error;
