'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';

export function ITConsultationFeatures() {
  const { t } = useLanguage();

  const features = [
    "services.itConsultation.feature1",
    "services.itConsultation.feature2",
    "services.itConsultation.feature3",
    "services.itConsultation.feature4",
    "services.itConsultation.feature5",
    "services.itConsultation.feature6",
  ];

  return (
    <ul>
      {features.map((key) => (
        <li key={key}>
          {t(key)}
        </li>
      ))}
    </ul>
  );
}

export function HardwareDevFeatures() {
  const { t } = useLanguage();

  const features = [
    "services.hardwareDev.feature1",
    "services.hardwareDev.feature2",
    "services.hardwareDev.feature3",
    "services.hardwareDev.feature4",
    "services.hardwareDev.feature5",
    "services.hardwareDev.feature6",
  ];

  return (
    <ul>
      {features.map((key) => (
        <li key={key}>
          {t(key)}
        </li>
      ))}
    </ul>
  );
}

export function SoftwareDevFeatures() {
  const { t } = useLanguage();

  const features = [
    "services.softwareDev.feature1",
    "services.softwareDev.feature2",
    "services.softwareDev.feature3",
    "services.softwareDev.feature4",
    "services.softwareDev.feature5",
    "services.softwareDev.feature6",
  ];

  return (
    <ul>
      {features.map((key) => (
        <li key={key}>
          {t(key)}
        </li>
      ))}
    </ul>
  );
}

export default function WebDevelopmentClient() {
  const { t } = useLanguage();
  const features = [
    t('services.webDev.feature1'),
    t('services.webDev.feature2'),
    t('services.webDev.feature3'),
    t('services.webDev.feature4'),
    t('services.webDev.feature5'),
    t('services.webDev.feature6'),
    t('services.webDev.feature7'),
    t('services.webDev.feature8'),
    t('services.webDev.feature9'),
    t('services.webDev.feature10'),
    t('services.webDev.feature11'),
    t('services.webDev.feature12'),
    t('services.webDev.feature13'),
    t('services.webDev.feature14'),
    t('services.webDev.feature15'),
    t('services.webDev.feature16'),
    t('services.webDev.feature17'),
    t('services.webDev.feature18'),
    t('services.webDev.feature19'),
    t('services.webDev.feature20'),
    t('services.webDev.feature21'),
    t('services.webDev.feature22'),
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
              <Globe className="h-10 w-10 text-blue-600" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('services.webDev')}</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('services.webDevDesc')}
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <span>
                {t('hero.getStarted')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <div className="max-w-5xl mx-auto px-4">
        <Card className="shadow-lg border-blue-100 bg-gradient-to-br from-white to-green-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{t('services.keyFeatures')}</CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              {t('services.webDev.featuresDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.ul
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
            >
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start space-x-3 bg-white/80 rounded-lg p-3 shadow-sm hover:shadow-md hover:bg-green-50 transition-all duration-200 cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 