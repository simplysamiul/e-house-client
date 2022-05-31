import React from 'react';
import ContactUsForm from '../custom/ContactUsForm';
import '../../styles/HomeContact.css';

const HomeContact = () => {
    return (
        <div className='home-contact-area'>
            <div className="home-contact-container">
                <ContactUsForm />
            </div>
        </div>
    );
};

export default HomeContact;