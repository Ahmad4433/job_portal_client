import React from "react";
import "./ApplicantCard.css";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const ApplicantCard = ({ applicant }) => {
  return (
    <motion.div
      className="applicant-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="applicant-left">
        <img src={applicant.image} alt="profile" className="app-img" />

        <div>
          <h3 className="app-name">{applicant.name}</h3>
          <p className="app-email">{applicant.email}</p>
          <p className="app-exp">{applicant.experience} Years Experience</p>
          <span className={`status-badge ${applicant.status.toLowerCase()}`}>
            {applicant.status}
          </span>
        </div>
      </div>

      <div className="applicant-actions">
        <Button variant="outlined">View Profile</Button>
        <Button variant="contained">Download Resume</Button>
      </div>
    </motion.div>
  );
};

export default ApplicantCard;
