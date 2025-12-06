import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="nav-container">
        
        {/* LOGO */}
        <Link to="/" className="logo">
          JobHunt
        </Link>

        {/* MENU ICON MOBILE */}
        <div 
          className="menu-icon" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAVBAR LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          
          <NavLink to="/jobs" onClick={() => setMenuOpen(false)}>
            Jobs
          </NavLink>

          <NavLink to="/companies" onClick={() => setMenuOpen(false)}>
            Companies
          </NavLink>

          <NavLink to="/post-job" onClick={() => setMenuOpen(false)}>
            Post a Job
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <div className="auth-buttons">
            <Link to="/login" className="btn-login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="btn-register" onClick={() => setMenuOpen(false)}>
              Sign Up
            </Link>
          </div>

        </nav>

      </div>

    </header>
  );
};

export default Header;
