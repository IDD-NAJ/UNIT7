import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesList } from '@/components/services/ServicesList';
import { TechStack } from '@/components/services/TechStack';
import { ProcessSection } from '@/components/services/ProcessSection';

export const metadata = {
  title: 'Our Services - TechVista Solutions',
  description: 'Comprehensive technology services including IT consultation, software development, hardware development, and more.',
};

export default function Services() {
  return (
    <div>
      <ServicesHero />
      <ServicesList />
      <TechStack />
      <ProcessSection />
    </div>
  );
}