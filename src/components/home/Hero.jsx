import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import { FaSearch } from "react-icons/fa";
import heroBg from '../../assets/herobg.jpg'

const Hero = () => {
  return (
    <section className="hero-container">

      {/* LEFT SIDE TEXT */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h1 className="hero-title">
          Find Your <span>Dream Job</span> Today
        </h1>

        <p className="hero-subtitle">
          Search thousands of opportunities with top companies hiring near you.
        </p>

        <div className="hero-search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Job title, keywords…" />
          <button>Search Jobs</button>
        </div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <img
          src={heroBg}
          alt="hero"
          className="hero-image"
        />
      </motion.div>

    </section>
  );
};

export default Hero;
