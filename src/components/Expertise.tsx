import React, { useState, useEffect, useRef } from 'react';
import { Palette, Monitor, Video, Zap } from 'lucide-react';

const Expertise = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
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

  const expertiseAreas = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Creating compelling visual identities that tell your brand's story",
      services: ["Logo Design", "Brand Identity", "Print Design", "Marketing Materials"],
      tools: ["Adobe Illustrator", "Photoshop", "InDesign", "Canva"],
      projectTypes: ["Brand Guidelines", "Business Cards", "Brochures", "Social Media Graphics"],
      gradient: "from-coral-500 to-coral-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UI/UX Design", 
      description: "Crafting intuitive digital experiences that users love",
      services: ["Web Design", "App Mockups", "User Research", "Wireframing"],
      tools: ["Figma", "Adobe XD", "Sketch", "Webflow"],
      projectTypes: ["Mobile Apps", "Websites", "Dashboards", "Prototypes"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description: "Bringing stories to life through dynamic video content",
      services: ["Social Media Content", "Product Demos", "Corporate Videos", "Event Coverage"],
      tools: ["DaVinci Resolve", "Premiere Pro", "After Effects", "Filmora"],
      projectTypes: ["Explainer Videos", "Promotional Content", "Event Highlights", "Product Demos"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Motion Graphics",
      description: "Animating ideas with creativity and technical precision",
      services: ["Explainer Videos", "Character Animation", "GIF Creation", "Title Sequences"],
      tools: ["After Effects", "Adobe Animate", "Blender", "Lottie"],
      projectTypes: ["Logo Animations", "Character Design", "Interactive GIFs", "Title Cards"],
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section ref={sectionRef} id="expertise" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-coral-400">Expertise</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Multidisciplinary creative skills honed through years of passionate practice and professional growth
          </p>
        </div>

        {/* Expertise Cards */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 h-80 ${
                activeExpertise === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveExpertise(index)}
            >
              <div className={`relative h-full bg-gradient-to-br ${area.gradient} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                activeExpertise === index ? 'ring-4 ring-offset-4 ring-offset-slate-800 ring-coral-400/50' : ''
              }`}>
                {/* Front Side */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-center transition-all duration-500 ${
                  activeExpertise === index ? 'opacity-0 rotate-y-180' : 'opacity-100'
                }`}>
                  <div className="mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{area.description}</p>
                </div>

                {/* Back Side - Tools & Skills */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-center transition-all duration-500 ${
                  activeExpertise === index ? 'opacity-100' : 'opacity-0 rotate-y-180'
                }`}>
                  <h4 className="text-lg font-bold mb-4">Tools & Skills</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">Primary Tools:</p>
                      <div className="flex flex-wrap gap-1">
                        {area.tools.slice(0, 2).map((tool, toolIndex) => (
                          <span key={toolIndex} className="text-xs bg-white/20 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Project Types:</p>
                      <div className="space-y-1">
                        {area.projectTypes.slice(0, 3).map((type, typeIndex) => (
                          <p key={typeIndex} className="text-xs opacity-90">• {type}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Expertise Detail */}
        <div className={`bg-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${expertiseAreas[activeExpertise].gradient} rounded-xl flex items-center justify-center text-white`}>
                {expertiseAreas[activeExpertise].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {expertiseAreas[activeExpertise].title}
                </h3>
                <p className="text-slate-300">{expertiseAreas[activeExpertise].description}</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertiseAreas[activeExpertise].services.map((service, index) => (
              <div 
                key={index}
                className="group bg-slate-600/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-slate-500 hover:border-coral-400/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-slate-200 font-medium">{service}</span>
                  <div className="w-2 h-2 bg-coral-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;