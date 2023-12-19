import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Product1Image from './Product/Yamaha.png';
import Product2Image from './Product/Hercules.png';
import Product3Image from './Product/Remo.png';
import Product4Image from './Product/Westco.png';
import Product5Image from './Product/Yamaha2.png';
import Product6Image from './Product/korg.png';

const JustArrived = () => {
  const products = [
    { id: 1, name: 'Yamaha STAGEPAS 600BT 680-Watt Portable PA System', price: 'Rp 8.000.000', image: Product1Image },
    { id: 2, name: 'Hercules DJ Control DJ Learning Kit', price: 'Rp 18.000.000', image: Product2Image },
    { id: 3, name: 'Remo Fiberskyn TA-5208-52 8" Double Row Tambourine, Red', price: 'Rp 500.000', image: Product3Image },
    { id: 4, name: 'Westco BO7203 Pre-tuned Junior Bongos, Natura', price: 'Rp 1.000.000', image: Product4Image },
    { id: 5, name: 'Yamaha MODX8+ 88-Key Synthesizer', price: 'Rp 8.000.000', image: Product5Image },
    { id: 6, name: 'Korg minilogue 37 Key Polyphonic Analog Synth, Silver', price: 'Rp 18.000.000', image: Product6Image },
  ];

  return (
    <Container className="text-center">
      <h1 className="mt-4 mb-3">Just Arrived</h1>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} alt={product.name} className="card-img" />
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