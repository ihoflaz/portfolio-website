'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Calendar, Code } from 'lucide-react';
import { websites } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';

// Website veri yapısını genişletelim
interface WebsiteInfo {
  domain?: string;
  title?: string;
  description?: string;
  date?: string;
  technologies?: string[];
  category?: string;
}

// Örnek genişletilmiş website bilgileri
const websiteDetails: Record<string, WebsiteInfo> = {
  'endulustravel.com': {
    title: 'Endülüs Travel',
    description: 'Modern turizm acentesi web sitesi',
    date: '2023',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    category: 'Turizm'
  },
  'erginsoyinsaat.com': {
    title: 'Erginsoy İnşaat',
    description: 'Kurumsal inşaat firması web sitesi',
    date: '2022',
    technologies: ['React', 'Bootstrap', 'Node.js'],
    category: 'İnşaat'
  },
  'sewengrup.com': {
    title: 'Sewen Grup',
    description: 'Holding şirketi kurumsal web sitesi',
    date: '2023',
    technologies: ['Vue.js', 'Tailwind CSS'],
    category: 'Kurumsal'
  },
  'mypolimer.com.tr': {
    title: 'My Polymer',
    description: 'Endüstriyel ürünler e-ticaret sitesi',
    date: '2022',
    technologies: ['React', 'Redux', 'Express.js'],
    category: 'E-Ticaret'
  },
  'admin.opca.com': {
    title: 'OpCa Admin Panel',
    description: 'Parazit tanı sistemi yönetim paneli',
    date: '2024',
    technologies: ['React', 'TypeScript', 'Material UI'],
    category: 'Admin Panel'
  },
  'admin.sara.com': {
    title: 'Sa-Ra Admin Panel',
    description: 'Altyapısız iletişim ağı yönetim arayüzü',
    date: '2024',
    technologies: ['React', 'Redux', 'Node.js'],
    category: 'Admin Panel'
  },
  'campusintifada.com': {
    title: 'Campus Intifada',
    description: 'Topluluk ve bilgi paylaşım platformu',
    date: '2023',
    technologies: ['WordPress', 'PHP', 'jQuery'],
    category: 'Topluluk'
  },
  'mariescarf.com': {
    title: 'Marie Scarf',
    description: 'Eşarp ve şal e-ticaret web sitesi',
    date: '2022',
    technologies: ['Shopify', 'Liquid', 'JavaScript'],
    category: 'E-Ticaret'
  },
  'ihoflaz.com': {
    title: 'Kişisel Portfolyo',
    description: 'Profesyonel portfolyo web sitesi',
    date: '2024',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Three.js'],
    category: 'Portfolyo'
  }
};

export const WebsitesSection: React.FC = () => {
  const [hoveredWebsite, setHoveredWebsite] = useState<string | null>(null);
  
  return (
    <section id="websites" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Web Siteleri"
          subtitle="Geliştirdiğim veya katkı sağladığım siteler"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {websites.map((website, index) => {
            const details = websiteDetails[website] || {};
            
            return (
              <motion.div
                key={website}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredWebsite(website)}
                onMouseLeave={() => setHoveredWebsite(null)}
                className="group relative"
              >
                <motion.a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-5 rounded-xl flex flex-col h-full hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Globe icon yerine favicon kullanımını kaldırıp doğrudan Globe icon'u kullanıyoruz */}
                      <div className="relative w-10 h-10 rounded-lg glass flex items-center justify-center overflow-hidden">
                        <Globe size={20} className="text-blue-400" />
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-lg">
                          {details.title || website.split('.')[0]}
                        </h3>
                        <p className="text-sm text-gray-400">{website}</p>
                      </div>
                    </div>
                    
                    <ExternalLink size={16} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  {details.description && (
                    <p className="text-sm text-gray-400 mt-2 mb-4">{details.description}</p>
                  )}
                  
                  <div className="mt-auto flex flex-wrap gap-2 pt-3">
                    {details.technologies?.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {details.date && (
                    <div className="flex items-center gap-1 mt-3 text-xs text-gray-500">
                      <Calendar size={12} />
                      <span>{details.date}</span>
                    </div>
                  )}
                </motion.a>
                
                {/* Tooltip - Hover durumunda daha fazla bilgi */}
                {hoveredWebsite === website && details.category && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs py-1 px-3 rounded-full z-10 whitespace-nowrap"
                  >
                    {details.category}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 