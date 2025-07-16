'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Cpu, 
  Smartphone, 
  Globe, 
  Settings, 
  Lightbulb,
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export function ServicesOverview() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: t('services.itConsultation'),
      description: t('services.itConsultationDesc'),
      color: 'text-blue-600',
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: t('services.hardwareDev'),
      description: t('services.hardwareDevDesc'),
      color: 'text-purple-600',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: t('services.softwareDev'),
      description: t('services.softwareDevDesc'),
      color: 'text-blue-600',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('services.productDev'),
      description: t('services.productDevDesc'),
      color: 'text-purple-600',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('services.webDev'),
      description: t('services.webDevDesc'),
      color: 'text-blue-600',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('services.appDev'),
      description: t('services.appDevDesc'),
      color: 'text-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <CardHeader>
                <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" passHref legacyBehavior>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <span>
                {t('services.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}