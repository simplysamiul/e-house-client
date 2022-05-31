import React from 'react';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AiOutlineEye } from 'react-icons/ai';
import { BsHeart, BsCartPlus } from 'react-icons/bs';
import { addToCart } from '../../../../redux/actions/cartAction';
import '../../../../styles/HomeProduct.css';

const HomeProducts = ({product}) => {
    const {product_name, price, main_img, review} = product;
    const reviewNumber = parseInt(review);
    const dispatch = useDispatch();
    return (
            <div className="cart-container">
                <div className="cart-content"> 
                        <img src={main_img} alt="" />
                        <small>30%</small>
                        <div className="cart-add-list">
                            <button title='Quick View'> <i><AiOutlineEye /></i></button>
                            <button title='Add Wish List'> <i><BsHeart /></i></button>
                            <button 
                            onClick={()=> dispatch(addToCart(product))} 
                            title='Add to cart'> <i><BsCartPlus />
                            </i></button>
                        </div>
                    <div className="cart-details">
                        <h4>{product_name}</h4>
                        <p>${price}</p>
                        <div className="rating">
                        <Rating name="read-only" value={reviewNumber} readOnly />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HomeProducts;