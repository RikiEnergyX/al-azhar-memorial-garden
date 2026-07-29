import React, { useState } from 'react';
import { Phone, Calculator, ShieldCheck, Menu, X, Clock, Compass } from 'lucide-react';
import { AGENT_INFO } from '../data/contentData';

export default function Navbar({ onOpenCalculator, onOpenSurvey }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWaClick = (section = 'Header Navbar') => {
    const text = encodeURIComponent(
      `Assalamu'alaikum Warahmatullahi Wabarakatuh, saya ingin berkonsultasi mengenai Lahan Makam Al Azhar Memorial Garden (Info dari ${section}).`
    );
    window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-white/95 backdrop-blur-md border-b border-gray-100">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#0F4C3A] via-[#0D2A4A] to-[#083327] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left font-sans">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-[#D4AF37]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4D068]" />
              Official Authorized Sales Agent
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="flex items-center gap-1 text-white/90">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              Sertifikat Arah Kiblat Kemenag Karawang
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:flex items-center gap-1 text-white/90">
              <Clock className="w-3.5 h-3.5 text-yellow-400" />
              Layanan Kedukaan 24 Jam Non-Stop
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold">
            <button
              onClick={() => handleWaClick('Top Bar Hotline')}
              className="text-[#F4D068] hover:underline flex items-center gap-1 transition-all"
            >
              <Phone className="w-3 h-3 fill-current" />
              Hotline 24/7: {AGENT_INFO.phoneFormatted}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Agent Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F4C3A] to-[#0D2A4A] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform border border-[#D4AF37]/30">
              <span className="font-serif-header text-xl font-bold tracking-tight text-[#F4D068]">AMG</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-header text-lg font-bold text-[#0D2A4A] tracking-tight group-hover:text-[#0F4C3A] transition-colors">
                  Al Azhar Memorial Garden
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium tracking-wide">
                Taman Pemakaman Khusus Muslim No. 1 Indonesia
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-gray-700">
            <a href="#keunggulan" className="hover:text-[#0F4C3A] transition-colors py-1">Keunggulan (12 Advantage)</a>
            <a href="#tipe-kavling" className="hover:text-[#0F4C3A] transition-colors py-1">Tipe Kavling & Harga</a>
            <a href="#syariat-islam" className="hover:text-[#0F4C3A] transition-colors py-1">Syariat Islam</a>
            <a href="#fasilitas-upj" className="hover:text-[#0F4C3A] transition-colors py-1">Fasilitas & UPJ</a>
            <a href="#lokasi-akses" className="hover:text-[#0F4C3A] transition-colors py-1">Lokasi & Akses</a>
            <a href="#edukasi" className="hover:text-[#0F4C3A] transition-colors py-1">Edukasi</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleWaClick('Navbar CTA')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] text-white text-xs font-bold shadow-md hover:shadow-lg hover:brightness-110 transition-all border border-[#D4AF37]/30"
            >
              <Phone className="w-4 h-4 text-[#F4D068]" />
              Konsultasi WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <a
            href="#keunggulan"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50"
          >
            12 Keunggulan Utama
          </a>
          <a
            href="#tipe-kavling"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50"
          >
            Tipe Kavling & Spesifikasi Harga
          </a>
          <a
            href="#syariat-islam"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50"
          >
            Standar Syariat & Legalitas
          </a>
          <a
            href="#fasilitas-upj"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50"
          >
            Fasilitas & Layanan UPJ 24 Jam
          </a>
          <a
            href="#lokasi-akses"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50"
          >
            Petunjuk Arah & Akses Tol MBZ
          </a>
          <a
            href="#edukasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50"
          >
            Edukasi & Artikel Syariah
          </a>
          <a
            href="#hubungi-kami"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50"
          >
            Formulir Layanan Lead
          </a>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }}
              className="w-full py-3 rounded-lg bg-emerald-50 text-[#0F4C3A] font-semibold text-sm flex items-center justify-center gap-2 border border-emerald-200"
            >
              <Calculator className="w-4 h-4" />
              Kalkulator Harga & Simulasi
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); handleWaClick('Mobile Drawer WhatsApp'); }}
              className="w-full py-3 rounded-lg bg-[#0F4C3A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-[#F4D068]" />
              Hubungi Sales Agent via WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
