'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Linkedin, 
  Twitter,
  Github,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ContactInfo() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'info@Unit-7ing.com',
      description: 'Send us an email anytime',
      color: 'text-blue-600',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm',
      color: 'text-green-600',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      details: '123 Tech Street, Silicon Valley, CA 94025',
      description: 'Come say hello at our office',
      color: 'text-purple-600',
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant support',
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="bg-gray-50 p-8 lg:p-12">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('contact.contactInfo')}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t('contact.readyToStart')}
          </p>
        </div>

        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${method.color} mt-1`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1">
                      {method.details}
                    </p>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Business Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium text-gray-900">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium text-gray-900">9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium text-gray-900">Closed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Follow Us
            </CardTitle>
            <CardDescription>
              Stay connected with our latest updates and insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900">
                Emergency Support
              </h3>
            </div>
            <p className="text-blue-800 text-sm">
              For urgent technical issues, call our emergency line at 
              <span className="font-medium"> +1 (555) 999-0000</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}