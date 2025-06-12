'use client';

import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
  viewportHeight: number; // Navbar'ı hesaba katan kullanılabilir yükseklik
  navbarHeight: number;
}

// Sunucu tarafında tutarlı varsayılan değerler
const defaultValues: WindowSize = {
  width: 1200,
  height: 800,
  viewportHeight: 700,
  navbarHeight: 80
};

export const useWindowSize = (): WindowSize => {
  // İstemci tarafında olup olmadığımızı kontrol et
  const isClient = typeof window === 'object';
  
  // Başlangıç değerleri - sunucu ve istemci tarafında tutarlı olması için defaultValues kullan
  const [windowSize, setWindowSize] = useState<WindowSize>(defaultValues);

  useEffect(() => {
    if (!isClient) return;
    
    // Navbar yüksekliğini hesapla
    const calculateNavbarHeight = (): number => {
      const navbar = document.querySelector('nav');
      return navbar ? navbar.getBoundingClientRect().height : 0;
    };

    // Pencere boyutunu güncelleyen fonksiyon
    const handleResize = () => {
      const navbarHeight = calculateNavbarHeight();
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        viewportHeight: window.innerHeight - navbarHeight,
        navbarHeight
      });
    };

    // İlk render'da ve resize olaylarında güncelle
    window.addEventListener('resize', handleResize);
    
    // İlk çağrı
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]); // isClient'a bağlı olarak çalıştır

  return windowSize;
}; 