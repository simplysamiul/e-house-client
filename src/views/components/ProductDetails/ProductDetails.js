import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductService from '../../../services/Product.service';
import PreLoader from '../../custom/PreLoader';
import ProductDetailsSlider from '../../custom/ProductDetailsSlider';
import { Rating } from '@mui/material';
import { BsImageFill, BsEyeFill, BsFillHeartFill, BsCartPlusFill} from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { HiCash } from 'react-icons/hi';
import { GiReturnArrow, GiDeliveryDrone} from 'react-icons/gi';
import { FiShieldOff} from 'react-icons/fi';
import { addToWishList } from '../../../redux/actions/wishAction';
import { addToCart } from '../../../redux/actions/cartAction';
import FullCategories from '../../custom/FullCatagories.js';
import { useDispatch } from 'react-redux';
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
                       </div>
                       <div className="prduct-service-details">
                        <div className="delivary-area each-service">
                        <h5>Delivary</h5>
                        <p><GiDeliveryDrone /> <span>Home Delivery Service</span> </p>
                        <p><HiCash /> <span>Cash on Delivery Available</span> </p>
                        </div>
                        <div className="service each-service">
                            <h5>Services</h5>
                            <p><GiReturnArrow /> <span>7 days return</span> </p>
                            <p><FiShieldOff /> <span>Warranty not available</span> </p>
                        </div>
                        <div className="each-service">
                            <h5>Sold By</h5>
                            <div className=" sold-info">
                            <div className="each-info">
                                <p>Positive Rating</p>
                                <h5>80%</h5>
                            </div>
                            <div className="each-info">
                                <p>Ship on Time</p>
                                <h5>96%</h5>
                            </div>
                            <div className="each-info">
                                <p>Online Service Response Time</p>
                                <h5>99%</h5>
                            </div>
                            </div>
                        </div>
                        
                       {/* <div className="product-quantity">
                            <input type="number" placeholder='Quantity...' />
                            <button 
                            onClick={()=> dispatch(addToCart(productDetails))} 
                            title='Add to cart'> <i><BsCartPlusFill />
                            </i></button>
                            </div>
                            <div className="details-cart-add">
                            <button
                            onClick={()=> dispatch(addToWishList(productDetails))}
                            title='Add Wish List'> <i><BsFillHeartFill /></i></button>
                            <FullCategories
                            icon={<BiCategory />}
                            />
                        </div> */}
                       </div>
                   </div>
               </div>
            </div>}
        </div>
    );
};

export default ProductDetails;