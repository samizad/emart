import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus,
  faRightToBracket
} from '@fortawesome/free-solid-svg-icons';

import { LinkContainer } from 'react-router-bootstrap';

import CartBtn from './CartBtn';
library.add(faUserPlus, faRightToBracket);

const SiteNavbar = () => {
  return (
    <div>
      {' '}
      <Navbar
        bg="light"
        expand="lg"
        className="py-3 shadow-sm bg-white"
      >
        <Container>
          <Navbar.Brand to="#home">
            Diva Collection
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-dark" className="me-2">
            <FontAwesomeIcon
              icon="fa-solid fa-right-to-bracket"
              className="me-1  "
            />
            Login
          </Button>
          <Button variant="outline-dark" className="me-2">
            <FontAwesomeIcon
              icon="fa-solid fa-user-plus"
              className="me-1 ms-2"
            />
            Register
          </Button>
          <CartBtn />
        </Container>
      </Navbar>
    </div>
  );
};
export default SiteNavbar;
