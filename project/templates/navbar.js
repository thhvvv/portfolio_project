import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">AgriFresh</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#profile">Farmer Profile</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
