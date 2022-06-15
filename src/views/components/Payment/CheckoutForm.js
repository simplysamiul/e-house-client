import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/actions/cartAction';
import { clearWishList } from '../../../redux/actions/wishAction';
import { Alert } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import '../../../styles/CheckoutForm.css';

const CheckoutForm = ({orderInfo}) => {
    const {grandTotal} = orderInfo;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
            setSuccess('');
        }
        else{
            setError("");
            setSuccess('Your payment process is successfull !');
        }
        dispatch(clearCart());
        dispatch(clearWishList());
        setTimeout(() => {
            navigate("/");
        }, 5000);

    }
    return (
        <>
           <div className="payment-form-container">
            <div className="payment-form">
            <form className={success ? 'form-display' : ""} onSubmit={handleSubmit}>
                <CardElement
                className='payment-option'
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
                <button className='stripe-payment-button' type="submit" disabled={!stripe}>
                    Pay : $ {grandTotal}
                </button>
            </form>
            </div>
           </div>
            {error && <Alert severity="error">{error} !</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
        </>
    );
};

export default CheckoutForm;