
import React from 'react';
import { Form, FormControl, Button, Row, Col, Card } from 'react-bootstrap'; 
import welcomeImage from './banner.png'; 
const HomePageContent = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$29.99', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: '$39.99', image: 'product3.jpg' },
  ];
  return (
    <div className="content d-flex flex-column align-items-center vh-100 mt-5">
      <div className="text-center">
        <h1>Strum, Play, Repeat: Your Melody, Our Instruments.</h1>
        <Form>
          <Row className="justify-content-center mb-4">
            <Col xs="auto" className="mb-2">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Col>
            <Col xs="auto" className="mb-2">
              <Button variant="outline-success">Search</Button>
            </Col>
          </Row>
        </Form>
        <img src={welcomeImage} alt="Welcome" style={{ maxWidth: '100%', height: 'auto' }} />
        <h2 className="mt-5 mb-3">Featured Products</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default HomePageContent;
