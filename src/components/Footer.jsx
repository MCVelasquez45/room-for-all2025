import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Room for All. Rebuilding dignity, one home at a time.</p>
        <span className="footer-note">Connect with us above to get involved.</span>
      </div>
    </footer>
  );
};

export default Footer;
