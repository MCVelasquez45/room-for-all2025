import React from 'react';
import SmoothLink from '../components/SmoothLink.jsx';

const navLinks = [
  { to: 'mission', label: 'Mission' },
  { to: 'programs', label: 'Support' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'contact', label: 'Get Involved' }
];

const Header = () => {
  return (
    <header className="site-header sticky">
      <nav className="navbar">
        <div className="container nav-container">
          <SmoothLink to="hero" className="logo" aria-label="Scroll to top of page">
            Room&nbsp;for&nbsp;All
          </SmoothLink>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <SmoothLink to={link.to} className="nav-link" offset={-72}>
                  {link.label}
                </SmoothLink>
              </li>
            ))}
          </ul>
          <SmoothLink
            to="contact"
            className="btn-primary ghost"
            aria-label="Jump to Room for All contact forms"
            offset={-72}
          >
            Room for All Form
          </SmoothLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
