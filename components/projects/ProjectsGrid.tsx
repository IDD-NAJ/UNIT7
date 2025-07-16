'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Users } from 'lucide-react';

export function ProjectsGrid() {
  const projects = [
    {
      title: 'E-commerce Platform Redesign',
      category: 'Web Development',
      client: 'RetailCorp',
      duration: '6 months',
      team: '8 developers',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete redesign and development of a multi-vendor e-commerce platform with advanced analytics, inventory management, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      results: ['300% increase in conversion rate', '50% reduction in page load time', '99.9% uptime achieved'],
    },
    {
      title: 'IoT Manufacturing Dashboard',
      category: 'Hardware Development',
      client: 'ManufacturingTech',
      duration: '4 months',
      team: '6 engineers',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Real-time monitoring dashboard for industrial IoT devices with predictive analytics and automated alerts.',
      technologies: ['Python', 'React', 'D3.js', 'WebSocket', 'Arduino'],
      results: ['40% reduction in downtime', 'Real-time monitoring of 1000+ devices', 'Predictive maintenance implemented'],
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      client: 'HealthTech Solutions',
      duration: '8 months',
      team: '10 developers',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive healthcare mobile application with telemedicine features, appointment scheduling, and health tracking.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'WebRTC'],
      results: ['100k+ active users', 'HIPAA compliant', '4.8 app store rating'],
    },
    {
      title: 'Financial Trading Platform',
      category: 'Software Development',
      client: 'FinTech Innovations',
      duration: '12 months',
      team: '15 developers',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-frequency trading platform with real-time market data, algorithmic trading, and risk management systems.',
      technologies: ['Java', 'Spring', 'Kafka', 'Redis', 'Docker'],
      results: ['Sub-millisecond latency', 'Handles 1M+ transactions/day', 'Advanced risk management'],
    },
    {
      title: 'Smart Home Automation',
      category: 'IoT Development',
      client: 'SmartHome Inc.',
      duration: '5 months',
      team: '7 engineers',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete smart home automation system with voice control, mobile app, and energy management.',
      technologies: ['ESP32', 'React Native', 'Node.js', 'MQTT', 'AWS IoT'],
      results: ['30% energy savings', 'Voice control integration', 'Mobile app with 50k+ downloads'],
    },
    {
      title: 'Educational Learning Platform',
      category: 'Web Development',
      client: 'EduTech Global',
      duration: '9 months',
      team: '12 developers',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Interactive online learning platform with video streaming, assessments, and progress tracking.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'FFmpeg'],
      results: ['500k+ registered students', 'Interactive video lessons', 'AI-powered recommendations'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects and the innovative solutions we've delivered
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
                <div className="flex justify-between items-start mb-2">
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
                <p className="text-sm text-gray-500 font-medium">{project.client}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{project.team}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}