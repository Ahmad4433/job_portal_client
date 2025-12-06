import React from "react";
import "./Categories.css";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaChartLine, FaHeadset, FaTruck, FaUserNurse } from "react-icons/fa";

const Categories = () => {
  const categories = [
    { icon: <FaLaptopCode />, title: "Software Development", jobs: "120 Jobs" },
    { icon: <FaBriefcase />, title: "Business & Management", jobs: "87 Jobs" },
    { icon: <FaChartLine />, title: "Marketing & Sales", jobs: "65 Jobs" },
    { icon: <FaHeadset />, title: "Customer Support", jobs: "43 Jobs" },
    { icon: <FaTruck />, title: "Logistics & Delivery", jobs: "55 Jobs" },
    { icon: <FaUserNurse />, title: "Healthcare", jobs: "40 Jobs" },
  ];

  return (
    <section className="categories-section">
      <motion.h2
        className="categories-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Popular Job Categories
      </motion.h2>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className="category-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="category-icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
            <p>{cat.jobs}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
