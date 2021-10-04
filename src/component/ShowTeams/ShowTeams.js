import React from 'react';
import { Col } from 'react-bootstrap';

import './ShowTeams.css';

const ShowTeams = (props) => {
    const {name,designation,img} = props.team
    return (
       <Col md={3} xs={6}>
            <div className="text-center teams">
                <img src={img} alt="..." />
                <h3>{name}</h3>
                <p><small>{designation}</small></p>
            </div>
       </Col>
    );
};

export default ShowTeams;