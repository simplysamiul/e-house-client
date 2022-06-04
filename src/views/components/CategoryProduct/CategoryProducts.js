import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../../../services/Product.service';
import '../../../styles/CategoryProduct.css';
import PreLoader from '../../custom/PreLoader';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
    const { category } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        ProductService.getCategoryProduct(category)
        .then(res =>  {
            setCategoryProducts(res);
            setLoading(false);
        });
    },[category]);
    console.log(categoryProducts);
    return (
        <div className='all-categories-area'>
            <div className="all-categories-container">
                <div className="all-categories-content">
                    <div className="all-categories-header">
                        <h1>{category} <span>Collection</span> </h1>
                    </div>
                    {loading ? <PreLoader /> 
                    :<div className="all-categories-carts">
                        {
                           categoryProducts.map((categoryProduct)=> <CategoryProduct 
                           key={categoryProduct._id}
                           categoryProduct={categoryProduct}
                           />) 
                        }
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default CategoryProducts;