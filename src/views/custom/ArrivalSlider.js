import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../assets/newArrival/new-1.jpg';
import slide2 from '../../assets/newArrival/new-2.jpg';
import slide3 from '../../assets/newArrival/new-3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ArrivalSlider = () => {
    return (
        <Carousel autoPlay infiniteLoop={true} showStatus={false} swipeable={true} showThumbs={false} showIndicators={false}>
                <div className='arrival-img'>
                    <img style={{border:"3px solid #3078A6"}} src={slide1} alt='' />
                </div>
                <div className='arrival-img'>
                    <img style={{border:"4px solid #FFD55F"}} src={slide2} alt='' />
                </div>
                <div className='arrival-img'>
                    <img style={{border:"3px solid #3078A6"}} src={slide3} alt='' />
                </div>
            </Carousel>
    );
};

export default ArrivalSlider;