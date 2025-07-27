import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Linkedin, MessageCircle, Phone, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Contact = () => {
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

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      label: 'Instagram', 
      color: 'hover:text-pink-400 hover:shadow-pink-400/25',
      url: 'https://www.instagram.com/aravindhan_19/'
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      label: 'Facebook', 
      color: 'hover:text-blue-400 hover:shadow-blue-400/25',
      url: 'https://www.facebook.com/aravindhan.k.771'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      color: 'hover:text-blue-500 hover:shadow-blue-500/25',
      url: 'https://linkedin.com/in/aravindhan-profile'
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      label: 'YouTube', 
      color: 'hover:text-red-400 hover:shadow-red-400/25',
      url: 'https://www.youtube.com/@sharpartcreations1908'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: 'Twitter', 
      color: 'hover:text-blue-300 hover:shadow-blue-300/25',
      url: 'https://x.com/Aravindhan1999'
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      label: 'Pinterest', 
      color: 'hover:text-red-500 hover:shadow-red-500/25',
      url: 'https://in.pinterest.com/aravindhan_19/'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-coral-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect <span className="text-coral-400">🤝</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information with Glassmorphism */}
          <div className={`bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, need creative consultation, or just want to chat about design, 
                I'm always excited to hear from fellow creatives and potential collaborators.
              </p>

              {/* Contact Methods */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="group text-center">
                  <div className="w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-500/30 transition-colors duration-200 mx-auto mb-4 border border-green-400/20">
                    <Phone className="w-7 h-7" />
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Phone</p>
                  <p className="text-white font-medium">+91 82709 69129</p>
                </div>

                <div className="group text-center">
                  <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors duration-200 mx-auto mb-4 border border-blue-400/20">
                    <Linkedin className="w-7 h-7" />
                  </div>
                  <p className="text-slate-400 text-sm mb-2">LinkedIn</p>
                  <p className="text-white font-medium">aravindhan-profile</p>
                </div>

                <div className="group text-center">
                  <div className="w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500/30 transition-colors duration-200 mx-auto mb-4 border border-purple-400/20">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Location</p>
                  <p className="text-white font-medium">India</p>
                </div>

                <div className="group text-center">
                  <div className="w-16 h-16 bg-pink-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-pink-400 group-hover:bg-pink-500/30 transition-colors duration-200 mx-auto mb-4 border border-pink-400/20">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Behance</p>
                  <p className="text-white font-medium">aravindhan-19</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="mailto:aravindhan1908@gmail.com"
              className="group bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-coral-500/25"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
            
            <a 
              href="https://www.behance.net/aravindhan-19"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-blue-400/50 bg-blue-400/10 backdrop-blur-sm text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Behance Portfolio</span>
            </a>

            <a 
              href="https://linkedin.com/in/aravindhan-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-slate-600 bg-slate-700/50 backdrop-blur-sm text-slate-200 hover:bg-slate-600 hover:text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 pt-8 border-t border-slate-700 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-400">
              Designed & Developed with <span className="text-coral-400">❤️</span> by Aravindhan P
            </p>
            <p className="text-slate-500 text-sm mt-2">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;