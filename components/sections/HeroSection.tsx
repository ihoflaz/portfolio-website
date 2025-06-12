'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/lib/data';
import { useWindowSize } from '@/components/utils/useWindowSize';

export const HeroSection: React.FC = () => {
  const [height, setHeight] = useState('100vh');
  const { viewportHeight } = useWindowSize();
  
  // İstemci tarafında yüksekliği güncelle
  useEffect(() => {
    setHeight(`${viewportHeight}px`);
  }, [viewportHeight]);
  
  const socialLinks = [
    { icon: Github, href: `https://github.com/${personalInfo.github}`, label: 'GitHub' },
    { icon: Linkedin, href: `https://linkedin.com/in/${personalInfo.linkedin}`, label: 'LinkedIn' }
  ];
  
  return (
    <section 
      id="home" 
      className="relative overflow-hidden flex items-center justify-center pt-20"
      style={{ minHeight: height }}
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-4"
          >
            Merhaba, ben
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">İbrahim Hulusi Oflaz</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8"
          >
            Yazılım Geliştirici
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            5 yıldır çeşitli projelerde yazılım geliştirme alanında çalışıyorum. 
            Yenilikçi teknolojileri öğrenmek ve kullanmak beni her zaman heyecanlandırıyor.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              <Download className="mr-2" size={20} />
              CV İndir
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={20} />
              İletişime Geç
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 justify-center"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass p-3 rounded-full text-gray-400 hover:text-white transition-colors duration-200"
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}; 