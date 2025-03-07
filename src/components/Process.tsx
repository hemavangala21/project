import React from 'react';
import { Phone, Search, FileCheck, Map } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Initial Consultation',
    description: 'We discuss your requirements and assess land characteristics.',
  },
  {
    icon: Search,
    title: 'Geophysical Study',
    description: 'Advanced surveying techniques to map underground water resources.',
  },
  {
    icon: FileCheck,
    title: 'Report Generation',
    description: 'Detailed analysis of collected data and findings.',
  },
  {
    icon: Map,
    title: 'Recommendations',
    description: 'Expert guidance on optimal drilling locations and depths.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our systematic approach ensures accurate groundwater detection
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="bg-white p-6 rounded-lg shadow-lg relative">
                    <step.icon className="h-12 w-12 text-blue-600 mx-auto md:mx-0 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}