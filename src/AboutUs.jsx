import React from 'react';
import './AboutUs.css'; // If you have specific styles for this page

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">Welcome to Paradise Nursery, where green meets serenity.</p>
      
      <div className="about-us-content">
        <p>
          At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to 
          provide a wide range of high-quality plants that not only enhance the beauty of your surroundings 
          but also contribute to a healthier and more sustainable lifestyle.
        </p>
        
        <p className="plant_extra_info">
          From air-purifying plants to aromatic herbs, our curated collection has something for every 
          plant lover. Our team of experts is dedicated to ensuring that each plant meets our strict 
          standards of quality and care.
        </p>

        <p>
          Whether you're a seasoned gardener or just starting your green journey, we're here to support 
          you every step of the way. Explore our collection and find the perfect addition to your home or office.
        </p>
      </div>

      <div className="about-us-motto">
        <h3>Join us in our mission to make the world a greener, healthier place.</h3>
      </div>
    </div>
  );
}

export default AboutUs;
