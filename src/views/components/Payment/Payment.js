import React from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import PreLoader from '../../custom/PreLoader';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import stripeImg from '../../../assets/stripe.png';
import '../../../styles/CheckoutForm.css';



const stripePromise = loadStripe('pk_test_51Il4wNJPykHv0tOWJcHHAh1wOrntqnGc357GdG1NHFUW3Tr918PFL8lF4fqeALPy3rImB7xVpPwllPrRFwIDXF8000xMVoYnR8');

const Payment = () => {
    const paymentOrder = useSelector((state) => state.finalorder);
    const {user} = useAuth();
   const orderInfo = paymentOrder.find((items) =>{
       return items.email === user.email
    })

    return (
       <div className='payment-area'>
             <div className='payment-container'>
            {!orderInfo ? <PreLoader /> 
           : <div>
            <div>
                <img className='stripe-logo' src={stripeImg} alt="" />
            </div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    orderInfo={orderInfo}
                    />
                </Elements>
           </div>}
        </div>
       </div>
    );
};

export default Payment;