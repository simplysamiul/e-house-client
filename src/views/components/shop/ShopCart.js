import React from 'react';
import { Rating } from '@mui/material';
import { AiOutlineEye } from 'react-icons/ai';
import { BsHeart, BsCartPlus } from 'react-icons/bs';
import '../../../styles/ShopCart.css';
import { addToWishList } from '../../../redux/actions/wishAction';
import { addToCart } from '../../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';

const ShopCart = ({shopProduct}) => {
    const {product_name, main_img, review, price} = shopProduct;
    const dispatch = useDispatch();
    return (
        <div className='shop-cart' data-aos="zoom-in" data-aos-duration="500">
            <img src={main_img} alt="" />
            <div className="shop-add-list">
                    <button title='Quick View'> <i><AiOutlineEye /></i></button>
                    <button onClick={()=> dispatch(addToWishList(shopProduct))} title='Add Wish List'> <i><BsHeart /></i></button>
                    <button 
                    onClick={()=> dispatch(addToCart(shopProduct))} 
                    title='Add to cart'> <i><BsCartPlus />
                    </i></button>
            </div>
            <h4>{product_name}</h4>
            <h5>$ {price}</h5>
            <Rating name="read-only" value={parseInt(review)} readOnly />
        </div>
    );
};

export default ShopCart;