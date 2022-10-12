import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/action/index';
import {
  Container,
  Row,
  Col,
  CloseButton
} from 'react-bootstrap';
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  const cartEmpty = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <Container className="py-4">
          <Row>
            <h3>Your Cart is Empty</h3>
          </Row>
        </Container>
      </div>
    );
  };

  const cartItems = (cartItem) => {
    return (
      <>
        <div
          className="px-4 my-5 bg-light rounded-3"
          key={cartItem.id}
        >
          <Container className="py-4">
            <CloseButton
              className="float-end"
              aria-label="Close"
              onClick={() => handleClose(cartItem)}
            ></CloseButton>
            <Row className="justify-content-center">
              <Col md={4}>
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  height="200px"
                  width="180px"
                />
              </Col>
              <Col md={4}>
                <h3>{cartItem.title}</h3>
                <p className="lead fw-bold">
                  ${cartItem.price}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  };

  return (
    <>
      {state.length === 0 && cartEmpty()}
      {state.length !== 0 && state.map(cartItems)}
    </>
  );
};

export default Cart;
