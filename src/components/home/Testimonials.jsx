import React from "react";
import "./Testimonials.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Frontend Developer",
    image: "https://i.ibb.co/8NK9nJm/user1.jpg",
    review:
      "I found my dream job within a week! The platform is super easy to use and the job recommendations were spot on."
  },
  {
    name: "Michael Smith",
    role: "Project Manager",
    image: "https://i.ibb.co/XbBf5m4/user2.jpg",
    review:
      "A very professional platform! Posting jobs is simple and finding great candidates has never been easier for my company."
  },
  {
    name: "Sophia Williams",
    role: "UI/UX Designer",
    image: "https://i.ibb.co/dQ1V50G/user3.jpg",
    review:
      "I loved how clean and modern the UI is. The applying process was smooth and I got quick responses from employers."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.h2
        className="testi-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        What People Say
      </motion.h2>

      <div className="testi-grid">
        {testimonials.map((item, index) => (
          <motion.div
            className="testi-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.name} className="testi-img" />

            <h3 className="testi-name">{item.name}</h3>
            <p className="testi-role">{item.role}</p>

            <p className="testi-review">“{item.review}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
