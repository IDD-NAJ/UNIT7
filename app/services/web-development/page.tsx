import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Web Development - Unit-7ing Solutions',
  description: 'Responsive, high-performance websites and web applications.',
};

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
              <Globe className="h-10 w-10 text-blue-600" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Web Development</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Responsive, high-performance websites and web applications.
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <span>
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <div className="max-w-5xl mx-auto px-4">
        <Card className="shadow-lg border-blue-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Key Features</CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Our Web Development service covers a wide range of modern web solutions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                'Responsive Web Design',
                'E-commerce Development',
                'CMS Development',
                'SEO Optimization',
                'Performance Optimization',
                'Progressive Web Apps',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 