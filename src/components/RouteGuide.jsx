import React, { useState } from 'react';
import { ROUTE_GUIDE, AGENT_INFO } from '../data/contentData';
import { MapPin, Navigation, Car, Clock, ExternalLink, Sparkles } from 'lucide-react';

export default function RouteGuide() {
  const [activeTab, setActiveTab] = useState(0);

  const googleMapsUrl = "https://maps.google.com/?q=Al+Azhar+Memorial+Garden+Karawang";

  return (
    <section id="lokasi-akses" className="py-20 bg-[#F9FAF7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#0F4C3A] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Petunjuk Lokasi & Akses Bebas Macet</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-[#0D2A4A] tracking-tight">
            Akses Strategis 10 Menit dari{' '}
            <span className="text-gold-gradient block sm:inline">
              Exit Tol Karawang Timur 2
            </span>
          </h2>

          <p className="text-gray-600 font-normal text-base leading-relaxed">
            Terhubung langsung dengan Tol Layang MBZ, Tol Cipularang, dan Tol Cimaci untuk kenyamanan perjalan ziarah keluarga Jabodetabek & Bandung.
          </p>
        </div>

        {/* Route Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Route Switcher & Steps */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Route Tabs */}
            <div className="flex flex-col sm:flex-row gap-2 p-1.5 bg-gray-200/80 rounded-2xl">
              {ROUTE_GUIDE.map((rt, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all text-center ${
                    activeTab === idx
                      ? 'bg-[#0F4C3A] text-white shadow-md'
                      : 'text-gray-700 hover:text-[#0F4C3A]'
                  }`}
                >
                  {rt.from.split(' (')[0]}
                </button>
              ))}
            </div>

            {/* Selected Route Box */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-serif-header text-xl font-bold text-[#0D2A4A]">
                    {ROUTE_GUIDE[activeTab].from}
                  </h3>
                  <span className="text-xs font-semibold text-[#0F4C3A] flex items-center gap-1 mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    {ROUTE_GUIDE[activeTab].timeEst}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F4C3A] flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
              </div>

              {/* Step by Step List */}
              <div className="space-y-4">
                {ROUTE_GUIDE[activeTab].steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-4 text-xs sm:text-sm text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[#0F4C3A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                      {sIdx + 1}
                    </span>
                    <p className="leading-relaxed font-sans">{step}</p>
                  </div>
                ))}
              </div>

              {/* GPS Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] text-white font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md border border-[#D4AF37]/30"
                >
                  <Navigation className="w-4 h-4 text-[#F4D068]" />
                  <span>Buka Petunjuk Rute di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs text-gray-500 font-medium text-center sm:text-left">
                  Alamat: {AGENT_INFO.location}
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Location Map Box */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden bg-gray-900 border-4 border-white shadow-2xl p-6 text-white space-y-6 relative group">
              <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F4D068]" />
                  <span className="font-serif-header text-lg font-bold">Gerbang Utama Karawang</span>
                </div>
                <span className="text-[10px] bg-emerald-700 px-2.5 py-1 rounded-full text-emerald-100 font-bold uppercase tracking-wider">
                  KM 53-54 Peruri
                </span>
              </div>

              <div className="space-y-4 text-xs text-gray-300">
                <div className="p-4 rounded-xl bg-gray-800/80 border border-gray-700 space-y-1">
                  <span className="font-bold text-[#F4D068]">Petunjuk Pencarian Waze / Google Maps:</span>
                  <p className="text-gray-200 font-mono text-xs">
                    "Al Azhar Memorial Garden Karawang"
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Exit Tol Karawang Timur 2:</span>
                    <strong className="text-white">± 10 Menit (5.2 km)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Dari Tol Layang MBZ:</span>
                    <strong className="text-white">± 45 Menit dari Cikunir</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Dari Gerbang Tol Pasteur:</span>
                    <strong className="text-white">± 50 Menit</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-white font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Navigasi Langsung (Waze / Google Maps)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
