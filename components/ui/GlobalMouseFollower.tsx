'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const GlobalMouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('button, a, .interactive, .glass-card'));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mounted]);

  // Don't render anything during SSR to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Interactive orbs that follow mouse */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/15 to-purple-500/15 backdrop-blur-sm border border-blue-400/20"
          style={{
            width: 40 + i * 15,
            height: 40 + i * 15,
          }}
          animate={{
            x: mousePosition.x - (20 + i * 7.5) + (i - 2) * 30,
            y: mousePosition.y - (20 + i * 7.5) + (i - 2) * 20,
            scale: isHovered ? 1.3 : 1,
            opacity: isHovered ? 0.8 : 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 120 - i * 15,
            damping: 15 + i * 3,
          }}
        />
      ))}
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full shadow-sm shadow-blue-400/30"
          animate={{
            x: mousePosition.x + Math.cos(i * 1.047) * (60 + i * 15),
            y: mousePosition.y + Math.sin(i * 1.047) * (60 + i * 15),
            scale: isHovered ? 1.8 : 1,
            opacity: isHovered ? 0.9 : 0.5,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 8,
            delay: i * 0.05,
          }}
        />
      ))}
      
      {/* Central cursor dot */}
      <motion.div
        className="absolute w-2 h-2 bg-blue-400/60 rounded-full shadow-lg shadow-blue-400/40"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Connecting lines on hover */}
      {isHovered && (
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(3)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 3;
            return (
              <motion.line
                key={`line-${i}`}
                x1={mousePosition.x}
                y1={mousePosition.y}
                x2={mousePosition.x + Math.cos(angle) * 80}
                y2={mousePosition.y + Math.sin(angle) * 80}
                stroke="url(#mouseGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              />
            );
          })}
          <defs>
            <linearGradient id="mouseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};