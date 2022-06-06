import React from 'react';
import { Rating } from '@mui/material';
import { AiOutlineEye } from 'react-icons/ai';
import { BsHeart, BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../../../redux/actions/wishAction';
import { addToCart } from '../../../redux/actions/cartAction';

const SameProducts = ({sameProduct}) => {
    const dispatch = useDispatch();
    const {main_img, product_name, price, review, _id} = sameProduct;
    return (
        <div className='same-product' data-aos="zoom-in" data-aos-duration="500">
            <Link to={`/product_details_${_id}`}><img src={main_img} alt="" /></Link>
            <div className="same-product-add-list">
                    <Link to={`/product_details_${_id}`}><button title='Quick View'> <i><AiOutlineEye /></i></button></Link>
                    <button onClick={()=> dispatch(addToWishList(sameProduct))} title='Add Wish List'> <i><BsHeart /></i></button>
                    <button 
                    onClick={()=> dispatch(addToCart(sameProduct))} 
                    title='Add to cart'> <i><BsCartPlus />
                    </i></button>
            </div>
            <h4>{product_name}</h4>
            <h5>$ {price}</h5>
            <Rating name="read-only" value={parseInt(review)} readOnly />
        </div>
    );
};

export default SameProducts;