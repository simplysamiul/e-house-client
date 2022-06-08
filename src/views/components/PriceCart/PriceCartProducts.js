import React from 'react';
import { Rating } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import { FiMinusCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/actions/cartAction';
import '../../../styles/PriceCart.css';

const PriceCartProducts = ({img, qty, price, review, product_name, id}) => {
    const dispatch = useDispatch();
    return (
        <div className='single-price-cart-product'>
           <div>
           <img src={img} alt="" />
           </div>
           <div className="price-cart-details">
                <h3>{product_name}</h3>
                <Rating className='price-cart-review' name="read-only" value={parseInt(review)} readOnly />
                <p>$ {price}</p>
           </div>
           <div className="price-cart-qty">
                <h5>QTY: {qty}</h5>
                <button className='qty-plus'><BsPlusCircle /></button>
                <button className='qty-minus'><FiMinusCircle /></button>
           </div>
           <button className='price-product-remove' onClick={()=> dispatch(removeFromCart(id))}><AiOutlineClose /></button>
        </div>
    );
};

export default PriceCartProducts;