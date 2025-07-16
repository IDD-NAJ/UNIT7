import { ProjectsHero } from '@/components/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { ProjectStats } from '@/components/projects/ProjectStats';

export const metadata = {
  title: 'Our Projects - Unit-7ing Solutions',
  description: 'Explore our portfolio of successful projects and case studies across various industries and technologies.',
};

export default function Projects() {
  return (
    <div>
      <ProjectsHero />
      <ProjectStats />
      <ProjectsGrid />
    </div>
  );
}