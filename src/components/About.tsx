import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import resumePDF from '../assets/Aravindhan-Resume.pdf';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const handleDownloadResume = () => {
    //window.open('/Aravindhan_Resume_1.pdf', '_blank');
    //window.open(resumePDF, '_blank');
    const link = document.createElement("a");
    link.href = resumePDF; // your file path
    link.setAttribute("download", "Aravindhan_Resume.pdf"); // file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-coral-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beyond the <span className="text-coral-400">Pixels</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              With nearly 3 years in the creative industry, I've learned that design isn't just about beauty—it's about solving problems, telling stories, and forging emotional connections.
            </p>
            <p>
              As a Design Team Lead in 2025, I nurture creativity, mentor teammates, and push boundaries to create lasting impact through thoughtful design.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-coral-500/25 hover:scale-105"
            >
              <span>Explore My Work</span>
            </button>
            
            <button 
              onClick={handleDownloadResume}
              className="group border-2 border-coral-400/50 bg-coral-400/10 backdrop-blur-sm text-coral-400 hover:bg-coral-400 hover:text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-slate-600 bg-slate-700/50 text-slate-200 hover:bg-slate-600 hover:text-white hover:border-slate-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
