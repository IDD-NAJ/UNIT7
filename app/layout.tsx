import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechVista Solutions - IT Consultation & Development Services',
  description: 'Professional IT consultation, hardware development, software development, and tech solutions. Transform your business with cutting-edge technology.',
  keywords: 'IT consultation, software development, hardware development, web development, app development, tech solutions',
  authors: [{ name: 'TechVista Solutions' }],
  openGraph: {
    title: 'TechVista Solutions - IT Consultation & Development Services',
    description: 'Professional IT consultation, hardware development, software development, and tech solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}