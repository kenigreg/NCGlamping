import React from 'react';
import { Link } from '@reach/router';
import { Nav, Navbar } from 'react-bootstrap';
import NClogo from '../assets/NClogo.jpg';

const NavBar = props => {
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img
              alt="NCLogo"
              src={NClogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' NC Camping Holiday'}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <li className="nav-link">Home</li>
            </Link>
            <Link to="/articles">
              <li className="nav-link">Find A Campsite</li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
