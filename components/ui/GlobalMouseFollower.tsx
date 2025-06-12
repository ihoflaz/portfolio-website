'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GlobalMouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [elementType, setElementType] = useState<'default' | 'button' | 'link' | 'card'>('default');
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsVisible(true);

      // Detect element types for different mouse effects
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setElementType('button');
        setIsHovered(true);
      } else if (target.tagName === 'A' || target.closest('a')) {
        setElementType('link');
        setIsHovered(true);
      } else if (target.closest('.glass-card') || target.closest('.glass')) {
        setElementType('card');
        setIsHovered(true);
      } else {
        setElementType('default');
        setIsHovered(false);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      // Add custom cursor class to body
      document.body.classList.add('mouse-follower-active');
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
      // Remove custom cursor class from body
      document.body.classList.remove('mouse-follower-active');
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listeners to document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-40"
      style={{ top: 0, left: 0 }}
    >
      <AnimatePresence>
        {isVisible && (
          <>            {/* Main following orbs */}
            {[...Array(5)].map((_, i) => {
              const getOrbColor = () => {
                switch (elementType) {
                  case 'button': return 'from-green-400/15 to-emerald-500/15 border-green-400/20';
                  case 'link': return 'from-purple-400/15 to-violet-500/15 border-purple-400/20';
                  case 'card': return 'from-cyan-400/15 to-blue-500/15 border-cyan-400/20';
                  default: return 'from-blue-400/15 to-purple-500/15 border-blue-400/20';
                }
              };

              return (
                <motion.div
                  key={`global-orb-${i}`}
                  className={`absolute rounded-full bg-gradient-to-r ${getOrbColor()} backdrop-blur-sm border`}
                  style={{
                    width: `${40 + i * 15}px`,
                    height: `${40 + i * 15}px`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    x: mousePosition.x - (20 + i * 7.5) + (i * 30),
                    y: mousePosition.y - (20 + i * 7.5) + (i * 20),
                    scale: isHovered ? 1.3 : 1,
                    opacity: 0.6 - i * 0.1,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200 - i * 30,
                    damping: 25 + i * 5,
                  }}
                />
              );
            })}

            {/* Trailing particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`global-particle-${i}`}
                className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  x: mousePosition.x + Math.cos(i * 0.5) * (60 + i * 15),
                  y: mousePosition.y + Math.sin(i * 0.5) * (60 + i * 15),
                  scale: isHovered ? 1.5 : 1,
                  opacity: 0.8 - i * 0.05,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100 - i * 5,
                  damping: 15 + i * 2,
                  delay: i * 0.02,
                }}
              />
            ))}

            {/* Connecting lines when hovered */}
            {isHovered && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.line
                    key={`global-line-${i}`}
                    x1={mousePosition.x}
                    y1={mousePosition.y}
                    x2={mousePosition.x + Math.cos(i * 1.5) * 100}
                    y2={mousePosition.y + Math.sin(i * 1.5) * 100}
                    stroke="url(#globalGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  />
                ))}
                <defs>
                  <linearGradient id="globalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {/* Glow effect */}
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 blur-xl"
              style={{
                width: '200px',
                height: '200px',
              }}
              animate={{
                x: mousePosition.x - 100,
                y: mousePosition.y - 100,
                scale: isHovered ? 1.5 : 1,
                opacity: isHovered ? 0.3 : 0.1,
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
