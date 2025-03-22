import React from "react";
import logo from "../components/assests/footer.png";
import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Logo Section */}
        <div className="logoSection">
          <img src={logo} alt="MediShed Logo" className="logo" />
        </div>

        {/* Quick Links Section */}
        <div className="section">
          <h4 className="sectionTitle">Quick Links</h4>
          <ul className="list">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/doctors" className="link">All Doctors</Link></li>
            <li><Link to="/shop" className="link">Shop</Link></li>
            <li><Link to="/about" className="link">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="section">
          <h4 className="sectionTitle">Contact Us</h4>
          <ul className="list">
            <li><a href="mailto:MediShed@gmail.com" className="link">MediShed@gmail.com</a></li>
            <li><Link to="/account" className="link">Account</Link></li>
            <li><Link to="/profile" className="link">My Profile</Link></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="section">
          <h4 className="sectionTitle">Follow Us</h4>
          <ul className="list">
            <li><a href="https://facebook.com" className="link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" className="link" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" className="link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="section">
          <h4 className="sectionTitle">Account</h4>
          <ul className="list">
            <li><Link to="/signup" className="link">Login / Signup</Link></li>
            <li><Link to="/cart" className="link">Cart</Link></li>
            <li><Link to="/wishlist" className="link">Wishlist</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <p className="bottomText">2025 © All rights reserved - MediShed</p>
      </div>
    </footer>
  );
}

export default Footer;
