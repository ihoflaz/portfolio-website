'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { 
  Code, Database, Smartphone, Wrench, Brain, CheckCircle, Info,
  // Teknoloji ikonları
  Box, LayoutGrid, FileJson, Palette, Server, Code2, Database as DbIcon,
  FileCode, BarChart, GitFork, GitBranch, Package, Dock, Cloud,
  CircuitBoard, Wand2, Globe, LineChart, Terminal, LucideIcon
} from 'lucide-react';
import { skills, projects } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Skill } from '@/types';

const categoryIcons = {
  frontend: Code,
  backend: Server,
  mobile: Smartphone,
  database: Database,
  tools: Wrench,
  other: Brain,
};

const categoryNames = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobil Geliştirme',
  database: 'Veritabanı',
  tools: 'Araçlar & DevOps',
  other: 'AI/ML & Diğer',
};

const categoryDescriptions = {
  frontend: 'Modern web arayüzleri ve kullanıcı deneyimi',
  backend: 'Güçlü ve ölçeklenebilir sunucu sistemleri',
  mobile: 'iOS ve cross-platform mobil uygulamalar',
  database: 'Veri depolama ve yönetim çözümleri',
  tools: 'Geliştirme ve deployment araçları',
  other: 'Yapay zeka, makine öğrenmesi ve diğer teknolojiler',
};

// Teknoloji ikonları
const techIcons: Record<string, LucideIcon> = {
  'React': Box,
  'Next.js': LayoutGrid,
  'Vue.js': LayoutGrid,
  'JavaScript': FileJson,
  'TypeScript': FileCode,
  'Python': Code2,
  'Node.js': Server,
  'Express.js': Server,
  'MongoDB': DbIcon,
  'PostgreSQL': DbIcon,
  'Tailwind CSS': Palette,
  'Flutter': Smartphone,
  'Swift': Smartphone,
  'TensorFlow': CircuitBoard,
  'Docker': Dock,
  'AWS': Cloud,
  'Git': GitBranch,
  'CI/CD': GitFork,
  'REST API': Globe,
  'Firebase': Database,
  'Web Scraping': Globe,
  'OpenCV': Wand2,
};

// Teknoloji logosu yerine fallback icon olarak kullanılacak renkler
const fallbackColors: Record<string, string> = {
  'React': 'bg-blue-500',
  'Next.js': 'bg-black',
  'Vue.js': 'bg-green-500',
  'JavaScript': 'bg-yellow-500',
  'TypeScript': 'bg-blue-600',
  'Python': 'bg-blue-800',
  'Node.js': 'bg-green-600',
  'Express.js': 'bg-gray-800',
  'MongoDB': 'bg-green-500',
  'PostgreSQL': 'bg-blue-400',
  'Tailwind CSS': 'bg-cyan-500',
  'HTML/CSS': 'bg-orange-500',
  'Flutter': 'bg-blue-400',
  'Swift': 'bg-orange-600',
  'TensorFlow': 'bg-orange-500',
  'Docker': 'bg-blue-600',
  'AWS': 'bg-orange-400',
  'Git': 'bg-red-500',
  'Firebase': 'bg-yellow-600',
  'GSAP': 'bg-green-600',
  'Three.js': 'bg-black',
};

// Bir teknolojinin hangi projelerde kullanıldığını bulan yardımcı fonksiyon
const findProjectsWithTech = (techName: string) => {
  return projects.filter(project => 
    project.technologies.some(tech => tech === techName)
  );
};

interface TechLogoProps {
  name: string;
  index: number;
}

// Etkileşimli teknoloji logosu komponenti
const TechLogo: React.FC<TechLogoProps> = ({ name, index }) => {
  const controls = useAnimation();
  const logoRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [relatedProjects, setRelatedProjects] = useState<typeof projects>([]);
  
  // Mouse pozisyonu için
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    if (isHovered) {
      const projects = findProjectsWithTech(name);
      setRelatedProjects(projects);
    }
  }, [isHovered, name]);
  
  // İkon ve fallback renk
  const IconComponent: LucideIcon = techIcons[name] || Code;
  const fallbackColor = fallbackColors[name] || 'bg-gray-700';
  
  // Animasyon başlangıç stili
  const initialDelay = index * 0.1;
  
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: initialDelay, duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        if (logoRef.current) {
          const rect = logoRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          mouseX.set(x);
          mouseY.set(y);
        }
      }}
    >
      <motion.div
        ref={logoRef}
        className="w-16 h-16 rounded-xl glass flex items-center justify-center mb-2 relative overflow-hidden"
        whileHover={{ 
          scale: 1.1, 
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.3 }
        }}
        animate={controls}
        style={{ 
          x: isHovered ? mouseX.get() * 0.1 : 0,
          y: isHovered ? mouseY.get() * 0.1 : 0
        }}
      >
        <div className={`w-10 h-10 rounded-lg ${fallbackColor} flex items-center justify-center text-white`}>
          <IconComponent size={24} />
        </div>
        
        {/* Işıltı efekti */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
          initial={{ opacity: 0, rotate: 0 }}
          animate={isHovered ? 
            { opacity: [0, 0.2, 0], rotate: 360, x: ['-100%', '100%'] } : 
            { opacity: 0 }
          }
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />
      </motion.div>
      
      <p className="text-center text-sm">
        {name}
      </p>
      
      {/* İlgili projeler tooltip */}
      {isHovered && relatedProjects.length > 0 && (
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full z-10 p-3 rounded-lg glass-dark min-w-64 shadow-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="text-xs text-gray-400 mb-2 flex items-center gap-1">
            <Info size={12} />
            <span>Bu teknoloji ile geliştirdiğim projeler:</span>
          </div>
          <ul className="space-y-1">
            {relatedProjects.slice(0, 4).map((project) => (
              <li key={project.id} className="text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                <span>{project.title}</span>
              </li>
            ))}
            {relatedProjects.length > 4 && (
              <li className="text-xs text-gray-400 mt-1">
                +{relatedProjects.length - 4} daha fazla proje
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const featuredSkills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'Express.js', 'REST API'],
    mobile: ['Flutter', 'Swift', 'React Native'],
    database: ['MongoDB', 'PostgreSQL', 'Firebase'],
    tools: ['Docker', 'Git', 'AWS', 'CI/CD'],
    other: ['TensorFlow', 'OpenCV', 'Web Scraping']
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Yeteneklerim"
          subtitle="5+ yıllık deneyimimde kullandığım teknolojiler ve araçlar"
        />
        
        {/* Öne çıkan teknoloji logoları */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {Object.entries(featuredSkills).flatMap(([category, techs]) => 
            techs.map((tech, index) => (
              <TechLogo key={`${category}-${tech}`} name={tech} index={index} />
            ))
          )}
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const isSelected = selectedCategory === category;
            const featured = featuredSkills[category as keyof typeof featuredSkills];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCategory(isSelected ? null : category)}
                className={`glass p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-blue-400/50' : 'hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`glass p-3 rounded-lg ${isSelected ? 'bg-blue-400/20' : ''}`}>
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-blue-400' : 'text-blue-400'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {categoryNames[category as keyof typeof categoryNames]}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {categorySkills.length} teknoloji
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                </p>
                
                <div className="space-y-2 mb-4">
                  {featured?.map((skillName) => (
                    <div key={skillName} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-green-400" />
                      <span className="text-gray-300">{skillName}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ height: isSelected ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  {isSelected && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                      {categorySkills.map((skill, index) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.02 }}
                          className="glass px-3 py-1.5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                          onMouseEnter={() => setSelectedTech(skill.name)}
                          onMouseLeave={() => setSelectedTech(null)}
                        >
                          {skill.name}
                          
                          {selectedTech === skill.name && (
                            <motion.span
                              className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
                              animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.8, 1]
                              }}
                              transition={{ 
                                repeat: Infinity,
                                duration: 1
                              }}
                            />
                          )}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
                
                {!isSelected && (
                  <div className="text-xs text-gray-500 mt-4">
                    Tümünü görmek için tıklayın
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {skills.length}+
            </div>
            <div className="text-sm text-gray-400">Teknoloji</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-sm text-gray-400">Yıl Deneyim</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">30+</div>
            <div className="text-sm text-gray-400">Tamamlanmış Proje</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">7+</div>
            <div className="text-sm text-gray-400">Canlı Web Sitesi</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 