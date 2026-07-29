import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, PhoneCall } from 'lucide-react';
import { AGENT_INFO } from '../data/contentData';

export default function FloatingWhatsApp() {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpenWa = (topic = 'General Consultation') => {
    const text = encodeURIComponent(
      `Assalamu'alaikum Warahmatullahi Wabarakatuh, saya ingin bertanya info lengkap mengenai Lahan Makam Al Azhar Memorial Garden (${topic}).`
    );
    window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      
      {/* Quick Popup Bubble */}
      {popupOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl border border-[#D4AF37]/40 p-4 space-y-3 animate-fadeIn text-gray-800 text-xs">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0F4C3A] text-white flex items-center justify-center font-bold text-xs">
                AMG
              </div>
              <div>
                <h4 className="font-bold text-[#0D2A4A]">Sales Agent Al Azhar</h4>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Online 24/7 Siaga
                </span>
              </div>
            </div>
            <button
              onClick={() => setPopupOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-gray-600 leading-relaxed font-sans">
            Assalamu'alaikum! Ada yang bisa kami bantu mengenai pilihan kavling makam Muslim Al Azhar, simulasi harga, atau booking survey lokasi?
          </p>

          <div className="space-y-1.5 pt-1">
            <button
              onClick={() => handleOpenWa('Konsultasi Pre-Need')}
              className="w-full py-2 px-3 rounded-lg bg-emerald-50 text-[#0F4C3A] font-bold text-left hover:bg-emerald-100 transition-all flex items-center justify-between"
            >
              <span>1. Konsultasi Pre-Need (Hemat 10%)</span>
              <span>&rarr;</span>
            </button>
            <button
              onClick={() => handleOpenWa('Minta Brosur Pricelist')}
              className="w-full py-2 px-3 rounded-lg bg-emerald-50 text-[#0F4C3A] font-bold text-left hover:bg-emerald-100 transition-all flex items-center justify-between"
            >
              <span>2. Minta Brosur Pricelist PDF</span>
              <span>&rarr;</span>
            </button>
            <button
              onClick={() => handleOpenWa('Booking Survey Lokasi')}
              className="w-full py-2 px-3 rounded-lg bg-emerald-50 text-[#0F4C3A] font-bold text-left hover:bg-emerald-100 transition-all flex items-center justify-between"
            >
              <span>3. Booking Survey Lokasi Site</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPopupOpen(!popupOpen)}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#0F4C3A] font-bold text-xs shadow-xl border border-emerald-300 hover:bg-emerald-50 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Tanya Sales Agent</span>
        </button>

        <button
          onClick={() => handleOpenWa('Sticky Button Direct')}
          aria-label="Direct WhatsApp Contact"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] via-[#128C7E] to-[#075E54] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-white ring-4 ring-emerald-500/20 group"
        >
          <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-extrabold flex items-center justify-center animate-bounce border border-white">
            1
          </span>
        </button>
      </div>

    </div>
  );
}
