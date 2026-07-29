import React from 'react';
import { AGENT_INFO } from '../data/contentData';
import { ShieldCheck, MapPin, Phone, Mail, Compass, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#07172A] text-gray-400 font-sans text-xs border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Authority */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F4C3A] to-[#0D2A4A] flex items-center justify-center text-[#F4D068] font-serif-header font-bold text-lg border border-[#D4AF37]/30">
                AMG
              </div>
              <div>
                <h3 className="font-serif-header text-lg font-bold text-white leading-tight">
                  Al Azhar Memorial Garden
                </h3>
                <p className="text-[11px] text-[#F4D068] font-semibold">
                  Official Authorized Sales Agent Site
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Taman Pemakaman Khusus Muslim No. 1 di Indonesia. Dikelola secara profesional oleh YPI Al Azhar bekerja sama dengan PT Nuansa Usaha Mandiri sejak 2011 dengan standar sertifikasi mutu <strong>ISO 9001</strong>.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Khusus Muslim
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300 font-medium flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                Sertifikat Kiblat Kemenag
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300 font-medium flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                ISO 9001 Certified
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif-header text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#keunggulan" className="hover:text-[#F4D068] transition-colors">12 Keunggulan Utama</a></li>
              <li><a href="#tipe-kavling" className="hover:text-[#F4D068] transition-colors">Tipe Kavling & Spesifikasi</a></li>
              <li><a href="#syariat-islam" className="hover:text-[#F4D068] transition-colors">Kepatuhan Syariat Islam</a></li>
              <li><a href="#fasilitas-upj" className="hover:text-[#F4D068] transition-colors">Fasilitas Site & UPJ 24 Jam</a></li>
              <li><a href="#lokasi-akses" className="hover:text-[#F4D068] transition-colors">Petunjuk Arah Tol MBZ</a></li>
              <li><a href="#edukasi" className="hover:text-[#F4D068] transition-colors">Edukasi & Artikel Syariah</a></li>
            </ul>
          </div>

          {/* Col 4: Tipe Kavling */}
          <div className="space-y-3">
            <h4 className="font-serif-header text-sm font-bold text-white uppercase tracking-wider">
              Tipe Kavling Makam
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#tipe-kavling" className="hover:text-[#F4D068] transition-colors">Tipe Single (1.5m x 3m)</a></li>
              <li><a href="#tipe-kavling" className="hover:text-[#F4D068] transition-colors">Tipe Double (3.5m x 3.9m)</a></li>
              <li><a href="#tipe-kavling" className="hover:text-[#F4D068] transition-colors">Tipe Family A & B (4 Lubang)</a></li>
              <li><a href="#tipe-kavling" className="hover:text-[#F4D068] transition-colors">Tipe Super Family (6 - 8 Lubang)</a></li>
              <li><a href="#tipe-kavling" className="hover:text-[#F4D068] transition-colors">Tipe Royal Family (12 - 18 Lubang)</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-serif-header text-sm font-bold text-white uppercase tracking-wider">
              Layanan Sales Agent
            </h4>
            <div className="space-y-2.5 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4D068] shrink-0 mt-0.5" />
                <span>{AGENT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F4D068] shrink-0" />
                <span>Hotline WA: {AGENT_INFO.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F4D068] shrink-0" />
                <span>{AGENT_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Note */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Official Authorized Sales Agent Al Azhar Memorial Garden. All Rights Reserved.
          </p>
          <p className="text-gray-400">
            Powered by:{' '}
            <a href="https://www.energyx.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4D068] transition-colors underline">
              https://www.energyx.co.id
            </a>
            {' | '}
            <a href="https://www.energyx369.cloud" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4D068] transition-colors underline">
              https://www.energyx369.cloud
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
