import React from 'react';
import './assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="circle-container">
                    <div className="relative size-2">
                        <div className="circle"></div>
                    </div>
                </div>
                <p className='location'>Actualmente en Valladolid, España</p>
            </div>
        </footer>
    );
};

export default Footer;