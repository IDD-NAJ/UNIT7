'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProjectStats() {
  const stats = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered across all service areas',
    },
    {
      number: '50+',
      label: 'Happy Clients',
      description: 'From startups to Fortune 500 companies',
    },
    {
      number: '15+',
      label: 'Industries Served',
      description: 'Healthcare, Finance, E-commerce, and more',
    },
    {
      number: '98%',
      label: 'Success Rate',
      description: 'Projects delivered on time and within budget',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </CardTitle>
                <h3 className="text-xl font-semibold text-gray-900">
                  {stat.label}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}