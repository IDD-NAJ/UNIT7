'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export function TechStack() {
  const { t } = useLanguage();
  const technologies = [
    {
      category: t('services.techStack.frontend'),
      techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      category: t('services.techStack.backend'),
      techs: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'PHP'],
      color: 'text-green-900',
      bgColor: 'bg-green-50',
    },
    {
      category: t('services.techStack.mobile'),
      techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      category: t('services.techStack.database'),
      techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      category: t('services.techStack.cloud'),
      techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      category: t('services.techStack.hardware'),
      techs: ['Arduino', 'Raspberry Pi', 'ESP32', 'STM32', 'FPGA', 'PCB Design'],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.techStack.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.techStack.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className={`${tech.bgColor} border-none hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <CardTitle className={`text-xl font-bold ${tech.color}`}>
                  {tech.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((technology, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}