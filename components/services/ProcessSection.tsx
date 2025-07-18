'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Search, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  HeartHandshake 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProcessSection() {
  const { t } = useLanguage();
  const process = [
    {
      step: '01',
      icon: <Search className="h-8 w-8" />,
      title: t('services.process.discovery.title'),
      description: t('services.process.discovery.desc'),
    },
    {
      step: '02',
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('services.process.strategy.title'),
      description: t('services.process.strategy.desc'),
    },
    {
      step: '03',
      icon: <Code className="h-8 w-8" />,
      title: t('services.process.development.title'),
      description: t('services.process.development.desc'),
    },
    {
      step: '04',
      icon: <TestTube className="h-8 w-8" />,
      title: t('services.process.testing.title'),
      description: t('services.process.testing.desc'),
    },
    {
      step: '05',
      icon: <Rocket className="h-8 w-8" />,
      title: t('services.process.deployment.title'),
      description: t('services.process.deployment.desc'),
    },
    {
      step: '06',
      icon: <HeartHandshake className="h-8 w-8" />,
      title: t('services.process.support.title'),
      description: t('services.process.support.desc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.process.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.process.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600">
                    {item.step}
                  </div>
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}