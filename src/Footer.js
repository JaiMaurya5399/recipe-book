// Worked by Aneri Patel

import React from 'react';
import './Footer.css';
import logo from './img/logo.png';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-social">
          <span>Simple Recipes That Make You Feel Good</span>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
            <a href="#" aria-label="Pinterest"><i className="fa fa-pinterest"></i></a>
            <a href="#" aria-label="YouTube"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-logo">
           <img src={logo} alt="Logo" className="footer-logo-img" /> 
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <nav className="footer-nav">
          <Link to="/">Recipes</Link>
      
          <Link to="/about">About</Link>
        </nav>
        <div className="footer-legal">
          <Link to="#">RECIPEREALMN.COM</Link>
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
          <Link to="/terms">TERMS</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
