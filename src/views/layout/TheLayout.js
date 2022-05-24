import React from 'react';
import Main from '../body/Main';
import Footer from '../shared/Footer';
import Menubar from '../shared/Menubar';

const TheLayout = () => {
    return (
        <>
            <div className="menubar">
                <Menubar />
            </div>
            <div className="body">
                <Main />
            </div>
            <div className="footer-">
                <Footer />
            </div>
        </>
    );
};

export default TheLayout;