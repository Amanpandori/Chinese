


import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-burger" onClick={toggleMenu}>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#demos" className="navbar-link">Demos</a>
          <a href="#properties" className="navbar-link">Properties</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#blog" className="navbar-link">Blog</a>
        </div>
      </div>
      <div className="navbar-center">
        <span className="navbar-title">Aman Sidhu</span>
      </div>
      <div className="navbar-right">
        <a href="#contact" className="navbar-link">Contact Us</a>
        <a href="#valuation" className="navbar-link">Home Valuation</a>
        <a href="tel:+12067410340" className="navbar-phone">+1 206-741-0340</a>
      </div>
    </div>
  );
};

export default Navbar;

