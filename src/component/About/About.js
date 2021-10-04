import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ShowTeams from '../ShowTeams/ShowTeams';

import './About.css';

const About = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('team.JSON')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])


    return (
        <div>
            <Container className="text-center">
                    <h1 className="mt-4 pt-3">About Us</h1>
                <Row className="py-5 my-5">
                    <Col md={6} sx={12}>
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="..." />
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className="my-3">
                            <h1>WORLD <br></br>
                                PHOTOGRAPHY <br></br>
                                ORGAINATON
                            </h1>
                            <p>history of photography, method of recording the image of an object through the action of light, or related radiation, on a light-sensitive material. The word, derived from the Greek photos (“light”) and graphein (“to draw”), was first used in the 1830s. This article treats the historical and aesthetic aspects of still photography. For a discussion of the technical aspects of the medium, see photography, technology of. For a treatment of motion-picture photography, or cinematography, see motion picture, history of, and motion-picture technology.</p>
                        </div>
                    </Col>
                </Row>

                <div className="out-team">
                    <h1>Our Awesome Team</h1>
                    <Row className="g-2 my-3 py-2">
                        {
                            teams.map(team => <ShowTeams key={team.id} team={team}></ShowTeams>)
                        }
                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default About;