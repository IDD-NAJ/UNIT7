'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export function CompanyStory() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('about.ourStory')}
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in 2019, Unit-7ing Solutions emerged from a vision to bridge the gap 
                between cutting-edge technology and practical business solutions. Our journey 
                began with a small team of passionate developers and consultants who believed 
                in the transformative power of technology.
              </p>
              <p>
                Over the years, we've grown from a startup to a trusted technology partner 
                for businesses across various industries. Our commitment to excellence, 
                innovation, and client satisfaction has been the driving force behind our success.
              </p>
              <p>
                Today, we're proud to have delivered over 500 successful projects, serving 
                clients from startups to Fortune 500 companies. Our expertise spans across 
                multiple domains, making us a one-stop solution for all technology needs.
              </p>
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