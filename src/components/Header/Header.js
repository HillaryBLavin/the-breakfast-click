import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
 } from 'reactstrap';
// import Score from "./components/Score";

const Header = props => (
  <Navbar color="light" light expand="md" className="sticky-top">
  <NavbarBrand href="/">The Breakfast Click</NavbarBrand>
    <Nav className="mx-auto" navbar>
      <NavItem className="text-nowrap flex-row mx-md-auto order-1 order-md-2">
        {props.message}
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        Your Score: {props.score} Top Score: {props.topScore}
      </NavItem>
    </Nav>
</Navbar>
);
  
export default Header;