import React from 'react';
import {useSelector} from 'react-redux';
import PriceCart from '../PriceCart/PriceCart';

const ProceedOrder = () => {
    // const shippingInfo = useSelector((state) => console.log(state));
    return (
        <div>
            <h1>Thsi is place order page</h1>
            <PriceCart />
        </div>
    );
};

export default ProceedOrder;