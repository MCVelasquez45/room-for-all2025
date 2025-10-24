import React from 'react';

const Header = () => {
  return (
    <header className="site-header sticky">
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="logo">
            Room&nbsp;for&nbsp;All
          </a>
          <ul className="nav-links">
            <li><a href="#mission">Mission</a></li>
            <li><a href="#programs">Support</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Get Involved</a></li>
          </ul>
          <a
            href="#contact"
            className="btn-primary ghost"
            aria-label="Jump to Room for All contact forms"
          >
            Room for All Form
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
