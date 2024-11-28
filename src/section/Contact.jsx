import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    boutiqueName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Mari Berkolaborasi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Jadilah Bagian dari Revolusi Fashion Digital
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Tingkatkan performa bisnis Anda dengan teknologi virtual try-on terdepan
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Information */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Hubungi Kami</h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  title: "Email",
                  content: "titspat.me@gmail.com",
                  link: "mailto:contact@virtualfit.com"
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  title: "Phone",
                  content: "(+62) 895-4148-74614",
                  link: "tel:+6281234567890"
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: "Office",
                  content: "Institut Teknologi Sepuluh Nopember, Surabaya",
                  link: "#"
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{item.title}</p>
                    <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Proof */}
            {/*<div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-gray-600 mb-4">Dipercaya oleh brand ternama</p>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 rounded-lg bg-gray-100"></div>
                ))}
              </div>
            </div>*/}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Boutique
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama boutique"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                      value={formData.boutiqueName}
                      onChange={(e) => setFormData({...formData, boutiqueName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@domain.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    placeholder="+62 xxx-xxxx-xxxx"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Ceritakan lebih detail tentang bisnis Anda..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Dengan mengirimkan form ini, Anda setuju dengan{' '}
                  <a href="#" className="text-blue-600 hover:underline">syarat dan ketentuan</a>
                  {' '}kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;