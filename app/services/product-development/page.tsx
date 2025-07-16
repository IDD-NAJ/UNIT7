import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Product Development - Unit-7ing Solutions',
  description: 'End-to-end product development from ideation to market launch, including user research, prototyping, and scaling.',
};

export default function ProductDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
              <Lightbulb className="h-10 w-10 text-purple-600" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Product Development</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            End-to-end product development from ideation to market launch, including user research, prototyping, and scaling.
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
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
        <Card className="shadow-lg border-purple-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Key Features</CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Our Product Development service covers the full lifecycle from idea to launch.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                'Product Strategy & Planning',
                'User Research & Validation',
                'Prototype Development',
                'MVP Development',
                'Market Testing & Iteration',
                'Go-to-Market Strategy',
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