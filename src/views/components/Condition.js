import React from 'react';
import '../../styles/Condition.css';

const Condition = () => {
    return (
        <div className='condition-area'>
            <div className="condition-container">
                <div className="condition-content">
                    <h1>PROHIBITED ACTIVITIES</h1>
                    <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                    <p>As a user of the Site, you agree not to:</p>
                    <ul>
                        <li>trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords;</li>
                        <li>make improper use of our support services or submit false reports of abuse or misconduct.</li>
                        <li>engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                        <li>interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Condition;