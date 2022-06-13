import React from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import PreLoader from '../../custom/PreLoader';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_51Il4wNJPykHv0tOWJcHHAh1wOrntqnGc357GdG1NHFUW3Tr918PFL8lF4fqeALPy3rImB7xVpPwllPrRFwIDXF8000xMVoYnR8');

const Payment = () => {
    const paymentOrder = useSelector((state) => state.finalorder);
    const {user} = useAuth();
   const orderInfo = paymentOrder.find((items) =>{
       return items.email === user.email
    })

    return (
        <div>
           {!orderInfo ? <PreLoader /> 
           : <div>
            <div>
                <h1>{orderInfo.name}</h1>
                <p>$ {orderInfo.grandTotal}</p>
            </div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    orderInfo={orderInfo}
                    />
                </Elements>
           </div>}
        </div>
    );
};

export default Payment;