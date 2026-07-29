import React from 'react';
import { FACILITIES, UPJ_SERVICES, AGENT_INFO } from '../data/contentData';
import { Building2, HeartHandshake, CheckCircle2, PhoneCall, Clock, Sparkles } from 'lucide-react';

export default function FacilitiesAndServices() {
  const handleCallUpj = () => {
    const text = encodeURIComponent(
      "Assalamu'alaikum Warahmatullahi Wabarakatuh. Saya butuh bantuan Layanan Kedukaan / UPJ 24 Jam Al Azhar Memorial Garden."
    );
    window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="fasilitas-upj" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0D2A4A] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Fasilitas Site & Layanan 24/7</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-[#0D2A4A] tracking-tight">
            Fasilitas Kawasan & Layanan Kedukaan UPJ 24 Jam{' '}
            <span className="text-gold-gradient block sm:inline">
              Al Azhar Memorial Garden
            </span>
          </h2>

          <p className="text-gray-600 font-normal text-base leading-relaxed">
            Memberikan kenyamanan penuh bagi keluarga peziarah serta kepastian pendampingan prosesi kedukaan secara syar'i dan profesional.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Site Facilities */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#F9FAF7] border border-gray-200 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0F4C3A] text-white flex items-center justify-center shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-header text-2xl font-bold text-[#0D2A4A]">Fasilitas Kawasan Site</h3>
                  <p className="text-xs text-gray-500 font-medium">Standard Kenyamanan Bintang Lima</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {FACILITIES.map((fac, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-1">
                    <h4 className="font-bold text-sm text-[#0D2A4A] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {fac.title}
                    </h4>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed">{fac.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
              <span>*Semua fasilitas dirawat secara berkala ISO 9001.</span>
            </div>
          </div>

          {/* Column 2: UPJ 24-Hour Funeral Service */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-[#0D2A4A] via-[#0F4C3A] to-[#07172A] text-white border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#D4AF37]/40 text-[#F4D068] flex items-center justify-center shadow-md">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-header text-2xl font-bold text-white">Unit Pemulasaraan Jenazah (UPJ)</h3>
                    <p className="text-xs text-[#F4D068] font-bold">Layanan Siaga 24 Jam Non-Stop</p>
                  </div>
                </div>

                <span className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                  <Clock className="w-3.5 h-3.5" />
                  24/7 Hotline
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                Saat duka menimpa, keluarga tidak perlu kebingungan. Tim UPJ Al Azhar Memorial Garden siap mendampingi seluruh prosesi dari rumah duka/rumah sakit hingga peristirahatan terakhir secara Syar'i.
              </p>

              <div className="space-y-2.5 pt-2">
                {UPJ_SERVICES.map((srv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-[#F4D068] shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-300 text-center sm:text-left">
                <p className="font-bold text-white">Butuh Penanganan Emergency Kematian?</p>
                <p>Hubungi hotline kedukaan kami segera.</p>
              </div>

              <button
                onClick={handleCallUpj}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-white font-bold text-xs hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2 border border-yellow-200 shrink-0"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline UPJ 24 Jam</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
