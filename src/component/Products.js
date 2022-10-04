import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card
} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);
  let componentMounted = useRef(true);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        'https://fakestoreapi.com/products'
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted.current = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <Col md={3}>
          <Skeleton height={350} />
        </Col>
        <Col md={3}>
          <Skeleton height={350} />
        </Col>
        <Col md={3}>
          <Skeleton height={350} />
        </Col>
        <Col md={3}>
          <Skeleton height={350} />
        </Col>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter(
      (x) => x.category === cat
    );
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="display-6 d-flex justify-content-center mb-5 pb-5">
          <Button
            variant="outline-dark"
            className="me-2"
            onClick={() => setFilter(data)}
          >
            All
          </Button>
          <Button
            variant="outline-dark"
            className="me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Collection
          </Button>
          <Button
            variant="outline-dark"
            className="me-2"
            onClick={() =>
              filterProduct("women's clothing")
            }
          >
            Women's Clothing
          </Button>
          <Button
            variant="outline-dark"
            className="me-2"
            onClick={() => filterProduct('jewelery')}
          >
            Jewelery
          </Button>
          <Button
            variant="outline-dark"
            className="me-2"
            onClick={() => filterProduct('electronics')}
          >
            Electronics
          </Button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <Col md={3} className="mb-4" key={product.id}>
                <Card className="h-100 text-center p-4">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    height="250px"
                  />
                  <Card.Body>
                    <Card.Title className="mb-0 lead fw-bold">
                      {product.title.substring(0, 12)}...
                    </Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <NavLink
                      to={`/products/${product.id}`}
                      variant="outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <Container className="my-5 py-5">
        <Row>
          <Col className="mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Latest Products
            </h1>
            <hr />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </Row>
      </Container>
    </div>
  );
};
export default Products;
