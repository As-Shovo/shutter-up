import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ShowServices.css'

const HeroServices = (props) => {
    const { image, catagory } = props.services;
    return (
        <Col md={4} xs={12} className="justify-content-center">
            <div className="services-section">
                <img src={image} alt="" />
                <h4>{catagory}</h4>
                <Link to="/services">
                    <button>Click More</button>
                </Link>
            </div>
        </Col>
    );
};

export default HeroServices;