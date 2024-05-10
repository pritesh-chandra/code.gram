import React from 'react';
import './Footer.styles.css';

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className="footer-container">
        <div className='footer-links'>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">API</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
            </ul>
        </div>
        <div className='footer-language-option'>
        <select name="languages" id="language">
            <option value="English (UK)">English (UK)</option>
            <option value="English (US)">English (US)</option>
        </select>
        </div>
        <div className='footer'>
           <p>© 2024 coder.gram</p> 
        </div>
      </div>
    </div>
  )
}

export default Footer