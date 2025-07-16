import dynamic from 'next/dynamic';
import { CompanyStory } from '@/components/about/CompanyStory';
import { TeamSection } from '@/components/about/TeamSection';
import { MissionVision } from '@/components/about/MissionVision';
import { CompanyValues } from '@/components/about/CompanyValues';

const AboutHero = dynamic(() => import('@/components/about/AboutHero').then(mod => ({ default: mod.AboutHero })), {
  ssr: false
});

export const metadata = {
  title: 'About Us - Unit-7ing Solutions',
  description: 'Learn about Unit-7ing Solutions - our story, team, mission, and values driving innovation in technology.',
};

export default function About() {
  return (
    <div>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CompanyValues />
      <TeamSection />
    </div>
  );
}