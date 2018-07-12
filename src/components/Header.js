import React from "react";

import { Navbar, NavbarBrand, NavItem } from "reactstrap";

import "../styles/Header.css";

const Header = () => {
  return (
    <header data-test="header-container">
      <Navbar className="navbar-wrapper">
        <NavbarBrand>TDD Sandbox</NavbarBrand>

        <NavItem>Nav item</NavItem>
      </Navbar>
    </header>
  );
};

export default Header;
