import React, { useEffect, useState } from 'react';
import SingelArrival from './SingelArrival';
import { Pagination } from '@mui/material';
import ProductService from '../../../../services/Product.service';
import PreLoader from '../../../custom/PreLoader';
import ArrivalSlider from '../../../custom/ArrivalSlider.js';
import '../../../../styles/HomeArrival.css';

const HomeArrival = () => {
    // For data
    const [arrivals, setArrivals] = useState([]);
    // For preloading
    const [loading, setLoading] = useState(false);
    // For pagination
    const [currentPage, setCurrentPage] = useState(1);
    console.log(currentPage);
    const [arrivalPage, setArrivalPage] = useState(1);
    const eachpageData = 4;
    useEffect(()=>{
        setLoading(true);
        ProductService.getHomeArrival(currentPage, eachpageData)
        .then(res => {
            setArrivals(res.arrivalProducts);
            const count = res.count;
            const arrivalCount = Math.ceil(count/eachpageData);
            setArrivalPage(arrivalCount);
            setLoading(false);
        })
    },[currentPage]);
    return (
        <div className='home-arivval-area'>
            <div className="home-arivval-container">
                <div className="home-arivval-content">
                    <div className="home-arivval-slider">
                        <ArrivalSlider />
                    </div>
                    {loading ? <PreLoader /> 
                   :<div className="arivvals-cart-area">
                   
                    <div className="arivval-all-carts">
                        {
                            arrivals.map((arrival) => <SingelArrival
                            key={arrival._id}
                            arrival={arrival}
                            />)
                        }
                    </div>
                        <div className="arrival-pagination">
                        <Pagination 
                        count={arrivalPage}
                        defaultPage={currentPage} 
                        variant="outlined" 
                        color="primary" 
                        onChange={(e, value)=> setCurrentPage(value)}
                        />
                        </div>
                   </div>}
                </div>
            </div>
        </div>
    );
};

export default HomeArrival;