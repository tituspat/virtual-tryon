import React from 'react';
import { Camera, Mail, Phone, Instagram, Linkedin, Facebook, Twitter, MapPin, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      {/* Main Footer Content */}
      <div className="relative pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Camera className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">VirtualFit</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Transformasi digital fitting room untuk boutique Anda. Tingkatkan pengalaman pelanggan dengan teknologi virtual try-on yang inovatif.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Produk</h4>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Demo', 'Guide'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Perusahaan</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6">Hubungi Kami</h4>
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, text: "contact@virtualfit.com" },
                  { icon: <Phone className="w-5 h-5" />, text: "(+62) 812-3456-7890" },
                  { icon: <MapPin className="w-5 h-5" />, text: "Jakarta, Indonesia" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center text-gray-400">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-4">
                      {contact.icon}
                    </div>
                    <span>{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 VirtualFit. Made with <Heart className="w-4 h-4 inline-block text-red-500 mx-1" /> in Indonesia
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">
                  Terms of Service
                </a>
                <button 
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;