import { Experience, Project, Skill, PersonalInfo, Education, Language } from '@/types';

// Project icon mapping based on technology stack and category
export const getProjectIcon = (projectId: string): string => {
  const iconMap: Record<string, string> = {
    'opca': 'Smartphone',
    'teknofest-wireless': 'Radio', 
    'sara-safe-range': 'Bluetooth',
    'pharmora': 'Pill',
    'emotion-analysis': 'Brain',
    'f43-bootcamp': 'Code2',
    'stock-video-api': 'Video',
    'eguven-admin': 'Shield',
    'endulus-travel': 'MapPin',
    'hand-gesture': 'Hand',
    'turkce-llm': 'Bot',
    'ios-image-ai': 'Eye',
    'java-exception': 'Coffee',
    'wokwi-microcontroller': 'Cpu',
    'sdk6800-assembly': 'Binary',
    'swift-phone-auth': 'KeySquare',
    'hashcat-password': 'Lock',
    'blog-platform': 'FileText',
    'swift-handwritten-digits': 'PenTool'
  };
  
  return iconMap[projectId] || 'Code';
};

// Additional icon fallbacks for missing icons
export const getIconFallback = (iconName: string): string => {
  const fallbacks: Record<string, string> = {
    'KeySquare': 'Key',
    'Code2': 'Code',
    'PenTool': 'Edit',
    'Pill': 'Plus'
  };
  
  return fallbacks[iconName] || iconName;
};

// Project icon colors based on category and technology
export const getProjectIconColor = (projectId: string): { iconColor: string, bgColor: string, shadowColor: string } => {
  const colorMap: Record<string, { iconColor: string, bgColor: string, shadowColor: string }> = {
    'opca': { 
      iconColor: 'text-cyan-400', 
      bgColor: 'from-cyan-500/20 to-blue-600/20', 
      shadowColor: 'shadow-cyan-400/50' 
    },
    'teknofest-wireless': { 
      iconColor: 'text-orange-400', 
      bgColor: 'from-orange-500/20 to-red-600/20', 
      shadowColor: 'shadow-orange-400/50' 
    },
    'sara-safe-range': { 
      iconColor: 'text-blue-400', 
      bgColor: 'from-blue-500/20 to-indigo-600/20', 
      shadowColor: 'shadow-blue-400/50' 
    },
    'pharmora': { 
      iconColor: 'text-green-400', 
      bgColor: 'from-green-500/20 to-emerald-600/20', 
      shadowColor: 'shadow-green-400/50' 
    },
    'emotion-analysis': { 
      iconColor: 'text-purple-400', 
      bgColor: 'from-purple-500/20 to-violet-600/20', 
      shadowColor: 'shadow-purple-400/50' 
    },
    'f43-bootcamp': { 
      iconColor: 'text-sky-400', 
      bgColor: 'from-sky-500/20 to-cyan-600/20', 
      shadowColor: 'shadow-sky-400/50' 
    },
    'stock-video-api': { 
      iconColor: 'text-pink-400', 
      bgColor: 'from-pink-500/20 to-rose-600/20', 
      shadowColor: 'shadow-pink-400/50' 
    },
    'eguven-admin': { 
      iconColor: 'text-amber-400', 
      bgColor: 'from-amber-500/20 to-yellow-600/20', 
      shadowColor: 'shadow-amber-400/50' 
    },
    'endulus-travel': { 
      iconColor: 'text-teal-400', 
      bgColor: 'from-teal-500/20 to-cyan-600/20', 
      shadowColor: 'shadow-teal-400/50' 
    },
    'hand-gesture': { 
      iconColor: 'text-violet-400', 
      bgColor: 'from-violet-500/20 to-purple-600/20', 
      shadowColor: 'shadow-violet-400/50' 
    },
    'turkce-llm': { 
      iconColor: 'text-indigo-400', 
      bgColor: 'from-indigo-500/20 to-blue-600/20', 
      shadowColor: 'shadow-indigo-400/50' 
    },
    'ios-image-ai': { 
      iconColor: 'text-emerald-400', 
      bgColor: 'from-emerald-500/20 to-green-600/20', 
      shadowColor: 'shadow-emerald-400/50' 
    },
    'java-exception': { 
      iconColor: 'text-red-400', 
      bgColor: 'from-red-500/20 to-orange-600/20', 
      shadowColor: 'shadow-red-400/50' 
    },
    'wokwi-microcontroller': { 
      iconColor: 'text-yellow-400', 
      bgColor: 'from-yellow-500/20 to-amber-600/20', 
      shadowColor: 'shadow-yellow-400/50' 
    },
    'sdk6800-assembly': { 
      iconColor: 'text-slate-400', 
      bgColor: 'from-slate-500/20 to-gray-600/20', 
      shadowColor: 'shadow-slate-400/50' 
    },
    'swift-phone-auth': { 
      iconColor: 'text-rose-400', 
      bgColor: 'from-rose-500/20 to-pink-600/20', 
      shadowColor: 'shadow-rose-400/50' 
    },
    'hashcat-password': { 
      iconColor: 'text-gray-400', 
      bgColor: 'from-gray-500/20 to-slate-600/20', 
      shadowColor: 'shadow-gray-400/50' 
    },
    'blog-platform': { 
      iconColor: 'text-lime-400', 
      bgColor: 'from-lime-500/20 to-green-600/20', 
      shadowColor: 'shadow-lime-400/50' 
    },
    'swift-handwritten-digits': { 
      iconColor: 'text-fuchsia-400', 
      bgColor: 'from-fuchsia-500/20 to-purple-600/20', 
      shadowColor: 'shadow-fuchsia-400/50' 
    }
  };
  
  return colorMap[projectId] || { 
    iconColor: 'text-blue-400', 
    bgColor: 'from-blue-500/20 to-purple-600/20', 
    shadowColor: 'shadow-blue-400/50' 
  };
};

export const personalInfo: PersonalInfo = {
  name: "İbrahim Hulusi Oflaz",
  title: "Software Developer",
  email: "info@ihoflaz.com",
  phone: "+90 532 427 0449",
  location: "İstanbul, Turkey",
  github: "ihoflaz",
  linkedin: "ihoflaz",
  website: "ihoflaz.com"
};

export const education: Education = {
  university: "Fırat Üniversitesi",
  degree: "Yazılım Mühendisliği",
  date: "08.2023 - 06.2026"
};

export const languages: Language[] = [
  { name: "Türkçe", level: "Ana Dil" },
  { name: "İngilizce", level: "B1" }
];

export const experiences: Experience[] = [
  {
    id: "embedded",
    title: "Embedded Wireless Systems Engineer",
    company: "TEKNOFEST Kablosuz Haberleşme",
    date: "02.2025 - Günümüz",
    description: "Afet bölgeleri ve askeri kullanım için tasarlanmış, LoRa SX1280 modüllerini frekans atlama algoritmaları ve AES şifreli mesajlaşma ile entegre eden dayanıklı uzun menzilli iletişim sistemi (Safe-Range) geliştirdim. SDR (HackRF One) ile anti-jamming algılama ve kullanıcı arayüzü için mobil BLE uygulaması uyguladım.",
    technologies: ["ESP32", "LoRa SX1280", "BLE", "HackRF One", "Frequency Hopping", "AES-128 Encryption", "Embedded C", "Python", "Spectrum Analysis"]
  },
  {
    id: "ai",
    title: "AI Researcher & Mobile Developer",
    company: "TÜBİTAK 2209-B Projesi",
    date: "01.2024 - 06.2025",
    description: "Akıllı telefon mikroskopisi ve CNN tabanlı derin öğrenme kullanarak köpek dışkı görüntülerinden paraziter hastalıkları (Neosporosiş, Ekinokokkoz, Coenuroz) tespit eden mobil AI destekli sistem geliştirdim. DIPLE lenslerle veteriner ortamlarda saha testi yapıldı.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Mobile Image Processing", "DIPLE Micro Optics Lenses", "Data Collection & CNN Training Pipeline"]
  },
  {
    id: "frontend-coware",
    title: "Frontend Developer",
    company: "Coware",
    date: "07.2023 - 11.2023",
    description: "Deprem uyarı cihazlarını yönetmek için kullanılacak bir admin panelinin frontend'ini geliştirdim.",
    technologies: ["React", "TypeScript", "Material-UI", "Redux", "API Integration"]
  },
  {
    id: "fullstack",
    title: "FullStack Developer",
    company: "EtrSoft",
    date: "06.2023 - 10.2023",
    description: "E-imza siparişlerini yönetmek, bayi ortaklıklarını kolaylaştırmak ve bayi-kullanıcı ilişkilerini ve işlemlerini denetlemek için Admin Panel'i olan otomatik bir web uygulaması geliştirdim.",
    technologies: ["ReactJS", "NextJS", "Material-UI", "ExpressJS", "BullJS", "Prisma ORM", "Winston", "ABAC", "IIS", "GoogleAPI"]
  },
  {
    id: "python",
    title: "Python Developer & System Admin",
    company: "Hajans Yazılım ve Arge",
    date: "07.2022 - 04.2023",
    description: "Bulut tabanlı ERP projesinde hem ERP Sistem Yöneticisi hem de Python Geliştirici olarak çalıştım. Bu rolde şirketin gereksinimlerine göre geliştirmeler ve kurulumlar gerçekleştirdim.",
    technologies: ["Python", "Odoo"]
  },
  {
    id: "frontend-hizmet",
    title: "Frontend Developer",
    company: "Hızmet Teknik",
    date: "06.2021 - 07.2022",
    description: "Drupal kullanılarak geliştirilen E-Ticaret Altyapısı projesinde Frontend Developer olarak görev aldım. Şirketin ihtiyaçlarına göre çeşitli teknolojilerle çalışma fırsatı buldum.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
  }
];

export const projects: Project[] = [
  {
    id: "opca",
    title: "OpCa - Mobil Parazit Tanı Sistemi",
    description: "Telefona takılan Smart Micro Optics mercek ile köpek dışkısındaki parazitleri (Neosporosis, Echinococcosis, Coenurosis) yapay zeka destekli olarak tanıyabilen bir mobil uygulama. iOS uygulaması, admin paneli ve backend altyapısı ile komple bir sağlık teknolojisi çözümü. Alt projeler: @opca-backend ve @opca-admin-dashboard",
    technologies: ["Swift", "SwiftUI", "CoreML", "Vision Framework", "iOS", "JavaScript", "Node.js", "Express", "MongoDB", "TypeScript", "React", "Smart Micro Optics"],
    githubUrl: "https://github.com/ihoflaz/OpCa",
    imageUrl: "/images/opca.svg",
    subProjects: [
      {
        name: "OpCa Backend",
        description: "OpCa uygulamasının backend altyapısı",
        url: "https://github.com/ihoflaz/opca-backend"
      },
      {
        name: "OpCa Admin Dashboard",
        description: "OpCa uygulamasının yönetici paneli",
        url: "https://github.com/ihoflaz/opca-admin-dashboard"
      }
    ]
  },
  {
    id: "teknofest-wireless",
    title: "TEKNOFEST Kablosuz Haberleşme Sistemi",
    description: "Adaptif modülasyon (QPSK/16-QAM/64-QAM/OFDM) ve frekans atlama kullanan yazılım tanımlı iletişim sistemi. Afet bölgelerinde güvenli haberleşme için geliştirildi.",
    technologies: ["Python", "GNU Radio", "NumPy", "Matplotlib", "CNN", "HackRF One", "SX1280 LoRa", "ESP32"],
    githubUrl: "https://github.com/ihoflaz/teknofest-wireless",
    imageUrl: "/images/teknofest-wireless.svg"
  },
  {
    id: "sara-safe-range",
    title: "Sa-Ra (Safe-Range) - Altyapısız İletişim Ağı",
    description: "Kalabalık bölgelerde internet olmadan Bluetooth Low Energy (BLE) üzerinden grup iletişimini sağlayan mobil uygulama. Afet durumları için kritik iletişim çözümü.",
    technologies: ["Swift", "SwiftUI", "CoreBluetooth", "PostgreSQL", "Firebase", "JWT", "BLE", "iOS Development"],
    githubUrl: "https://github.com/ihoflaz/frontend-sa-ra",
    imageUrl: "/images/sara-safe-range.svg"
  },
  {
    id: "pharmora",
    title: "Pharmora - Eczane Stok Yönetimi",
    description: "Eczaneler arası ilaç alışverişi yapılmasını sağlayan mobil uygulama ve backend sistemi. Stok takibi, sipariş yönetimi ve eczaneler arası network.",
    technologies: ["Swift", "SwiftUI", "MongoDB", "Node.js", "Express.js", "JWT", "RESTful API", "Postman"],
    githubUrl: "https://github.com/ihoflaz/pharmora",
    imageUrl: "/images/pharmora.svg"
  },
  {
    id: "emotion-analysis",
    title: "Görüntü ve Ses ile Duygu Analizi",
    description: "Yaşa ve duygu durumuna göre ses analizinden duygu sınıflandırması yapan AI modeli. MFCC özellik çıkarımı ve derin öğrenme ile yüksek doğruluk.",
    technologies: ["Python", "Librosa", "TensorFlow", "Keras", "MFCC", "Scikit-learn", "NumPy", "Pandas"],
    githubUrl: "https://github.com/ihoflaz/emotion-analysis",
    imageUrl: "/images/emotion-analysis.svg"
  },
  {
    id: "f43-bootcamp",
    title: "F-43 Bootcamp Projesi",
    description: "Flutter/Dart ile geliştirilen, 2 star ve 3 fork alan popüler açık kaynak kodlu mobil uygulama projesi. Modern UI/UX tasarımı ve state management yapısı ile öne çıkan bir eğitim projesi.",
    technologies: ["Flutter", "Dart", "Firebase", "Provider", "REST API", "Material Design"],
    githubUrl: "https://github.com/ihoflaz/f_43_bootcamp",
    imageUrl: "/images/f43-bootcamp.svg"
  },
  {
    id: "stock-video-api",
    title: "Stock Video API Platform",
    description: "Video içerik yönetimi için geliştirdiğim full-stack platform. Frontend, backend ve API yapısı ile komple bir video stok yönetim sistemi. RESTful API mimarisi ve modern frontend teknolojileri kullanılarak geliştirildi.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "JWT", "Multer", "FFmpeg", "AWS S3"],
    githubUrl: "https://github.com/ihoflaz/stock-video-api",
    imageUrl: "/images/stock-video-api.svg"
  },
  {
    id: "eguven-admin",
    title: "E-Güven Admin Dashboard & Web Scraping",
    description: "E-imza yönetimi için kapsamlı admin paneli ve web scraping sistemi. MIT lisansı ile açık kaynak. Gerçek zamanlı veri işleme, raporlama ve otomatik veri toplama özellikleri içeriyor.",
    technologies: ["JavaScript", "React", "Node.js", "Puppeteer", "Cheerio", "MongoDB", "Chart.js", "Material-UI"],
    githubUrl: "https://github.com/ihoflaz/eguven_adminDashboard",
    liveUrl: "https://admin.eguven.com",
    imageUrl: "/images/eguven-admin.svg"
  },
  {
    id: "endulus-travel",
    title: "Endülüs Travel - Turizm Platformu",
    description: "Turizm acentesi için geliştirdiğim modern web sitesi. Online rezervasyon sistemi, tur yönetimi ve müşteri portalı özellikleri ile full-stack bir turizm çözümü.",
    technologies: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Strapi CMS", "PostgreSQL", "Stripe API"],
    githubUrl: "https://github.com/ihoflaz/endulus-travel",
    liveUrl: "https://endulustravel.com",
    imageUrl: "/images/endulus-travel.svg"
  },
  {
    id: "hand-gesture",
    title: "Hand Gesture Recognition - PyQt5 Projesi",
    description: "Kamera ile el hareketlerini tanıyarak bilgisayar kısayollarını tetikleyen sistem. MediaPipe ve OpenCV kullanarak gerçek zamanlı el takibi.",
    technologies: ["Python", "OpenCV", "MediaPipe", "PyQt5", "NumPy"],
    githubUrl: "https://github.com/ihoflaz/hand-gesture-recognition",
    imageUrl: "/images/hand-gesture.svg"
  },
  {
    id: "turkce-llm",
    title: "Türkçe LLM Geliştirme",
    description: "Türkçe verilerle LLM eğitme projesi. LoRA fine-tuning, özel tokenizer ve Türkçe dil modeli geliştirme çalışmaları. Conda ortamı kurulumu ve token eğitim süreci yapılandırması.",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "LoRA", "Tokenizer Training", "CUDA"],
    githubUrl: "https://github.com/ihoflaz/turkce-llm",
    imageUrl: "/images/turkce-llm.svg"
  },
  {
    id: "ios-image-ai",
    title: "iOS Görüntü İşleme + AI",
    description: "Kamera ile gerçek zamanlı görüntü işleme yapan ve AI modeliyle sınıflandırma yapan iOS uygulama. CoreML ve Vision Framework entegrasyonu.",
    technologies: ["Swift 6", "SwiftUI", "CoreML", "Vision Framework", "iOS 18.4", "CreateML"],
    githubUrl: "https://github.com/ihoflaz/ios-image-ai",
    imageUrl: "/images/ios-image-ai.svg"
  },
  {
    id: "java-exception",
    title: "Java Exception Handling Öğrenme Projesi",
    description: "Java'daki hata yönetim mekanizmalarını deneyimleyerek öğrendiğim küçük uygulamalar. Try-Catch blokları ve özel Exception sınıfları oluşturma.",
    technologies: ["Java SE", "Try-Catch", "Custom Exception Sınıfları"],
    githubUrl: "https://github.com/ihoflaz/java-exception-handling",
    imageUrl: undefined
  },
  {
    id: "wokwi-microcontroller",
    title: "Wokwi Üzerinde Mikrodenetleyici Simülasyonu",
    description: "Gerçek donanım olmadan sanal ortamda mikrodenetleyici projesi geliştirme. LED, sensör ve motor simülasyonları ile gerçek zamanlı test edebilme.",
    technologies: ["Wokwi", "Arduino (C++)", "LED - Sensor simülasyonları"],
    githubUrl: "https://github.com/ihoflaz/wokwi-microcontroller",
    imageUrl: undefined
  },
  {
    id: "sdk6800-assembly",
    title: "Assembly ile SDK6800 Üzerinde Toplama ve Hafıza İşlemleri",
    description: "SDK6800 emülatörü üzerinde 10 rastgele sayı toplayan Assembly kodunun geliştirilmesi. Düşük seviyeli programlama ve bellek yönetimi.",
    technologies: ["Assembly (6800)", "SDK6800 Emulator"],
    githubUrl: "https://github.com/ihoflaz/sdk6800-assembly",
    imageUrl: "/images/assembly.png"
  },
  {
    id: "swift-phone-auth",
    title: "Swift ile Telefon Numarası Doğrulamalı Giriş Sayfası",
    description: "PostgreSQL veritabanı ve SwiftUI arayüzü ile kullanıcı giriş sistemi. Telefon numarası doğrulama ve JWT autentikasyon.",
    technologies: ["Swift", "SwiftUI", "URLSession", "PostgreSQL", "JWT Auth"],
    githubUrl: "https://github.com/ihoflaz/swift-phone-auth",
    imageUrl: "/images/swift-auth.png"
  },
  {
    id: "hashcat-password",
    title: "Hashcat ile Şifre Kırma Testleri",
    description: "Hashcat üzerinde parola çözümleme testleri ve parola veri setleriyle çalışma. Güvenlik araştırmaları için geliştirme çalışmaları.",
    technologies: ["Hashcat", "macOS Terminal", "Wordlist (rockyou.txt vb.)"],
    githubUrl: "https://github.com/ihoflaz/hashcat-tests",
    imageUrl: "/images/hashcat.png"
  },
  {
    id: "blog-platform",
    title: "Blog Sitesi Geliştirme",
    description: "Text editörü, medya desteği, URL oluşturma, yazar bilgisi gibi özelliklerle detaylı bir blog platformu. Modern full-stack teknolojiler ile geliştirilmekte.",
    technologies: ["ReactJS", "ExpressJS", "MongoDB", "Node.js", "AWS S3"],
    githubUrl: "https://github.com/ihoflaz/blog-platform",
    imageUrl: "/images/blog.png"
  },
  {
    id: "swift-handwritten-digits",
    title: "Swift ile El Yazısı Rakam Tanıma Uygulaması",
    description: "Kullanıcının çizdiği rakamı sınıflandıran mobil uygulama. CoreML ve CreateML kullanarak eğitilmiş model entegrasyonu.",
    technologies: ["Swift", "CoreML", "SwiftUI", "CreateML", "CanvasKit"],
    githubUrl: "https://github.com/ihoflaz/swift-digits",
    imageUrl: "/images/swift-digits.png"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 0, category: "frontend" },
  { name: "JavaScript", level: 0, category: "frontend" },
  { name: "TypeScript", level: 0, category: "frontend" },
  { name: "React", level: 0, category: "frontend" },
  { name: "Next.js", level: 0, category: "frontend" },
  { name: "Vue.js", level: 0, category: "frontend" },
  { name: "Flutter", level: 0, category: "frontend" },
  { name: "Tailwind CSS", level: 0, category: "frontend" },
  { name: "Material-UI", level: 0, category: "frontend" },
  { name: "Bootstrap", level: 0, category: "frontend" },
  { name: "jQuery", level: 0, category: "frontend" },
  { name: "Chart.js", level: 0, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 0, category: "backend" },
  { name: "Express.js", level: 0, category: "backend" },
  { name: "Python", level: 0, category: "backend" },
  { name: "Django", level: 0, category: "backend" },
  { name: "FastAPI", level: 0, category: "backend" },
  { name: "Odoo", level: 0, category: "backend" },
  { name: "PHP", level: 0, category: "backend" },
  { name: "Drupal", level: 0, category: "backend" },
  { name: "GraphQL", level: 0, category: "backend" },
  { name: "REST API", level: 0, category: "backend" },
  { name: "JWT", level: 0, category: "backend" },
  
  // Mobile
  { name: "Swift", level: 0, category: "mobile" },
  { name: "SwiftUI", level: 0, category: "mobile" },
  { name: "CoreML", level: 0, category: "mobile" },
  { name: "CoreBluetooth", level: 0, category: "mobile" },
  { name: "Flutter", level: 0, category: "mobile" },
  { name: "Dart", level: 0, category: "mobile" },
  { name: "React Native", level: 0, category: "mobile" },
  { name: "iOS Development", level: 0, category: "mobile" },
  
  // Database
  { name: "MongoDB", level: 0, category: "database" },
  { name: "PostgreSQL", level: 0, category: "database" },
  { name: "MySQL", level: 0, category: "database" },
  { name: "Redis", level: 0, category: "database" },
  { name: "Firebase", level: 0, category: "database" },
  { name: "Prisma ORM", level: 0, category: "database" },
  { name: "Mongoose", level: 0, category: "database" },
  { name: "Strapi CMS", level: 0, category: "database" },
  
  // Tools & DevOps
  { name: "Git", level: 0, category: "tools" },
  { name: "Docker", level: 0, category: "tools" },
  { name: "VS Code", level: 0, category: "tools" },
  { name: "Xcode", level: 0, category: "tools" },
  { name: "Postman", level: 0, category: "tools" },
  { name: "Nginx", level: 0, category: "tools" },
  { name: "IIS", level: 0, category: "tools" },
  { name: "Vagrant", level: 0, category: "tools" },
  { name: "Lando", level: 0, category: "tools" },
  { name: "AWS", level: 0, category: "tools" },
  { name: "Vercel", level: 0, category: "tools" },
  { name: "CI/CD", level: 0, category: "tools" },
  
  // AI/ML & Other
  { name: "TensorFlow", level: 0, category: "other" },
  { name: "PyTorch", level: 0, category: "other" },
  { name: "Keras", level: 0, category: "other" },
  { name: "Scikit-learn", level: 0, category: "other" },
  { name: "OpenCV", level: 0, category: "other" },
  { name: "MediaPipe", level: 0, category: "other" },
  { name: "Pandas", level: 0, category: "other" },
  { name: "NumPy", level: 0, category: "other" },
  { name: "Matplotlib", level: 0, category: "other" },
  { name: "Librosa", level: 0, category: "other" },
  { name: "Jupyter", level: 0, category: "other" },
  { name: "Embedded C", level: 0, category: "other" },
  { name: "ESP32", level: 0, category: "other" },
  { name: "LoRa", level: 0, category: "other" },
  { name: "BLE", level: 0, category: "other" },
  { name: "GNU Radio", level: 0, category: "other" },
  { name: "HackRF One", level: 0, category: "other" },
  { name: "Web Scraping", level: 0, category: "other" },
  { name: "Puppeteer", level: 0, category: "other" },
  { name: "FFmpeg", level: 0, category: "other" },
  { name: "Assembly", level: 0, category: "other" },
  { name: "Java", level: 0, category: "other" },
  { name: "Hashcat", level: 0, category: "other" },
  { name: "Wokwi", level: 0, category: "other" },
  { name: "Three.js", level: 0, category: "other" }
];

export const websites = [
  "endulustravel.com",
  "erginsoyinsaat.com", 
  "sewengrup.com",
  "mypolimer.com.tr",
  "admin.opca.com",
  "admin.sara.com",
  "campusintifada.com",
  "mariescarf.com",
  "ihoflaz.com"
]; 