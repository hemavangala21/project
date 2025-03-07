import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Droplets className={`h-8 w-8 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`ml-2 text-xl font-bold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>AquaSurvey</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>Home</a>
            <a href="#about" className={`hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>About</a>
            <a href="#services" className={`hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>Services</a>
            <a href="#process" className={`hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>Process</a>
            <a href="#success-stories" className={`hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>Success Stories</a>
            <a
              href="#contact"
              className={`px-4 py-2 rounded-md transition-colors ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
              }`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isScrolled ? 'bg-white' : 'bg-black/50 backdrop-blur-md'
          }`}>
            <a href="#home" className={`block px-3 py-2 rounded-md ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:bg-white/10'
            }`}>Home</a>
            <a href="#about" className={`block px-3 py-2 rounded-md ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:bg-white/10'
            }`}>About</a>
            <a href="#services" className={`block px-3 py-2 rounded-md ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:bg-white/10'
            }`}>Services</a>
            <a href="#process" className={`block px-3 py-2 rounded-md ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:bg-white/10'
            }`}>Process</a>
            <a href="#success-stories" className={`block px-3 py-2 rounded-md ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:bg-white/10'
            }`}>Success Stories</a>
            <a
              href="#contact"
              className={`block px-3 py-2 rounded-md ${
                isScrolled
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-white'
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}