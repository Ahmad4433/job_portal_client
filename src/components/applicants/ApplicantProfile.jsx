import React from "react";
import "./ApplicantProfile.css";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { FaEnvelope, FaPhone, FaBriefcase, FaUserGraduate } from "react-icons/fa";

const ApplicantProfile = () => {
  // DEMO PROFILE DATA — replace later with API
  const applicant = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 555 987 456",
    experience: 3,
    image: "https://i.ibb.co/1GJjWzS/user1.jpg",
    resumeUrl: "#",
    bio: "A passionate frontend developer with strong experience in React, UI/UX and modern JavaScript.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Figma", "Git"],
    education: [
      {
        degree: "BSc Computer Science",
        institute: "Stanford University",
        year: "2019"
      }
    ],
    workHistory: [
      {
        title: "Frontend Developer",
        company: "TechVision",
        duration: "2021 - Present",
        details:
          "Developed responsive React UIs, collaborated with backend team, optimized UI performance."
      },
      {
        title: "UI Designer",
        company: "DesignLab",
        duration: "2019 - 2021",
        details:
          "Worked on wireframes, prototyping, and improving user experience for mobile apps."
      }
    ]
  };

  return (
    <div className="app-profile-page">

      {/* PROFILE HEADER */}
      <motion.div
        className="profile-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src={applicant.image} className="profile-img" alt="" />

        <div>
          <h1 className="profile-name">{applicant.name}</h1>
          <p className="profile-bio">{applicant.bio}</p>

          <div className="contact-row">
            <span><FaEnvelope /> {applicant.email}</span>
            <span><FaPhone /> {applicant.phone}</span>
          </div>

          <div className="profile-buttons">
            <Button variant="contained">Shortlist</Button>
            <Button variant="outlined" color="error">Reject</Button>
            <Button variant="contained" color="primary">
              Download Resume
            </Button>
          </div>
        </div>
      </motion.div>

      {/* SKILLS */}
      <motion.div
        className="profile-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2>Skills</h2>
        <div className="skills-wrap">
          {applicant.skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </motion.div>

      {/* EDUCATION */}
      <motion.div
        className="profile-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2><FaUserGraduate /> Education</h2>
        {applicant.education.map((edu, i) => (
          <div key={i} className="edu-box">
            <h3>{edu.degree}</h3>
            <p>{edu.institute}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </motion.div>

      {/* WORK HISTORY */}
      <motion.div
        className="profile-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2><FaBriefcase /> Work Experience</h2>

        {applicant.workHistory.map((job, i) => (
          <div key={i} className="work-box">
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>
            <span className="duration">{job.duration}</span>
            <p className="details">{job.details}</p>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default ApplicantProfile;
