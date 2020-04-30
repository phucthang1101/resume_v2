import React from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Skills/>
     <Services/>
     <Experience/>
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
