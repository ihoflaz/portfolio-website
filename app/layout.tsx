import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNavIndicator } from '@/components/ui/FloatingNavIndicator';
import { ThreeBackground } from '@/components/ui/ThreeBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'İbrahim Hulusi Oflaz - Portfolio',
  description: 'Software Developer Portfolio',
  keywords: 'software developer, frontend developer, react, next.js, typescript, portfolio',
  authors: [{ name: 'İbrahim Hulusi Oflaz' }],
  openGraph: {
    title: 'İbrahim Hulusi Oflaz - Software Developer',
    description: 'Software Developer with 5 years of experience in various projects.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} relative min-h-screen overflow-x-hidden`}>
        {/* Three.js Background */}
        <ThreeBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <FloatingNavIndicator />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
