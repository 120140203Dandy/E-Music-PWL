import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Product1Image from './Product/Bass Guitar.png';

const Collection = () => {
  const musicTypes = [
    { id: 1, name: 'Guitar', image: Product1Image },
    { id: 2, name: 'Piano', image: 'piano.jpg' },
    
  ];

  return (
    <Container>
      <h1 className="mt-4 mb-3">Collection</h1>
      <Row xs={1} sm={2} lg={5} className="g-4">
        {musicTypes.map((musicType) => (
          <Col key={musicType.id}>
            <Link
              to={{
                pathname: '/shopnow',
                state: { selectedType: musicType.name },
              }}
              style={{ textDecoration: 'none' }}
            >
              <Card className="text-center">
                <Card.Img variant="top" src={musicType.image} alt={musicType.name} />
                <Card.Body>
                  <Card.Title>{musicType.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Collection;
