'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  Cpu, 
  Code, 
  Lightbulb, 
  Globe, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function ServicesList() {
  const services = [
    {
      icon: <Settings className="h-10 w-10" />,
      title: 'IT Consultation',
      description: 'Strategic technology consulting to optimize your business processes, infrastructure, and digital transformation roadmap.',
      features: [
        'Technology Strategy Planning',
        'Digital Transformation Roadmap',
        'Infrastructure Assessment',
        'Cloud Migration Strategy',
        'Security Audit & Compliance',
        'Performance Optimization'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: 'Hardware Development',
      description: 'Custom hardware solutions from concept to production, including IoT devices, embedded systems, and specialized equipment.',
      features: [
        'PCB Design & Prototyping',
        'Embedded System Development',
        'IoT Device Creation',
        'Hardware Testing & Validation',
        'Manufacturing Support',
        'Firmware Development'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: 'Software Development',
      description: 'Full-stack software solutions built with modern technologies, scalable architecture, and industry best practices.',
      features: [
        'Custom Software Development',
        'API Development & Integration',
        'Database Design & Optimization',
        'Legacy System Modernization',
        'Cloud-Native Applications',
        'Microservices Architecture'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: 'Product Development',
      description: 'End-to-end product development from ideation to market launch, including user research, prototyping, and scaling.',
      features: [
        'Product Strategy & Planning',
        'User Research & Validation',
        'Prototype Development',
        'MVP Development',
        'Market Testing & Iteration',
        'Go-to-Market Strategy'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: 'Web Development',
      description: 'High-performance, responsive websites and web applications optimized for user experience and search engines.',
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'CMS Development',
        'SEO Optimization',
        'Performance Optimization',
        'Progressive Web Apps'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with focus on user experience and performance.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <Card key={index} className={`${service.bgColor} border-none shadow-lg`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div>
                  <CardHeader className="p-0">
                    <div className={`${service.color} mb-6`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-6">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-200">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}