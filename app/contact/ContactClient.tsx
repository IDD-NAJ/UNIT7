'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github, MessageCircle, ArrowRight, CheckCircle, Users, FileText, UploadCloud, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  { key: 'it-consultation', label: 'IT Consultation', icon: <HelpCircle className="h-6 w-6 text-blue-600" /> },
  { key: 'software-development', label: 'Software Development', icon: <FileText className="h-6 w-6 text-green-900" /> },
  { key: 'hardware-development', label: 'Hardware Development', icon: <Users className="h-6 w-6 text-blue-600" /> },
  { key: 'web-development', label: 'Web Development', icon: <Mail className="h-6 w-6 text-green-900" /> },
  { key: 'app-development', label: 'App Development', icon: <Phone className="h-6 w-6 text-blue-600" /> },
  { key: 'product-development', label: 'Product Development', icon: <FileText className="h-6 w-6 text-green-900" /> },
  { key: 'other', label: 'Other', icon: <HelpCircle className="h-6 w-6 text-gray-400" /> },
];

const faqs = [
  { q: 'How quickly will I get a response?', a: 'We aim to respond to all inquiries within 1 business day.' },
  { q: 'Can I schedule a call?', a: 'Absolutely! Use the form or our contact info to request a call.' },
  { q: 'Do you offer support after project delivery?', a: 'Yes, we provide ongoing support and maintenance.' },
  { q: 'Can I attach files or RFPs?', a: 'Yes, you can upload files directly in the contact form.' },
];

export default function ContactClient() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    hearAbout: '',
    file: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as any;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleServiceSelect = (key: string) => {
    setFormData({ ...formData, service: key });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        hearAbout: '',
        file: null,
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden relative"
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 absolute -top-20 -left-20" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} />
          <motion.div className="w-80 h-80 bg-blue-100 rounded-full blur-2xl opacity-20 absolute top-40 right-0" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-12">
        {/* Contact Form */}
        <motion.div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
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
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.messageSent')}</h3>
                  <p className="text-gray-600 mb-4">{t('contact.thankYou')}</p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    {t('contact.sendAnother')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        {t('contact.name')} *
                      </Label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        {t('contact.email')} *
                      </Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        {t('contact.company')}
                      </Label>
                      <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        {t('contact.phone')}
                      </Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      {t('contact.service')}
                    </Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s.key}
                          className={`flex flex-col items-center justify-center border rounded-lg p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${formData.service === s.key ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
                          onClick={() => handleServiceSelect(s.key)}
                        >
                          {s.icon}
                          <span className="mt-2 text-sm font-medium text-gray-800">{s.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      {t('contact.message')} *
                    </Label>
                    <Textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder={t('contact.messagePlaceholder')} className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hearAbout" className="text-sm font-medium text-gray-700">
                        How did you hear about us?
                      </Label>
                      <Input id="hearAbout" name="hearAbout" type="text" value={formData.hearAbout} onChange={handleChange} className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Referral, Google, Social Media, etc." />
                    </div>
                    <div>
                      <Label htmlFor="file" className="text-sm font-medium text-gray-700">
                        Attach a file (optional)
                      </Label>
                      <Input id="file" name="file" type="file" onChange={handleChange} className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.send')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
        {/* Contact Info */}
        <motion.div className="bg-gray-50 p-8 lg:p-12 rounded-xl shadow-lg" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
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
              {/* Contact Methods */}
              {[{
                icon: <Mail className="h-6 w-6" />, title: 'Email', details: 'info@Unit-7ing.com', description: 'Send us an email anytime', color: 'text-blue-600',
              }, {
                icon: <Phone className="h-6 w-6" />, title: 'Phone', details: '+1 (555) 123-4567', description: 'Mon-Fri from 8am to 5pm', color: 'text-green-600',
              }, {
                icon: <MapPin className="h-6 w-6" />, title: 'Office', details: '123 Tech Street, Silicon Valley, CA 94025', description: 'Come say hello at our office', color: 'text-purple-600',
              }, {
                icon: <MessageCircle className="h-6 w-6" />, title: 'Live Chat', details: 'Available 24/7', description: 'Get instant support', color: 'text-orange-600',
              }].map((method, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${method.color} mt-1`}>
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-gray-900 font-medium mb-1">{method.details}</p>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Business Hours */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Business Hours</CardTitle>
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
            {/* Social Links */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Follow Us</CardTitle>
                <CardDescription>Stay connected with our latest updates and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors"><Linkedin className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors"><Twitter className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors"><Github className="h-6 w-6" /></a>
                </div>
              </CardContent>
            </Card>
            {/* Emergency Support */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">Emergency Support</h3>
                </div>
                <p className="text-blue-800 text-sm">For urgent technical issues, call our emergency line at <span className="font-medium"> +1 (555) 999-0000</span></p>
              </CardContent>
            </Card>
            {/* Map Embed */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    title="Unit-7ing Solutions Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019234567890!2d-122.0842496846816!3d37.4220659798257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0b0b0b0b0b0%3A0x0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card className="border-gray-200 cursor-pointer hover:shadow-md transition-shadow duration-200" onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg font-semibold text-gray-900">
                    {faq.q}
                    <span className="ml-2 text-blue-600">{faqOpen === idx ? '-' : '+'}</span>
                  </CardTitle>
                </CardHeader>
                {faqOpen === idx && (
                  <CardContent>
                    <p className="text-gray-700 text-base">{faq.a}</p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-white">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="shadow-xl border-green-100 bg-white/90">
            <CardContent className="py-10 flex flex-col items-center text-center">
              <Users className="h-10 w-10 text-green-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect!</h3>
              <p className="text-gray-700 mb-6">Schedule a call or chat with our team to discuss your project or support needs. We're here to help you succeed.</p>
              <Link href="/contact" passHref legacyBehavior>
                <Button asChild size="lg" className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 text-lg">
                  <span>
                    Schedule a Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 