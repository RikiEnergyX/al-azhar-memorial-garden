import React from 'react';
import { HeartHandshake, ShieldCheck, Award, Users, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { AGENT_INFO } from '../data/contentData';

export default function AuthorityEmpathyProfile({ onOpenSurvey }) {
  const handleWaContact = () => {
    const text = encodeURIComponent(
      `Assalamu'alaikum Ibu Corina (${AGENT_INFO.salesCode}), saya membaca surat dedikasi Anda dan ingin berkonsultasi secara privat mengenai persiapan keluarga.`
    );
    window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F9FAF7] via-white to-[#F9FAF7] border-b border-gray-200 font-sans relative overflow-hidden">
      {/* Soft Background Warm Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#0F4C3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F4C3A]/10 border border-[#0F4C3A]/20 text-[#0F4C3A] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
            <span>Pendampingan Sepenuh Hati & Otoritas Syariah</span>
          </div>
          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-[#0D2A4A] tracking-tight">
            Surat Dedikasi Konsultan Pendamping Keluarga
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Menyiapkan peristirahatan terakhir bukan sekadar transaksi aset, melainkan bentuk penghormatan tertinggi dan cinta kasih abadi untuk keluarga tercinta.
          </p>
        </div>

        {/* Main Personal Profile & Letter Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#D4AF37]/30 ring-1 ring-gray-100">
          
          {/* Left: Professional Warm Portrait */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-2 ring-[#D4AF37]/40 group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Ibu Corina - Senior Memorial Partner Al Azhar Memorial Garden"
                className="w-full h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2A4A]/85 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card-dark text-white border border-[#D4AF37]/30 text-center">
                <h3 className="font-serif-header text-lg font-bold text-[#F4D068]">
                  Ibu Corina
                </h3>
                <p className="text-xs text-gray-200 font-semibold">
                  Senior Memorial Partner &bull; Kode Agent: {AGENT_INFO.salesCode}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Lisensi Resmi YPI Al Azhar & PT Nuansa Usaha Mandiri
                </div>
              </div>
            </div>

            {/* Quick Online Status Box */}
            <div className="mt-4 w-full max-w-sm p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs flex items-center justify-between text-[#0F4C3A]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <span className="font-bold">Konsultasi Privat Online 24/7</span>
              </div>
              <button
                onClick={handleWaContact}
                className="px-3 py-1 rounded-lg bg-[#0F4C3A] text-white text-[11px] font-bold hover:bg-[#0D2A4A] transition-colors"
              >
                Chat Direct
              </button>
            </div>
          </div>

          {/* Right: Personal Empathy Letter & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase font-serif-header">
                Pesan Personal Konsultan
              </span>
              <h3 className="font-serif-header text-2xl sm:text-3xl font-bold text-[#0D2A4A] leading-tight">
                "Bukan tentang menyiapkan lahan, ini tentang memastikan keluarga Anda memiliki tempat yang damai untuk saling mendoakan."
              </h3>
            </div>

            <div className="space-y-4 text-gray-700 text-sm leading-relaxed italic border-l-4 border-[#D4AF37] pl-5 py-1 bg-[#F9FAF7] rounded-r-xl">
              <p>
                "Assalamu'alaikum Warahmatullahi Wabarakatuh. Banyak keluarga yang saya dampingi awalnya merasa tabu atau enggan membicarakan persiapan lahan pemakaman. Namun setelah melewati masa-masa kedukaan tanpa persiapan, mereka baru menyadari betapa beratnya beban finansial dan emosional di tengah rasa kehilangan."
              </p>
              <p>
                "Tugas saya di Al Azhar Memorial Garden bukan sekadar memberikan daftar harga, melainkan mendampingi Bapak/Ibu merencanakan warisan kehormatan keluarga secara tenang, syar'i, dan bermartabat sebelum momen kedukaan itu terjadi."
              </p>
            </div>

            {/* Credibility Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-[#F9FAF7] border border-gray-200 space-y-1">
                <div className="flex items-center gap-2 text-[#0F4C3A]">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-bold text-xs text-[#0D2A4A]">12+ Tahun</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-tight">
                  Mendampingi & Membimbing Keluarga Muslim
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F9FAF7] border border-gray-200 space-y-1">
                <div className="flex items-center gap-2 text-[#0F4C3A]">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-bold text-xs text-[#0D2A4A]">1.500+ Keluarga</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-tight">
                  Telah Terbantu Persiapan Pre-Need & Relokasi
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F9FAF7] border border-gray-200 space-y-1">
                <div className="flex items-center gap-2 text-[#0F4C3A]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-bold text-xs text-[#0D2A4A]">Otoritas Syariah</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-tight">
                  Sertifikat Kiblat Kemenag & ISO 9001
                </p>
              </div>
            </div>

            {/* Guided Consultation CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-gray-100">
              <button
                onClick={handleWaContact}
                className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/30"
              >
                <PhoneCall className="w-4 h-4 text-[#F4D068]" />
                <span>Bicara dengan Ibu Corina (Konsultasi Privat)</span>
              </button>

              <button
                onClick={onOpenSurvey}
                className="px-6 py-3.5 rounded-xl bg-white border border-[#0F4C3A] text-[#0F4C3A] hover:bg-emerald-50 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Jadwalkan Diskusi Keluarga</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
