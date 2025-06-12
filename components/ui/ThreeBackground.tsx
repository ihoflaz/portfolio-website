'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  const particleCount = 8000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);
  
  useFrame((state, delta) => {
    if (!ref.current) return;
    
    ref.current.rotation.x += delta * 0.03;
    ref.current.rotation.y += delta * 0.03;
    
    ref.current.rotation.x += mouse.y * 0.0005;
    ref.current.rotation.y += mouse.x * 0.0005;
  });
  
  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        alphaTest={0.001}
      />
    </Points>
  );
}

export const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <ParticleField />
      </Canvas>
    </div>
  );
}; 