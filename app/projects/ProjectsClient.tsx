'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users, X, ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const allProjects = [
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
    featured: true,
    testimonial: {
      quote: 'Unit-7ing delivered a platform that exceeded our expectations and drove real business growth.',
      author: 'Jane Smith, CTO, RetailCorp',
    },
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
    featured: false,
    testimonial: null,
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
    featured: true,
    testimonial: {
      quote: 'The app transformed our patient engagement and made healthcare more accessible.',
      author: 'Dr. Alex Lee, CEO, HealthTech Solutions',
    },
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
    featured: false,
    testimonial: null,
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
    featured: true,
    testimonial: {
      quote: 'Our home automation system is now a market leader, thanks to Unit-7ing.',
      author: 'Lisa Green, COO, SmartHome Inc.',
    },
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
    featured: false,
    testimonial: null,
  },
];

const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))];

const stats = [
  { number: 500, label: 'Projects Completed', description: 'Successfully delivered across all service areas' },
  { number: 50, label: 'Happy Clients', description: 'From startups to Fortune 500 companies' },
  { number: 15, label: 'Industries Served', description: 'Healthcare, Finance, E-commerce, and more' },
  { number: 98, label: 'Success Rate', description: 'Projects delivered on time and within budget', percent: true },
];

const clientLogos = [
  { name: 'RetailCorp', src: 'https://dummyimage.com/80x40/1e293b/fff&text=RetailCorp' },
  { name: 'HealthTech', src: 'https://dummyimage.com/80x40/0e7490/fff&text=HealthTech' },
  { name: 'SmartHome', src: 'https://dummyimage.com/80x40/22c55e/fff&text=SmartHome' },
  { name: 'EduTech', src: 'https://dummyimage.com/80x40/6366f1/fff&text=EduTech' },
  { name: 'FinTech', src: 'https://dummyimage.com/80x40/ca8a04/fff&text=FinTech' },
];

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalProject, setModalProject] = useState(null as typeof allProjects[0] | null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  // Theme toggle (optional)
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Filtered projects
  const projects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  const featured = allProjects.filter(p => p.featured);

  // Carousel navigation
  const next = () => setCarouselIdx((carouselIdx + 1) % featured.length);
  const prev = () => setCarouselIdx((carouselIdx - 1 + featured.length) % featured.length);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-x-hidden">
      {/* Global Animated Background */}
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute w-[700px] h-[700px] bg-gradient-to-br from-blue-200 via-green-100 to-blue-100 rounded-full blur-3xl opacity-30 left-[-200px] top-[-200px]"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-green-200 via-blue-100 to-green-100 rounded-full blur-2xl opacity-20 right-[-150px] bottom-[-150px]"
          animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
      </motion.div>
      {/* Floating Theme Toggle */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg p-3 hover:scale-110 transition-all duration-300"
        onClick={() => setIsDark((d) => !d)}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71" /></svg>
        ) : (
          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        )}
      </button>
      {/* Animated Hero */}
      <motion.section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden relative"
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 absolute -top-20 -left-20" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} />
          <motion.div className="w-80 h-80 bg-blue-100 rounded-full blur-2xl opacity-20 absolute top-40 right-0" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <motion.p className="text-xl text-gray-600 leading-relaxed mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Discover our portfolio of successful projects and the impact we've made across various industries and technologies.
          </motion.p>
          <motion.p className="text-lg text-blue-700 font-semibold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            Web, Mobile, IoT, AI, and more.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Project Carousel */}
      <motion.section className="py-8 bg-white dark:bg-gray-900" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prev}><ChevronLeft /></Button>
              <Button variant="outline" size="icon" onClick={next}><ChevronRight /></Button>
            </div>
          </div>
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={carouselIdx}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center"
              >
                <img src={featured[carouselIdx].image} alt={featured[carouselIdx].title} className="w-full md:w-1/3 rounded-lg shadow-md object-cover" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{featured[carouselIdx].title}</h3>
                  <p className="text-gray-700 mb-2">{featured[carouselIdx].description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {featured[carouselIdx].technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                  {featured[carouselIdx].testimonial && (
                    <div className="bg-white/80 rounded-lg p-4 mt-4 border-l-4 border-blue-600">
                      <p className="italic text-gray-800 mb-2">"{featured[carouselIdx].testimonial.quote}"</p>
                      <p className="text-sm text-gray-600 font-semibold">{featured[carouselIdx].testimonial.author}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Project Stats (Animated) */}
      <motion.section className="py-12 bg-white dark:bg-gray-900" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.percent ? `${stat.number}%` : stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Category Filter */}
      <motion.section className="py-4 bg-white dark:bg-gray-900" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                className="rounded-full px-6"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section className="py-12 bg-gray-50 dark:bg-gray-800" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
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
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8" onClick={() => setModalProject(project)}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative" initial={{ scale: 0.95, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 40 }} transition={{ duration: 0.3 }}>
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => setModalProject(null)}>
                <X className="h-6 w-6" />
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <img src={modalProject.image} alt={modalProject.title} className="w-full md:w-1/3 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{modalProject.title}</h3>
                  <p className="text-gray-700 mb-2">{modalProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {modalProject.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 mb-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{modalProject.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{modalProject.team}</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <h4 className="font-semibold text-gray-900 mb-1">Key Results:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {modalProject.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {modalProject.testimonial && (
                    <div className="bg-blue-50 rounded-lg p-4 mt-4 border-l-4 border-blue-600">
                      <p className="italic text-gray-800 mb-2">"{modalProject.testimonial.quote}"</p>
                      <p className="text-sm text-gray-600 font-semibold">{modalProject.testimonial.author}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Client Logos */}
      <motion.section className="py-12 bg-white dark:bg-gray-900" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Trusted by Leading Brands</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {clientLogos.map((logo, idx) => (
              <img key={idx} src={logo.src} alt={logo.name} className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
} 