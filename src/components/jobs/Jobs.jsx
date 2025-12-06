import React, { useState } from "react";
import "./Jobs.css";
import JobCard from "./JobCard";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  // Temporary demo jobs (You will replace with API data)
  const jobsData = [
    {
      title: "Frontend React Developer",
      company: "TechVision",
      location: "San Francisco, USA",
      category: "IT & Software",
      companyLogo: "https://i.ibb.co/Zdt8gMc/google.png",
      description: "Join our frontend engineering team to build modern UIs.",
      skills: ["React", "JavaScript", "UI/UX", "API Integration"]
    },
    {
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Berlin, Germany",
      category: "Design",
      companyLogo: "https://i.ibb.co/MZkM6CZ/netflix.png",
      description: "Work on modern design systems & product experience.",
      skills: ["Figma", "Wireframes", "Prototyping", "User Research"]
    },
    {
      title: "Software Engineer",
      company: "CloudWorks",
      location: "London, UK",
      category: "IT & Software",
      companyLogo: "https://i.ibb.co/r4ttR1g/microsoft.png",
      description: "Backend + API development in global cloud infrastructure.",
      skills: ["Node.js", "MongoDB", "API Design", "Microservices"]
    }
  ];

  // filter logic
  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.category.toLowerCase().includes(category.toLowerCase())
    );
  });

  return (
    <div className="jobs-page">

      {/* LEFT FILTER SIDEBAR */}
      <div className="jobs-filters">
        <h3 className="filter-title">Filters</h3>

        {/* Search by Title */}
        <div className="filter-box">
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Search job title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Location */}
        <div className="filter-box">
          <label>Location</label>
          <input
            type="text"
            placeholder="Search location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="filter-box">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="it & software">IT & Software</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
          </select>
        </div>
      </div>

      {/* RIGHT JOBS LIST SECTION */}
      <div className="jobs-list-section">
        <h2 className="jobs-heading">Browse Jobs</h2>

        <div className="jobs-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))
          ) : (
            <p className="no-results">No jobs found</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default Jobs;
