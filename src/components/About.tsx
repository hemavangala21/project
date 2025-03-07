import React from 'react';
import { Award, Users, Clock, Globe } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '15+' },
  { icon: Users, label: 'Satisfied Clients', value: '700+' },
  { icon: Clock, label: 'Projects Completed', value: '1000+' },
  { icon: Globe, label: 'Locations Served', value: '70+' },
];

const team = [
  {
    name: 'Vangala Prasad Reddy',
    role: 'Hydrogeologist',
    image: '/daddy.jpg',
    description: 'Ph.D. in Hydrogeology with 15+ years of experience in groundwater exploration. Pioneer in implementing advanced geophysical techniques for water detection.',
  },
  {
    name: 'Byreddy Ranga Reddy ',
    role: 'Hydrogeologist',
    image: '/uncle.jpg',
    description: 'Ph.D. in Hydrogeology with 20+ years of experience in groundwater exploration. Pioneer in implementing advanced geophysical techniques for water detection.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A hydrogeologist is a scientist who studies underground water movement, sources, and quality. We help to locate safe and sustainable water sources, prevent over-extraction, and manage groundwater resources. Our work is crucial for agriculture, industries, and drinking water supply. Hydrogeologists also help in drought management and water conservation by analyzing recharge rates and contamination risks.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
              <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To provide sustainable water solutions through innovative groundwater detection methods, 
              ensuring communities and businesses have access to reliable water sources while promoting 
              environmental stewardship and responsible resource management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}