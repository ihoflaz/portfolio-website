'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'pink';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showPercentage = true,
  color = 'blue',
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    setDisplayValue(value);
  }, [value]);
  
  const colorClasses = {
    blue: 'from-blue-400 to-blue-600',
    green: 'from-green-400 to-green-600',
    purple: 'from-purple-400 to-purple-600',
    pink: 'from-pink-400 to-pink-600'
  };
  
  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between mb-2">
          {label && <span className="text-sm font-medium text-gray-300">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium text-gray-400">{displayValue}%</span>
          )}
        </div>
      )}
      <div className="relative w-full h-2 overflow-hidden rounded-full glass">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${displayValue}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClasses[color]} rounded-full`}
        />
      </div>
    </div>
  );
}; 