import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowServices from '../ShowServices/ShowServices';

const Services = () => {
    const [servicesData,setServicesData] = useState([])

    useEffect(()=>{
        fetch('servicesdata.JSON')
        .then(res => res.json())
        .then(data => setServicesData(data))
    },[])

    return (
        <div>
            <Container>
                <Row className="my-3 g-2">
                    {
                        servicesData.map(services => <ShowServices key={services.id} services={services}></ShowServices> )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;