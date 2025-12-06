import React from "react";
import "./EmployerJobCard.css";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const EmployerJobCard = ({ job }) => {
  return (
    <motion.div
      className="employer-job-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="ejc-header">
        <div>
          <h3 className="ejc-title">{job.title}</h3>
          <p className="ejc-company">{job.company}</p>
        </div>
        <span className="ejc-type">{job.jobType}</span>
      </div>

      <p className="ejc-location">{job.location}</p>
      <p className="ejc-applicants">{job.applicants} Applicants</p>

      <div className="ejc-actions">
        <Button variant="outlined" size="small">Edit</Button>
        <Button variant="outlined" size="small" color="error">Delete</Button>
        <Button variant="contained" size="small">View Applicants</Button>
      </div>
    </motion.div>
  );
};

export default EmployerJobCard;
