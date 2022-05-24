import React from 'react';
import { Link } from 'react-router-dom';
import FullCatagories from './FullCatagories';
import { FaQuran } from 'react-icons/fa';
import {BsWatch, BsPhone} from 'react-icons/bs';
import {MdMonitor} from 'react-icons/md';
import {AiOutlineCamera} from 'react-icons/ai';
import {GiLaptop, GiSofa} from 'react-icons/gi';
import {BiCategory} from  'react-icons/bi';
import '../../styles/Header.css';

const CategoriesCart = () => {
    return (
        <div className='categories-area'>
            <div className="categories-container">
                <div className="categories-content">
                    <h4> <p><BiCategory /></p> All Categories</h4>
                    <Link to="/"><BsWatch className='catagories-icon' /> Watch</Link>
                    <Link to="/"><BsPhone className='catagories-icon' />Phone</Link>
                    <Link to="/"><MdMonitor className='catagories-icon' />Tv/Monitor</Link>
                    <Link to="/"><AiOutlineCamera className='catagories-icon'/>Camera</Link>
                    <Link to="/"><FaQuran className='catagories-icon' /> Religions Items</Link>
                    <Link to="/"><GiLaptop className='catagories-icon' />Laptop</Link>
                    <Link to="/"><GiSofa className='catagories-icon' />Furnitures</Link>
                    <FullCatagories />
                </div>
                <div className="responsive-categories">
                <FullCatagories />
            </div>
            </div>
        </div>
    );
};

export default CategoriesCart;