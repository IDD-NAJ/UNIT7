'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            {t('cta.startProject')}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            {t('cta.scheduleCall')}
          </Button>
        </div>
      </div>
    </section>
  );
}