import React from 'react';
import { Compass, BookOpen, ShieldCheck, FileCheck, CheckCircle2, Award } from 'lucide-react';
import { SYARIAH_RULES } from '../data/contentData';

export default function IslamicSyariah() {
  return (
    <section id="syariat-islam" className="py-20 bg-gradient-to-b from-[#F3F4F1] to-[#F9FAF7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#0F4C3A] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Kepatuhan Syariah & Fatwa MUI</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-[#0D2A4A] tracking-tight">
            Standar Pemakaman Syar'i & Legalitas Kemenag{' '}
            <span className="text-gold-gradient block sm:inline">
              Al Azhar Karawang
            </span>
          </h2>

          <p className="text-gray-600 font-normal text-base leading-relaxed">
            Menjamin pelaksanaan tata cara pemakaman yang sesuai dengan ajaran Al-Qur'an dan Sunnah Rasulullah SAW serta mengantongi sertifikasi resmi pemerintah.
          </p>
        </div>

        {/* 4 Syariah Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SYARIAH_RULES.map((rule, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-300 flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F4C3A] to-[#0D2A4A] text-[#F4D068] flex items-center justify-center shrink-0 shadow-md border border-[#D4AF37]/30">
                <BookOpen className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif-header text-xl font-bold text-[#0D2A4A]">
                  {rule.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-sans">
                  {rule.desc}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#0F4C3A]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>{rule.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Compliance Badges & Fatwa Banner */}
        <div className="p-8 rounded-3xl bg-white border-2 border-[#0F4C3A]/20 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <div className="space-y-3 lg:col-span-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Sertifikasi Kemenag & Landasan Hukum</span>
            </div>
            <h4 className="font-serif-header text-2xl font-bold text-[#0D2A4A]">
              Terverifikasi Kementerian Agama Karawang & MUI
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lokasi Al Azhar Memorial Garden Karawang telah diukur langsung dan diterbitkan <strong>Sertifikat Arah Kiblat Resmi</strong> oleh Kemenag Karawang. Pembangunan makam dipastikan mengikuti Fatwa MUI No. 9 Tahun 2014 tentang larangan Tabzir & Israf serta Fatwa MUI DKI Jakarta 2011.
            </p>
          </div>

          <div className="space-y-3 bg-emerald-50 p-6 rounded-2xl border border-emerald-200 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#0F4C3A] font-bold text-sm">
              <FileCheck className="w-5 h-5" />
              <span>Sertifikat Pemanfaatan Lahan</span>
            </div>
            <p className="text-xs text-gray-700">
              Diterbitkan langsung oleh Yayasan Pesantren Islam (YPI) Al Azhar sebagai jaminan legalitas kepemilikan hak pakai jangka panjang.
            </p>
            <a
              href="#hubungi-kami"
              className="inline-block px-4 py-2.5 rounded-lg bg-[#0F4C3A] text-white font-bold text-xs hover:bg-[#083327] transition-all shadow-sm"
            >
              Minta Salinan Contoh Sertifikat
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
