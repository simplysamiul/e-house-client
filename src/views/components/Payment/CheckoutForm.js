import React, { useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import PaymentServices from '../../../services/Payment.Service';

const CheckoutForm = ({orderInfo}) => {
    const {grandTotal, name, email} = orderInfo;
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    useEffect(()=>{
        PaymentServices.postStripeInfo(grandTotal)
        .then(res => console.log(res))
    },[grandTotal]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error){
            setError(error.message);
        }
        else{
            setError("");
            console.log(paymentMethod)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay $ {grandTotal}
                </button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default CheckoutForm;