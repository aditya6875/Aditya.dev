import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Experience from './components/experiences';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
