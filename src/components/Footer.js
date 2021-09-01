import React, { Component } from 'react';

import '../styles/Footer.css'

import '../images/VK.png';
import '../images/Insta.png';
import '../images/Facebook.png';

class Footer extends Component {
    render() {
        return(
            <footer className='footer'>
                <div className='footer-text'>© SkillDrive Inc. 2020</div>
                <div className='social-links'>
                    <a className='social-link'>
                        <img src='./images/VK.png' alt='VK'></img>
                    </a>
                    <a className='social-link'>
                    <img src='./images/Insta.png'></img>
                    </a>
                    <a className='social-link'>
                    <img src='./images/Facebook.png'></img>
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer;