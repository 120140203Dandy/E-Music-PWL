import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const ShopNow = () => {
  const [musicTypes, setMusicTypes] = useState([
    { id: 1, name: 'Guitar' },
    { id: 2, name: 'Keyboard' },
    { id: 3, name: 'Drums' },
    // Add more music types as needed
  ]);

  const [selectedType, setSelectedType] = useState('');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: '$19.99',
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$29.99',
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$39.99',
      image: 'product3.jpg',
    },
    // Add more dummy products as needed
  ]);

  const sortProductsByPrice = () => {
    // Sorting logic here
    // For example:
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  return (
    <Container>
      <h1 className="mt-4 mb-3 text-center">What are you looking for?</h1>
      <Row>
        {/* Daftar tipe alat musik di bagian kiri */}
        <Col md={3}>
          <h3>List of Music Types</h3>
          {musicTypes.map((type) => (
            <div key={type.id} onClick={() => setSelectedType(type.name)}>
              {type.name}
            </div>
          ))}
        </Col>
        {/* Produk dengan gambar, nama, dan harga di bagian kanan */}
        <Col md={9}>
          <Form className="mb-3">
            <Form.Group>
              <Form.Control type="text" placeholder="Search Products" />
            </Form.Group>
          </Form>
          <Button onClick={sortProductsByPrice}>Sort by Price</Button>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={4}>
                <div>
                  <img src={product.image} alt={product.name} />
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopNow;
