import React from 'react';
import Navbar from './templates/navbar.js';
import Intro from './templates/intro.js';
import Products from './templates/product.js';
import FarmerProfile from './templates/farmerpfp.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Products />
      <FarmerProfile />
    </div>
  );
}

export default App;
