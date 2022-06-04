import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductService from '../../../services/Product.service';
import PreLoader from '../../custom/PreLoader';
import ProductDetailsSlider from '../../custom/ProductDetailsSlider';
import { Rating } from '@mui/material';
import { BsImageFill, BsEyeFill, BsFillHeartFill, BsCartPlusFill} from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { addToWishList } from '../../../redux/actions/wishAction';
import { addToCart } from '../../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';
import FullCategories from '../../custom/FullCatagories.js';
import '../../../styles/ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        setLoading(true)
        ProductService.getProductDetails(id)
        .then(res => {
            setProductDetails(res);
            setLoading(false);
        })
    },[id]);

    // Product items destructured
    const {brand, categories, color, main_img, detail_img, dimensions, price, product_name, review, weight, inch, material, carry, graphics, processor, type, Model } = productDetails;
    return (
        <div>
            {loading ? <PreLoader />
            :<div className='product-details-area'>
               <div className="product-details-container">
                   <div className="product-details-content">
                       <div className="product-details-img">
                            <ProductDetailsSlider
                            main_img={main_img}
                            detail_img={detail_img}
                            loading={loading}
                            />
                       </div>
                       <div className="prooduct-details-info">
                            <h3>{product_name}</h3>
                            <h5><span>Price:</span> $ {price} /-</h5>
                            <div className="product-info">
                                <h3> <p><BsImageFill /></p> Product Info</h3>
                            <p>Category: {categories}</p>
                            {type && <p>Type: {type}</p>}
                            {brand && <p>Brand : {brand}</p>}
                            {color && <p>Color : {color}</p> }
                            {inch && <p>Inch : {inch}</p> }
                            {dimensions && <p>Dimension: {dimensions}</p> }
                            {weight && <p>Weight: {weight}</p> }
                            {material && <p>Material : {material}</p>}
                            {carry && <p>{carry}</p>}
                            {graphics && <p>Graphics : {graphics}</p>}
                            {processor && <p>Processor: {processor}</p>}
                            {Model && <p>Model : {Model}</p>}
                            <div className="client-reviw">
                                <h1>{review} / <span>5</span></h1>
                            <p><Rating name="read-only" value={parseInt(review)} readOnly /> <span>(ClientReviews)</span> </p>
                            </div>
                            </div>
                            {/* Product added button */}
                            <div className="details-cart-add">
                            <button
                            onClick={()=> dispatch(addToWishList(productDetails))}
                            title='Add Wish List'> <i><BsFillHeartFill /></i></button>
                            <button 
                            onClick={()=> dispatch(addToCart(productDetails))} 
                            title='Add to cart'> <i><BsCartPlusFill />
                            </i></button>
                            <FullCategories
                            icon={<BiCategory />}
                            />
                        </div>
                        {/* <div className="product-quantity">
                            <input type="number" />
                        </div> */}
                       </div>
                   </div>
               </div>
            </div>}
        </div>
    );
};

export default ProductDetails;