import React, { useState } from 'react';
import { PLOT_TYPES, AGENT_INFO } from '../data/contentData';
import { Maximize2, Users, Footprints, CheckCircle, Calculator, Phone, Sparkles } from 'lucide-react';

export default function PlotCatalog({ onOpenCalculator, onSelectPlotForCalc }) {
  const [filter, setFilter] = useState('all');

  const filteredPlots = PLOT_TYPES.filter((plot) => {
    if (filter === 'all') return true;
    if (filter === 'single-double') return plot.id === 'single' || plot.id === 'double';
    if (filter === 'family') return plot.id === 'family' || plot.id === 'super-family';
    if (filter === 'royal') return plot.id === 'royal-family';
    return true;
  });

  const handleInquireWa = (plotName) => {
    const text = encodeURIComponent(
      `Assalamu'alaikum Warahmatullahi Wabarakatuh. Saya berminat memperoleh informasi pricelist & brosur resmi untuk *${plotName}* Al Azhar Memorial Garden.`
    );
    window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="tipe-kavling" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Katalog Resmi Tipe Kavling Makam</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-[#0D2A4A] tracking-tight">
            Pilihan Tipe Kavling & Spesifikasi{' '}
            <span className="text-gold-gradient block sm:inline">
              Al Azhar Memorial Garden
            </span>
          </h2>

          <p className="text-gray-600 font-normal text-base leading-relaxed">
            Didesain khusus dengan perkerasan batu alam, walkway rapi, dan pembatas taman asri untuk kenyamanan serta kehormatan keluarga.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-[#0F4C3A] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua Tipe Kavling
            </button>
            <button
              onClick={() => setFilter('single-double')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'single-double'
                  ? 'bg-[#0F4C3A] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Single & Double (1 - 2 Lubang)
            </button>
            <button
              onClick={() => setFilter('family')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'family'
                  ? 'bg-[#0F4C3A] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Family & Super Family (4 - 8 Lubang)
            </button>
            <button
              onClick={() => setFilter('royal')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'royal'
                  ? 'bg-[#0F4C3A] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Royal Family (12 - 18 Lubang + Gazebo)
            </button>
          </div>
        </div>

        {/* Plot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlots.map((plot) => (
            <div
              key={plot.id}
              className="rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Banner & Badge */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={plot.image}
                  alt={plot.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-white text-[11px] font-bold shadow-md border border-yellow-200">
                  {plot.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif-header text-2xl font-bold leading-tight drop-shadow-md">
                    {plot.name}
                  </h3>
                  <p className="text-xs text-yellow-200 font-medium">
                    {plot.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Specifications Box */}
                <div className="grid grid-cols-1 gap-2.5 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs">
                  <div className="flex items-center gap-2 text-gray-800">
                    <Maximize2 className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                    <span><strong>Luas Lahan:</strong> {plot.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <Users className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                    <span><strong>Kapasitas:</strong> {plot.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <Footprints className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                    <span><strong>Akses Walkway:</strong> {plot.walkway}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Keunggulan Fitur Tipe:
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-700 font-sans">
                    {plot.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0F4C3A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Actions */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-gray-500 font-medium">Estimasi Penawaran:</span>
                    <span className="text-sm font-extrabold text-[#0D2A4A]">{plot.priceEst}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectPlotForCalc(plot.id)}
                      className="py-2.5 px-3 rounded-lg bg-emerald-50 text-[#0F4C3A] text-xs font-bold border border-emerald-200 hover:bg-emerald-100 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Simulasi Price</span>
                    </button>

                    <button
                      onClick={() => handleInquireWa(plot.name)}
                      className="py-2.5 px-3 rounded-lg bg-[#0F4C3A] text-white text-xs font-bold hover:bg-[#083327] transition-all shadow-sm flex items-center justify-center gap-1.5 border border-[#D4AF37]/30"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F4D068]" />
                      <span>Brosur WA</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Special Package Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gray-900 text-white border border-[#D4AF37]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-[#F4D068] uppercase tracking-widest">
              PAKET KHUSUS KELUARGA & KUMPULAN 10 KAVLING
            </span>
            <h4 className="font-serif-header text-xl font-bold">
              Membutuhkan Perencanaan Kavling Keluarga / Trah Khusus?
            </h4>
            <p className="text-xs text-gray-300">
              Dapatkan konsultasi khusus dan pendampingan tata letak kavling berdampingan langsung bersama Senior Sales Consultant kami.
            </p>
          </div>
          <button
            onClick={() => {
              const text = encodeURIComponent(
                "Assalamu'alaikum Warahmatullahi Wabarakatuh, saya ingin menanyakan mengenai Paket Makam Keluarga Besar / Trah Khusus di Al Azhar Memorial Garden."
              );
              window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-white font-bold text-xs hover:brightness-110 transition-all shrink-0 shadow-md"
          >
            Konsultasi Paket Trah
          </button>
        </div>

      </div>
    </section>
  );
}
