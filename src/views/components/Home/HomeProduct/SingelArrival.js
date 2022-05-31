import React from 'react';
import '../../../../styles/SingelArrival.css';

const SingelArrival = ({arrival}) => {
    const {product_name, main_img, review, price} = arrival;
    return (
        <div>
            <h4>{product_name}</h4>
        </div>
    );
};

export default SingelArrival;