import React from "react";
import { Link } from "react-router-dom";

import { Navbar, NavItem } from "reactstrap";

import "./Header.css";

const Header = () => {
  return (
    <header data-test="header-container">
      <Navbar className="navbar-wrapper">
        <Link to="/" id="navbar-title">
          TDD Sandbox
        </Link>
      </Navbar>
    </header>
  );
};

export default Header;
