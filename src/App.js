import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Experience from './components/experiences';
import Contact from './components/contact';
import Footer from './components/footer';
import React, { useRef } from 'react';

function App() {
  const contactRef = useRef(null);
  return (

    <div className="App">
      <Navbar/>
      <Intro scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}/>
      <Experience/>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
