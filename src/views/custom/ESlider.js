import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel2 from '../../assets/carousel/carousel-2.PNG';
import carousel4 from '../../assets/carousel/carousel-4.PNG';
import carousel5 from '../../assets/carousel/carousel-5.PNG';
import carousel6 from '../../assets/carousel/carousel-6.PNG';
import '../../styles/Header.css';

const ESlider = () => {
    return (
        <Carousel autoPlay infiniteLoop={true} showStatus={false} swipeable={true} className="e-slider">
                <div>
                    <img style={{border:"3px solid #3078A6"}} src={carousel2} alt='' />
                </div>
                <div>
                    <img style={{border:"3px solid #3078A6"}} src={carousel4} alt='' />
                </div>
                <div>
                    <img style={{border:"3px solid #3078A6"}} src={carousel5} alt='' />
                </div>
                <div>
                    <img style={{border:"3px solid #3078A6"}} src={carousel6} alt='' />
                </div>
            </Carousel>
    );
};

export default ESlider;