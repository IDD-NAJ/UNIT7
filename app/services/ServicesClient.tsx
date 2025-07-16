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

export default function ServicesClient() {
  // Example FAQ data
  const faqs = [
    { question: 'What industries do you serve?', answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, and more.' },
    { question: 'How do I get started with a project?', answer: 'Simply contact us through our inquiry form or schedule a call. We will guide you through the process.' },
    { question: 'Do you offer post-launch support?', answer: 'Yes, we provide ongoing maintenance and support for all our solutions.' },
  ];

  // Example Tabs data
  const tabData = [
    {
      label: 'Consulting',
      content: (
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">IT Consulting Services</h3>
          <p className="mb-4 max-w-xl text-gray-700 text-center">Expert guidance to optimize your business technology, strategy, and digital transformation.</p>
          <ul className="mb-4 text-left list-disc list-inside text-gray-600">
            <li>Technology Strategy Planning</li>
            <li>Digital Transformation Roadmap</li>
            <li>Infrastructure Assessment</li>
            <li>Cloud Migration Strategy</li>
            <li>Security Audit & Compliance</li>
          </ul>
          <Link href="/services/it-consultation" passHref legacyBehavior>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">Learn More</Button>
          </Link>
        </div>
      ),
    },
    {
      label: 'Development',
      content: (
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Development Services</h3>
          <p className="mb-4 max-w-xl text-gray-700 text-center">Full-stack software, hardware, and web development tailored to your needs.</p>
          <ul className="mb-4 text-left list-disc list-inside text-gray-600">
            <li>Custom Software Development</li>
            <li>API Development & Integration</li>
            <li>Embedded System & IoT</li>
            <li>Web & Mobile Applications</li>
            <li>Legacy System Modernization</li>
          </ul>
          <Link href="/projects" passHref legacyBehavior>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">See Our Work</Button>
          </Link>
        </div>
      ),
    },
    {
      label: 'Product',
      content: (
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Product Development</h3>
          <p className="mb-4 max-w-xl text-gray-700 text-center">End-to-end product development from ideation to launch and scaling.</p>
          <ul className="mb-4 text-left list-disc list-inside text-gray-600">
            <li>Product Strategy & Planning</li>
            <li>User Research & Validation</li>
            <li>Prototype & MVP Development</li>
            <li>Market Testing & Iteration</li>
            <li>Go-to-Market Strategy</li>
          </ul>
          <Link href="/contact" passHref legacyBehavior>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">Start Your Project</Button>
          </Link>
        </div>
      ),
    },
  ];

  // Example Hover Card data
  const highlights = [
    { title: 'Fast Delivery', description: 'We deliver projects on time with agile methodology.' },
    { title: 'Custom Solutions', description: 'Tailored solutions to fit your unique business needs.' },
    { title: 'Expert Team', description: 'Our team consists of industry experts and certified professionals.' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div>
      <ServicesHero />
      <ServicesList />

      {/* Tabs Section */}
      <section className="max-w-4xl mx-auto my-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Service Categories</h2>
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
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h2>
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
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
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
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Quick Service Inquiry</Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-md">
            <SheetHeader>
              <h2 className="text-xl font-bold mb-4">Service Inquiry</h2>
            </SheetHeader>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" />
              <input type="email" placeholder="Your Email" className="w-full border rounded px-3 py-2" />
              <textarea placeholder="How can we help you?" className="w-full border rounded px-3 py-2" rows={4} />
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">Submit Inquiry</Button>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
} 