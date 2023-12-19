import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika autentikasi atau navigasi setelah login
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Register Account</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mt-3">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default Register;