import React from 'react';
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import {Link} from 'react-router-dom';
import '../../styles/AddedProductList.css';

const AddedPrtoductList = ({addedProduct}) => {
    const {main_img, _id, product_name, price, qty} = addedProduct;
    const dispatch = useDispatch();
    return (
    <>
       <div className='added-product-list'>
            <Link to="/cart"><img src={main_img} alt="" /></Link>
            <div className="add-product-price">
            <h5>{product_name}</h5>
            <p>$ {price}</p>
            </div>
            <p className='product-quantity'>Qty: {qty}</p>
            <button onClick={()=> dispatch(removeFromCart(_id))}><ImCross /></button>
        </div>
        </>
    );
};

export default AddedPrtoductList;