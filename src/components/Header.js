import React from "react";
import { Link } from "react-router-dom";

import { Navbar, NavbarBrand, NavItem } from "reactstrap";

import "../styles/Header.css";

const Header = () => {
  return (
    <header data-test="header-container">
      <Navbar className="navbar-wrapper">
        <NavbarBrand>
          <Link to="/" id="navbar-title">
            TDD Sandbox
          </Link>
        </NavbarBrand>
      </Navbar>
    </header>
  );
};

export default Header;
