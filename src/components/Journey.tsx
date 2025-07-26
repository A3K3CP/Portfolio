import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Award, Users, Zap, Crown, Download } from 'lucide-react';
import photoshop from '../assets/photoshop.png';
import illustrator from '../assets/illustrator.png';
import afterEffects from '../assets/after-effects.png';
import figma from '../assets/figma.png';
import davinci from '../assets/DaVinci_Resolve.png';
import canva from '../assets/Canva.png';
import blender from '../assets/Blender.png';
import webflow from '../assets/webflow.png';
import animate from '../assets/adobe-animate.png';
import filmora from '../assets/filmora.png';
import premiere from '../assets/premiere-pro.png';
import indesign from '../assets/indesign.png';

const Journey = () => {
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

  const journeyCards = [
    {
      year: "2022",
      title: "Design Journey Begins",
      description: "Started as a passionate graphic designer, diving deep into Adobe Creative Suite and foundational design principles",
      icon: <Zap className="w-6 h-6" />,
      tools: ["🎨", "📐", "🖌️", "💡"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      year: "2023", 
      title: "Expanding Horizons",
      description: "Mastered UI/UX design and video editing, exploring motion graphics with DaVinci Resolve and After Effects",
      icon: <Award className="w-6 h-6" />,
      tools: ["🎬", "📱", "🎭", "⚡"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      year: "2024",
      title: "Professional Growth",
      description: "Enhanced expertise across multiple creative disciplines, building comprehensive project portfolios and client relationships",
      icon: <Users className="w-6 h-6" />,
      tools: ["🚀", "📊", "🎯", "💼"],
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      year: "2025",
      title: "Design Team Lead",
      description: "Promoted to Lead – Design Team at ProcessDrive India, mentoring creators and delivering exceptional creative solutions",
      icon: <Crown className="w-6 h-6" />,
      tools: ["👑", "🌟", "🎖️", "🏆"],
      gradient: "from-yellow-500 to-yellow-600",
      isHighlight: true
    }
  ];

  const toolsAndTechnologies = [
    { name: "Adobe Photoshop", icon: photoshop, category: "Design" },
    { name: "Adobe Illustrator", icon: illustrator, category: "Design" },
    { name: "Adobe After Effects", icon: afterEffects, category: "Motion" },
    { name: "Figma", icon: figma, category: "UI/UX" },
    { name: "DaVinci Resolve", icon: davinci, category: "Video" },
    { name: "Canva", icon: canva, category: "Design" },
    { name: "Blender", icon: blender, category: "3D" },
    { name: "Webflow", icon: webflow, category: "Web" },
    { name: "Adobe Animate", icon: animate, category: "Animation" },
    { name: "Wondershare Filmora", icon: filmora, category: "Video" },
    { name: "Premiere Pro", icon: premiere, category: "Video" },
    { name: "InDesign", icon: indesign, category: "Print" }
  ];

  /*const toolsAndTechnologies = [
    { name: "Adobe Photoshop", icon: "./assets/photoshop.png", category: "Design" },
    { name: "Adobe Illustrator", icon: "/src/assets/illustrato.png", category: "Design" },
    { name: "Adobe After Effects", icon: "/src/assets/after-effects.png", category: "Motion" },
    { name: "Figma", icon: "/src/assets/figma.png", category: "UI/UX" },
    { name: "DaVinci Resolve", icon: "/src/assets/DaVinci_Resolve.png", category: "Video" },
    { name: "Canva", icon: "/src/assets/Canva.png", category: "Design" },
    { name: "Blender", icon: "/src/assets/Blender.png", category: "3D" },
    { name: "Webflow", icon: "/src/assets/webflow.png", category: "Web" },
    { name: "Adobe Animate", icon: "/src/assets/adobe-animate.png", category: "Animation" },
    { name: "Wondershare Filmora", icon: "/src/assets/filmora.png", category: "Video" },
    { name: "Premiere Pro", icon: "/src/assets/premiere-pro.png", category: "Video" },
    { name: "InDesign", icon: "/src/assets/indesign.png", category: "Print" }
  ];
*/
  const handleDownloadResume = () => {
    window.open('/Aravindhan_Resume_1.pdf', '_blank');
  };

  return (
    <section ref={sectionRef} id="journey" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Creative <span className="text-coral-400">Journey</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            From passionate beginner to team leader - a timeline of growth, learning, and creative evolution
          </p>
          
          {/* Resume Download Button */}
          <button 
            onClick={handleDownloadResume}
            className="group bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-coral-500/25"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Journey Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {journeyCards.map((card, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`relative h-80 bg-gradient-to-br ${card.gradient} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden ${
                card.isHighlight ? 'ring-4 ring-yellow-400/50' : ''
              }`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Year Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-bold text-lg">{card.year}</span>
                    </div>
                    {card.isHighlight && (
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Crown className="w-4 h-4 text-yellow-800" />
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm opacity-90 leading-relaxed mb-4 flex-grow">
                    {card.description}
                  </p>

                  {/* Tools */}
                  <div className="flex justify-center space-x-2 mt-auto">
                    {card.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex} 
                        className="text-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
                        title={`Tool ${toolIndex + 1}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies Section */}
        <div className={`bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Tools & <span className="text-coral-400">Technologies</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {toolsAndTechnologies.map((tool, index) => (
              <div 
                key={index}
                className="group relative bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 hover:border-coral-400/50 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                title={tool.name}
              >
                {/* Tool Icon */}
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {tool.icon.startsWith('/') ? (
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  ) : (
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                      {tool.icon}
                    </span>
                  )}
                </div>
                
                {/* Tool Name */}
                <h4 className="text-slate-300 group-hover:text-coral-400 font-medium text-sm leading-tight transition-colors duration-200">
                  {tool.name}
                </h4>
                
                {/* Category Badge */}
                <span className="inline-block mt-2 px-2 py-1 bg-slate-600/50 text-slate-400 text-xs rounded-full">
                  {tool.category}
                </span>

                {/* Hover Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {tool.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-700/30 rounded-xl">
              <h5 className="text-coral-400 font-semibold mb-2">Design</h5>
              <p className="text-slate-300 text-sm">Visual Identity, Branding, Print Design</p>
            </div>
            <div className="text-center p-4 bg-slate-700/30 rounded-xl">
              <h5 className="text-blue-400 font-semibold mb-2">UI/UX</h5>
              <p className="text-slate-300 text-sm">Web Design, Mobile Apps, Prototyping</p>
            </div>
            <div className="text-center p-4 bg-slate-700/30 rounded-xl">
              <h5 className="text-purple-400 font-semibold mb-2">Motion</h5>
              <p className="text-slate-300 text-sm">Animation, Video Editing, GFX</p>
            </div>
            <div className="text-center p-4 bg-slate-700/30 rounded-xl">
              <h5 className="text-emerald-400 font-semibold mb-2">Leadership</h5>
              <p className="text-slate-300 text-sm">Team Management, Mentoring, Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
