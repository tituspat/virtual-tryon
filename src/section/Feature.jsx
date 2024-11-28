import React from 'react';
import { Sparkles, Store, Users, ArrowRight, Smartphone, BarChart } from 'lucide-react';

const Feature = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
            Fitur Unggulan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Solusi Lengkap untuk Boutique Anda
          </h2>
          <p className="text-gray-600 text-lg">
            Tingkatkan pengalaman pelanggan dan efisiensi bisnis Anda dengan teknologi terkini
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-blue-400/5 rounded-3xl blur-3xl"></div>
          
          <FeatureCard 
            icon={<Smartphone className="w-8 h-8" />}
            title="Try-On Real-Time"
            description="Teknologi AR canggih untuk fitting pakaian secara virtual dengan akurasi tinggi"
            stats="98% akurasi"
          />
          <FeatureCard 
            icon={<Store className="w-8 h-8" />}
            title="Integrasi Mudah"
            description="Sistem yang mudah diintegrasikan dengan inventory boutique Anda"
            stats="5 menit setup"
          />
          <FeatureCard 
            icon={<BarChart className="w-8 h-8" />}
            title="Analisis Pelanggan"
            description="Data lengkap tentang preferensi dan perilaku pelanggan Anda"
            stats="Real-time data"
          />
        </div>

        {/* Additional Features List */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Customizable Interface",
              description: "Sesuaikan tampilan dengan brand identity Anda"
            },
            {
              title: "Cloud Storage",
              description: "Simpan dan akses data dari mana saja"
            },
            {
              title: "Multi-device Support",
              description: "Akses dari berbagai perangkat"
            },
            {
              title: "24/7 Support",
              description: "Dukungan teknis kapan saja"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-start p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Pelajari lebih lanjut
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Component untuk Feature Card
const FeatureCard = ({ icon, title, description, stats }) => {
  return (
    <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 z-10">
      {/* Icon Container */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
        <div className="text-blue-600">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {/* Stats/Metrics */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <span className="text-sm font-medium text-blue-600">{stats}</span>
        <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Feature;