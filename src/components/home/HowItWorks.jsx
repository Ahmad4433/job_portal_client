import React from "react";
import "./HowItWorks.css";
import { motion } from "framer-motion";
import { FaUserPlus, FaFileAlt, FaSearch, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create an Account",
    desc: "Sign up as a job seeker or employer in just a few clicks."
  },
  {
    icon: <FaFileAlt />,
    title: "Build Your Profile",
    desc: "Upload your resume or post a job with clear details."
  },
  {
    icon: <FaSearch />,
    title: "Search & Explore",
    desc: "Find relevant jobs or browse skilled candidates."
  },
  {
    icon: <FaCheckCircle />,
    title: "Apply & Get Hired",
    desc: "Submit applications or hire the right talent instantly."
  }
];

const HowItWorks = () => {
  return (
    <section className="howitworks-section">
      <motion.h2
        className="hiw-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>

      <div className="hiw-grid">
        {steps.map((step, index) => (
          <motion.div
            className="hiw-card"
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="hiw-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
