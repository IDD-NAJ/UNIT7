'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  Cpu, 
  Code, 
  Lightbulb, 
  Globe, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function ServicesList() {
  const { t } = useLanguage();
  const services = [
    {
      icon: <Settings className="h-10 w-10" />,
      title: t('services.itConsultation'),
      description: t('services.itConsultationDesc'),
      features: [
        t('services.itConsultation.feature1'),
        t('services.itConsultation.feature2'),
        t('services.itConsultation.feature3'),
        t('services.itConsultation.feature4'),
        t('services.itConsultation.feature5'),
        t('services.itConsultation.feature6'),
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      slug: 'it-consultation',
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: t('services.hardwareDev'),
      description: t('services.hardwareDevDesc'),
      features: [
        t('services.hardwareDev.feature1'),
        t('services.hardwareDev.feature2'),
        t('services.hardwareDev.feature3'),
        t('services.hardwareDev.feature4'),
        t('services.hardwareDev.feature5'),
        t('services.hardwareDev.feature6'),
      ],
      color: 'text-green-900',
      bgColor: 'bg-green-50',
      slug: 'hardware-development',
    },
    {
      icon: <Code className="h-10 w-10" />, 
      title: t('services.softwareDev'),
      description: t('services.softwareDevDesc'),
      features: [
        t('services.softwareDev.feature1'),
        t('services.softwareDev.feature2'),
        t('services.softwareDev.feature3'),
        t('services.softwareDev.feature4'),
        t('services.softwareDev.feature5'),
        t('services.softwareDev.feature6'),
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      slug: 'software-development',
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: t('services.productDev'),
      description: t('services.productDevDesc'),
      features: [
        t('services.productDev.feature1'),
        t('services.productDev.feature2'),
        t('services.productDev.feature3'),
        t('services.productDev.feature4'),
        t('services.productDev.feature5'),
        t('services.productDev.feature6'),
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      slug: 'product-development',
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: t('services.webDev'),
      description: t('services.webDevDesc'),
      features: [
        t('services.webDev.feature1'),
        t('services.webDev.feature2'),
        t('services.webDev.feature3'),
        t('services.webDev.feature4'),
        t('services.webDev.feature5'),
        t('services.webDev.feature6'),
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      slug: 'web-development',
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: t('services.appDev'),
      description: t('services.appDevDesc'),
      features: [
        t('services.appDev.feature1'),
        t('services.appDev.feature2'),
        t('services.appDev.feature3'),
        t('services.appDev.feature4'),
        t('services.appDev.feature5'),
        t('services.appDev.feature6'),
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      slug: 'app-development',
    },
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} passHref legacyBehavior key={index}>
                <a className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-shadow hover:shadow-xl">
                  <Card className={`${service.bgColor} border-none shadow-lg`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                      <div>
                        <CardHeader className="p-0">
                          <div className={`${service.color} mb-6`}>
                            {service.icon}
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 text-lg leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 mt-6">
                          <Button className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 pointer-events-none">
                            {t('services.learnMore')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">{t('services.keyFeatures')}</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center mt-10">
        <Link
          href="/services"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-blue-400 text-blue-600 hover:bg-blue-50 h-10 px-4 py-2"
        >
          {t('services.viewAll')}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}