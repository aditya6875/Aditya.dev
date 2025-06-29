import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AdiAvatar from '../images/AdiAvatar.png';

const Intro = () => {
  const container1 = {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: '"Rubik", sans-serif',
    padding: '0 16px',
    boxSizing: 'border-box',
  };

  const introContent = {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '24px',
  };

  const nameContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const imageBox = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#9a11bd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  const textBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    textAlign: 'left',
    alignItems: 'flex-start',
  };

  const greeting = {
    fontSize: 'clamp(20px, 5vw, 26px)',
    fontWeight: 'bold',
  };

  const role = {
    fontSize: 'clamp(14px, 4vw, 18px)',
    color: '#ccc',
  };

  const introContainer = {
    fontSize: 'clamp(14px, 3vw, 16px)',
    lineHeight: '1.6',
    color: '#e0e0e0',
    maxWidth: '600px',
  };

  const functionContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const button = {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#9a11bd',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  };

  const divider = {
    fontSize: '20px',
    color: '#888',
  };

  const iconLink = {
    fontSize: '20px',
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <div style={container1}>
      <div style={introContent}>
        {/* Avatar and Name */}
        <div style={nameContainer}>
          <div style={imageBox}>
            <img
              src={AdiAvatar}
              alt="Aditya"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div style={textBox}>
            <span style={greeting}>Hey, I'm Aditya</span>
            <span style={role}>A Software Developer</span>
          </div>
        </div>

        {/* Intro Paragraph */}
        <div style={introContainer}>
          A fullstack developer with solid foundations in design. Passionate about crafting seamless user experiences, I thrive at the intersection of creativity and functionality.
        </div>

        {/* Buttons and Icons */}
        <div style={functionContainer}>
          <button style={button}>Contact Me</button>
          <button style={button}>View Projects</button>
          <span style={divider}>|</span>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={iconLink}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={iconLink}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
