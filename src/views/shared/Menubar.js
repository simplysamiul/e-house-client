import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';
import { FaPinterestP, FaUserAlt, FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import CustomeMenu from '../custom/CustomeMenu';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import '../../styles/Menubar.css';

const Menubar = () => {
    const {logOut, user} = useAuth();
    console.log(user);
    const cardList = useSelector((state) => state.cart);
    const wishList = useSelector((state) =>state.wish);

    // Get added cart list
    const addedCartQty = cardList.reduce((previous, product) => {
        return !product.qty ? previous === 1 : previous + parseInt(product.qty)
    } , 0);
    return (
        <div className='menu-area'>
            <div className="menu-container">
            <div className="menu-header">
                    <p>Welcome to e-house store !! {user.displayName && <Link className='user-name' to="/">{user.displayName}</Link>}</p>
                    <div className="social-icon">
                        <Link to="/"><BsTwitter /></Link>
                        <Link to="/"><FaFacebookF /></Link>
                        <Link to="/"><FaPinterestP /></Link>
                        <Link to="/"><BsInstagram /></Link>
                        <Link to="/"><BsYoutube /></Link>   
                    </div>
                </div>
                <div className="menu-upper-content">
                    <div className="menu-search">
                        <input type="text" placeholder='Search the store' />
                        <button><BiSearchAlt /></button>
                    </div>
                    <div className="menu-upper-icon">
                        <Badge color="error" badgeContent={wishList.length} showZero>    
                        <Link to="/"><AiFillHeart /></Link>
                        </Badge>
                        <Badge color="error" badgeContent={addedCartQty} showZero>
                        <Link to="/cart"><GiShoppingBag /></Link>
                        </Badge>
                        <div className="profile-link">
                        {!user.email &&
                        <>
                        <Link to="/login"><FaUserAlt /></Link>
                         <Link className='login' to="/login">Login</Link>
                         </>
                         }
                        {user.email && <button className='logout-button' onClick={() => logOut()}>Log-out</button>}
                        </div>
                    </div>
                </div>
                <div className="main-menu">
                    <CustomeMenu />
                </div>
            </div>
        </div>
    );
};

export default Menubar;