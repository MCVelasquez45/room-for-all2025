import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../motionPresets';

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
          <motion.article className="program-card" variants={fadeInUp}>
            <span className="program-icon" aria-hidden="true">01</span>
            <h3>Stabilize the landing</h3>
            <p>
              Fully furnished transitional rooms, restorative routines, and peer support provide the
              steady foundation needed after release or crisis.
            </p>
          </motion.article>
          <motion.article className="program-card" variants={fadeInUp}>
            <span className="program-icon" aria-hidden="true">02</span>
            <h3>Wraparound coaching</h3>
            <p>
              Case management, mental health referrals, and life-skills workshops build confidence
              and reconnect residents with community resources.
            </p>
          </motion.article>
          <motion.article className="program-card" variants={fadeInUp}>
            <span className="program-icon" aria-hidden="true">03</span>
            <h3>Career reentry</h3>
            <p>
              Paid work crews, certification pathways, and employer partnerships translate into
              sustainable jobs and long-term housing stability.
            </p>
          </motion.article>
        </div>
        <motion.div className="abc-section" variants={fadeInUp}>
          <h3>The ABC Method</h3>
          <p className="abc-lead">A proven employment pathway: A Job → Better Job → Career.</p>
          <div className="abc-pathway" role="list">
            <motion.div className="abc-step" role="listitem" variants={fadeInUp}>
              <div className="abc-letter">A</div>
              <h4>A Job</h4>
              <p>
                Immediate paid work crews rebuild confidence, reestablish routine, and generate
                income right away.
              </p>
            </motion.div>
            <motion.div className="abc-arrow" aria-hidden="true" variants={fadeInUp}>
              →
            </motion.div>
            <motion.div className="abc-step" role="listitem" variants={fadeInUp}>
              <div className="abc-letter">B</div>
              <h4>Better Job</h4>
              <p>
                Skills training, certifications, and employer partners unlock roles with stability,
                benefits, and growth.
              </p>
            </motion.div>
            <motion.div className="abc-arrow" aria-hidden="true" variants={fadeInUp}>
              →
            </motion.div>
            <motion.div className="abc-step" role="listitem" variants={fadeInUp}>
              <div className="abc-letter">C</div>
              <h4>Career</h4>
              <p>
                Long-term mentorship, financial coaching, and advancement planning lead to careers
                that sustain housing.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Programs;
