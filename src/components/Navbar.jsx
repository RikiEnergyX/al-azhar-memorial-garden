import React, { useState, useEffect } from 'react';
import { Phone, Calculator, ShieldCheck, Menu, X, Clock, Compass, Sparkles } from 'lucide-react';
import { AGENT_INFO } from '../data/contentData';

export default function Navbar({ onOpenCalculator, onOpenSurvey }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'keunggulan', label: 'Keunggulan' },
    { id: 'tipe-kavling', label: 'Tipe Kavling & Harga' },
    { id: 'syariat-islam', label: 'Syariat Islam' },
    { id: 'fasilitas-upj', label: 'Fasilitas & UPJ' },
    { id: 'lokasi-akses', label: 'Lokasi & Akses' },
    { id: 'edukasi', label: 'Edukasi' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].id);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWaClick = (section = 'Header Navbar') => {
    const text = encodeURIComponent(
      `Assalamu'alaikum Ibu ${AGENT_INFO.salesAgent} (${AGENT_INFO.salesCode}), saya ingin berkonsultasi mengenai Lahan Makam Al Azhar Memorial Garden (${section}).`
    );
    window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-white/90 backdrop-blur-md border-b border-gray-200/80 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#0F4C3A] via-[#0D2A4A] to-[#083327] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left font-sans">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-[#D4AF37]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4D068]" />
              Official Memorial Partner: Ibu {AGENT_INFO.salesAgent} [{AGENT_INFO.salesCode}]
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

          {/* Desktop Navigation Links (with Glassmorphism Hover & Active Scrollspy Indicator) */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0F4C3A]/15 via-emerald-100/50 to-[#0D2A4A]/15 backdrop-blur-md border border-[#0F4C3A]/30 text-[#0F4C3A] font-extrabold shadow-md ring-2 ring-[#0F4C3A]/20 scale-105'
                      : 'text-gray-700 hover:bg-white/80 hover:backdrop-blur-md hover:shadow-lg hover:border hover:border-[#0F4C3A]/30 hover:text-[#0F4C3A] hover:-translate-y-0.5'
                  }`}
                >
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                  ) : null}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100/80 focus:outline-none transition-colors border border-gray-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer (with Glassmorphism Glass Pills & Active Section Badges) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0F4C3A]/15 to-[#0D2A4A]/15 backdrop-blur-md border border-[#0F4C3A]/30 text-[#0F4C3A] shadow-sm'
                    : 'text-gray-800 hover:bg-emerald-50/80 hover:text-[#0F4C3A]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="px-2 py-0.5 rounded-full bg-[#0F4C3A] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F4D068]" />
                    Aktif
                  </span>
                )}
              </a>
            );
          })}

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }}
              className="w-full py-3 rounded-xl bg-emerald-50 text-[#0F4C3A] font-semibold text-sm flex items-center justify-center gap-2 border border-emerald-200 shadow-xs"
            >
              <Calculator className="w-4 h-4" />
              Kalkulator Harga & Simulasi
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); handleWaClick('Mobile Drawer WhatsApp'); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md border border-[#D4AF37]/30"
            >
              <Phone className="w-4 h-4 text-[#F4D068]" />
              Hubungi Ibu Corina via WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
