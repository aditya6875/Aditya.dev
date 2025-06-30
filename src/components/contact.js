import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const formRef = useRef(); // Reference to the form element

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6oip4ij',      // Your service ID
        'template_oz3y11j',      // Your actual template ID (not a message)
        formRef.current,        // <-- Use form DOM node here
        'cmre956UgcHinbeb8'     // Your Public Key (User ID)
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });

          setTimeout(() => setSubmitted(false), 2500);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields!');
      return;
    }

    console.log('📨 Message Submitted:', formData);
    setSubmitted(true);

    // Clear form after short delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  // --- STYLES ---
  const container = {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: '60px 40px',
    flexWrap: 'wrap',
    fontFamily: '"Rubik", sans-serif',
    gap: '40px',
  };

  const leftContainer = {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '8px',
    padding: '20px',
  };

  const heading = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#9a11bd',
  };

  const subText = {
    fontSize: '16px',
    color: '#ccc',
    lineHeight: '1.5',
  };

  const rightContainer = {
    flex: '1 1 400px',
    backgroundColor: '#111',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(255,255,255,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const inputStyle = {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #333',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '100px',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#9a11bd',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
  };

  const successMessage = {
    marginTop: '10px',
    textAlign: 'center',
    color: '#00e676',
    fontWeight: '600',
    opacity: submitted ? 1 : 0,
    transition: 'opacity 0.4s ease-in-out',
  };

  return (
    <div style={container}>
      {/* Left Section */}
      <div style={leftContainer}>
        <h4 style={heading}>Have an idea? Let’s bring it to life — connect with me!</h4>
        <p style={subText}>Let’s code, collaborate, and create.</p>
      </div>

      {/* Right Section */}
      <form ref={formRef} style={rightContainer} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
        />

        <div style={buttonContainer}>
          <button type="submit" style={buttonStyle}>Send</button>
        </div>

        <div style={successMessage}>✔ Message sent successfully!</div>
      </form>
    </div>
  );
};

export default Contact;
