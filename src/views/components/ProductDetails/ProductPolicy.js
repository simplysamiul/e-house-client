import React, { useState } from 'react';
import { Rating } from '@mui/material';
import { useForm } from "react-hook-form";

const ProductPolicy = () => {
    // Product policy state
    const [description, setDescription] = useState(true);
    const [warranty, setWaranty] = useState(false);
    const [reviews, setReviews] = useState(false);
    // Handel product policy button
    const handelDescription= () =>{
        setDescription(true);
        setWaranty(false);
        setReviews(false);
    };
    const handelWarranty = () =>{
        setWaranty(true);
        setDescription(false);
        setReviews(false);
    };
    const handelReviews = () =>{
        setReviews(true);
        setWaranty(false);
        setDescription(false);
    };
    // review form control
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        reset();
    };
    return (
        <div className='product-policy-area'>
            <div className="product-policy-container">
            <div className="product-policy-content">
                <div className="product-policy-button">
                    <button onClick={()=>handelDescription()}>Description</button>
                    <button onClick={()=>handelWarranty()}>WARRANTY INFORMATION</button>
                    <button onClick={()=>handelReviews()}>SHOW REVIEWS</button>
                </div>
                {description && <div className="description each-policy">
                    <h1>How it made?</h1>
                    <br />
                    <p>Looking back over the last 50 years of watch design, we’ve taken notes from classic design principles to create this collection, both understated in silhouette and colour palette.</p>
                    <br />
                    <p>The 7mm case is the thinnest in our collection and is proportionally balanced by an acutely tapered crown. The watch features some of our core branding elements: a red accent on the second hand and modest logo on the face and buckle.</p>
                    <br /><br />
                    <h1>How to preservation</h1>
                    <ul>
                        <li>Duis felis neque porta sed elit</li>
                        <li>Class aptent taciti sociosqu torquent conubia</li>
                        <li>Etiam gravida quis magna posue tincidunt</li>
                    </ul>
                </div>}
                {warranty && <div className="warenty each-policy">
                    <h1>Warrenty Details</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt officia cupiditate libero. Et id quis temporibus omnis? Voluptas, eaque tempore doloribus quia incidunt debitis exercitationem, dicta sit beatae totam recusandae, fugiat earum soluta veniam pariatur laborum ipsam distinctio cumque aut. Totam aliquam eveniet autem sapiente. Quisquam dolorum veniam amet eius dolores, quas repudiandae quidem dicta saepe quaerat doloribus quia maiores quos nostrum, cupiditate temporibus voluptatem voluptate quasi illo libero ipsum incidunt at. Laboriosam officia minus ullam mollitia voluptatibus ad ipsam maiores amet veniam delectus numquam hic totam vel voluptatum itaque in error earum, eos dolorem! Id itaque ratione error?</p>
                </div>}
                {reviews && <div className="reviews each-policy">
                    <div className="rating-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="rating each-review-field">
                        <p>Your review <small>*</small>: </p>
                        <Rating name="half-rating" defaultValue={0} required/>
                        </div>
                        <div className="review-message each-review-field">
                            <label>Message<small>*</small></label>
                            <textarea cols="30" rows="5" {...register("message")}/>
                        </div>
                        <div className="reviewer-info">
                        <div className="reviewer-name each-review-field">
                        <label>Name<small>*</small></label>
                        <input type="text" {...register("name")} required/>
                        </div>
                        <div className="reviewer-email each-review-field">
                        <label>Email<small>*</small></label>
                        <input type="email" {...register("email")} required/>
                        </div>
                        </div>
                        <button type='submit'>Submit</button>
                        </form>
                    </div>

                </div>}
            </div>
            </div>
        </div>
    );
};

export default ProductPolicy;