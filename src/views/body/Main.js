import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PreLoader from '../custom/PreLoader';


const Home = React.lazy(()=> import('../pages/Home'));
const Faq = React.lazy(()=> import('../components/Faq'));
const Condition = React.lazy(()=> import('../components/Condition'));
const ContactUs = React.lazy(()=> import('../components/ContactUs'));

const Main = () => {
    return (
        <Suspense fallback={<PreLoader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/conditions" element={<Condition />} />
                <Route path="/policy" element={<Condition />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
        </Suspense>
    );
};

export default Main;