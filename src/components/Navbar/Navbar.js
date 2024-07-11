


import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
          <Link to='/' className="navbar-link">Home</Link>
          <Link to='/about' className="navbar-link">About</Link>
          <Link to='/process' className="navbar-link">Process</Link>
          <Link to='/notebook' className="navbar-link">NoteBook</Link>
          <Link to='/project' className="navbar-link">Project</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

