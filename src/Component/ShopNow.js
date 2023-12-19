import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import Product1Image from './ShopProd/Fender.png';
import Product2Image from './ShopProd/Makala.png';
import Product3Image from './ShopProd/Yamaha.png';
import Product4Image from './ShopProd/Remo.png';

const ShopNow = () => {
  const initialMusicTypes = [
    { id: 1, name: 'Guitar', checked: false },
    { id: 2, name: 'Keyboard', checked: false },
    { id: 3, name: 'Drums', checked: false },
  ];

  const initialProducts = [
    { id: 1, name: 'Makala MK-S Soprano Ukulele', price: 'Rp 2.000.000', image: Product1Image, type: 'Guitar' },
    { id: 2, name: 'Squier Mini Stratocaster®, Laurel Fingerboard, Dakota Red', price: 'Rp 13.000.000', image: Product2Image, type: 'Guitar' },
    { id: 3, name: 'Yamaha P71B 88-Key Digital Piano, Black', price: 'Rp 5.000.000', image: Product3Image, type: 'Keyboard' },
    { id: 4, name: 'Remo Fiberskyn TA-5208-52 8" Double Row Tambourine, Red', price: 'Rp 500.000', image: Product4Image, type: 'Drums' },
    // Add more products as needed
  ];

  const [musicTypes, setMusicTypes] = useState(initialMusicTypes);
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    setSelectedProduct(product);
    setShowModal(true);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
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
                <div className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Button onClick={() => setShowModal(true)} className="cart-button">
        Cart ({cart.length})
      </Button>

      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {cart.map((item) => (
                <Col key={item.id} md={4}>
                  <div className="product-card">
                    <img src={item.image} alt={item.name} className="product-image" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary">Checkout</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ShopNow;
