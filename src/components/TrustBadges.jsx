import React from 'react';
import { ShieldCheck, Compass, Award, Clock, Sparkles, HeartHandshake } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      iconColor: 'text-[#F4D068]',
      title: '100% Khusus Muslim',
      subtitle: 'Tidak Bercampur & Sesuai Syariat'
    },
    {
      icon: Compass,
      iconColor: 'text-emerald-400',
      title: 'Sertifikat Kiblat Kemenag',
      subtitle: 'Presisi Arah Kiblat Terverifikasi'
    },
    {
      icon: Award,
      iconColor: 'text-blue-400',
      title: 'Sertifikasi ISO 9001',
      subtitle: 'Standar Manajemen Mutu Internasional'
    },
    {
      icon: Sparkles,
      iconColor: 'text-amber-400',
      title: 'Bebas Rumput Selamanya',
      subtitle: 'Sekali Bayar Tanpa Iuran Bulanan'
    },
    {
      icon: Clock,
      iconColor: 'text-yellow-300',
      title: 'UPJ Kedukaan 24 Jam',
      subtitle: 'Layanan Pemulasaraan & Ambulance'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-[#07172A] via-[#0F4C3A] to-[#0D2A4A] border-y border-[#D4AF37]/30 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map((badge, idx) => {
            const IconComp = badge.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col items-center text-center shadow-lg"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-white/20">
                  <IconComp className={`w-6 h-6 ${badge.iconColor}`} />
                </div>
                <h4 className="font-serif-header text-sm font-bold text-white tracking-tight group-hover:text-[#F4D068] transition-colors">
                  {badge.title}
                </h4>
                <p className="text-[11px] text-gray-300 mt-1 font-medium leading-snug">
                  {badge.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
