import React from "react";
import { Link } from "react-router-dom";

import "../../styles/Error.css";

const Error = props => {
  const { title } = props;

  return (
    <div className="error-container" data-test="error-container">
      <h1 data-test="error-title">{title}</h1>

      <div>
        Navigate back to the <Link to="/">homepage</Link>
      </div>
    </div>
  );
};

export default Error;
