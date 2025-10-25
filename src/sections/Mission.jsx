import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../motionPresets';
import { missionPillars } from '../content/siteContent';

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
          {missionPillars.map((pillar) => (
            <motion.article className="mission-card" variants={fadeInUp} key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;
