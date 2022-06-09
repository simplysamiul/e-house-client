import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PreLoader from './PreLoader';

const ProductDetailsSlider = ({main_img,  detail_img, loading}) => {
    return (
        <>
        {loading ? <PreLoader /> 
            :<Carousel autoPlay infiniteLoop={true} showStatus={false} swipeable={false} showArrows={false}>
                <div>
                    <img src={main_img} alt="" />
                </div>
                <div>
                    <img src={detail_img?.img_one} alt="" />
                </div>
                <div>
                    <img src={detail_img?.img_two} alt="" />
                </div>
            </Carousel>}
        </>
    );
};

export default ProductDetailsSlider;