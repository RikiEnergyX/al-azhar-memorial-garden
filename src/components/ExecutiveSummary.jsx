import React from 'react';
import {
  ShieldCheck, Award, MapPin, Compass, Footprints, Clock,
  UserCheck, Trees, Grid, FileCheck, CreditCard, Sparkles, HeartHandshake
} from 'lucide-react';
import { ADVANTAGES_12 } from '../data/contentData';

const iconMap = {
  Mosque: ShieldCheck,
  Award: Award,
  MapPin: MapPin,
  Compass: Compass,
  Footprints: Footprints,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  UserCheck: UserCheck,
  Trees: Trees,
  Grid: Grid,
  FileCheck: FileCheck,
  CreditCard: CreditCard
};

export default function ExecutiveSummary() {
  return (
    <section id="keunggulan" className="py-20 bg-[#F9FAF7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#0F4C3A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Standard Kehormatan Makam Muslim</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-[#0D2A4A] tracking-tight">
            12 Keunggulan Utama{' '}
            <span className="text-gold-gradient block sm:inline">
              Al Azhar Memorial Garden
            </span>
          </h2>

          <p className="text-gray-6 font-normal text-base leading-relaxed">
            Menyiapkan tempat peristirahatan terakhir yang sesuai Syariat Islam, amanah, dan terkelola secara profesional memberikan ketenangan sempurna bagi Anda dan keluarga.
          </p>
        </div>

        {/* 12 Key Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES_12.map((adv) => {
            const IconComponent = iconMap[adv.icon] || HeartHandshake;
            return (
              <div
                key={adv.id}
                className="group relative p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-[#0F4C3A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/60 border border-emerald-200 text-[#0F4C3A] flex items-center justify-center group-hover:bg-[#0F4C3A] group-hover:text-[#F4D068] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                      0{adv.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-header text-xl font-bold text-[#0D2A4A] group-hover:text-[#0F4C3A] transition-colors">
                    {adv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {adv.desc}
                  </p>
                </div>

                {/* Bottom Border Glow */}
                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0F4C3A]">
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Standar Resmi YPI Al Azhar &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#0F4C3A] via-[#0D2A4A] to-[#083327] text-white shadow-xl border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif-header text-2xl font-bold text-[#F4D068]">
              Bebas Biaya Perawatan Rumput & Keamanan Selamanya
            </h3>
            <p className="text-sm text-gray-200 max-w-2xl font-sans">
              Setiap unit pemakaman berprinsip <strong className="text-white">One-Time Payment</strong> (sekali bayar). Tidak ada lagi kekhawatiran iuran bulanan atau tahunan yang membebani sanak saudara di kemudian hari.
            </p>
          </div>
          <a
            href="#tipe-kavling"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-white font-bold text-sm hover:brightness-110 transition-all shadow-md shrink-0 border border-yellow-200"
          >
            Lihat Tipe Kavling & Harga
          </a>
        </div>

      </div>
    </section>
  );
}
