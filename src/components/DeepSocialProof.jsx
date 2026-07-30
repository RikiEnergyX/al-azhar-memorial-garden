import React, { useState } from 'react';
import { Quote, Star, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight, Sparkles, Building2, UserCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/contentData';

export default function DeepSocialProof() {
  const [activeTab, setActiveTab] = useState(0);

  const caseStudies = [
    {
      id: 'muzani',
      name: 'H. Ahmad Muzani',
      role: 'Ketua MPR RI & Tokoh Muslim Nasional',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      category: 'Kehormatan & Kepastian Syariah',
      quote: 'Al Azhar Memorial Garden memberikan kepastian hukum syariah yang sangat menentramkan. Penataan taman yang asri, bersih, dan bebas banjir menjadikan tempat ini sangat layak sebagai tempat peristirahatan terakhir keluarga Muslim Indonesia.',
      highlight: 'Kepastian Syariat & Standar Pengelolaan Internasional',
      verification: 'Diverifikasi Tokoh Publik'
    },
    {
      id: 'riza',
      name: 'Ir. H. Ahmad Riza Patria, MBA',
      role: 'Tokoh Publik / Mantan Wakil Gubernur DKI Jakarta',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
      category: 'Kenyamanan Peziarah & Fasilitas',
      quote: 'Kemudahan akses tol langsung MBZ dan fasilitas pendukung seperti mushola AC dan penataan nisan batu rata rumput membuat ziarah terasa begitu khusyuk. Pengelolaan oleh YPI Al Azhar sangat profesional.',
      highlight: 'Akses Tol MBZ & Walkway Khusus Peziarah',
      verification: 'Diverifikasi Tokoh Publik'
    },
    {
      id: 'anas',
      name: 'H. Abdullah Azwar Anas, M.Si',
      role: 'Menteri PAN-RB / Tokoh Pemerintahan',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
      category: 'Sistem Manajemen Mutu ISO 9001',
      quote: 'Penerapan ISO 9001 dalam pengelolaan makam syariah adalah inovasi luar biasa. Bebas biaya pemeliharaan rumput selamanya memberikan keringanan jangka panjang bagi setiap ahli waris.',
      highlight: 'Sertifikasi ISO 9001 & Bebas Iuran Perawatan',
      verification: 'Diverifikasi Tokoh Publik'
    },
    {
      id: 'relokasi',
      name: 'Drs. H. Bambang Soetjipto',
      role: 'Pengusaha & Ahli Waris Keluarga (Jakarta Selatan)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      category: 'Studi Kasus Relokasi TPU Umum',
      quote: 'Proses pemindahan makam almarhum ayah kami dari TPU umum di Jakarta ke Al Azhar Memorial Garden berjalan sangat lancar. Tim UPJ 24 Jam mengurus seluruh dokumen legalitas IPTM dan prosesi pemakaman ulang secara 100% syar\'i.',
      highlight: 'Relokasi Makam Bebas Ribet & 100% Syar\'i',
      verification: 'Diverifikasi Pembeli Lahan'
    }
  ];

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
            <span>Kisah Nyata & Kesaksian Ketenangan Keluarga</span>
          </div>
          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kepercayaan Tokoh Nasional & Ribuan Keluarga Muslim
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Pengalaman nyata dalam merencanakan lahan pemakaman syariah, prosesi pemulasaraan, dan relokasi makam tanpa kendala.
          </p>
        </div>

        {/* Case Study Tab Navigation */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] text-[#F4D068] border-[#D4AF37]/60 shadow-lg scale-105'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>{cs.name.split(',')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Testimonial Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-[#D4AF37]/20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Profile Avatar & Info */}
            <div className="lg:col-span-4 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-white/15 pb-6 lg:pb-0 lg:pr-8 space-y-3">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl">
                <img
                  src={caseStudies[activeTab].avatar}
                  alt={caseStudies[activeTab].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-serif-header text-lg font-bold text-white">
                  {caseStudies[activeTab].name}
                </h3>
                <p className="text-xs text-[#F4D068] font-semibold mt-0.5">
                  {caseStudies[activeTab].role}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>{caseStudies[activeTab].verification}</span>
              </div>
            </div>

            {/* Quote Story */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-[#D4AF37]/20 text-[#F4D068] text-xs font-bold">
                {caseStudies[activeTab].category}
              </div>

              <p className="text-base sm:text-lg text-gray-100 font-serif-header italic leading-relaxed">
                "{caseStudies[activeTab].quote}"
              </p>

              <div className="pt-3 flex items-center justify-between border-t border-white/10 text-xs text-gray-400">
                <div className="flex items-center gap-1 text-[#F4D068]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#F4D068]" />
                  ))}
                  <span className="ml-2 text-white font-bold">5.0 / 5.0 Rating Otoritas</span>
                </div>
                <span className="text-emerald-400 font-semibold hidden sm:inline">
                  📌 {caseStudies[activeTab].highlight}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
