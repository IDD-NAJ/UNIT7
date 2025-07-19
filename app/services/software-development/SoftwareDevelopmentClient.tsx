'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, CheckCircle, ArrowRight, TrendingUp, Shield, Users, RefreshCcw, BookOpen, PhoneCall, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SoftwareDevelopmentClient() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
              <Code className="h-10 w-10 text-blue-600" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('software.hero.title')}</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('software.hero.subtitle')}
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <span>
                {t('software.cta.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <Card className="shadow-lg border-blue-100 bg-gradient-to-br from-white to-green-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{t('software.features.title')}</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                {t('software.features.desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.ul
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } }
                }}
              >
                {[
                  t('software.features.custom'),
                  t('software.features.api'),
                  t('software.features.database'),
                  t('software.features.legacy'),
                  t('software.features.cloud'),
                  t('software.features.microservices'),
                  t('software.features.devops'),
                  t('software.features.saas'),
                  t('software.features.security'),
                  t('software.features.performance'),
                  t('software.features.maintenance'),
                  t('software.features.testing'),
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start space-x-3 bg-white/80 rounded-lg p-3 shadow-sm hover:shadow-md hover:bg-green-50 transition-all duration-200 cursor-pointer"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Software Development Process Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('software.process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: <BookOpen className="h-7 w-7 text-blue-600" />, title: t('software.process.discovery'), desc: t('software.process.discoveryDesc') },
              { icon: <TrendingUp className="h-7 w-7 text-green-900" />, title: t('software.process.design'), desc: t('software.process.designDesc') },
              { icon: <RefreshCcw className="h-7 w-7 text-blue-600" />, title: t('software.process.development'), desc: t('software.process.developmentDesc') },
              { icon: <Shield className="h-7 w-7 text-green-900" />, title: t('software.process.testing'), desc: t('software.process.testingDesc') },
              { icon: <Users className="h-7 w-7 text-blue-600" />, title: t('software.process.deployment'), desc: t('software.process.deploymentDesc') },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-3">{step.icon}</div>
                <div className="font-semibold text-lg mb-1 text-gray-900">{step.title}</div>
                <div className="text-gray-600 text-sm">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('software.whyChoose.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Star className="h-8 w-8 text-green-900" />, title: t('software.whyChoose.experienced'), desc: t('software.whyChoose.experiencedDesc') },
              { icon: <Shield className="h-8 w-8 text-blue-600" />, title: t('software.whyChoose.secure'), desc: t('software.whyChoose.secureDesc') },
              { icon: <Users className="h-8 w-8 text-green-900" />, title: t('software.whyChoose.collaborative'), desc: t('software.whyChoose.collaborativeDesc') },
              { icon: <TrendingUp className="h-8 w-8 text-blue-600" />, title: t('software.whyChoose.proven'), desc: t('software.whyChoose.provenDesc') },
            ].map((item, idx) => (
              <Card key={idx} className="flex flex-row items-center gap-6 p-6 shadow-md hover:shadow-lg transition-all duration-200">
                <div>{item.icon}</div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-white">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="shadow-xl border-green-100 bg-white/90">
            <CardContent className="py-10 flex flex-col items-center text-center">
              <PhoneCall className="h-10 w-10 text-green-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('software.cta.title')}</h3>
              <p className="text-gray-700 mb-6">{t('software.cta.desc')}</p>
              <Link href="/contact" passHref legacyBehavior>
                <Button asChild size="lg" className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 text-lg">
                  <span>
                    {t('software.cta.button')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 