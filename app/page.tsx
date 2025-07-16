import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}