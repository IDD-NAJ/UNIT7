'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function ServicesHero() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('services.heroDesc')}
          </p>
        </div>
      </div>
    </section>
  );
}