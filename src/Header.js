import React from 'react';
import './Header.css';
import logo from './img/logo.png';

function Header({ searchQuery, onSearch }) {
  return (
    <header className="header-container">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <div className="tagline">
          <h1>Simple Recipes That Make You Feel Good</h1>
        </div>
      </div>
      <div className="search-section">
        <h2 className="header-title">ALL RECIPES</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="SEARCH FOR RECIPE"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
