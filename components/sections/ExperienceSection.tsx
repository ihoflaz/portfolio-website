'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { experiences } from '@/lib/data';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Deneyimler</span>
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <Card hover={true} className="text-left">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs glass rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
              
              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 