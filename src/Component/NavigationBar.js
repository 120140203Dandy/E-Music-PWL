import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React from 'react';

const NavigationBar = () => {
    const navLinkStyle = {
        color: '#fff',
    };

    return (
        <Navbar style={{ backgroundColor: '#397367' }} variant="dark">
            <Container>
                <Link to="/">
                    <Navbar.Brand>E-Music</Navbar.Brand>
                </Link>
                <Nav className="justify-content-center w-100">
                    <Nav.Link as={Link} to="/just-arrived" style={navLinkStyle}>
                        Just Arrived
                    </Nav.Link>
                    <Nav.Link as={Link} to="/collection" style={navLinkStyle}>
                        Collection
                    </Nav.Link>
                    <Nav.Link as={Link} to="/shopnow" style={navLinkStyle}>
                        Shop Now
                    </Nav.Link>
                </Nav>
                <Link to="/login">
                    <Button variant="outline-light" className="ml-auto">Login</Button>
                </Link>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;

