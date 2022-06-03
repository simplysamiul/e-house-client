import React, { useEffect, useState } from 'react';
import ProductService from '../../../services/Product.service';
import PreLoader from '../../custom/PreLoader';
import SingelNewProduct from './SingelNewProduct';
import CategoriesCart from '../../custom/CategoriesCart';
import ArrivalSlider from '../../custom/ArrivalSlider';
import { AiOutlineMenu } from 'react-icons/ai';
import { Pagination } from '@mui/material';
import '../../../styles/NewProduct.css';

const NewProductsArray = () => {
    // Foe viewing row
    const [twoRow, setTwoRow] = useState(false);
    const [oneRow, setOneRow] = useState(false);
    // For new data
    const [newProducts, setNewProducts] = useState([]);
    // For preloading
    const [loading, setLoading] = useState(false);
    // For pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [newProductPage, setNewProductPage] = useState(1);
    const eachpageData = 9;
    useEffect(()=>{
        setLoading(true);
        ProductService.getNewProducts(currentPage, eachpageData)
        .then(res => {
            setNewProducts(res.newProducts);
            const count = res.count;
            const newPageCount = Math.ceil(count / eachpageData);
            setNewProductPage(newPageCount);
            setLoading(false);
        });
    },[currentPage]);

    // row click

    const clickTwoRow = () =>{
        setTwoRow(true)
        setOneRow(false) 
    };

    const clickOneRow = () =>{
        setOneRow(true)
        setTwoRow(false)
    };

    return (
        <div className='new-products-area'>
            <div className="new-products-container">
                <div className="new-products-content">
                    <div className="new-products-slider">
                        <div className="new-products-category">
                            <CategoriesCart />
                        </div>
                            <div className='product-slider'>
                            <ArrivalSlider />
                            </div>
                    </div>
                    <div className="new-products-carts-area">
                        <div className="view-type">
                        <p>View As: </p>
                        <div className="product-view-btn">
                            <button onClick={()=> clickTwoRow()}>2</button>
                            <button onClick={()=> clickOneRow()}><AiOutlineMenu /></button>
                        </div>
                        </div>
                        <div className="new-products">
                            <h1>New <span>Collection</span> </h1>
                        </div>
                       {loading ? <PreLoader />
                    :<div className={
                    twoRow ? 'view-row-2'
                    :oneRow ? 'view-row-1' 
                    :'new-products-carts-array'
                    }>
                               {
                                 newProducts.map(product => <SingelNewProduct
                                key={product._id}
                                product={product}
                                oneRow={oneRow}
                                twoRow={twoRow}
                                />)  
                               }
                        </div>}
                        <div className="new-product-pagination">
                        <Pagination
                        count={newProductPage}
                        color="primary" 
                        onChange={(e, value)=> setCurrentPage(value)}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProductsArray;