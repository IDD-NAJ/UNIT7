'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ContactForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-12 flex items-center justify-center">
        <Card className="w-full max-w-md border-green-200">
          <CardContent className="text-center p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.messageSent')}</h3>
            <p className="text-gray-600">
              {t('contact.thankYou')}
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {t('contact.sendAnother')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 lg:p-12">
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            {t('contact.sendMessage')}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {t('contact.formDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  {t('contact.name')} *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  {t('contact.email')} *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                  {t('contact.company')}
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  {t('contact.phone')}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                {t('contact.service')}
              </Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">{t('contact.selectService')}</option>
                <option value="it-consultation">{t('services.itConsultation')}</option>
                <option value="software-development">{t('services.softwareDev')}</option>
                <option value="hardware-development">{t('services.hardwareDev')}</option>
                <option value="web-development">{t('services.webDev')}</option>
                <option value="mobile-development">{t('services.appDev')}</option>
                <option value="product-development">{t('services.productDev')}</option>
                <option value="other">{t('contact.other')}</option>
              </select>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                {t('contact.message')} *
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  {t('contact.send')}
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}