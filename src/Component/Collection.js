import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Collection = () => {
  const musicTypes = [
    { id: 1, name: 'Guitar', image: 'guitar.jpg' },
    { id: 2, name: 'Piano', image: 'piano.jpg' },
    { id: 3, name: 'Violin', image: 'violin.jpg' },
    { id: 4, name: 'Drums', image: 'drums.jpg' },
    { id: 5, name: 'Saxophone', image: 'saxophone.jpg' },
    { id: 6, name: 'Flute', image: 'flute.jpg' },
    { id: 7, name: 'Trumpet', image: 'trumpet.jpg' },
    { id: 8, name: 'Bass Guitar', image: 'bass-guitar.jpg' },
    // ...Tambahkan jenis alat musik lainnya sesuai kebutuhan
  ];

  return (
    <Container>
      <h1 className="mt-4 mb-3">Collection</h1>
      <Row xs={1} sm={2} lg={5} className="g-4">
        {musicTypes.map((musicType) => (
          <Col key={musicType.id}>
            <Card className="text-center">
              <Card.Img variant="top" src={musicType.image} alt={musicType.name} />
              <Card.Body>
                <Card.Title>{musicType.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Collection;