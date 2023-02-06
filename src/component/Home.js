import React from 'react';
import Products from './Products';
import { Card, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Card className="bg-dark text-white border-0">
        <Card.Img
          src="/asset/bg.jpg"
          alt="Background"
          height="550px"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <Container>
            <Card.Title className="display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </Card.Title>
            <Card.Text className="lead fs-2">
              CHECK OUT ALL THE TRENDS
            </Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Home;
