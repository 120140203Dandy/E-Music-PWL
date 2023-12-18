import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const JustArrived = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$29.99', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: '$39.99', image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: '$49.99', image: 'product4.jpg' },
    { id: 5, name: 'Product 5', price: '$59.99', image: 'product5.jpg' },
    { id: 6, name: 'Product 6', price: '$69.99', image: 'product6.jpg' },
  ];

  return (
    <Container className="text-center">
      <h1 className="mt-4 mb-3">Just Arrived</h1>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={3} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JustArrived;
