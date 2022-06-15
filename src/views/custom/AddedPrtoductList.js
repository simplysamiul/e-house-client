import React from 'react';
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import {Link} from 'react-router-dom';
import { removeFromWishList } from '../../redux/actions/wishAction';
import '../../styles/AddedProductList.css';

const AddedPrtoductList = ({addedProduct, cartClick}) => {
    console.log(cartClick);
    const {main_img, _id, product_name, price, qty,} = addedProduct;
    const dispatch = useDispatch();
    return (
    <>
       <div className='added-product-list'>
            <Link to="/cart"><img src={main_img} alt="" /></Link>
            <div className="add-product-price">
            <h5>{product_name}</h5>
            <p>$ {price}</p>
            </div>
            {cartClick === "add" && <p className='product-quantity'>Qty: {qty}</p>}
        {   cartClick === "add" ? <button onClick={()=> dispatch(removeFromCart(_id))}      ><ImCross /></button>
            : cartClick === "wish" ? <button onClick={()=> dispatch(removeFromWishList(_id))}><ImCross /></button>
            : ""
        }
        </div>
        </>
    );
};

export default AddedPrtoductList;