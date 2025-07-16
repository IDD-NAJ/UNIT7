'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('hero.title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-500"> 
              {' '}{t('hero.titleHighlight')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" passHref legacyBehavior>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <span>
                  {t('hero.getStarted')}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              {t('hero.watchDemo')}
            </Button>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('hero.projectsCompleted')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('hero.happyClients')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('hero.yearsExperience')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}