import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Play, Award } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const projects = [
    {
      id: 'rentasst',
      title: 'Smart Rental Platform',
      subtitle: 'Complete Brand Transformation',
      description: 'Full brand identity design including logo, UI/UX for mobile and web applications, explainer videos in Tamil and English, app demo videos, comprehensive print media, SMO posters, and complete website assets.',
      category: 'Full Brand Identity',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-coral-500 to-coral-600'
    },
    {
      id: 'processdrive',
      title: 'Enterprise Solutions Hub',
      subtitle: 'Enterprise Solutions & Collaboration',
      description: 'Comprehensive rebranding including logo rework and animations, complete website design with full assets, stationery design, event materials, and collaborative work on Odoo integration with custom creatures and GIFs.',
      category: 'Enterprise Branding',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'digitool365',
      title: 'ERP SaaS Platform',
      subtitle: 'Creative Digital Ecosystem',
      description: 'Complete logo design with intro animations, comprehensive website assets including vector illustrations and interactive GIFs, explainer video production, and extensive SMO poster designs with proposal documents and SOPs.',
      category: 'Digital Creative Suite',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'syfol',
      title: 'Ticketing & Support System',
      subtitle: 'Brand Revival & Animation',
      description: 'Complete logo rework and full recreation of explainer video with custom illustrations, login page design, and development of unique character illustrations that enhanced brand personality and user engagement.',
      category: 'Brand Revival',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'others',
      title: 'Multi-Brand Creative Works',
      subtitle: 'Diverse Creative Portfolio',
      description: 'A showcase of logos, animations, posters, illustrations, and mixed-media works across campaigns.',
      category: 'Multi-Client Portfolio',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  const handleViewCaseStudy = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-coral-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive case studies showcasing creative solutions and measurable impact across diverse industries
          </p>
        </div>

        {/* Project Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeProject === index
                  ? `bg-gradient-to-r ${project.gradient} text-white shadow-lg scale-105`
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600 hover:scale-105'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div className={`bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-700 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative overflow-hidden bg-slate-700">
              <img 
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                  {projects[activeProject].category}
                </span>
              </div>
             {/* <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                <Play className="w-6 h-6 ml-1" />
              </button> */}
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${projects[activeProject].gradient} rounded-xl flex items-center justify-center text-white`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{projects[activeProject].title}</h3>
                    <p className="text-slate-300 font-medium">{projects[activeProject].subtitle}</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg mb-4">
                  {projects[activeProject].description}
                </p>
                
                {/* Project Note */}
                <div className="bg-slate-700/50 border-l-4 border-coral-400 p-4 rounded-r-lg mb-6">
                  <p className="text-slate-200 font-medium italic">
                    "Handled and designed all assets from concept to delivery—individually and in collaboration with team."
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => handleViewCaseStudy(projects[activeProject].id)}
                className={`group bg-gradient-to-r ${projects[activeProject].gradient} hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105`}
              >
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;