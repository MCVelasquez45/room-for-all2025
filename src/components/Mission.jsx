import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../motionPresets';

const Mission = () => {
  return (
    <motion.section
      id="mission"
      className="section mission"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="container">
        <motion.span className="section-kicker" variants={fadeInUp}>
          Our Mission
        </motion.span>
        <motion.h2 variants={fadeInUp}>
          Transitional homes that open new beginnings.
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Our mission is to create safe, supportive housing for returning citizens and anyone
          displaced from stable shelter—offering a clear route to rebuild their lives with dignity,
          purpose, and community.
        </motion.p>
        <div className="mission-pillars">
          <motion.article className="mission-card" variants={fadeInUp}>
            <h3>Stability through housing</h3>
            <p>
              We transform unused houses into welcoming transitional homes that provide immediate
              safety and structure for a fresh start.
            </p>
          </motion.article>
          <motion.article className="mission-card" variants={fadeInUp}>
            <h3>Reentry navigation</h3>
            <p>
              Trauma-informed mentoring, benefit navigation, and legal resources remove barriers so
              residents can reenter society with confidence.
            </p>
          </motion.article>
          <motion.article className="mission-card" variants={fadeInUp}>
            <h3>Pathways to purpose</h3>
            <p>
              Job readiness, work crews, and career coaching empower residents to step into lasting
              employment and community leadership.
            </p>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;
