'use client';

import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesList } from '@/components/services/ServicesList';
import { TechStack } from '@/components/services/TechStack';
import { ProcessSection } from '@/components/services/ProcessSection';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesClient() {
  const { t } = useLanguage();

  // FAQ data with translation keys - moved inside component
  const faqs = [
    { question: t('services.faq.industries.q'), answer: t('services.faq.industries.a') },
    { question: t('services.faq.getStarted.q'), answer: t('services.faq.getStarted.a') },
    { question: t('services.faq.postLaunch.q'), answer: t('services.faq.postLaunch.a') },
  ];

  // Tabs data with translation keys - moved inside component
  const tabData = [
    {
      label: t('services.tabs.consulting'),
      content: (
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">{t('services.tabs.consultingTitle')}</h3>
          <p className="mb-4 max-w-xl text-gray-700 text-center">{t('services.tabs.consultingDesc')}</p>
          <ul className="mb-4 text-left list-disc list-inside text-gray-600">
            <li>{t('services.tabs.consulting.feature1')}</li>
            <li>{t('services.tabs.consulting.feature2')}</li>
            <li>{t('services.tabs.consulting.feature3')}</li>
            <li>{t('services.tabs.consulting.feature4')}</li>
            <li>{t('services.tabs.consulting.feature5')}</li>
          </ul>
          <Link href="/services/it-consultation" passHref legacyBehavior>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">{t('services.learnMore')}</Button>
          </Link>
        </div>
      ),
    },
    {
      label: t('services.tabs.development'),
      content: (
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">{t('services.tabs.developmentTitle')}</h3>
          <p className="mb-4 max-w-xl text-gray-700 text-center">{t('services.tabs.developmentDesc')}</p>
          <ul className="mb-4 text-left list-disc list-inside text-gray-600">
            <li>{t('services.tabs.development.feature1')}</li>
            <li>{t('services.tabs.development.feature2')}</li>
            <li>{t('services.tabs.development.feature3')}</li>
            <li>{t('services.tabs.development.feature4')}</li>
            <li>{t('services.tabs.development.feature5')}</li>
          </ul>
          <Link href="/projects" passHref legacyBehavior>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">{t('services.seeOurWork')}</Button>
          </Link>
        </div>
      ),
    },
    {
      label: t('services.tabs.product'),
      content: (
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">{t('services.tabs.productTitle')}</h3>
          <p className="mb-4 max-w-xl text-gray-700 text-center">{t('services.tabs.productDesc')}</p>
          <ul className="mb-4 text-left list-disc list-inside text-gray-600">
            <li>{t('services.tabs.product.feature1')}</li>
            <li>{t('services.tabs.product.feature2')}</li>
            <li>{t('services.tabs.product.feature3')}</li>
            <li>{t('services.tabs.product.feature4')}</li>
            <li>{t('services.tabs.product.feature5')}</li>
          </ul>
          <Link href="/contact" passHref legacyBehavior>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">{t('services.startProject')}</Button>
          </Link>
        </div>
      ),
    },
  ];

  // Highlights with translation keys - moved inside component
  const highlights = [
    { title: t('services.highlights.fastDelivery.title'), description: t('services.highlights.fastDelivery.desc') },
    { title: t('services.highlights.customSolutions.title'), description: t('services.highlights.customSolutions.desc') },
    { title: t('services.highlights.expertTeam.title'), description: t('services.highlights.expertTeam.desc') },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div>
      <ServicesHero />
      <ServicesList />

      {/* Tabs Section */}
      <section className="max-w-4xl mx-auto my-16">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('services.exploreCategories')}</h2>
        <Tabs defaultValue={tabData[0].label} className="w-full">
          <TabsList className="flex justify-center mb-4">
            {tabData.map(tab => (
              <TabsTrigger key={tab.label} value={tab.label}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          {tabData.map(tab => (
            <TabsContent key={tab.label} value={tab.label} className="text-center">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <TechStack />

      {/* Hover Cards Section */}
      <section className="max-w-5xl mx-auto my-16">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('services.whyChooseUs')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {highlights.map((item, idx) => (
            <HoverCard key={idx}>
              <HoverCardTrigger asChild>
                <Button variant="outline" className="w-48 h-24 text-lg font-semibold">
                  {item.title}
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="text-center">
                <p className="font-bold mb-2">{item.title}</p>
                <p>{item.description}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </section>

      <ProcessSection />

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto my-16">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('services.faqTitle')}</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Sheet/Dialog for Quick Inquiry */}
      <div className="flex justify-center my-16">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">{t('services.quickInquiry')}</Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-md">
            <SheetHeader>
              <h2 className="text-xl font-bold mb-4">{t('services.inquiryTitle')}</h2>
            </SheetHeader>
            <form className="space-y-4">
              <input type="text" placeholder={t('contact.name')} className="w-full border rounded px-3 py-2" />
              <input type="email" placeholder={t('contact.email')} className="w-full border rounded px-3 py-2" />
              <textarea placeholder={t('contact.message')} className="w-full border rounded px-3 py-2" rows={4} />
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">{t('services.inquirySubmit')}</Button>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
} 