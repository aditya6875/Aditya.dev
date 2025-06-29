import { FaCode, FaTools, FaCogs } from 'react-icons/fa';

const Experience = () => {
  const container = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#000', // black theme
    color: '#fff',
    fontFamily: '"Rubik", sans-serif',
    textAlign: 'center',
  };

  const heading = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subheading = {
    fontSize: '18px',
    marginBottom: '40px',
    maxWidth: '640px',
    color: '#bbb',
  };

  const boxes = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  };

  const box = {
    flex: '1 1 300px',
    backgroundColor: '#111', // deep black shade
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #222', // subtle border
    boxShadow: '0 0 12px rgba(255,255,255,0.03)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    transition: 'transform 0.3s ease',
    cursor: 'default',
  };

  const iconStyle = {
    fontSize: '26px',
    marginBottom: '14px',
    color: '#9a11bd', // highlight purple
  };

  const title = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#f1f1f1',
  };

  const description = {
    fontSize: '14px',
    color: '#aaa',
    marginBottom: '14px',
  };

  const list = {
    paddingLeft: '18px',
    fontSize: '14px',
    color: '#ddd',
    lineHeight: '1.6',
    textAlign: 'left',
  };

  return (
    <div style={container}>
      <h3 style={heading}>Building Digital Experiences</h3>
      <p style={subheading}>
        I specialize in crafting backend systems and functional interfaces. Here's what I offer:
      </p>

      <div style={boxes}>
        {/* Box 1 */}
        <div style={box}>
          <FaCode style={iconStyle} />
          <span style={title}>What I Can Do</span>
          <p style={description}>
            I help build reliable, scalable solutions to accelerate your business.
          </p>
          <ul style={list}>
            <li>UI Design</li>
            <li>Fullstack Development</li>
            <li>Database Design</li>
            <li>API Integration</li>
          </ul>
        </div>

        {/* Box 2 */}
        <div style={box}>
          <FaTools style={iconStyle} />
          <span style={title}>Tools I Use</span>
          <p style={description}>
            I use industry-standard technologies to deliver fast and secure products.
          </p>
          <ul style={list}>
            <li>Frontend: React, Bootstrap</li>
            <li>Backend: Spring Boot, REST APIs</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>Design: Figma</li>
          </ul>
        </div>

        {/* Box 3 */}
        <div style={box}>
          <FaCogs style={iconStyle} />
          <span style={title}>How I Work</span>
          <p style={description}>
            I follow clean architecture, test-driven practices, and agile delivery methods.
          </p>
          <ul style={list}>
            <li>Modular, maintainable code</li>
            <li>Agile development & CI/CD</li>
            <li>Component-driven UI</li>
            <li>Scalable microservices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
