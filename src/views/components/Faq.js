import React, { useState } from 'react';
import faq from '../../assets/faq/faq.png';
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import '../../styles/Faq.css';

const Faq = () => {

    // accordion state
    const [showAccordion, setShowAccordion] = useState(false);
    const [showAccordion1, setShowAccordion1] = useState(false);
    const [showAccordion2, setShowAccordion2] = useState(false);
    const [showAccordion3, setShowAccordion3] = useState(false);

    // Accordion function
    const accordionOne = () => {
        setShowAccordion(!showAccordion);
        setShowAccordion1(false);
        setShowAccordion2(false);
        setShowAccordion3(false);
    }
    const accordionTwo = () => {
        setShowAccordion(false);
        setShowAccordion1(!showAccordion1);
        setShowAccordion2(false);
        setShowAccordion3(false);
    }
    const accordionThree = () => {
        setShowAccordion(false);
        setShowAccordion1(false);
        setShowAccordion2(!showAccordion2);
        setShowAccordion3(false);
    }
    const accordionFour = () => {
        setShowAccordion(false);
        setShowAccordion1(false);
        setShowAccordion2(false);
        setShowAccordion3(!showAccordion3);
    }
    return (
        <div className='faq-area'>
            <div className="faq-container">
                <div className="faq-content">
                    <div className="singel-faq">
                        <div className="faq-question" onClick={()=> accordionOne()}>
                            <p>{showAccordion ?
                            <FaMinus /> : 
                            <BsPlusLg/>}</p>
                            <h3>What is yours product quality ?</h3>
                        </div>
                        {showAccordion && <p className='faq-ans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur laboriosam consectetur, laborum optio ipsum placeat repudiandae unde dolorem hic non maiores temporibus sunt. Corporis.</p>}
                    </div>
                    <div className="singel-faq">
                        <div className="faq-question" onClick={()=> accordionTwo()}>
                            <p>{showAccordion1 ?
                            <FaMinus /> : 
                            <BsPlusLg/>}</p>
                            <h3>What is yours product retun policy ? </h3>
                        </div>
                        {showAccordion1 && <p className='faq-ans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur laboriosam consectetur, laborum optio ipsum placeat repudiandae unde dolorem hic non maiores temporibus sunt. Corporis.</p>}
                    </div>
                    <div className="singel-faq">
                        <div className="faq-question" onClick={()=> accordionThree()}>
                            <p>{showAccordion2 ?
                            <FaMinus /> : 
                            <BsPlusLg/>}</p>
                            <h3>Wht is yours money back policy after return the prouct ?</h3>
                        </div>
                        {showAccordion2 && <p className='faq-ans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur laboriosam consectetur, laborum optio ipsum placeat repudiandae unde dolorem hic non maiores temporibus sunt. Corporis.</p>}
                    </div>
                    <div className="singel-faq">
                        <div className="faq-question" onClick={()=> accordionFour()}>
                            <p>{showAccordion3 ?
                            <FaMinus /> : 
                            <BsPlusLg/>}</p>
                            <h3>Where is yours physical address ?</h3>
                        </div>
                        {showAccordion3 && <p className='faq-ans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur laboriosam consectetur, laborum optio ipsum placeat repudiandae unde dolorem hic non maiores temporibus sunt. Corporis.</p>}
                    </div>
                </div>
                <div className="faq-img">
                    <img src={faq} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;