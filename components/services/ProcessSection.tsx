'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Search, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  HeartHandshake 
} from 'lucide-react';

export function ProcessSection() {
  const process = [
    {
      step: '01',
      icon: <Search className="h-8 w-8" />,
      title: 'Discovery',
      description: 'We analyze your requirements, understand your business goals, and identify the best technology solutions.',
    },
    {
      step: '02',
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Strategy',
      description: 'We create a detailed project plan with timelines, milestones, and resource allocation.',
    },
    {
      step: '03',
      icon: <Code className="h-8 w-8" />,
      title: 'Development',
      description: 'Our expert team builds your solution using modern technologies and best practices.',
    },
    {
      step: '04',
      icon: <TestTube className="h-8 w-8" />,
      title: 'Testing',
      description: 'Comprehensive testing ensures quality, performance, and security standards are met.',
    },
    {
      step: '05',
      icon: <Rocket className="h-8 w-8" />,
      title: 'Deployment',
      description: 'We deploy your solution to production with minimal downtime and maximum efficiency.',
    },
    {
      step: '06',
      icon: <HeartHandshake className="h-8 w-8" />,
      title: 'Support',
      description: 'Ongoing maintenance and support to ensure your solution continues to perform optimally.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600">
                    {item.step}
                  </div>
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}