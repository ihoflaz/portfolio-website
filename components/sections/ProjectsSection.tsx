'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Brain, Smartphone, Server, Database, Cloud, Puzzle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/data';
import { Project } from '@/types';

// Proje kategorisi/türüne göre ikon eşleştirme
const projectIcons: Record<string, React.ElementType> = {
  'web': Code,
  'mobile': Smartphone,
  'ai': Brain,
  'backend': Server,
  'database': Database,
  'cloud': Cloud,
  'other': Puzzle
};

// Proje türüne göre arka plan ve metin renkleri
const projectColors: Record<string, { bg: string, text: string }> = {
  'ai': { bg: 'bg-purple-500/20', text: 'text-purple-400' },
  'mobile': { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
  'backend': { bg: 'bg-green-500/20', text: 'text-green-400' },
  'web': { bg: 'bg-blue-500/20', text: 'text-blue-400' },
  'database': { bg: 'bg-yellow-500/20', text: 'text-yellow-400' },
  'cloud': { bg: 'bg-orange-500/20', text: 'text-orange-400' },
  'other': { bg: 'bg-gray-500/20', text: 'text-gray-400' }
};

// Proje türü belirleme (basit yaklaşım - teknolojilere göre)
const getProjectType = (project: Project): string => {
  const technologies = project.technologies.join(' ').toLowerCase();
  
  if (technologies.includes('swift') || technologies.includes('ios') || technologies.includes('flutter') || technologies.includes('mobile')) {
    return 'mobile';
  }
  if (technologies.includes('ai') || technologies.includes('ml') || technologies.includes('tensorflow') || technologies.includes('pytorch') || technologies.includes('opencv')) {
    return 'ai';
  }
  if (technologies.includes('node') || technologies.includes('express') || technologies.includes('backend') || technologies.includes('api')) {
    return 'backend';
  }
  if (technologies.includes('mongodb') || technologies.includes('postgresql') || technologies.includes('database')) {
    return 'database';
  }
  if (technologies.includes('aws') || technologies.includes('cloud') || technologies.includes('docker')) {
    return 'cloud';
  }
  if (technologies.includes('react') || technologies.includes('next') || technologies.includes('javascript') || technologies.includes('html') || technologies.includes('css')) {
    return 'web';
  }
  
  return 'other';
};

// Proje kartı bileşeni
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const projectType = getProjectType(project);
  const Icon = projectIcons[projectType] || Puzzle;
  const colors = projectColors[projectType] || projectColors.other;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Proje görseli */}
      {project.imageUrl && (
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}      {/* Proje başlığı */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${colors.bg}`}>
          {React.createElement(Icon, { 
            className: `w-5 h-5 ${colors.text}`, 
            size: 20 
          })}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      </div>

      {/* Proje açıklaması */}
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Teknolojiler */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 6).map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 6 && (
          <span className="px-3 py-1 text-xs bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/30">
            +{project.technologies.length - 6} daha
          </span>
        )}
      </div>

      {/* Alt projeler */}
      {project.subProjects && project.subProjects.length > 0 && (
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">Alt Projeler:</p>
          <div className="space-y-1">
            {project.subProjects.map((subProject, index) => (
              <div key={index} className="text-xs text-blue-300">
                • {subProject.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Butonlar */}
      <div className="flex gap-3">
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="flex-1"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        )}
        {project.liveUrl && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Canlı Demo
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Mevcut proje türlerini belirle
  const projectTypes = Array.from(new Set(projects.map(getProjectType)));
  const allTypes = ['all', ...projectTypes];
  
  // Filtreleme
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => getProjectType(project) === filter);

  // Kategori etiketleri
  const categoryLabels: Record<string, string> = {
    'all': 'Tümü',
    'ai': 'Yapay Zeka',
    'mobile': 'Mobil',
    'web': 'Web',
    'backend': 'Backend',
    'database': 'Veritabanı',
    'cloud': 'Bulut',
    'other': 'Diğer'
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          title="Projelerim"
          subtitle="Geliştirdiğim projeler ve çalışmalarım"
        />
        
        {/* Filtre butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === type
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {categoryLabels[type] || type}
            </button>
          ))}
        </div>

        {/* Projeler grid'i - Yatay düzen için 1 satırda 3 kart */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Proje sayısı bilgisi */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Toplam {filteredProjects.length} proje gösteriliyor
            {filter !== 'all' && ` • ${categoryLabels[filter]} kategorisinde`}
          </p>
        </motion.div>
      </div>
    </section>
  );
};