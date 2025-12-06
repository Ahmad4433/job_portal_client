import React from "react";
import "./EmployerDashboard.css";
import EmployerJobCard from "./EmployerJobCard";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const EmployerDashboard = () => {
  // Temporary job data
  const postedJobs = [
    {
      title: "Frontend React Developer",
      company: "TechVision",
      jobType: "Full-Time",
      location: "San Francisco, USA",
      applicants: 12,
    },
    {
      title: "UI/UX Designer",
      company: "Design Hub",
      jobType: "Remote",
      location: "Berlin, Germany",
      applicants: 7,
    }
  ];

  return (
    <div className="employer-dashboard">

      {/* SIDEBAR */}
      <aside className="employer-sidebar">
        <h2 className="sidebar-logo">JobHunt</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Post New Job</li>
          <li>Applicants</li>
          <li>Company Profile</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* MAIN AREA */}
      <div className="employer-main">

        {/* HEADER */}
        <div className="emp-header">
          <h1>Employer Dashboard</h1>
          <Button variant="contained">Post New Job</Button>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>{postedJobs.length}</h3>
            <p>Posted Jobs</p>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>19</h3>
            <p>Total Applicants</p>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>3</h3>
            <p>Active Listings</p>
          </motion.div>
        </div>

        {/* POSTED JOBS */}
        <h2 className="section-title">Your Posted Jobs</h2>

        {postedJobs.map((job, i) => (
          <EmployerJobCard key={i} job={job} />
        ))}

      </div>

    </div>
  );
};

export default EmployerDashboard;
