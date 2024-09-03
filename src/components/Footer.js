// frontend/src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Alumni Platform. All rights reserved.</p>
        <p>
          <a href="/privacy" className="hover:text-blue-300">Privacy Policy</a> |
          <a href="/terms" className="hover:text-blue-300">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
