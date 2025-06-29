import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  const container = {
    backgroundColor: '#000',
    color: '#bbb',
    fontFamily: '"Rubik", sans-serif',
    padding: '30px 40px 20px',
    borderTop: '1px solid #222',
  };

  const footerContent = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: '30px',
  };

  const leftContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontSize: '14px',
  };

  const rightContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    fontSize: '14px',
    textAlign: 'right',
    color: '#888',
  };

  const flagText = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const copyright = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#666',
  };

  return (
    <div style={container}>
      <div style={footerContent}>
        {/* Left Side */}
        <div style={leftContainer}>
          <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#fff' }}>
            Aditya Gupta
          </span>
          <div style={flagText}>
            <span role="img" aria-label="India">🇮🇳</span>
            <span>Based in Gurgaon, India</span>
          </div>
          <div style={copyright}>
            <FaRegCopyright />
            <span>2025 Aditya. All rights reserved.</span>
          </div>
        </div>

        {/* Right Side */}
        <div style={rightContainer}>
          <span>Website designed in Figma,</span>
          <span>Built with React.js & React-Bootstrap</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
