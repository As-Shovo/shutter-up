import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ShowServices.css'

const HeroServices = (props) => {
    const { image, catagory, price, durition } = props.services;
    return (
        <Col md={3} xs={12} className="justify-content-center">
            <div className="services-section">
                <img src={image} alt="" />
                <h4>{catagory}</h4>
                <h2>{price}$</h2>
                <h5><small>Course Durition :{durition}</small></h5>
                <Link to="/services">
                    <button>Click More</button>
                </Link>
            </div>
        </Col>
    );
};

export default HeroServices;