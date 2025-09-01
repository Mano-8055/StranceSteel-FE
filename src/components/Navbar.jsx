import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo1fit.png";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <div className="overall">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="logo">
          <img src={logo} alt="Strance Steel logo" />
        </div>
        <div className="nav-icons">
          <span>🛒</span>
          <span>❤️</span>
          <Link to="/register">Register</Link>
          <span>|</span>
          <Link to="/login">Login</Link>
        </div>
        {/* Search bar for mobile view */}
        <div className={`search-bar mobile-visible`}>
          <input type="text" placeholder="Search your product!" />
          <button>🔍</button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="menu-bar">
        {/* Contact support is now on the left for both desktop and mobile */}
        <div className="contact-support">💬 Contact support</div>
        
        {/* Menu Items (Off-canvas) */}
        <ul className={`menu-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/enquiry" onClick={closeMenu}>Enquiry</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/become-seller" onClick={closeMenu}>Become a Seller</Link></li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Overlay for mobile view */}
        <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>
      </div>
      </div>
    </>
  );
}

export default Navbar;