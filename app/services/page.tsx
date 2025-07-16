import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesList } from '@/components/services/ServicesList';
import { TechStack } from '@/components/services/TechStack';
import { ProcessSection } from '@/components/services/ProcessSection';
import Link from 'next/link';
import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Our Services - Unit-7ing Solutions',
  description: 'Comprehensive technology services including IT consultation, software development, hardware development, and more.',
};

export default function Services() {
  return <ServicesClient />;
}