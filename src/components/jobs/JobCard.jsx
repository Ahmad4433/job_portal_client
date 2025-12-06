import React from "react";
import "./JobCard.css";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <motion.div
      className="jobcard"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      {/* TOP ROW */}
      <div className="jobcard-top">
        <div className="company-logo">
          <img src={job.companyLogo} alt="company" />
        </div>

        <div className="job-info">
          <h3 className="job-title">{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>
      </div>

      {/* META */}
      <div className="job-meta">
        <span className="job-location">
          <FaMapMarkerAlt /> {job.location}
        </span>
        <span className="job-category">{job.category}</span>
      </div>

      {/* DESCRIPTION */}
      <p className="job-desc">{job.description}</p>

      {/* SKILLS */}
      <div className="skills-row">
        {job.skills?.slice(0, 4).map((skill, i) => (
          <span key={i} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>

      <button className="view-btn">View Details</button>
    </motion.div>
  );
};

export default JobCard;
