import React from 'react';
import { Shield, Compass, Sparkles, Clock, Calculator, ArrowRight, CheckCircle2, Phone, CalendarCheck } from 'lucide-react';
import { AGENT_INFO } from '../data/contentData';

export default function Hero({ onOpenCalculator, onOpenSurvey }) {
  const handleWaConsult = () => {
    const text = encodeURIComponent(
      "Assalamu'alaikum Warahmatullahi Wabarakatuh. Saya ingin berkonsultasi mengenai pemesanan lahan makam Al Azhar Memorial Garden Karawang."
    );
    window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F9FAF7] via-[#F3F4F1] to-white pt-10 pb-20 border-b border-gray-200">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#0F4C3A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4C3A]/10 border border-[#0F4C3A]/20 text-[#0F4C3A] text-xs font-bold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Official Sales Agent Al Azhar Memorial Garden</span>
            </div>

            {/* PwC-Style Statement Headline */}
            <h1 className="font-serif-header text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2A4A] leading-[1.15] tracking-tight">
              Perencanaan Rumah Masa Depan{' '}
              <span className="text-gold-gradient block sm:inline">
                Syar'i, Tenang, & Penuh Penghormatan.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed max-w-2xl">
              Taman Pemakaman Muslim No. 1 di Indonesia. Dikelola secara profesional oleh{' '}
              <strong className="text-[#0F4C3A] font-semibold">YPI Al Azhar</strong> bekerja sama dengan PT Nuansa Usaha Mandiri sejak 2011 bersertifikat manajemen mutu{' '}
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-[#0F4C3A] font-bold text-xs">ISO 9001</span>.
            </p>

            {/* Key Highlights Bar */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-gray-700">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-[#0F4C3A] border border-emerald-200/80 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#0F4C3A]" />
                100% Khusus Muslim
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/80 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                Sertifikat Kiblat Kemenag
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#0D2A4A] border border-blue-200/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0D2A4A]" />
                UPJ Kedukaan 24 Jam
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenCalculator}
                className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2.5 border border-[#D4AF37]/30 group"
              >
                <Calculator className="w-5 h-5 text-[#F4D068]" />
                <span>Simulasi Kalkulator Harga</span>
                <ArrowRight className="w-4 h-4 text-[#F4D068] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSurvey}
                className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] text-white font-extrabold text-sm shadow-lg hover:shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2.5 border border-yellow-200 group"
              >
                <CalendarCheck className="w-5 h-5 text-white" />
                <span>Jadwal Survey Lokasi (Gratis)</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Pre-Need Notice */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
              <span className="font-bold text-amber-800 shrink-0">💡 TIPS PRE-NEED:</span>
              <span>
                Menyiapkan lahan makam di awal (Pre-Need) memberikan kedamaian pikiran, hemat harga awal, dan meringankan beban keluarga saat kedukaan.
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#D4AF37]/40 group">
              <img
                src="/images/hero.jpg"
                alt="Al Azhar Memorial Garden Aerial View"
                fetchPriority="high"
                decoding="sync"
                loading="eager"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2A4A]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-card-dark text-white border border-[#D4AF37]/30 shadow-lg space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F4D068] uppercase tracking-wider">Taman Pemakaman Asri & Modern</span>
                  <span className="text-[10px] bg-emerald-700/80 px-2 py-0.5 rounded text-emerald-100">Official Site Karawang</span>
                </div>
                <p className="text-sm font-semibold text-gray-100">
                  Hanya 10 menit dari Exit Tol Karawang Timur 2 via Tol Layang MBZ.
                </p>
                <p className="text-xs text-gray-300">
                  Tidak seram, bebas banjir, dilengkapi walkway & mushola Full AC.
                </p>
              </div>
            </div>

            {/* Floating Gold Shield Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-white p-3.5 rounded-2xl shadow-xl border border-yellow-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-left pr-2">
                <p className="text-[10px] uppercase font-bold text-yellow-100 tracking-wider">Garansi Mutu</p>
                <p className="text-xs font-extrabold text-white">YPI Al Azhar & ISO 9001</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
