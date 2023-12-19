import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ShopNow = () => {
  const initialMusicTypes = [
    { id: 1, name: 'Guitar', checked: false },
    { id: 2, name: 'Keyboard', checked: false },
    { id: 3, name: 'Drums', checked: false },
  ];

  const initialProducts = [
    { id: 1, name: 'Guitar 1', price: '$199', image: 'guitar1.jpg', type: 'Guitar' },
    { id: 2, name: 'Guitar 2', price: '$299', image: 'guitar2.jpg', type: 'Guitar' },
    { id: 3, name: 'Keyboard 1', price: '$399', image: 'keyboard1.jpg', type: 'Keyboard' },
    { id: 4, name: 'Drums 1', price: '$499', image: 'drums1.jpg', type: 'Drums' },
    // Add more products as needed
  ];

  const [musicTypes, setMusicTypes] = useState(initialMusicTypes);
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const handleTypeClick = (id) => {
    const updatedTypes = musicTypes.map((type) =>
      type.id === id ? { ...type, checked: !type.checked } : type
    );
    setMusicTypes(updatedTypes);
    filterProducts(updatedTypes);
  };

  const filterProducts = (types) => {
    const selectedTypes = types.filter((type) => type.checked).map((type) => type.name);
    const filteredProducts = selectedTypes.length
      ? initialProducts.filter((product) => selectedTypes.includes(product.type))
      : initialProducts;
    setProducts(filteredProducts);
  };

  const sortProductsByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price.localeCompare(b.price));
    setProducts(sortedProducts);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Container>
      <h1 className="mt-4 mb-3 text-center">What are you looking for?</h1>
      <Row>
        <Col md={3}>
          <h3>List of Music Types</h3>
          {musicTypes.map((type) => (
            <div key={type.id} onClick={() => handleTypeClick(type.id)}>
              <Form.Check
                type="checkbox"
                label={type.name}
                checked={type.checked}
                onChange={() => handleTypeClick(type.id)}
              />
            </div>
          ))}
        </Col>
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
                  <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  <Button onClick={() => addToCart(product)}>Add to Cart</Button>
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
