import React from "react";
import "./TopCompanies.css";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    logo: "https://i.ibb.co/Zdt8gMc/google.png",
    industry: "Technology",
    openings: 12
  },
  {
    name: "Amazon",
    logo: "https://i.ibb.co/Pw5jSsP/amazon.png",
    industry: "E-Commerce",
    openings: 9
  },
  {
    name: "Microsoft",
    logo: "https://i.ibb.co/r4ttR1g/microsoft.png",
    industry: "Software",
    openings: 7
  },
  {
    name: "Netflix",
    logo: "https://i.ibb.co/MZkM6CZ/netflix.png",
    industry: "Entertainment",
    openings: 5
  },
  {
    name: "Airbnb",
    logo: "https://i.ibb.co/BNw7GzV/airbnb.png",
    industry: "Hospitality",
    openings: 4
  },
  {
    name: "Spotify",
    logo: "https://i.ibb.co/pb6FPMq/spotify.png",
    industry: "Audio Tech",
    openings: 6
  }
];

const TopCompanies = () => {
  return (
    <section className="topcompanies-section">
      <motion.h2
        className="tc-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Top Companies Hiring
      </motion.h2>

      <div className="tc-grid">
        {companies.map((comp, index) => (
          <motion.div
            className="tc-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="tc-logo">
              <img src={comp.logo} alt={comp.name} />
            </div>

            <h3 className="tc-name">{comp.name}</h3>

            <p className="tc-industry">{comp.industry}</p>

            <p className="tc-openings">{comp.openings} open positions</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopCompanies;
