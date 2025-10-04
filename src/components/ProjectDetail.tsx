import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle, Play, Award, Users, Zap } from 'lucide-react';
import profile from '../assets/profile01.png';


const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const projectData: { [key: string]: any } = {
    rentasst: {
      title: 'Smart Rental Platform',
      subtitle: 'Complete Brand Transformation',
      description: 'A comprehensive brand identity project that transformed a Smart Rental Platform from concept to a market-ready application with full creative assets.',
      category: 'Full Brand Identity',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-coral-500 to-coral-600',
      overview: 'Designed the complete identity and product assets for a smart rental management platform that helps users book, manage, and track rentals seamlessly.',
      challenge: 'Create a modern, trustworthy brand identity for a rental assistance platform that appeals to both property owners and tenants while establishing credibility in a competitive market.',
      solution: 'Developed a complete brand ecosystem with bilingual content support, modern UI/UX design, and extensive marketing materials, positioning the Smart Rental Platform as a premium, reliable service.',
      deliverables: [
        'Logo Design & Brand Identity System',
        'Mobile & Web UI/UX Design',
        'Explainer Videos (Tamil + English)',
        'App Demo Videos & Tutorials',
        'Print Media (Flyers, Brochures, Business Cards)',
        'SMO Posters & Marketing Visuals',
        'Website Design & Complete Assets',
        'Brand Guidelines & Standards Documentation'
      ],
      tools: ['Adobe Illustrator', 'After Effects', 'Figma', 'Photoshop', 'Mockflow', 'Canva'],
      achievements: [
        'Complete visual identity overhaul',
        'Multi-language video content production',
        'Comprehensive brand ecosystem development',
        'Seamless cross-platform design consistency'
      ],
      impact: {
        brandRecognition: '85% increase',
        userEngagement: '120% improvement',
        marketPresence: 'Established strong foothold'
      },
      testimonial: 'The comprehensive brand transformation exceeded our expectations. Every deliverable was crafted with attention to detail and strategic thinking.',
      gallery: [
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    processdrive: {
      title: 'Enterprise Solutions Hub',
      subtitle: 'Enterprise Solutions & Collaboration',
      description: 'A comprehensive rebranding project for Enterprise Solutions Hub, featuring custom creatures and enterprise-grade design solutions.',
      category: 'Enterprise Branding',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-blue-500 to-blue-600',
      overview: 'Led design initiatives for an enterprise solutions hub offering multiple business transformation services.',
      challenge: 'Modernize an established brand while maintaining professional credibility and creating unique visual elements for Odoo integration.',
      solution: 'Developed a sophisticated brand identity with custom creatures and animations, ensuring seamless integration across all platforms and touchpoints.',
      deliverables: [
        'Logo Rework & Animation Suite',
        'Website Design + Complete Asset Library',
        'Corporate Stationery (Letterhead, ID Cards, Signboard)',
        'Event & Expo Design Materials',
        'Promotional Videos & Brand Animations',
        'Custom Odoo Creatures & Interactive GIFs',
        'App Mockups & UI Element Library',
        'Team Collaboration Design Systems'
      ],
      tools: ['DaVinci Resolve', 'After Effects', 'Illustrator', 'Figma', 'Blender', 'Photoshop', 'Character Animator'],
      achievements: [
        'Streamlined brand identity across platforms',
        'Custom character development for Odoo',
        'Cross-platform integration success',
        'Enhanced team collaboration workflows'
      ],
      impact: {
        brandConsistency: '95% improvement',
        teamEfficiency: '40% increase',
        clientSatisfaction: '90% positive feedback'
      },
      testimonial: 'The collaborative approach and attention to our enterprise needs resulted in a brand transformation that truly represents our values.',
      gallery: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    digitool365: {
      title: 'ERP SaaS Platform',
      subtitle: 'Creative Digital Ecosystem',
      description: 'A comprehensive digital creative suite featuring logo design, website assets, explainer videos, and extensive SMO poster designs with documentation.',
      category: 'Digital Creative Suite',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-purple-500 to-purple-600',
      overview: 'Worked on a cloud-based ERP SaaS platform that streamlines industries like retail, manufacturing, and services.',
      challenge: 'Create a cohesive digital ecosystem that balances creativity with functionality while maintaining professional standards.',
      solution: 'Developed an integrated creative suite with interactive elements, comprehensive documentation, and scalable design systems.',
      deliverables: [
        'Logo Design & Intro Animation Suite',
        'Website Vector Illustrations Library',
        'Interactive GIFs & Motion Graphics',
        'Explainer Video Production',
        'SMO Poster Design Series',
        'Proposal Documents & Template System',
        'SOPs & Checklist Form Designs',
        'Complete Brand Asset Library'
      ],
      tools: ['After Effects', 'Illustrator', 'Photoshop', 'Figma', 'Character Animator', 'Canva'],
      achievements: [
        'Comprehensive digital presence establishment',
        'Interactive content library creation',
        'Streamlined documentation systems',
        'Scalable design framework development'
      ],
      impact: {
        digitalPresence: '200% enhancement',
        contentEngagement: '150% increase',
        operationalEfficiency: '60% improvement'
      },
      testimonial: 'The digital ecosystem created for us has transformed how we present our services and interact with clients.',
      gallery: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    syfol: {
      title: 'Ticketing & Support System',
      subtitle: 'Brand Revival & Animation',
      description: 'A complete brand revival project featuring logo rework, explainer video recreation, and custom character illustrations for enhanced user engagement.',
      category: 'Brand Revival',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-emerald-500 to-emerald-600',
      overview: 'Designed the brand identity and product visuals for a ticketing and support system built to improve workflow transparency.',
      challenge: 'Revitalize an existing brand without losing its core identity while creating engaging character-driven content.',
      solution: 'Developed a refreshed brand identity with custom character illustrations and recreated all video content with enhanced storytelling.',
      deliverables: [
        'Logo Rework & Brand Refinement',
        'Complete Explainer Video Recreation',
        'Custom Character Illustration Suite',
        'Login Page UI Design & Assets',
        'Brand Style Guide & Standards',
        'Animation Asset Library',
        'Visual Identity System Overhaul',
        'User Interface Element Collection'
      ],
      tools: ['Adobe Illustrator', 'After Effects', 'Figma', 'Photoshop'],
      achievements: [
        'Brand personality enhancement through characters',
        'Custom character development and animation',
        'Improved user experience design',
        'Cohesive visual identity establishment'
      ],
      impact: {
        brandPersonality: '180% enhancement',
        userEngagement: '95% increase',
        brandRecall: '75% improvement'
      },
      testimonial: 'The character-driven approach brought our brand to life in ways we never imagined possible.',
      gallery: [
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    others: {
      title: 'Multi-Brand Creative Works',
      subtitle: 'Diverse Creative Portfolio',
      description: 'A collection of diverse projects showcasing versatility across multiple industries and creative disciplines.',
      category: 'Multi-Client Portfolio',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-indigo-500 to-indigo-600',
      overview: 'A showcase of diverse creative works across industries and campaigns.',
      challenge: 'Deliver consistent quality across varied industries while maintaining unique brand identities for each client.',
      solution: 'Applied flexible design methodologies and industry-specific approaches to create tailored solutions for each client.',
      deliverables: [
        'Complete Branding + Print + Video Assets',
        'Website + Logo Rework',
        'Logo + Brand Identity System',
        'Bluewave: Social Media Content Strategy',
        'Cross-Platform Design Solutions',
        'Multi-Industry Creative Applications',
        'Team Collaboration Project Management',
        'Diverse Creative Portfolio Development'
      ],
      tools: ['Full Adobe Creative Suite', 'Figma', 'DaVinci Resolve', 'Canva', 'Blender', 'Various Specialized Tools'],
      achievements: [
        'Multi-industry expertise demonstration',
        'Successful team collaboration across projects',
        'Diverse creative solution development',
        'Consistent quality delivery across clients'
      ],
      impact: {
        clientSatisfaction: '92% average rating',
        projectDelivery: '100% on-time completion',
        industryReach: '5+ different sectors'
      },
      testimonial: 'Working across these diverse projects has showcased exceptional adaptability and creative problem-solving skills.',
      gallery: [
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    }
  };

  const project = projectData[projectId || ''];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img 
                  src={profile} 
                  alt="Aravindhan P"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-semibold">Aravindhan P</p>
                <p className="text-slate-400 text-sm">Creative Designer</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-coral-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Info */}
              <div>
                <div className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                  {project.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-300 mb-6">
                  {project.subtitle}
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/*<div className="flex flex-wrap gap-4">
                  <button className={`group bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105`}>
                    <Play className="w-5 h-5" />
                    <span>View Demo</span>
                  </button>
                  <button className="group border-2 border-slate-600 bg-slate-800/50 text-slate-200 hover:bg-slate-700 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105">
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Project</span>
                  </button>
                </div> */}
              </div> 

              {/* Project Image */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Overview */}
            <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                {project.overview}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-coral-400" />
                    <span>Challenge</span>
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span>Solution</span>
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <h3 className="text-2xl font-bold text-white mb-6">Key Deliverables</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {project.deliverables.map((deliverable: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 bg-slate-700/50 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{deliverable}</span>
                  </div>
                ))}
              </div>

              {/* Project Note */}
              <div className="bg-slate-700/50 border-l-4 border-coral-400 p-6 rounded-r-lg">
                <p className="text-slate-200 font-medium italic">
                  "Handled and designed all assets from concept to delivery—individually and in collaboration with team."
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Tools Used */}
              <div className="bg-slate-700/50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string, index: number) => (
                    <span key={index} className="bg-slate-600 text-slate-200 px-3 py-1 rounded-lg text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="bg-slate-700/50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Project Impact</h3>
                <div className="space-y-4">
                  {Object.entries(project.impact).map(([key, value], index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-coral-400 font-semibold">{value}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${project.gradient} h-2 rounded-full`} style={{width: '85%'}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-slate-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Client Feedback</h3>
                <blockquote className="text-slate-300 italic leading-relaxed">
                  "{project.testimonial}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {/*
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-white mb-4">Project Gallery</h2>
            <p className="text-slate-400">Visual highlights from the project development process</p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {project.gallery.map((image: string, index: number) => (
              <div key={index} className="group relative aspect-square rounded-xl overflow-hidden bg-slate-800 hover:scale-105 transition-transform duration-300">
                <img 
                  src={image}
                  alt={`${project.title} Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 border-t border-slate-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your creative vision to life with the same attention to detail and strategic thinking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/#contact')}
                className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Start a Project
              </button>
              <button 
                onClick={() => navigate('/#projects')}
                className="border-2 border-slate-600 bg-slate-700/50 text-slate-200 hover:bg-slate-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;