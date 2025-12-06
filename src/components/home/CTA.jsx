import React from "react";
import "./CTA.css";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h2 className="cta-title">
          Ready to Find Your Next Opportunity?
        </h2>

        <p className="cta-subtitle">
          Create your account today and start applying to top jobs instantly.
        </p>

        <button className="cta-btn">Get Started</button>
      </motion.div>
    </section>
  );
};

export default CTA;
