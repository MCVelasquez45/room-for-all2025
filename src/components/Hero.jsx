import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: "url('/assets/images/new/hero1.png')" }}
    >
      <div className="overlay" />
      <div className="hero-content">
        <span className="hero-kicker">Transitional housing for reentry</span>
        <h1>Safe beginnings for returning citizens and neighbors in transition.</h1>
        <p>
          Room for All reimagines vacant properties into dignified transitional homes where people
          leaving incarceration—or facing housing insecurity—can reset, heal, and rebuild their
          futures with wraparound support.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Partner with Us
          </a>
          <a href="#gallery" className="btn-secondary">
            Tour the Project Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
