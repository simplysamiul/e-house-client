import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import PreLoader from '../../custom/PreLoader';
import '../../../styles/Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = data => {
        setLoading(true);
        console.log(data);
        reset();
        setLoading(false);
    };
    
    return (
        <>
           <div className="shipping-form-area">
               <div className="shipping-form-container">
               <div className="shipping-header">
                   <h1>Delivery <span>Address</span></h1>
               </div>
                {loading ? <PreLoader />
                :<form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder='FullName' {...register("name", { required: true, maxLength: 20 })} />
                    <input type="text" placeholder='Rode, House no etc' {...register("address", { required: true,  maxLength: 40})} />
                    <input type="text" placeholder='City' {...register("city", { required: true})} />
                    <input type="number" placeholder='Zip Code' {...register("zip", { required: true})} />
                    <input type="number" placeholder='Phone Number' {...register("phone", { required: true})} />
                    <button className='shipping-info-submit' type='submit'>Submit</button>
                </form>}
               </div>
           </div>
        </>
    );
};

export default Shipping;