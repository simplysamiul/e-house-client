import React from 'react';
import {useSelector} from 'react-redux';
import PriceCartProducts from './PriceCartProducts';
import emptyImg from '../../../assets/empty-cart.png';
import {Link} from "react-router-dom";
import '../../../styles/PriceCart.css';

const PriceCart = () => {
    const addedCarts = useSelector((state) => state.cart);
    const countReducer = 
    (previous , product) => parseInt(previous) + parseInt(product.price) * parseInt(product.qty);
    const total = addedCarts.reduce( countReducer, 0);
    let delivary = 0;
    if(total === 0){
        delivary = 0;
    }
    else if(total <= 200){
        delivary =  12;
    }
    else if(total <= 1000){
        delivary =  10;
    }
    else if(total > 1000){
        delivary = 6;
    }
    else{
        delivary = 0;
    }
    // Tax 
    const tax = (5 / 100) * total;
    const totalTax = Math.ceil(tax);
    // Grand total
    const grandTotal = total + totalTax + delivary;

    return (
        <div className='price-cart-area'>
            <div className="price-cart-container">
                <div className="price-cart-content">
                    { addedCarts.length === 0
                    ?<div className='price-empty-cart'>
                    <h1>Your cart is empty</h1>
                    <img src={emptyImg} alt="" />
                  </div>
                    :<div className="price-cart-product">
                        {
                           addedCarts.map(addedCart => <PriceCartProducts 
                           key={addedCart._id}
                           img={addedCart.main_img}
                           product_name = {addedCart.product_name}
                           qty={addedCart.qty}
                           price={addedCart.price}
                           review={addedCart.review}
                           id={addedCart._id}
                           />) 
                        }
                    </div>}
                   <div className="price-cart">
                        <div className="price-cart-table">
                        <table>
                            <tr className='table-heading'>
                                <th>Qunty</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                                {
                                    addedCarts.map((addedCart) => <tr 
                                    key={addedCart._id} className="table-body-data">
                                        <td>{addedCart.qty}</td>
                                        <td>$ {addedCart.price}</td>
                                        <td>$ {parseInt(addedCart.price) * addedCart.qty}</td>
                                    </tr>)
                                }
                        </table>
                        </div>
                        <div className="subtotal each-total">
                            <p>Subtotal : </p>
                            <p>$ {total}</p>
                        </div>
                        {addedCarts.length > 0 && <div className="checkout-button">
                            <Link to="/shipping"><button>Proceed Check Out</button></Link>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceCart;