import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import ShowGallery from '../ShowGallery/ShowGallery';

const Gallery = () => {
    const [galleryImg, setGalleryImg] = useState()

    useEffect(() => {
        fetch('gallerydata.JSON')
            .then(res => res.json())
            .then(data => setGalleryImg(data))
    }, [])



    return (
        <div>
           
            <Container className="my-2 text-center">
                <h1 className="my-3 py-2">Gallery</h1>
                <Row className="g-3">

                    {
                        galleryImg?.map(image => <ShowGallery key={image.id} image={image}></ShowGallery>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;