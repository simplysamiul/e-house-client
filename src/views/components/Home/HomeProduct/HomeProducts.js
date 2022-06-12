import React from 'react';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AiOutlineEye } from 'react-icons/ai';
import { BsHeart, BsCartPlus } from 'react-icons/bs';
import { addToCart } from '../../../../redux/actions/cartAction';
import { addToWishList } from '../../../../redux/actions/wishAction';
import { Link } from 'react-router-dom';
import '../../../../styles/HomeProduct.css';

const HomeProducts = ({product}) => {
    const {product_name, price, main_img, review, _id} = product;
    const reviewNumber = parseInt(review);
    const dispatch = useDispatch();
    return (
            <div className="cart-container" data-aos="zoom-in" data-aos-duration="500">
                <div className="cart-content"> 
                <Link to={`/product_details_${_id}`}><img src={main_img} alt="" /></Link>
                        <small>30%</small>
                        <div className="cart-add-list">
                            <Link to={`/product_details_${_id}`}><button title='Quick View'> <i><AiOutlineEye /></i></button></Link>
                            <button
                            onClick={()=> dispatch(addToWishList(product))}
                            title='Add Wish List'> <i><BsHeart /></i></button>
                            <button 
                            onClick={()=> dispatch(addToCart(product))} 
                            title='Add to cart'> <i><BsCartPlus />
                            </i></button>
                        </div>
                    <div className="cart-details">
                        <h4>{product_name}</h4>
                        <p>$ {price}</p>
                        <div className="rating">
                        <Rating name="read-only" value={reviewNumber} readOnly />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HomeProducts;