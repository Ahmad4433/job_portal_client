import React from "react";
import "./Applicants.css";
import ApplicantCard from "./ApplicantCard";

const Applicants = () => {
  // Temporary demo data
  const applicants = [
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      experience: 3,
      status: "Shortlisted",
      image: "https://i.ibb.co/1GJjWzS/user1.jpg",
    },
    {
      name: "Michael Lee",
      email: "michael.lee@example.com",
      experience: 2,
      status: "New",
      image: "https://i.ibb.co/pWVGwGd/user2.jpg",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      experience: 4,
      status: "Rejected",
      image: "https://i.ibb.co/K5HLNcC/user3.jpg",
    },
  ];

  return (
    <div className="applicants-page">
      <h1 className="applicants-title">Applicants</h1>

      {applicants.map((app, i) => (
        <ApplicantCard key={i} applicant={app} />
      ))}
    </div>
  );
};

export default Applicants;
