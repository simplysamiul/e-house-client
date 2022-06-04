import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { BsHeart, BsCartPlus } from 'react-icons/bs';
import '../../../styles/CategoryProduct.css';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../../../redux/actions/wishAction';
import { addToCart } from '../../../redux/actions/cartAction';

const CategoryProduct = ({categoryProduct}) => {
    const {main_img, price, product_name, review, _id} = categoryProduct;
    const dispatch = useDispatch();
    return (
        <div className='all-category-cart'>
            <Link to={`/product_details_${_id}`}><img src={main_img} alt="" /></Link>
            <div className="category-add-list">
                    <Link to={`/product_details_${_id}`}><button title='Quick View'> <i><AiOutlineEye /></i></button></Link>
                    <button onClick={()=> dispatch(addToWishList(categoryProduct))} title='Add Wish List'> <i><BsHeart /></i></button>
                    <button 
                    onClick={()=> dispatch(addToCart(categoryProduct))} 
                    title='Add to cart'> <i><BsCartPlus />
                    </i></button>
            </div>
            <h4>{product_name}</h4>
            <h5>$ {price}</h5>
            <Rating name="read-only" value={parseInt(review)} readOnly />
        </div>
    );
};

export default CategoryProduct;