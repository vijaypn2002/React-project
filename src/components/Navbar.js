import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src="/images/LOGO.png" alt="Logo" className="logo-image" />
          <span className="logo-text">Yugaa AI</span> {/* Company name */}
        </Link>
      </div>
      
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/pricing" className="link">Pricing</Link>
        </li>
        <li>
          <Link to="/support" className="link">Products</Link> {/* Link to Support page */}
        </li>
        <li className="dropdown">
          <span className="link">Resources</span>
          <ul className="dropdown-menu">
            <li><Link to="/about" className="dropdown-link">About Us</Link></li>
            <li><Link to="/contact" className="dropdown-link">Contact</Link></li>
            <li><Link to="/integrations" className="dropdown-link">Integrations</Link></li>
          </ul>
        </li>
      </ul>
      
      {/* Action Buttons */}
      <div className="navbar-actions">
        <button className="navbar-sign-in">
          {/* <Link to="/signin" className="button-link">Sign In</Link> */}
        </button>
        <button className="navbar-cta">
          <Link to="/get-started" className="button-link">Get Started with Yugaa AI</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
