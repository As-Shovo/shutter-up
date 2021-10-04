import React from 'react';
import { Col } from 'react-bootstrap';
import './DisplayPricing.css';

const DisplayPricing = (props) => {
    const { title, price, service } = props.pricing;
    return (
        <Col md={3} xs={12}>
            <div className="pricing">
                <h1>{title}</h1>
                <div className="list-style">
                    <ul>
                        <li>{service[0]}</li>
                        <li>{service[1]}</li>
                        <li>{service[2]}</li>
                        <li>{service[3]}</li>
                        <li>{service[4]}</li>
                    </ul>
                </div>
                <h2>{price}$</h2>
                <button>Buy Now</button>
            </div>
        </Col>
    );
};

export default DisplayPricing;