import React from 'react';
import ESlider from '../custom/ESlider';
import CategoriesCart from '../custom/CategoriesCart';
import '../../styles/Header.css';

const Header = () => {
    return (
        <div className='header-area'>
            <div className="header-container">
                <div className="header-content">
                <div className="home-catagories">
                    <CategoriesCart />
                </div>
                <div className="header-slider">
                    <ESlider/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;