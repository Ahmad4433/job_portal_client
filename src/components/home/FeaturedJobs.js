import React from "react";
import { motion } from "framer-motion";
import "./FeaturedJobs.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const jobs = [
  {
    title: "Frontend React Developer",
    company: "TechVision Solutions",
    location: "San Francisco, USA",
    salary: "$80k - $110k"
  },
  {
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "Berlin, Germany",
    salary: "$60k - $90k"
  },
  {
    title: "Software Engineer",
    company: "CloudWorks",
    location: "London, UK",
    salary: "$90k - $120k"
  },
  {
    title: "Project Manager",
    company: "FutureBuild Co.",
    location: "Toronto, Canada",
    salary: "$70k - $95k"
  }
];

const FeaturedJobs = () => {
  return (
    <section className="featured-section">
      <motion.h2
        className="featured-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Featured Jobs
      </motion.h2>

      <div className="featured-grid">
        {jobs.map((job, index) => (
          <motion.div
            className="job-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>

            <div className="job-meta">
              <FaMapMarkerAlt className="loc-icon" />
              <span>{job.location}</span>
            </div>

            <p className="salary">{job.salary}</p>

            <button className="apply-btn">Apply Now</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
