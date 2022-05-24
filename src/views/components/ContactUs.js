import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import {BsFillTelephoneFill, BsFillClockFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import ContactUsForm from '../custom/ContactUsForm';

const ContactUs = () => {
    return (
        <div className='contact-us-area'>
            <div className="contact-us-container">
                <div className="contact-us-content">
                    <div className="contact-form">
                        <ContactUsForm /> 
                    </div>
                    <div className="contact-info">
                            <div className="contact-info-header contact-title-border">
                                <h1>Contact Info</h1>
                            </div>
                            <div className="contacdt-info-content">
                            <p><ImLocation2 className='contact-icon' />College gate, Tongi, Gazipur</p>
                            <p><BsFillTelephoneFill className='contact-icon' /> +880 173 544 536</p>
                            <p><MdEmail className='contact-icon' /> e.house@support.com</p>
                            <p><BsFillClockFill className='contact-icon' />Open Time: 8:00am - 8:00pm</p>
                            <div className="contact-info-icon">
                                <p className='twitter'><BsTwitter /></p>
                                <p className='facebook'><FaFacebookF /></p>
                                <p className='pinstar'><FaPinterest /></p>
                                <p className='insta'><AiFillInstagram /></p>
                                <p className='pinstar'><BsYoutube /></p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;