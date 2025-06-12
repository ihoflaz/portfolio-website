'use client';

import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: `https://github.com/${personalInfo.github}`, label: 'GitHub' },
    { icon: Linkedin, href: `https://linkedin.com/in/${personalInfo.linkedin}`, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
  ];
  
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400 flex items-center gap-2">
              <MapPin size={16} />
              {personalInfo.location}
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
                rel={link.label === 'Email' || link.label === 'Phone' ? undefined : 'noopener noreferrer'}
                className="glass p-3 rounded-full text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {currentYear} {personalInfo.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}; 