import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousell-3.png'
import './Works.css'

const Works = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex); }
    
    return (
        <div className="bg-color">
            <div className="text-center text-white pt-5">
                <h2>Here are some of <span style={{ color: '#7AB259' }}>our works</span></h2>
            </div>
            <div className="col-md-6 container-md " style={{paddingTop:"70px"}}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Works;