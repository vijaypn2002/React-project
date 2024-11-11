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
        <Link to="/">
          <img src="/images/LOGO.png" alt="Logo" className="logo-image" /> {/* Logo image */}
        </Link>
      </div>
      
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/integrations">Integrations</Link></li>
        <li className="dropdown">
          Resources
          <ul className="dropdown-menu">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/developer">Developer</Link></li>
            <li><Link to="/integration">Integration</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/glossary">Glossary</Link></li>
            <li><Link to="/help-center">Help Center</Link></li>
          </ul>
        </li>
      </ul>
      
      <div className="navbar-actions">
        <button className="navbar-sign-in">
          <Link to="/signin">Sign In</Link>
        </button>
        <button className="navbar-cta">
          <Link to="/get-started">Get Started with Yuga AI</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;