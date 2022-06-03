import { Rating } from '@mui/material';
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsHeart, BsCartPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions/cartAction';
import { addToWishList } from '../../../redux/actions/wishAction';
import '../../../styles/NewProduct.css';

const SingelNewProduct = ({product, twoRow, oneRow}) => {
    const {main_img, price, product_name, review} = product;
    const dispatch = useDispatch();
    return (
        <div className={ 
        oneRow ? 'single-row-one' 
        :twoRow? 'single-row-two'
        :'new-product-cart'} data-aos="zoom-in" data-aos-duration="500">
            <img src={main_img} alt="" />
           <div>
           <div className={ 
               oneRow ? 'product-add-list-one'
               : twoRow? 'product-add-list-two'
               :"product-add-list"}>
                    <button title='Quick View'> <i><AiOutlineEye /></i></button>
                    <button onClick={()=> dispatch(addToWishList(product))} title='Add Wish List'> <i><BsHeart /></i></button>
                    <button 
                    onClick={()=> dispatch(addToCart(product))}
                    title='Add to cart'> <i><BsCartPlus />
                    </i></button>
            </div>
            <h4>{product_name}</h4>
            <h5>$ {price}</h5>
            <Rating name="read-only" value={parseInt(review)} readOnly />
           </div>
        </div>
    );
};

export default SingelNewProduct;