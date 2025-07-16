'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function FeaturedProjects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.ecommerce'),
      description: t('projects.ecommerceDesc'),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
    },
    {
      title: t('projects.iot'),
      description: t('projects.iotDesc'),
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'WebSocket', 'Python'],
      category: 'Hardware Integration',
    },
    {
      title: t('projects.mobile'),
      description: t('projects.mobileDesc'),
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'Mobile Development',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-gray-200">
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="text-xs text-blue-600 bg-blue-100">
                    {project.category}
                  </Badge>
                  <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            {t('projects.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
}