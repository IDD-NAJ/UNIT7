'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Lightbulb, 
  Users, 
  Shield, 
  Trophy,
  Heart,
  Zap
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function CompanyValues() {
  const { t } = useLanguage();
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('about.valueInnovation'),
      description: t('about.valueInnovationDesc'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('about.valueCollaboration'),
      description: t('about.valueCollaborationDesc'),
      color: 'text-green-900',
      bgColor: 'bg-green-100',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('about.valueIntegrity'),
      description: t('about.valueIntegrityDesc'),
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: t('about.valueExcellence'),
      description: t('about.valueExcellenceDesc'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('about.valuePassion'),
      description: t('about.valuePassionDesc'),
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('about.valueAgility'),
      description: t('about.valueAgilityDesc'),
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.values')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('about.valuesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardHeader>
                <div className={`p-3 ${value.bgColor} dark:bg-opacity-20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={value.color}>
                    {value.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}