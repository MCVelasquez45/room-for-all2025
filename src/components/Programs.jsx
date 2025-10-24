import React from 'react';

const Programs = () => {
  return (
    <section id="programs" className="section programs">
      <div className="container">
        <span className="section-kicker">Reentry pathways</span>
        <h2>Every resident follows a coached journey from intake to independence.</h2>
        <p className="section-lead">
          Residents partner with our team to stabilize quickly, rebuild trust, and step back into
          the workforce with the tools they need to succeed.
        </p>
        <div className="program-grid">
          <article className="program-card">
            <span className="program-icon" aria-hidden="true">01</span>
            <h3>Stabilize the landing</h3>
            <p>
              Fully furnished transitional rooms, restorative routines, and peer support provide the
              steady foundation needed after release or crisis.
            </p>
          </article>
          <article className="program-card">
            <span className="program-icon" aria-hidden="true">02</span>
            <h3>Wraparound coaching</h3>
            <p>
              Case management, mental health referrals, and life-skills workshops build confidence
              and reconnect residents with community resources.
            </p>
          </article>
          <article className="program-card">
            <span className="program-icon" aria-hidden="true">03</span>
            <h3>Career reentry</h3>
            <p>
              Paid work crews, certification pathways, and employer partnerships translate into
              sustainable jobs and long-term housing stability.
            </p>
          </article>
        </div>
        <div className="abc-section">
          <h3>The ABC Method</h3>
          <p className="abc-lead">A proven employment pathway: A Job → Better Job → Career.</p>
          <div className="abc-pathway" role="list">
            <div className="abc-step" role="listitem">
              <div className="abc-letter">A</div>
              <h4>A Job</h4>
              <p>
                Immediate paid work crews rebuild confidence, reestablish routine, and generate
                income right away.
              </p>
            </div>
            <div className="abc-arrow" aria-hidden="true">→</div>
            <div className="abc-step" role="listitem">
              <div className="abc-letter">B</div>
              <h4>Better Job</h4>
              <p>
                Skills training, certifications, and employer partners unlock roles with stability,
                benefits, and growth.
              </p>
            </div>
            <div className="abc-arrow" aria-hidden="true">→</div>
            <div className="abc-step" role="listitem">
              <div className="abc-letter">C</div>
              <h4>Career</h4>
              <p>
                Long-term mentorship, financial coaching, and advancement planning lead to careers
                that sustain housing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
