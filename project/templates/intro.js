import React from 'react';
import './intro.css';

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Fresh Produce Delivered Globally</h1>
        <p>Join AgriFresh and export your quality produce worldwide.</p>
        <button className="hero-btn">Join as a Farmer</button>
      </div>
    </section>
  );
}

export default HeroSection;
