import React, { useEffect, useState } from 'react';
import SingelArrival from './SingelArrival';
import { Pagination } from '@mui/material';
import ProductService from '../../../../services/Product.service';
import PreLoader from '../../../custom/PreLoader';
import ArrivalSlider from '../../../custom/ArrivalSlider.js';
import arrival1 from '../../../../assets/newArrival/arrival-1.png';
import arrival2 from '../../../../assets/newArrival/arrival-2.png';
import '../../../../styles/HomeArrival.css';

const HomeArrival = () => {
    // For data
    const [arrivals, setArrivals] = useState([]);
    // For preloading
    const [loading, setLoading] = useState(false);
    // For pagination
    const [currentPage, setCurrentPage] = useState(1);
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
        <div className='home-arrival-area'>
            <div className="arrival-banner">
                <img data-aos="fade-right" data-aos-duration="500" src={arrival1} alt="" />
                <img data-aos="fade-left" data-aos-duration="500" src={arrival2} alt="" />
            </div>
            <div className="section-header">
                <h1>New <span>Arrival</span> </h1>
            </div>
            <div className="home-arivval-container">
                <div className="home-arivval-content">
                    <div className="home-arivval-slider" data-aos="flip-left" data-aos-duration="500">
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