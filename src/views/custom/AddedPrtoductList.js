import React from 'react';
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import '../../styles/AddedProductList.css';

const AddedPrtoductList = ({addedProduct}) => {
    const {main_img, _id} = addedProduct;
    const dispatch = useDispatch();
    return (
    <>
       <div className='added-product-list'>
            <img src={main_img} alt="" />
            <p>Qty: 1</p>
            <button onClick={()=> dispatch(removeFromCart(_id))}><ImCross /></button>
        </div>
        </>
    );
};

export default AddedPrtoductList;