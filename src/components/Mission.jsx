import React from 'react';

const Mission = () => {
  return (
    <section id="mission" className="section mission">
      <div className="container">
        <span className="section-kicker">Our Mission</span>
        <h2>Transitional homes that open new beginnings.</h2>
        <p>
          Our mission is to create safe, supportive housing for returning citizens and anyone
          displaced from stable shelter—offering a clear route to rebuild their lives with dignity,
          purpose, and community.
        </p>
        <div className="mission-pillars">
          <article className="mission-card">
            <h3>Stability through housing</h3>
            <p>
              We transform unused houses into welcoming transitional homes that provide immediate
              safety and structure for a fresh start.
            </p>
          </article>
          <article className="mission-card">
            <h3>Reentry navigation</h3>
            <p>
              Trauma-informed mentoring, benefit navigation, and legal resources remove barriers so
              residents can reenter society with confidence.
            </p>
          </article>
          <article className="mission-card">
            <h3>Pathways to purpose</h3>
            <p>
              Job readiness, work crews, and career coaching empower residents to step into lasting
              employment and community leadership.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Mission;
