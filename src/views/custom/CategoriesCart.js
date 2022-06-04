import React from 'react';
import { Link } from 'react-router-dom';
import FullCatagories from './FullCatagories';
import { FaQuran } from 'react-icons/fa';
import {BsWatch, BsPhone} from 'react-icons/bs';
import {MdMonitor} from 'react-icons/md';
import {AiOutlineCamera, AiOutlinePlusCircle} from 'react-icons/ai';
import {GiLaptop, GiSofa} from 'react-icons/gi';
import {BiCategory} from  'react-icons/bi';
import '../../styles/Header.css';

const CategoriesCart = () => {
    return (
        <div className='categories-area'>
            <div className="categories-container">
                <div className="categories-content">
                    <h4> <p><BiCategory /></p> All Categories</h4>
                    <Link to="/catagory/watch"><BsWatch className='catagories-icon' /> Watch</Link>
                    <Link to="/catagory/phone"><BsPhone className='catagories-icon' />Phone</Link>
                    <Link to="/catagory/monitor"><MdMonitor className='catagories-icon' />Tv/Monitor</Link>
                    <Link to="/catagory/camera"><AiOutlineCamera className='catagories-icon'/>Camera</Link>
                    <Link to="/catagory/religionsitem"><FaQuran className='catagories-icon' /> Religions Items</Link>
                    <Link to="/catagory/laptop"><GiLaptop className='catagories-icon' />Laptop</Link>
                    <Link to="/catagory/furniture"><GiSofa className='catagories-icon' />Furnitures</Link>
                    <FullCatagories
                    text={'More Categories'}
                    icon={<AiOutlinePlusCircle />}
                    />
                </div>
                <div className="responsive-categories" data-aos="fade-down">
                <FullCatagories 
                text={'More Categories'}
                icon={<AiOutlinePlusCircle />}
                />
            </div>
            </div>
        </div>
    );
};

export default CategoriesCart;