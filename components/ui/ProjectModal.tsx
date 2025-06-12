'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Loader2, FileText, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [readmeContent, setReadmeContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (project?.githubUrl && isOpen) {
      fetchReadme();
    }
  }, [project, isOpen]);

  const fetchReadme = async () => {
    if (!project?.githubUrl) return;

    setIsLoading(true);
    setError(null);

    try {
      // GitHub URL'den owner ve repo adını çıkar
      const match = project.githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
      if (!match) {
        throw new Error('Geçersiz GitHub URL');
      }

      const [, owner, repo] = match;
      const response = await fetch(`/api/github/readme?owner=${owner}&repo=${repo}`);
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'README yüklenemedi');
      }

      const data = await response.json();
      // GitHub görselleri için base URL düzeltmesi
      const processedContent = data.content.replace(
        /!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
        `![$1](https://raw.githubusercontent.com/${owner}/${repo}/main/$2)`
      );
      setReadmeContent(processedContent);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="glass rounded-2xl h-full flex flex-col max-w-5xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-sm text-gray-400">Proje Detayları</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Project Info */}
                <div className="mb-8">
                  <div className="glass rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Proje Açıklaması
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="glass rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Kullanılan Teknolojiler
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="glass px-3 py-1.5 rounded-full text-sm hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sub Projects */}
                  {project.subProjects && project.subProjects.length > 0 && (
                    <div className="glass rounded-xl p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Alt Projeler
                      </h3>
                      <div className="space-y-3">
                        {project.subProjects.map((subProject, index) => (
                          <div key={index} className="glass p-3 rounded-lg hover:bg-white/10 transition-all duration-200">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{subProject.name}</h4>
                              <a 
                                href={subProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                              >
                                <Github size={14} />
                                GitHub
                              </a>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{subProject.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Links */}
                  <div className="flex gap-4 mb-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <Github size={18} className="group-hover:rotate-12 transition-transform" />
                        GitHub'da Görüntüle
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Canlı Demo
                      </a>
                    )}
                  </div>
                </div>
                
                {/* README Content */}
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <FileText size={20} className="text-white" />
                    </div>
                    README.md
                  </h3>
                  
                  {isLoading && (
                    <div className="flex flex-col items-center justify-center py-12">
                      <Loader2 className="animate-spin mb-4" size={32} />
                      <p className="text-gray-400">README dosyası yükleniyor...</p>
                    </div>
                  )}
                  
                  {error && (
                    <div className="flex flex-col items-center justify-center py-12 text-red-400">
                      <AlertCircle size={32} className="mb-4" />
                      <p>{error}</p>
                    </div>
                  )}
                  
                  {!isLoading && !error && readmeContent && (
                    <div className="prose prose-invert prose-lg max-w-none
                      prose-headings:font-bold prose-headings:text-white
                      prose-h1:text-3xl prose-h1:mb-6 prose-h1:pb-3 prose-h1:border-b prose-h1:border-white/20
                      prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                      prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                      prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                      prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                      prose-strong:text-white prose-strong:font-semibold
                      prose-code:text-pink-400 prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                      prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
                      prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:pl-4 prose-blockquote:italic
                      prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                      prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                      prose-li:text-gray-300
                      prose-img:rounded-lg prose-img:shadow-xl prose-img:mx-auto
                      prose-table:border-collapse prose-table:w-full
                      prose-th:border prose-th:border-white/20 prose-th:p-3 prose-th:bg-white/5
                      prose-td:border prose-td:border-white/20 prose-td:p-3
                      prose-hr:border-white/20 prose-hr:my-8"
                    >
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          img: ({node, ...props}) => (
                            <img 
                              {...props} 
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ),
                          a: ({node, ...props}) => (
                            <a {...props} target="_blank" rel="noopener noreferrer" />
                          )
                        }}
                      >
                        {readmeContent}
                      </ReactMarkdown>
                    </div>
                  )}
                  
                  {!isLoading && !error && !readmeContent && (
                    <div className="text-gray-400 text-center py-12">
                      <FileText size={48} className="mx-auto mb-4 opacity-50" />
                      <p>README dosyası bulunamadı</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 