import React from 'react';
import { CheckCircle, TrendingUp, Clock, DollarSign, Store, Users, BarChart, Zap } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full mb-6 inline-block">
            Potensi Bisnis
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proyeksi Keuntungan Mitra
          </h2>
          <p className="text-gray-600 text-lg">
            Berdasarkan riset pasar dan analisis industri fashion retail
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <BenefitCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Potensi Peningkatan Performa"
            description="Estimasi peningkatan berdasarkan analisis pasar dan studi industri"
            items={[
              {
                text: "Proyeksi peningkatan penjualan",
                highlight: "~30%",
                icon: <TrendingUp className="w-5 h-5" />
              },
              {
                text: "Estimasi pengurangan retur",
                highlight: "~50%",
                icon: <DollarSign className="w-5 h-5" />
              },
              {
                text: "Target kepuasan pelanggan",
                highlight: "95%",
                icon: <Users className="w-5 h-5" />
              }
            ]}
          />
          <BenefitCard
            icon={<Zap className="w-6 h-6" />}
            title="Estimasi Efisiensi"
            description="Proyeksi penghematan dan optimalisasi operasional"
            items={[
              {
                text: "Optimalisasi ruang fitting",
                highlight: "~70%",
                icon: <Store className="w-5 h-5" />
              },
              {
                text: "Potensi efisiensi biaya",
                highlight: "~40%",
                icon: <DollarSign className="w-5 h-5" />
              },
              {
                text: "Ketersediaan layanan",
                highlight: "24/7",
                icon: <Clock className="w-5 h-5" />
              }
            ]}
          />
        </div>

        {/* Market Potential */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "25M+", label: "Target Market Size", icon: <Store className="w-6 h-6" /> },
            { number: "97%", label: "Target Accuracy", icon: <CheckCircle className="w-6 h-6" /> },
            { number: "85%", label: "Mobile Users", icon: <Users className="w-6 h-6" /> },
            { number: "$2.8B", label: "Market Value 2024", icon: <BarChart className="w-6 h-6" /> }
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
      </div>
    </section>
  );
};

const BenefitCard = ({ icon, title, description, items }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Card Header */}
      <div className="flex items-start mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
          <div className="text-blue-600">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Benefits List */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <div className="text-blue-600">
                {item.icon}
              </div>
            </div>
            <div className="flex-grow">
              <span className="text-gray-800">{item.text}</span>
            </div>
            <div className="flex-shrink-0 font-semibold text-blue-600">
              {item.highlight}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;