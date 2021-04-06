import React from 'react';
import Navbar from "./components/Nav";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ParticleBackground from './components/ParticleBackground';

import './App.css'

function App() {
  return (
    <div className="content">
      <ParticleBackground/>
      <Navbar/>
      <Home/>
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
