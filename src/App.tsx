import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

function HomePage() {
  useEffect(() => {
    // Update document title
    document.title = "Aravindhan P - Creative Designer & Team Lead";
    
    // Add smooth scrolling behavior with offset
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          const headerHeight = 80; // Fixed header height
          const offset = window.innerHeight * 0.05; // 5% offset
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div id="hero" className="pt-20">
        <Hero />
      </div>
      <div id="about" className="pt-20">
        <About />
      </div>
      <div id="journey" className="pt-20">
        <Journey />
      </div>
      <div id="expertise" className="pt-20">
        <Expertise />
      </div>
      <div id="projects" className="pt-20">
        <Projects />
      </div>
      {/*<div id="gallery" className="pt-20">
        <Gallery />
      </div>*/}
      <div id="contact" className="pt-20">
        <Contact />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;