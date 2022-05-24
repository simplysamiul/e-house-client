import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import {BsFillTelephoneFill, BsFillClockFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {SiMinutemailer} from 'react-icons/si';
import {FaDotCircle} from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import payment from '../../assets/footer/payment-img.webp';
import '../../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="footer-container">
                <div className="footer-header-content">
                <div className="footer-header">
                    <div className="footer-header-title">
                        <SiMinutemailer className='email-icon' />
                        <div>
                        <h2>Sign up For Newsletter</h2>
                        <p>Well never share your email address with a third-party.</p>
                        </div>
                    </div>
                    <div className="footer-subscribe">
                        <input type="email" placeholder='enter your email ..'/>
                        <button>Subscribe</button>
                    </div>
                </div>
                </div>
                    <div className="footer-body">
                        <div className="footer-content">
                        <div className="footer-contact singel-footer-item">
                            <h3>Contact Us</h3>
                            <p><ImLocation2 className='footer-icon' />College gate, Tongi, Gazipur</p>
                            <p><BsFillTelephoneFill className='footer-icon' /> +880 173 544 536</p>
                            <p><MdEmail className='footer-icon' /> e.house@support.com</p>
                            <p><BsFillClockFill className='footer-icon' />Open Time: 8:00am - 8:00pm</p>
                        </div>
                        <div className="online-services singel-footer-item">
                            <h3>Online Services</h3>
                            <p><FaDotCircle className='footer-icon-two' />Product Info</p>
                            <p><FaDotCircle className='footer-icon-two' />Complain</p>
                            <p><FaDotCircle className='footer-icon-two' />Support</p>
                        </div>
                        <div className="information singel-footer-item">
                            <h3>Information</h3>
                            <p><FaDotCircle className='footer-icon-two' />Features</p>
                            <p><FaDotCircle className='footer-icon-two' />Shop</p>
                            <p><FaDotCircle className='footer-icon-two' />Blog</p>
                            <p><FaDotCircle className='footer-icon-two' />Contact Us</p>
                        </div>
                        <div className="categories singel-footer-item">
                            <h3>Categories</h3>
                            <p><FaDotCircle className='footer-icon-two' />Watch</p>
                            <p><FaDotCircle className='footer-icon-two' />Laptop</p>
                            <p><FaDotCircle className='footer-icon-two' />Bages</p>
                            <p><FaDotCircle className='footer-icon-two' />Camera</p>
                            <p><FaDotCircle className='footer-icon-two' />Phone</p>
                            <p><FaDotCircle className='footer-icon-two' />View All</p>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                   <p>© Powered &amp; Designed by <i>Md Samiul Islam</i> </p>
                   <div className="footer-social-icon">
                        <Link to="/"><BsTwitter /></Link>
                        <Link to="/"><FaFacebookF /></Link>
                        <Link to="/"><FaPinterest /></Link>
                        <Link to="/"><AiFillInstagram /></Link>
                        <Link to="/"><BsYoutube /></Link> 
                    </div>
                    <img src={payment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;