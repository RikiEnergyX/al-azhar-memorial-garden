import React, { useState } from 'react';
import { Send, ShieldCheck, Sparkles, CheckCircle2, Cloud, UserCheck } from 'lucide-react';
import { AGENT_INFO, PLOT_TYPES } from '../data/contentData';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    needType: 'Pre-Need',
    plotType: 'Tipe Single (1 Lubang)',
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert('Mohon lengkapi Nama dan Nomor WhatsApp.');
      return;
    }

    setLoading(true);
    setStatusMsg('Merekam lead data...');

    const payload = {
      timestamp: new Date().toISOString(),
      name: formData.name,
      whatsapp: formData.whatsapp,
      city: formData.city || 'N/A',
      needType: formData.needType,
      plotType: formData.plotType,
      agentCode: AGENT_INFO.salesCode,
      agentName: AGENT_INFO.salesAgent,
      sourceUrl: window.location.href,
    };

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setStatusMsg('Data tersimpan! Menghubungkan ke WhatsApp Ibu Corina...');
    } catch (err) {
      console.warn('Backend Cloudflare logging notice:', err);
    }

    const textMsg = encodeURIComponent(
      `*FORMULIR KONSULTASI AL AZHAR MEMORIAL GARDEN*\n` +
      `Ref Agent: Ibu ${AGENT_INFO.salesAgent} [${AGENT_INFO.salesCode}]\n` +
      `----------------------------------------\n` +
      `👤 *Nama Lengkap:* ${formData.name}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      `📍 *Kota Domisili:* ${formData.city || 'Indonesia'}\n` +
      `📋 *Rencana Kebutuhan:* ${formData.needType}\n` +
      `🏞️ *Tipe Kavling Diminati:* ${formData.plotType}\n` +
      `----------------------------------------\n` +
      `Mohon dikirimkan Brosur Price List PDF Resmi Juli 2026 & Jadwal Kunjungan Survey Lokasi.`
    );

    setTimeout(() => {
      setLoading(false);
      window.open(`https://wa.me/${AGENT_INFO.phone}?text=${textMsg}`, '_blank');
    }, 600);
  };

  return (
    <section id="hubungi-kami" className="py-20 bg-[#1A1F1C] text-white border-b border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F4C3A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-[#F4D068] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Memorial Partner Resmi Al Azhar</span>
            </div>

            <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Konsultasi Direct &{' '}
              <span className="text-gold-gradient block">
                Pricelist Juli 2026
              </span>
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed font-sans">
              Isi formulir di samping untuk terhubung langsung dengan Ibu <strong>{AGENT_INFO.salesAgent} ({AGENT_INFO.salesCode})</strong> untuk memperoleh brosur resmi 22 tipe kavling makam.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#F4D068] shrink-0" />
                <span>Konsultasi gratis & rahasia 24 Jam bersama Memorial Partner Resmi.</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#F4D068] shrink-0" />
                <span>Pendampingan survey lokasi langsung ke site Karawang (antar-jemput).</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-200">
                <Cloud className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Terintegrasi Cloudflare Worker API (Keamanan Data & Respon Cepat).</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] border border-[#D4AF37]/30 text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#F4D068] font-bold">
                <UserCheck className="w-4 h-4" />
                <span>Memorial Partner Contact:</span>
              </div>
              <p className="text-white text-sm font-extrabold">Ibu {AGENT_INFO.salesAgent} [{AGENT_INFO.salesCode}]</p>
              <p className="text-gray-200">WhatsApp Hotline: <strong>{AGENT_INFO.phoneFormatted}</strong></p>
              <p className="text-gray-300 text-[11px]">Al Azhar Memorial Garden Karawang</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-black/60 border border-[#D4AF37]/30 shadow-2xl backdrop-blur-md space-y-6">
              
              <div className="border-b border-white/10 pb-4">
                <h3 className="font-serif-header text-2xl font-bold text-white">
                  Formulir Konsultasi Direct
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Data Anda terhubung langsung ke Ibu Corina [{AGENT_INFO.salesCode}].
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Nama Lengkap <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Contoh: Bpk. H. Ahmad Wijaya"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Nomor WhatsApp <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      placeholder="Contoh: 081310091299"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Kota Domisili
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Contoh: Jakarta Selatan / Bandung"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Rencana Kebutuhan
                    </label>
                    <select
                      name="needType"
                      value={formData.needType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#2A302C] border border-white/20 text-white text-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-all"
                    >
                      <option value="Pre-Need">Pre-Need (Persiapan Lahan Awal)</option>
                      <option value="After-Need">After-Need (Kebutuhan Pemakaman Langsung)</option>
                      <option value="Survey Lokasi">Survey Lokasi Kunjungan Site</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">
                    Tipe Kavling Diminati
                  </label>
                  <select
                    name="plotType"
                    value={formData.plotType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#2A302C] border border-white/20 text-white text-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-all"
                  >
                    {PLOT_TYPES.map((p) => (
                      <option key={p.id} value={`${p.name} (${p.capacity})`}>
                        {p.name} - {p.area} ({p.capacity})
                      </option>
                    ))}
                  </select>
                </div>

                {statusMsg && (
                  <p className="text-xs text-[#F4D068] font-bold animate-pulse">
                    {statusMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] text-white font-extrabold text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2.5 border border-yellow-200 uppercase tracking-wider"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Kirim ke WhatsApp Ibu Corina [AZHR-10306]</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
