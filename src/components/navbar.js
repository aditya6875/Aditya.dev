import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavbarHeader = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Main navbar styles
  const navbar = {
    backgroundColor: darkMode ? '#000' : '#f9f9f9',
    color: darkMode ? '#fff' : '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isMobile ? '12px 20px' : '20px 80px',
    fontFamily: '"Rubik", sans-serif',
    borderBottom: darkMode ? '1px solid #222' : '1px solid #ddd',
    position: 'relative',
    overflow: 'hidden',
  };

  const leftSection = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#9a11bd',
    cursor: 'pointer',
  };

  const rightSection = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    position: 'relative',
  };

  const fullMessage = {
    backgroundColor: darkMode ? '#111' : '#eaeaea',
    color: darkMode ? '#9a11bd' : '#000',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    animation: 'slideIn 1s ease-out forwards',
    whiteSpace: 'nowrap',
    opacity: 0,
    transform: 'translateX(100%)',
    animationDelay: '0.5s',
  };

  const bubbleMessage = {
    backgroundColor: '#9a11bd',
    color: '#fff',
    padding: '4px 10px',
    borderRadius: '999px',
    fontSize: '12px',
    animation: 'popIn 0.6s ease-out forwards',
    opacity: 0,
    transform: 'scale(0.5)',
  };

  const themeIcon = {
    fontSize: '18px',
    color: darkMode ? '#fff' : '#000',
    cursor: 'pointer',
  };

  // Add keyframes globally
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slideIn {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }

      @keyframes popIn {
        0% { transform: scale(0.5); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={navbar}>
      <div style={leftSection}>Aditya.dev</div>

      <div style={rightSection}>
        {!isMobile ? (
          <div style={fullMessage}>🚀 Open to collaboration — let’s build something great!</div>
        ) : (
          <div style={bubbleMessage}>Hi 👋</div>
        )}
        <div onClick={toggleTheme}>
          {darkMode ? (
            <FaSun style={themeIcon} title="Light Mode" />
          ) : (
            <FaMoon style={themeIcon} title="Dark Mode" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarHeader;
