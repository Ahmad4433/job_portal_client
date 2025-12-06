import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY INFO */}
        <div className="footer-col">
          <h3 className="footer-logo">JobHunt</h3>
          <p className="footer-desc">
            Your trusted platform to find jobs, build your profile, and connect with top companies worldwide.
          </p>

          <div className="footer-social">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Browse Jobs</li>
            <li>Top Companies</li>
            <li>Career Tips</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* JOB CATEGORIES */}
        <div className="footer-col">
          <h4>Job Categories</h4>
          <ul>
            <li>IT & Software</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Engineering</li>
            <li>Business</li>
          </ul>
        </div>

        {/* SUPPORT LINKS */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} JobHunt • All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
