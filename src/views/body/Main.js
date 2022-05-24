import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Faq from '../components/Faq';


const Home = React.lazy(()=> import('../pages/Home'))

const Main = () => {
    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
        </Suspense>
    );
};

export default Main;