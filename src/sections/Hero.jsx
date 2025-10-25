import React from 'react';
import { motion } from 'framer-motion';
import SmoothLink from '../components/SmoothLink.jsx';
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
          <SmoothLink to="contact" className="btn-primary" offset={-72}>
            Partner with Us
          </SmoothLink>
          <SmoothLink to="gallery" className="btn-secondary" offset={-72}>
            Tour the Project Home
          </SmoothLink>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
