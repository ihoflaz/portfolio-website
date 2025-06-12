'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  onClick 
}) => {
  const Component = hover ? motion.div : 'div';
  
  return (
    <Component
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.3 }}
      className={`glass-card ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}; 