'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'glass text-white hover:bg-white/20 hover:shadow-xl',
    secondary: 'glass-dark text-gray-300 hover:text-white hover:bg-gray-800/80',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/10',
    outline: 'border border-gray-500 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-3'
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
        />
      ) : (
        children
      )}
    </motion.button>
  );
}; 