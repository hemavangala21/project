import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center absolute bottom-0 left-0 right-0 h-64 bg-[url('src/public/gw3.jpg')] bg-cover">
      {/* Primary Background */}
      {/* <div className="absolute inset-0 z-0">
        <img
          //src="https://images.unsplash.com/photo-1518399681705-1c3d2406ff22?auto=format&fit=crop&q=80"
          //alt="Groundwater Survey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/75 to-transparent"></div>
      </div> */}

      {/* Overlay Pattern */}
      {/* <div className="absolute inset-0 z-[1] opacity-10 bg-[url('https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&q=80')] bg-center bg-repeat mix-blend-overlay"></div> */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl backdrop-blur-sm bg-black/10 p-8 rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Accurate Groundwater Surveys for Reliable Water Sources
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-blue-100">
            Using advanced geophysical methods to locate groundwater resources with precision and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all transform hover:scale-105 duration-200 shadow-lg hover:shadow-blue-500/50"
            >
              Request a Survey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-md hover:bg-white/20 transition-all"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div> */}

      {/* Animated Water Ripple Effect */}
      {/* { <div className="absolute bottom-0 left-0 right-0 h-64 bg-[url('src/public/gw2.jpg')] bg-cover"></div> } */}
    </div>
  );
}