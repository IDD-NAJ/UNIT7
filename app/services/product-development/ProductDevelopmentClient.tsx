'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, ArrowRight, TrendingUp, Shield, Users, RefreshCcw, BookOpen, PhoneCall, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  'Product Strategy & Planning',
  'User Research & Validation',
  'Prototype Development',
  'MVP Development',
  'Market Testing & Iteration',
  'Go-to-Market Strategy',
  'Scaling & Optimization',
  'UI/UX Design',
  'Agile Product Management',
  'Cross-Functional Teams',
  'Lifecycle Support',
  'Analytics & Feedback Loops',
];

const process = [
  { icon: <BookOpen className="h-7 w-7 text-blue-600" />, title: 'Ideation', desc: 'Brainstorm and validate product ideas.' },
  { icon: <TrendingUp className="h-7 w-7 text-green-900" />, title: 'Prototyping', desc: 'Design and build interactive prototypes.' },
  { icon: <RefreshCcw className="h-7 w-7 text-blue-600" />, title: 'Development', desc: 'Build MVPs and iterate quickly.' },
  { icon: <Shield className="h-7 w-7 text-green-900" />, title: 'Launch', desc: 'Go to market and gather feedback.' },
  { icon: <Users className="h-7 w-7 text-blue-600" />, title: 'Scale & Support', desc: 'Grow, optimize, and support your product.' },
];

const whyChoose = [
  { icon: <Star className="h-8 w-8 text-green-900" />, title: 'Product Experts', desc: 'Experienced in launching successful products.' },
  { icon: <Shield className="h-8 w-8 text-blue-600" />, title: 'Risk Mitigation', desc: 'Reduce risk with validation and iteration.' },
  { icon: <Users className="h-8 w-8 text-green-900" />, title: 'Collaborative Teams', desc: 'Work closely with you at every stage.' },
  { icon: <TrendingUp className="h-8 w-8 text-blue-600" />, title: 'Growth Focused', desc: 'Strategies for scaling and market success.' },
];

export default function ProductDevelopmentClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <Lightbulb className="h-10 w-10 text-green-900" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Product Development</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            End-to-end product development from ideation to market launch, including user research, prototyping, and scaling.
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button asChild size="lg" className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 text-lg">
              <span>
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <Card className="shadow-lg border-green-100 bg-gradient-to-br from-white to-green-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Key Features</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Our Product Development service covers the full lifecycle from idea to launch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.ul
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } }
                }}
              >
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start space-x-3 bg-white/80 rounded-lg p-3 shadow-sm hover:shadow-md hover:bg-green-50 transition-all duration-200 cursor-pointer"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Development Process Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Product Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-3">{step.icon}</div>
                <div className="font-semibold text-lg mb-1 text-gray-900">{step.title}</div>
                <div className="text-gray-600 text-sm">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, idx) => (
              <Card key={idx} className="flex flex-row items-center gap-6 p-6 shadow-md hover:shadow-lg transition-all duration-200">
                <div>{item.icon}</div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-white">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="shadow-xl border-green-100 bg-white/90">
            <CardContent className="py-10 flex flex-col items-center text-center">
              <PhoneCall className="h-10 w-10 text-green-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Launch Your Product?</h3>
              <p className="text-gray-700 mb-6">Contact us today for a free consultation and discover how we can help you bring your product ideas to life.</p>
              <Link href="/contact" passHref legacyBehavior>
                <Button asChild size="lg" className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 text-lg">
                  <span>
                    Get Your Free Consultation
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