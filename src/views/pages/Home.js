import React from 'react';
import Header from '../components/Header';
import HomeArrival from '../components/Home/HomeProduct/HomeArrival';
import HomeProductArray from '../components/Home/HomeProduct/HomeProductArray';
import HomeContact from '../components/HomeContact';

const Home = () => {
    return (
        <>
            <Header />
            <HomeProductArray />
            <HomeArrival />
            <HomeContact />
        </>
    );
};

export default Home;