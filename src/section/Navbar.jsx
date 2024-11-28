import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'
                : 'text-white'
            }`}>
              VirtualFit
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Fitur', 'Keuntungan', 'Testimoni', 'Harga', 'Kontak'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                } group`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              isScrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
            }`}>
              Mulai Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className={`px-4 pt-2 pb-4 space-y-3 ${
          isScrolled ? 'bg-white' : 'bg-blue-600'
        }`}>
          {['Fitur', 'Keuntungan', 'Testimoni', 'Harga', 'Kontak'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block px-4 py-2 text-base font-medium rounded-lg ${
                isScrolled
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className={`w-full px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            isScrolled
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
          }`}>
            Mulai Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;