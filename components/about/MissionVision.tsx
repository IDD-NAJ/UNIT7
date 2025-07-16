'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our guiding principles that drive everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Mission
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower businesses with innovative technology solutions that drive 
                growth, efficiency, and competitive advantage. We strive to be the 
                trusted partner that transforms ideas into reality through expert 
                consultation and cutting-edge development.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Vision
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the leading technology solutions provider that shapes the future 
                of digital transformation. We envision a world where every business, 
                regardless of size, has access to enterprise-grade technology solutions 
                that propel them forward.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}