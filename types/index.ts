export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  subProjects?: {
    name: string;
    description: string;
    url: string;
  }[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools' | 'other';
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  website: string;
}

export interface Education {
  university: string;
  degree: string;
  date: string;
}

export interface Language {
  name: string;
  level: string;
} 