import React from 'react';
import { Col } from 'react-bootstrap';

const ShowGallery = (props) => {
    const {image} = props.image
    return (
       <Col md={4} xs={12}>
           <img className="w-100" src={image} alt="..." />
       </Col>
    );
};

export default ShowGallery;