import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, Send, PhoneCall } from 'lucide-react';
import { AGENT_INFO, PLOT_TYPES } from '../data/contentData';

export default function CalculatorModal({ isOpen, onClose, initialPlotId = 'single' }) {
  const [step, setStep] = useState(1);
  const [selectedPlot, setSelectedPlot] = useState(initialPlotId);
  const [needType, setNeedType] = useState('Pre-Need'); // Pre-Need, After-Need, Survey Lokasi
  const [paymentType, setPaymentType] = useState('Tunai'); // Tunai, BTN Syariah
  const [units, setUnits] = useState(1);
  
  // User Info
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const currentPlotObj = PLOT_TYPES.find((p) => p.id === selectedPlot) || PLOT_TYPES[0];

  // Estimation multiplier logic
  const basePrices = {
    single: 40000000,
    double: 110000000,
    family: 240000000,
    'super-family': 550000000,
    'royal-family': 1200000000
  };

  const currentPriceUnit = basePrices[selectedPlot] || 40000000;
  const totalPriceEst = currentPriceUnit * units;

  // Pre-Need discount simulation factor
  const discountRate = needType === 'Pre-Need' ? 0.10 : 0;
  const finalEst = Math.round(totalPriceEst * (1 - discountRate));

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !whatsapp) {
      alert('Mohon isi nama dan nomor WhatsApp Anda.');
      return;
    }

    setIsSubmitting(true);

    const leadPayload = {
      name,
      whatsapp,
      city: city || 'N/A',
      needType,
      plotType: currentPlotObj.name,
      paymentType,
      units,
      estimatedPrice: formatRupiah(finalEst),
      sourceUrl: window.location.href
    };

    // 1. Post to Cloudflare Worker endpoint
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload)
      });
    } catch (err) {
      console.warn('API lead logging notice:', err);
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // 2. Format WhatsApp Redirect Message
    const textMsg = encodeURIComponent(
      `*PENAWARAN KALKULATOR HARGA AL AZHAR MEMORIAL GARDEN*\n` +
      `----------------------------------------\n` +
      `👤 *Nama:* ${name}\n` +
      `📱 *WhatsApp:* ${whatsapp}\n` +
      `📍 *Kota Domisili:* ${city || 'Indonesia'}\n` +
      `🏞️ *Tipe Kavling:* ${currentPlotObj.name} (${units} Unit)\n` +
      `📋 *Kebutuhan:* ${needType}\n` +
      `💳 *Skema Pembayaran:* ${paymentType}\n` +
      `💰 *Estimasi Biaya:* ${formatRupiah(finalEst)}\n` +
      `----------------------------------------\n` +
      `Mohon dibantu brosur resmi, denah peta lokasi, dan tata cara booking lokasi survey. Terima kasih.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${AGENT_INFO.phone}?text=${textMsg}`, '_blank');
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/30 my-8 animate-fadeIn">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0F4C3A] via-[#0D2A4A] to-[#083327] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-[#F4D068] uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Interactive Price & Plot Calculator</span>
          </div>

          <h3 className="font-serif-header text-2xl font-bold text-white">
            Kalkulator Estimasi Lahan Makam Al Azhar
          </h3>
          <p className="text-xs text-gray-200 mt-1">
            Simulasi biaya transparan dengan jaminan Bebas Biaya Pemeliharaan Rumput Selamanya.
          </p>

          {/* Stepper Bar */}
          <div className="flex items-center justify-between max-w-md mt-6 pt-4 border-t border-white/10 text-xs">
            <div className={`flex items-center gap-1.5 font-bold ${step >= 1 ? 'text-[#F4D068]' : 'text-gray-400'}`}>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">1</span>
              <span>Pilih Kavling</span>
            </div>
            <div className="w-8 h-[2px] bg-white/20" />
            <div className={`flex items-center gap-1.5 font-bold ${step >= 2 ? 'text-[#F4D068]' : 'text-gray-400'}`}>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">2</span>
              <span>Kebutuhan & Bayar</span>
            </div>
            <div className="w-8 h-[2px] bg-white/20" />
            <div className={`flex items-center gap-1.5 font-bold ${step >= 3 ? 'text-[#F4D068]' : 'text-gray-400'}`}>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">3</span>
              <span>Kirim ke WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* STEP 1: Select Plot Type */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  1. Pilih Tipe Kavling Makam:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PLOT_TYPES.map((plot) => (
                    <div
                      key={plot.id}
                      onClick={() => setSelectedPlot(plot.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedPlot === plot.id
                          ? 'border-[#0F4C3A] bg-emerald-50/80 shadow-md ring-2 ring-[#0F4C3A]/20'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif-header text-base font-bold text-[#0D2A4A]">{plot.name}</h4>
                        {selectedPlot === plot.id && (
                          <span className="w-5 h-5 rounded-full bg-[#0F4C3A] text-white flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{plot.area} &bull; {plot.capacity}</p>
                      <p className="text-xs font-extrabold text-[#0F4C3A] mt-2">{plot.priceEst}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Number of Units */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Jumlah Unit Kavling:
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 4, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setUnits(num)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                        units === num
                          ? 'bg-[#0F4C3A] text-white border-[#0F4C3A]'
                          : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      {num} Unit {num === 10 ? '(Paket Trah)' : ''}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Need Type & Payment Method */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  2. Pilih Jenis Kebutuhan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'Pre-Need', title: 'Pre-Need (Persiapan)', desc: 'Persiapan sejak dini, kunci harga hemat 10%' },
                    { id: 'After-Need', title: 'After-Need (Saat Ini)', desc: 'Penggunaan langsung saat musibah duka' },
                    { id: 'Survey Lokasi', title: 'Booking Survey', desc: 'Jadwal kunjungan melihat lahan langsung' }
                  ].map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setNeedType(option.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        needType === option.id
                          ? 'border-[#0F4C3A] bg-emerald-50/80 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <h5 className="font-bold text-sm text-[#0D2A4A]">{option.title}</h5>
                      <p className="text-xs text-gray-600 mt-1">{option.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  3. Skema Pembayaran yang Diinginkan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setPaymentType('Tunai')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentType === 'Tunai'
                        ? 'border-[#0F4C3A] bg-emerald-50/80'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <h5 className="font-bold text-sm text-[#0D2A4A]">Tunai / Cash Hard</h5>
                    <p className="text-xs text-gray-600 mt-1">Pembayaran sekaligus dengan potongan penawaran khusus.</p>
                  </div>

                  <div
                    onClick={() => setPaymentType('Cicilan BTN Syariah')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentType === 'Cicilan BTN Syariah'
                        ? 'border-[#0F4C3A] bg-emerald-50/80'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <h5 className="font-bold text-sm text-[#0D2A4A]">Cicilan Syariah (BTN Syariah)</h5>
                    <p className="text-xs text-gray-600 mt-1">Angsuran ringan secara syariah tanpa akad risih.</p>
                  </div>
                </div>
              </div>

              {/* Instant Calculation Summary Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0F4C3A] to-[#0D2A4A] text-white space-y-2 border border-[#D4AF37]/30 shadow-md">
                <div className="flex justify-between items-center text-xs text-yellow-200">
                  <span>Estimasi Ringkasan Kalkulasi:</span>
                  <span className="font-bold uppercase tracking-wider">{currentPlotObj.name} ({units} Unit)</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium">Estimasi Biaya Akhir:</span>
                  <span className="text-2xl font-extrabold text-[#F4D068]">{formatRupiah(finalEst)}</span>
                </div>
                <p className="text-[11px] text-gray-300 italic">
                  *Termasuk Sertifikat Pemanfaatan Lahan YPIA, walkway batu alam, & Bebas Biaya Rumput Selamanya.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: Contact Form & WA Dispatch */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0F4C3A] shrink-0" />
                <span>
                  Lengkapi data untuk mengunduh Pricelist PDF Resmi & menghubungkan Anda secara otomatis ke WhatsApp Official Sales Agent.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. H. Hendra Wijaya"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0F4C3A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Nomor WhatsApp Active <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0F4C3A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Kota Domisili (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Jakarta Selatan / Bandung / Bekasi"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0F4C3A] focus:outline-none"
                />
              </div>

              {/* Summary Review Card */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1.5 text-gray-700">
                <p><strong>Kavling Dipilih:</strong> {currentPlotObj.name} ({units} Unit)</p>
                <p><strong>Kebutuhan:</strong> {needType} | <strong>Skema:</strong> {paymentType}</p>
                <p className="text-sm font-bold text-[#0F4C3A]">
                  Total Estimasi: {formatRupiah(finalEst)}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0F4C3A] via-[#0D2A4A] to-[#083327] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/40"
              >
                {isSubmitting ? (
                  <span>Menyiapkan Lead Data...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#F4D068]" />
                    <span>Dapatkan Penawaran via WhatsApp Direct</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-lg border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>
          ) : (
            <div />
          )}

          {step < 3 && (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-lg bg-[#0F4C3A] text-white text-xs font-bold hover:bg-[#083327] transition-all flex items-center gap-1 shadow-md"
            >
              <span>Lanjut ke Langkah {step + 1}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
