import React from "react";
import "./JobDetail.css";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBuilding, FaClock, FaMoneyBillWave } from "react-icons/fa";

const JobDetail = () => {
  // Demo data (later replace with API data or params)
  const job = {
    title: "Frontend React Developer",
    company: "TechVision Solutions",
    companyLogo: "https://i.ibb.co/Zdt8gMc/google.png",
    location: "San Francisco, USA",
    jobType: "Full-Time",
    salary: "$80k - $110k",
    posted: "2 days ago",
    skills: ["React", "JavaScript", "API Integration", "HTML", "CSS", "Git"],
    description:
      "We are looking for a passionate Frontend React Developer who can help us build smooth and modern UIs.",
    responsibilities: [
      "Develop high-quality React components",
      "Collaborate with backend team on API integration",
      "Participate in code reviews",
      "Optimize performance for maximum speed"
    ],
    requirements: [
      "2+ years experience with React.js",
      "Strong understanding of JavaScript",
      "Good grip on HTML, CSS, and UI/UX basics",
      "Experience with Git / GitHub"
    ]
  };

  return (
    <div className="jobdetail-page">

      {/* TOP HEADER */}
      <motion.div
        className="jobdetail-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src={job.companyLogo} alt="" className="jd-logo" />
        <div>
          <h1 className="jd-title">{job.title}</h1>
          <p className="jd-company">{job.company}</p>
        </div>
      </motion.div>

      {/* META INFO */}
      <motion.div
        className="jd-meta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span><FaMapMarkerAlt /> {job.location}</span>
        <span><FaBuilding /> {job.jobType}</span>
        <span><FaMoneyBillWave /> {job.salary}</span>
        <span><FaClock /> {job.posted}</span>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        className="jd-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Description</h2>
        <p>{job.description}</p>
      </motion.div>

      {/* SKILLS */}
      <motion.div
        className="jd-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Skills Required</h2>
        <div className="jd-skills">
          {job.skills.map((skill, i) => (
            <span key={i} className="jd-skill">{skill}</span>
          ))}
        </div>
      </motion.div>

      {/* RESPONSIBILITIES */}
      <motion.div
        className="jd-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Responsibilities</h2>
        <ul>
          {job.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* REQUIREMENTS */}
      <motion.div
        className="jd-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2>Requirements</h2>
        <ul>
          {job.requirements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* APPLY BUTTON (STICKY) */}
      <div className="jd-apply-bar">
        <button className="apply-btn">Apply Now</button>
      </div>

    </div>
  );
};

export default JobDetail;
