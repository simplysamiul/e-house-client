import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductService from '../../../services/Product.service';
import PreLoader from '../../custom/PreLoader';
import ShopCart from './ShopCart';
import '../../../styles/ShopCart.css';

const ShopArray = () => {
    // For api
    const [shopProducts, setShopProducts] = useState([]);
    // For loading
    const [loading, setLoading] = useState(false);
    // For pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [shopPage, setShopPage] = useState(1);
    const eachpageData = 20;
    useEffect(()=>{
        setLoading(true);
        ProductService.getShopProduct(currentPage, eachpageData)
        .then(res => {
            setShopProducts(res.shopProducts);
            const count = res.count;
            const shopPgaeCount = Math.ceil(count / eachpageData);
            setShopPage(shopPgaeCount);
            setLoading(false);

        })
    },[currentPage]);
    return (
        <div className='shop-page-area'>
            <div className="shop-page-container">
                <div className="shop-page-content">
                    <div className="shop-page-header">
                    <div className="shop-products">
                        <h1>Our <span>Stock</span> </h1>
                    </div>
                    </div>
                    {loading ? <PreLoader /> 
                    :<div className="shop-page-products">
                        {
                            shopProducts.map((shopProduct)=> <ShopCart 
                            key={shopProduct._id}
                            shopProduct={shopProduct}
                            />)
                        }
                    </div>}
                    <div className="shop-page-number">
                    <Pagination
                        size="large"
                        count={shopPage}
                        color="primary" 
                        onChange={(e, value)=> setCurrentPage(value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopArray;