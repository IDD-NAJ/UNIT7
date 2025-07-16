'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Lightbulb, 
  Users, 
  Shield, 
  Trophy,
  Heart,
  Zap
} from 'lucide-react';

export function CompanyValues() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex challenges.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'We work closely with clients as partners to achieve shared success.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and ethical business practices.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every project and deliver exceptional quality.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'We are passionate about technology and helping our clients succeed.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and market demands.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The core principles that guide our decisions and shape our culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <CardHeader>
                <div className={`p-3 ${value.bgColor} rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={value.color}>
                    {value.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}