'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export function CompanyStory() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.ourStory')}
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{t('about.ourStoryP1')}</p>
              <p>{t('about.ourStoryP2')}</p>
              <p>{t('about.ourStoryP3')}</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team working together"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}