import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react';
import profile from '../assets/profile01.png';

const Hero = () => {
  const [currentWork, setCurrentWork] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  
  const workShowcase = [
    "Brand Identity Design",
    "UI/UX Development", 
    "Motion Graphics",
    "Video Production",
    "Team Leadership"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentWork((prev) => (prev + 1) % workShowcase.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPlaying, workShowcase.length]);

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerHeight = 80;
      const offset = window.innerHeight * 0.05;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-coral-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b6b' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Avatar/Profile */}
        <div className={`mb-8 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src={profile} alt="Aravindhan P"
              alt="Aravindhan P"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-bounce"></div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-coral-400 to-coral-600 bg-clip-text text-transparent">Aravindhan P</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Creative Designer, UI/UX Enthusiast & Motion Artist
          </p>
        </div>

        {/* Dynamic Work Showcase */}
        <div className={`mb-12 h-16 flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center space-x-4 bg-slate-800/80 backdrop-blur-md rounded-full px-8 py-4 border border-slate-700">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-coral-400 hover:text-coral-300 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <span className="text-slate-200 font-medium min-w-[200px] text-center">
              {workShowcase[currentWork]}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="group bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-coral-500/25 hover:scale-105"
          >
            <span>Explore My Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group border-2 border-slate-600 bg-slate-800/50 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-slate-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;