import React, { useEffect, useState } from 'react';
import HomeProducts from './HomeProducts';
import productService from '../../../../services/Product.service';
import PreLoader from '../../../custom/PreLoader.js';
import '../../../../styles/HomeProduct.css';

const HomeProductArray = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const offerProducts = products.slice(9, 18);
    useEffect(()=>{
        setLoading(true);
        productService.getHomeOfferProduct()
        .then(res => {
            setProducts(res)
            setLoading(false)})
        .catch((err) =>{})
    },[]);
    return (
        <div className='discount-product-area'>
            <div className="section-header">
                <h1>Running <span>Discount</span> </h1>
            </div>
            {loading ? <PreLoader />
            :<div className="home-products-area">
                {
                  offerProducts.map((product)=> <HomeProducts 
                  key={product._id} 
                  product={product} />)  
                }
            </div>}
        </div>
    );
};

export default HomeProductArray;