import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../motionPresets';
import { abcPathway, programJourney } from '../content/siteContent';

const Programs = () => {
  return (
    <motion.section
      id="programs"
      className="section programs"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="container">
        <motion.span className="section-kicker" variants={fadeInUp}>
          Reentry pathways
        </motion.span>
        <motion.h2 variants={fadeInUp}>
          Every resident follows a coached journey from intake to independence.
        </motion.h2>
        <motion.p className="section-lead" variants={fadeInUp}>
          Residents partner with our team to stabilize quickly, rebuild trust, and step back into
          the workforce with the tools they need to succeed.
        </motion.p>
        <div className="program-grid">
          {programJourney.map((program) => (
            <motion.article className="program-card" variants={fadeInUp} key={program.title}>
              <span className="program-icon" aria-hidden="true">
                {program.step}
              </span>
              <h3>{program.title}</h3>
              <p>{program.copy}</p>
            </motion.article>
          ))}
        </div>
        <motion.div className="abc-section" variants={fadeInUp}>
          <h3>The ABC Method</h3>
          <p className="abc-lead">A proven employment pathway: A Job → Better Job → Career.</p>
          <div className="abc-pathway" role="list">
            {abcPathway.map((item, index) =>
              item.separator ? (
                <motion.div
                  className="abc-arrow"
                  aria-hidden="true"
                  variants={fadeInUp}
                  key={`sep-${index}`}
                >
                  {item.separator}
                </motion.div>
              ) : (
                <motion.div className="abc-step" role="listitem" variants={fadeInUp} key={item.title}>
                  <div className="abc-letter">{item.letter}</div>
                  <h4>{item.title}</h4>
                  <p>{item.copy}</p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Programs;
