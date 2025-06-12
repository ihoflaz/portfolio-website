'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingNavIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'about', label: 'Hakkımda' },
    { id: 'skills', label: 'Yetenekler' },
    { id: 'projects', label: 'Projeler' },
    { id: 'websites', label: 'Web Siteleri' },
    { id: 'experience', label: 'Deneyimler' },
    { id: 'contact', label: 'İletişim' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Aktif bölümü tespit et
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.findIndex(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection !== -1) {
        setActiveSection(sections[currentSection].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDotClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: 'linear' }}
        />
      </div>

      {/* Floating Nav Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => handleDotClick(section.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="group relative"
            >
              <div 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <div className="glass px-3 py-1 rounded text-sm">
                  {section.label}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
}; 