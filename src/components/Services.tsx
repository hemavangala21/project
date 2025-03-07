import React from 'react';
import { Search, Droplets, FileText, FlaskRound as Flask } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Geophysical Surveys',
    description: 'We use advanced tools like PQWT meters and resistivity meters to accurately detect underground water sources for reliable surveys.',
  },
  {
    icon: Droplets,
    title: 'Hydrogeological Assessments',
    description: 'Comprehensive analysis of groundwater conditions and aquifer characteristics.',
  },
  {
    icon: FileText,
    title: 'Borewell Site Selection',
    description: 'Expert recommendations for optimal borewell locations based on scientific data.',
  },
  {
    icon: Flask,
    title: 'Water Quality Analysis',
    description: 'Detailed testing and reporting of water quality parameters.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive groundwater solutions using cutting-edge technology and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}