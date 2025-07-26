import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import profile from '../assets/profile01.png';
import resumePDF from '../assets/Aravindhan-Resume.pdf';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          const headerHeight = 50;
          const offset = window.innerHeight * 0.001;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const headerHeight = 50;
        const offset = window.innerHeight * 0.001;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    //window.open('/Aravindhan-Resume.pdf', '_blank');
    window.open(resumePDF, '_blank');
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Journey', id: 'journey' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Projects', id: 'projects' },
    //{ label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700' 
          : 'bg-slate-900/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              onClick={() => location.pathname === '/' ? scrollToSection('hero') : navigate('/')}
              className="cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={profile} alt="Aravindhan P"
                    alt="Aravindhan P"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-bold text-lg text-white">
                    Aravindhan P
                  </h1>
                  <p className="text-sm text-slate-300">
                    Creative Designer
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium text-slate-300 hover:text-coral-400 transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={handleDownloadResume}
                className="group flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-slate-300 hover:bg-slate-800 hover:text-coral-400 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
              
              <a 
                href="https://www.behance.net/aravindhan-19"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Behance</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-24 left-4 right-4 bg-slate-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
            <nav className="p-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-slate-300 hover:text-coral-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700 space-y-3">
                <button 
                  onClick={handleDownloadResume}
                  className="w-full flex items-center justify-center space-x-2 text-slate-300 hover:text-coral-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                
                <a 
                  href="https://www.behance.net/aravindhan-19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg"
                >
                  <span>View Behance</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;