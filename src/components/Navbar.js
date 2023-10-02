import React, { useState } from 'react';
import './Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#" id="logo">
          <span>Everest</span> e-Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="left_side">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Books</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Courses</Nav.Link>
          </Nav>
          <Nav className="right_side">
            <Nav.Link href="#">Sign In</Nav.Link>
            <Nav.Link href="#">Sign Up</Nav.Link>
          </Nav>
          <label className="toggle-switch">
            <input
              type="checkbox"
              className="toggle-input"
              onChange={toggleDarkMode}
              checked={isDarkMode}
            />
            <div className="toggle-slider"></div>
          </label>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
