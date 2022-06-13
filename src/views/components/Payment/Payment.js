import React from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import PreLoader from '../../custom/PreLoader';

const Payment = () => {
    const paymentOrder = useSelector((state) => state.finalorder);
    const {user} = useAuth();
   const orderInfo = paymentOrder.find((items) =>{
       return items.email === user.email
    })

    return (
        <div>
           {!orderInfo ? <PreLoader /> 
           :<div>
                <h1>{orderInfo.name}</h1>
                <p>$ {orderInfo.grandTotal}</p>
            </div>}
        </div>
    );
};

export default Payment;