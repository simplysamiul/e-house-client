import React from 'react';
import { Rating } from '@mui/material';
import { AiOutlineEye } from 'react-icons/ai';
import { BsHeart, BsCartPlus } from 'react-icons/bs';
import { addToCart } from '../../../../redux/actions/cartAction';
import '../../../../styles/SingelArrival.css';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../../../../redux/actions/wishAction';
import { Link } from 'react-router-dom';

const SingelArrival = ({arrival}) => {
    const {product_name, main_img, review, price, _id} = arrival;
    const dispatch = useDispatch();
    return (
            <div className='arrival-cart' data-aos="zoom-in" data-aos-duration="500">
            <Link to={`/product_details_${_id}`}><img src={main_img} alt="" /></Link>
            <small>New</small>
            <div className="arrival-add-list">
                    <Link to={`/product_details_${_id}`}><button title='Quick View'> <i><AiOutlineEye /></i></button></Link>
                    <button onClick={()=> dispatch(addToWishList(arrival))} title='Add Wish List'> <i><BsHeart /></i></button>
                    <button 
                    onClick={()=> dispatch(addToCart(arrival))} 
                    title='Add to cart'> <i><BsCartPlus />
                    </i></button>
            </div>
            <h4>{product_name}</h4>
            <h5>${price}</h5>
            <Rating name="read-only" value={parseInt(review)} readOnly />
        </div>
    );
};

export default SingelArrival;