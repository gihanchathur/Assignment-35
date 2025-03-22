import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/assests/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo on the Left */}
      <div className="logo">
        <img src={logo} alt="MediShed Logo" className="logoImage" />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? "nav-active" : ""}`}>
        <Link to="/" className="navLink">Home</Link>
        <Link to="/doctors" className="navLink">All Doctors</Link>
        <Link to="/profile" className="navLink">My Profile</Link>
        <Link to="/about" className="navLink">About Us</Link>
      </nav>

      {/* Sign Up Button (Always Visible) */}
      <Link to="/signup" className="signupButton">Sign Up</Link>
    </header>
  );
}

export default Header;
