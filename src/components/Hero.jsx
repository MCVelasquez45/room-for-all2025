import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motionPresets';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      style={{ backgroundImage: "url('/assets/images/new/hero1.png')" }}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="overlay" />
      <motion.div className="hero-content" variants={fadeInUp}>
        <span className="hero-kicker">Transitional housing for reentry</span>
        <h1>Safe beginnings for returning citizens and neighbors in transition.</h1>
        <p>
          Room for All reimagines vacant properties into dignified transitional homes where people
          leaving incarceration—or facing housing insecurity—can reset, heal, and rebuild their
          futures with wraparound support.
        </p>
        <motion.div className="hero-actions" variants={fadeInUp} transition={{ delay: 0.2 }}>
          <a href="#contact" className="btn-primary">
            Partner with Us
          </a>
          <a href="#gallery" className="btn-secondary">
            Tour the Project Home
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
