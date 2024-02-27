import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <header >
      <div className="n-wrapper">
        <div className="n-left">
          <span className="n-name">Amritpal</span>
          <span>toggle</span>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <button type="button">
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;