import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, PhoneCall, ChevronUp, ArrowRight } from 'lucide-react';
import { AGENT_INFO } from '../data/contentData';

export default function FloatingWhatsApp() {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpenWa = (topic = '') => {
    const topicText = topic ? ` mengenai *${topic}*` : '';
    const text = encodeURIComponent(
      `Assalamu'alaikum Ibu ${AGENT_INFO.salesAgent} (${AGENT_INFO.salesCode}), saya ingin berkonsultasi${topicText} di Al Azhar Memorial Garden Karawang.`
    );
    window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Quick Popup Menu (Centered above the pill) */}
      {popupOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border-2 border-[#D4AF37]/40 p-5 space-y-4 animate-fadeIn text-gray-800 text-xs">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F4C3A] to-[#0D2A4A] text-[#F4D068] flex items-center justify-center font-bold text-xs shadow-sm border border-[#D4AF37]/30">
                AMG
              </div>
              <div>
                <h4 className="font-serif-header text-sm font-bold text-[#0D2A4A]">Ibu {AGENT_INFO.salesAgent} [{AGENT_INFO.salesCode}]</h4>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Memorial Partner &bull; Online 24/7
                </span>
              </div>
            </div>
            <button
              onClick={() => setPopupOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-gray-600 leading-relaxed font-sans">
            Assalamu'alaikum! Silakan pilih layanan cepat untuk terhubung langsung dengan Ibu Corina (Memorial Partner):
          </p>

          <div className="space-y-2">
            <button
              onClick={() => handleOpenWa('Konsultasi Pre-Need')}
              className="w-full py-2.5 px-3.5 rounded-xl bg-emerald-50 text-[#0F4C3A] font-bold text-left hover:bg-emerald-100 transition-all flex items-center justify-between border border-emerald-200"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                1. Konsultasi Pre-Need (Cash Keras Diskon 20%+2%)
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleOpenWa('Minta Brosur Pricelist Juli 2026')}
              className="w-full py-2.5 px-3.5 rounded-xl bg-emerald-50 text-[#0F4C3A] font-bold text-left hover:bg-emerald-100 transition-all flex items-center justify-between border border-emerald-200"
            >
              <span className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#0F4C3A]" />
                2. Minta Brosur Price List Juli 2026 PDF
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleOpenWa('Booking Survey Lokasi Site')}
              className="w-full py-2.5 px-3.5 rounded-xl bg-emerald-50 text-[#0F4C3A] font-bold text-left hover:bg-emerald-100 transition-all flex items-center justify-between border border-emerald-200"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                3. Booking Kunjungan Survey Lokasi Site
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Centered Floating Sticky Pill Button */}
      <div className="flex items-center gap-2">
        
        {/* Pill Trigger */}
        <div className="flex items-center bg-gradient-to-r from-[#0F4C3A] via-[#128C7E] to-[#25D366] text-white rounded-full p-1.5 pr-5 shadow-2xl border-2 border-white/90 ring-4 ring-emerald-500/20 hover:scale-105 transition-all">
          
          {/* Main Direct WhatsApp Click */}
          <button
            onClick={() => handleOpenWa('Pemesanan & Price List Lahan Makam')}
            className="flex items-center gap-3 font-bold text-xs sm:text-sm tracking-wide"
          >
            <div className="relative w-11 h-11 rounded-full bg-white text-[#25D366] flex items-center justify-center shadow-md shrink-0">
              <MessageCircle className="w-6 h-6 fill-current" />
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-extrabold flex items-center justify-center animate-bounce border border-white">
                1
              </span>
            </div>

            <span className="hidden xs:inline">Konsultasi WA Ibu Corina [AZHR-10306]</span>
            <span className="xs:hidden">WA Corina 24/7</span>
          </button>

          {/* Quick Options Expand Toggle */}
          <button
            onClick={() => setPopupOpen(!popupOpen)}
            className="ml-3 pl-3 border-l border-white/30 text-emerald-100 hover:text-white transition-colors"
            aria-label="Toggle quick options"
          >
            <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${popupOpen ? 'rotate-180' : ''}`} />
          </button>

        </div>

      </div>

    </div>
  );
}
