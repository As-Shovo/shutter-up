import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayPricing from '../DisplayPricing/DisplayPricing';
import ShowServices from '../ShowServices/ShowServices';

const Services = () => {
    const [servicesData, setServicesData] = useState([])
    const [pricingData, setPricingData] = useState([])

    useEffect(() => {
        fetch('servicesdata.JSON')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, []);

    useEffect(() => {
        fetch('pricing.JSON')
            .then(res => res.json())
            .then(data => setPricingData(data))
    }, [])

    return (
        <div>
            <Container className="text-center">
                <h1 className="my-3 pt-4">Our Services</h1>
                <Row className="my-3 g-2">
                    {
                        servicesData.map(services => <ShowServices key={services.id} services={services}></ShowServices>)
                    }
                </Row>
                <h1 className="my-3 pt-4">Pricing</h1>
                <Row className="my-5 g-2">
                    {
                        pricingData.map(pricing => <DisplayPricing key={pricing.id} pricing={pricing}></DisplayPricing>)
                    }
                </Row>


            </Container>
        </div>
    );
};

export default Services;