import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Button } from 'react-bootstrap';
library.add(faCartShopping);

const CartBtn = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <LinkContainer to="/cart">
        <Nav.Link>
          {' '}
          <Button variant="outline-dark" className="me-2">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              className="me-1 ms-2 "
            />
            Cart({state.length})
          </Button>
        </Nav.Link>
      </LinkContainer>{' '}
    </>
  );
};

export default CartBtn;
