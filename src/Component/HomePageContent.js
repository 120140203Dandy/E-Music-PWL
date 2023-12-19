import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import welcomeImage from './banner.png';
import { Link } from 'react-router-dom';
import Product1Image from './Product/Bass Guitar.png';
import Product2Image from './Product/Electric Guitars.png';
import Product3Image from './Product/Acoustic Guitars.png';

const HomePageContent = () => {
  const products = [
    { id: 1, name: 'Bass Guitars', image: Product1Image },
    { id: 2, name: 'Electric Guitars', image: Product2Image },
    { id: 3, name: 'Acoustic Guitars', image: Product3Image },
  ];

  return (
    <div className="content d-flex flex-column align-items-center vh-100 mt-5 overflow-auto">
      <div className="text-center">
        <h1>Strum, Play, Repeat: Your Melody, Our Instruments.</h1>
        <img
          src={welcomeImage}
          alt="Welcome"
          className="img-fluid"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        {/* Menampilkan banner */}
        <h2 className="mt-5 mb-3">Featured Products</h2>
        <Row className="justify-content-center align-items-center">
          {products.map((product) => (
            <Col key={product.id} className="d-flex justify-content-center">
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '16rem', margin: '10px' }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                    style={{ maxHeight: '200px' }}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    {/* Isi dengan bagian lain dari Card */}
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePageContent;
