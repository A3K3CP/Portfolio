import React, { useState, useEffect, useRef } from 'react';
import { Filter, Grid, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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

  const filters = [
    { id: 'all', label: 'All Work', icon: <Grid className="w-4 h-4" /> },
    { id: 'logo', label: 'Logo Design', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'web', label: 'Web Design', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'print', label: 'Print Media', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'video', label: 'Video Content', icon: <ImageIcon className="w-4 h-4" /> }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'RentAsst Logo Design',
      category: 'logo',
      project: 'RentAsst',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-coral-500 to-coral-600'
    },
    {
      id: 2,
      title: 'ProcessDrive Website UI',
      category: 'web',
      project: 'ProcessDrive',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Digitool365 Brand Identity',
      category: 'logo',
      project: 'Digitool365',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'RentAsst Print Materials',
      category: 'print',
      project: 'RentAsst',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 5,
      title: 'SYFol Character Design',
      category: 'logo',
      project: 'SYFol',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 6,
      title: 'ProcessDrive Explainer Video',
      category: 'video',
      project: 'ProcessDrive',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      id: 7,
      title: 'QDD Marketing Materials',
      category: 'print',
      project: 'QDD',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 8,
      title: 'Galaxy Tours Website',
      category: 'web',
      project: 'Galaxy Tours',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section ref={sectionRef} id="gallery" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            In Action: Design <span className="text-coral-400">Highlights</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A visual showcase of creative work across all projects - from logos to web designs, print materials to video content
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-coral-500 text-white shadow-lg scale-105'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600 hover:scale-105'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-3 py-1 rounded-full text-xs font-medium mb-2`}>
                    {item.project}
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-coral-400/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto transition-all duration-300 hover:scale-105 shadow-lg">
            <Filter className="w-5 h-5" />
            <span>View Full Portfolio</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;