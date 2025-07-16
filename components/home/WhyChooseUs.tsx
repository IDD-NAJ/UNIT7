'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Clock, 
  Users, 
  Trophy,
  Zap,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhyChooseUs() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('whyChoose.security'),
      description: t('whyChoose.securityDesc'),
      color: 'text-blue-600',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('whyChoose.onTime'),
      description: t('whyChoose.onTimeDesc'),
      color: 'text-purple-600',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('whyChoose.expertTeam'),
      description: t('whyChoose.expertTeamDesc'),
      color: 'text-blue-600',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: t('whyChoose.proven'),
      description: t('whyChoose.provenDesc'),
      color: 'text-purple-600',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('whyChoose.cuttingEdge'),
      description: t('whyChoose.cuttingEdgeDesc'),
      color: 'text-blue-600',
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: t('whyChoose.support'),
      description: t('whyChoose.supportDesc'),
      color: 'text-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('whyChoose.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <CardHeader>
                <div className={`${advantage.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {advantage.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {advantage.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}