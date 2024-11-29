import React from 'react';
import { ShoppingBag, Store, Users, TrendingDown, Zap, ShieldCheck, BadgeCheck, ArrowRight } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full mb-6 inline-block">
            Problem & Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformasi Digital Fitting Room
          </h2>
          <p className="text-gray-600 text-lg">
            Mengatasi tantangan utama industri fashion retail dan meningkatkan pengalaman pelanggan dengan solusi teknologi inovatif
          </p>
        </div>

        {/* Problem Solution Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Problems Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold">Tantangan Saat Ini</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: <ShoppingBag className="w-5 h-5" />,
                  title: "Tingkat Retur Tinggi",
                  description: "Produk fashion masih sering dikembalikan maupuna dibatalkan karena perbedaan ukuran, desain, maupun warna"
                },
                {
                  icon: <Store className="w-5 h-5" />,
                  title: "Biaya Operasional",
                  description: "Fitting room fisik membutuhkan space dan staff khusus"
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  title: "Pengalaman Pelanggan",
                  description: "Menambah nilai pengalaman baru untuk pelanggan dan juga mengurangi peluang kesalahan dalam perancangan"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 rounded-xl bg-red-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-red-600">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold">Solusi Kami</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: <BadgeCheck className="w-5 h-5" />,
                  title: "Virtual Try-On AR",
                  description: "Teknologi fitting berbasis AR dengan akurasi tinggi"
                },
                {
                  icon: <ShieldCheck className="w-5 h-5" />,
                  title: "Size Recommendation",
                  description: "AI untuk rekomendasi ukuran yang tepat"
                },
                {
                  icon: <Store className="w-5 h-5" />,
                  title: "Omnichannel Integration",
                  description: "Integrasi seamless dengan sistem yang ada"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 rounded-xl bg-green-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-green-600">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "60%", label: "Pengurangan Pembatalan", icon: <TrendingDown className="w-6 h-6" /> },
            { number: "24/7", label: "Availability", icon: <ShieldCheck className="w-6 h-6" /> },
            { number: "15min", label: "Setup Time", icon: <Zap className="w-6 h-6" /> },
            { number: "50%", label: "Cost Reduction", icon: <Store className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <div className="text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</h4>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300">
            Pelajari Lebih Lanjut
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;