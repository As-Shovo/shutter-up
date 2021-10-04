import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><i class="fas fa-camera-retro"></i> Shutter Up</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="my-auto">
                        <div className="nav-menu"><Link to="/home">Home</Link></div>
                        <div className="nav-menu"><Link to="/services">Services</Link></div>
                        <div className="nav-menu"><Link to="/gallery">Gallery</Link></div>
                        <div className="nav-menu"><Link to="/about">About</Link></div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;