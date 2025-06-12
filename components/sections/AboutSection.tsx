'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Code2, Coffee, Gamepad2, Book, Music } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { personalInfo, education, languages } from '@/lib/data';
import Image from 'next/image';

export const AboutSection: React.FC = () => {
  const stats = [
    { icon: Code2, label: "Yıl Deneyim", value: "5+" },
    { icon: Briefcase, label: "Tamamlanan Proje", value: "30+" },
    { icon: Coffee, label: "Kahve (Günlük)", value: "3+" },
    { icon: GraduationCap, label: "Öğrenmeye Devam", value: "∞" }
  ];

  const interests = [
    { icon: Code2, label: "Yazılım Geliştirme", description: "Yeni teknolojiler öğrenmek" },
    { icon: Gamepad2, label: "Video Oyunları", description: "Strateji ve RPG oyunları" },
    { icon: Book, label: "Okuma", description: "Teknoloji ve bilim kurgu" },
    { icon: Music, label: "Müzik", description: "Çalışırken lo-fi dinlemek" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Hakkımda</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Fotoğraf ve kısa bilgi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                    <Image 
                      src="/avatar.png" 
                      alt={personalInfo.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
                <p className="text-lg text-gray-400 mb-4">{personalInfo.title}</p>
                
                <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <GraduationCap size={16} />
                  <span>{education.university}</span>
                </div>
              </div>
              
              {/* İstatistikler */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-4 rounded-xl text-center"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Sağ taraf - Detaylı bilgi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <h3 className="text-xl font-semibold mb-4">Merhaba! 👋</h3>
              <p className="text-gray-300 mb-4">
                Ben İbrahim Hulusi, 5 yıldır yazılım geliştirme alanında çeşitli projelerde çalışan tutkulu bir yazılım geliştiriciyim. 
                Yenilikçi teknolojileri öğrenmek ve kullanmak beni her zaman heyecanlandırıyor.
              </p>
              <p className="text-gray-300 mb-4">
                Fırat Üniversitesi'nde Yazılım Mühendisliği okuyorum ve mezun olmadan önce sektörde önemli deneyimler kazandım. 
                Frontend'den backend'e, mobil uygulamalardan AI projelerine kadar geniş bir yelpazede projeler geliştirdim.
              </p>
              <p className="text-gray-300">
                Hedeflerime doğru ilerlerken sadece "Nasıl çalışır?" sorusunu değil, aynı zamanda "Nasıl daha verimli çalışabilir?" 
                sorusunu da sormayı önemsiyorum. Bu yaklaşım, sürekli öğrenme ve gelişme motivasyonumu canlı tutuyor.
              </p>
            </Card>
            
            {/* İlgi Alanları */}
            <Card>
              <h3 className="text-xl font-semibold mb-4">İlgi Alanlarım</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="glass p-2 rounded-lg">
                      <interest.icon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">{interest.label}</h4>
                      <p className="text-sm text-gray-400">{interest.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
            
            {/* Diller */}
            <Card>
              <h3 className="text-xl font-semibold mb-4">Dil Becerileri</h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 glass rounded-lg"
                  >
                    <span className="font-medium">{language.name}</span>
                    <span className="text-sm text-gray-400">{language.level}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 