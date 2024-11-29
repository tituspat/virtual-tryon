import React from 'react';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-600 via-blue-500 to-blue-700">
      {/* Content */}
      <div className="relative pt-20 pb-24 md:pt-32 md:pb-44">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Left Content */}
            <div className="md:w-1/2 text-white">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></div>
                <span className="text-sm font-medium">Fashion Technology Innovation</span>
              </div>

              {/* Main Content */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Revolusi 
                <span className="relative">
                  <span className="relative z-10"> Digital Fitting </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C118.957 4.47226 236.914 3.94452 355 9" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl">
                Transformasi pengalaman try-on fashion Anda dengan teknologi virtual try-on canggih. Tingkatkan penjualan dan kepuasan pelanggan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                  Mulai Sekarang
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                {/*<button className="px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Lihat Demo
                </button>*/}
              </div>

              {/* Stats */}
              {/*<div className="flex items-center gap-8">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-blue-400 last:bg-blue-300"></div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">500+ Boutique</p>
                    <div className="flex items-center text-blue-200 text-sm">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2">5.0 (2.5k reviews)</span>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>

            {/* Right Content - Image */}
            <div className="md:w-1/2 relative px-4 md:px-0">
              <div className="relative">
                {/* Gradient background for image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/50 to-purple-500/50 rounded-3xl rotate-6 scale-105 blur-2xl"></div>
                
                {/* Main image */}
                <div className="relative bg-gradient-to-tr from-white/10 to-white/20 rounded-3xl p-2 backdrop-blur-sm border border-white/20">
                  <img 
                    src="/img/hero-image.jpg" 
                    alt="Virtual Try-On Demo" 
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">Live Preview</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xl">AI</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Smart Fitting</p>
                        <p className="text-sm text-gray-500">Powered by AI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,101.3C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;