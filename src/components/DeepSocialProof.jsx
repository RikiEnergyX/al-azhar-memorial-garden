import React, { useState } from 'react';
import { Quote, Star, CheckCircle2, Sparkles, UserCheck, ZoomIn, X } from 'lucide-react';
import { TESTIMONIALS } from '../data/contentData';

export default function DeepSocialProof() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalData, setModalData] = useState(null);

  const caseStudies = [
    {
      id: 'muzani',
      name: TESTIMONIALS[0].name,
      role: TESTIMONIALS[0].role,
      avatar: TESTIMONIALS[0].avatar,
      category: 'Kehormatan & Kepastian Syariah',
      quote: TESTIMONIALS[0].quote,
      highlight: 'Lingkungan Asri, Clean & Bebas Banjir',
      verification: 'Diverifikasi Tokoh Nasional'
    },
    {
      id: 'jimly',
      name: TESTIMONIALS[1].name,
      role: TESTIMONIALS[1].role,
      avatar: TESTIMONIALS[1].avatar,
      category: 'Kepastian Hukum & Legalitas Syar\'i',
      quote: TESTIMONIALS[1].quote,
      highlight: 'Standardisasi Syariat & Sertifikasi Kiblat Kemenag',
      verification: 'Diverifikasi Tokoh Nasional'
    },
    {
      id: 'wisnu',
      name: TESTIMONIALS[2].name,
      role: TESTIMONIALS[2].role,
      avatar: TESTIMONIALS[2].avatar,
      category: 'Persiapan Pre-Need & Adab Ziarah',
      quote: TESTIMONIALS[2].quote,
      highlight: 'Fasilitas Walkway & Bebas Biaya Rumput Selamanya',
      verification: 'Diverifikasi Public Figure'
    }
  ];

  const handleOpenModal = (study) => {
    setModalData({
      avatar: study.avatar,
      name: study.name,
      role: study.role
    });
  };

  return (
    <section className="py-20 bg-[#07172A] text-white font-sans border-b border-gray-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F4C3A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/40 text-[#F4D068] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#F4D068]" />
            <span>Kesaksian Autentik Tokoh Nasional</span>
          </div>
          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kepercayaan Tokoh Nasional & Tokoh Publik Muslim
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Pengalaman dan pandangan tokoh nasional mengenai kepastian hukum syariat Islam, profesionalisme pengelola, dan kenyamanan peziarah di Al Azhar Memorial Garden Karawang.
          </p>
        </div>

        {/* Case Study Tab Navigation (Exact 3 Testimonials) */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 border ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] text-[#F4D068] border-[#D4AF37] shadow-xl scale-105 ring-2 ring-[#D4AF37]/30'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <UserCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>{cs.name}</span>
            </button>
          ))}
        </div>

        {/* Active Testimonial Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-[#D4AF37]/20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Profile Avatar & Info (With Click to Enlarge Feature) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-white/15 pb-6 lg:pb-0 lg:pr-8 space-y-4">
              
              <button
                onClick={() => handleOpenModal(caseStudies[activeTab])}
                className="relative group cursor-pointer focus:outline-none"
                title="Klik untuk memperbesar foto"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl ring-4 ring-white/10 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={caseStudies[activeTab].avatar}
                    alt={caseStudies[activeTab].name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[11px] font-bold gap-1">
                    <ZoomIn className="w-6 h-6 text-[#F4D068] animate-bounce" />
                    <span>Perbesar Foto</span>
                  </div>
                </div>
                <span className="mt-2 inline-flex items-center gap-1 text-[10px] text-gray-300 font-medium group-hover:text-[#F4D068] transition-colors">
                  <ZoomIn className="w-3 h-3" />
                  Klik foto untuk memperbesar
                </span>
              </button>

              <div>
                <h3 className="font-serif-header text-xl font-bold text-white leading-tight">
                  {caseStudies[activeTab].name}
                </h3>
                <p className="text-xs text-[#F4D068] font-semibold mt-1">
                  {caseStudies[activeTab].role}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-[11px] font-bold shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{caseStudies[activeTab].verification}</span>
              </div>
            </div>

            {/* Quote Story */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#D4AF37]/20 text-[#F4D068] text-xs font-bold border border-[#D4AF37]/30">
                {caseStudies[activeTab].category}
              </div>

              <p className="text-base sm:text-xl text-gray-100 font-serif-header italic leading-relaxed">
                "{caseStudies[activeTab].quote}"
              </p>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 text-xs text-gray-400 gap-3">
                <div className="flex items-center gap-1 text-[#F4D068]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#F4D068]" />
                  ))}
                  <span className="ml-2 text-white font-bold">5.0 / 5.0 Rating Otoritas</span>
                </div>
                <span className="text-emerald-400 font-bold text-xs bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 self-start sm:self-auto">
                  📌 {caseStudies[activeTab].highlight}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* High-Res Photo Modal Lightbox */}
      {modalData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setModalData(null)}
        >
          <div
            className="relative max-w-lg w-full bg-gray-900 border-2 border-[#D4AF37] rounded-3xl p-5 sm:p-7 shadow-2xl text-center space-y-4 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prominent High-Visibility Close Button */}
            <button
              onClick={() => setModalData(null)}
              className="absolute -top-3 -right-3 z-50 p-2.5 rounded-full bg-[#0F4C3A] text-white hover:bg-[#0D2A4A] hover:scale-110 transition-all border-2 border-[#D4AF37] shadow-2xl cursor-pointer"
              aria-label="Tutup foto"
            >
              <X className="w-5 h-5 text-[#F4D068]" />
            </button>

            {/* Modal Image Header */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 pr-8">
              <span className="text-xs font-bold text-[#F4D068] uppercase tracking-wider">Foto Tokoh Autentik</span>
              <span className="text-[11px] text-gray-400">Klik di mana saja untuk menutup</span>
            </div>

            {/* Modal Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black max-h-[60vh] sm:max-h-[65vh] flex items-center justify-center p-1">
              <img
                src={modalData.avatar}
                alt={modalData.name}
                className="max-h-[58vh] sm:max-h-[63vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Modal Image Info & Action */}
            <div className="pt-2 space-y-3">
              <div>
                <h4 className="font-serif-header text-xl font-bold text-white leading-tight">
                  {modalData.name}
                </h4>
                <p className="text-xs text-[#F4D068] font-semibold mt-1">
                  {modalData.role}
                </p>
              </div>

              <button
                onClick={() => setModalData(null)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-bold transition-colors border border-white/10"
              >
                Tutup Pratinjau Foto
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
