import React, { useState } from 'react';
import { PLOT_TYPES, PRICE_LIST_JULY_2026, ADDITIONAL_COSTS, AGENT_INFO } from '../data/contentData';
import { Maximize2, Users, Footprints, CheckCircle, Calculator, Phone, Sparkles, Table, Grid, Info, ShieldCheck } from 'lucide-react';

export default function PlotCatalog({ onOpenCalculator, onSelectPlotForCalc }) {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'
  const [tableSearch, setTableSearch] = useState('');

  const filteredPlots = PLOT_TYPES.filter((plot) => {
    if (filter === 'all') return true;
    if (filter === 'single-double') return plot.id === 'single' || plot.id === 'double';
    if (filter === 'family') return plot.id === 'family' || plot.id === 'super-family';
    if (filter === 'royal') return plot.id === 'royal-family';
    return true;
  });

  const filteredTable = PRICE_LIST_JULY_2026.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(tableSearch.toLowerCase()) ||
                          item.category.toLowerCase().includes(tableSearch.toLowerCase());
    if (filter === 'all') return matchesSearch;
    if (filter === 'single-double') return matchesSearch && (item.category === 'Single' || item.category === 'Double');
    if (filter === 'family') return matchesSearch && (item.category === 'Family' || item.category === 'Super Family');
    if (filter === 'royal') return matchesSearch && item.category === 'Royal Family';
    return matchesSearch;
  });

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const handleInquireWa = (plotName, priceInfo = '') => {
    const text = encodeURIComponent(
      `Assalamu'alaikum Ibu ${AGENT_INFO.salesAgent} (${AGENT_INFO.salesCode}), saya berminat memperoleh pricelist & brosur resmi untuk *${plotName}* Al Azhar Memorial Garden Karawang. ${priceInfo}`
    );
    window.open(`https://wa.me/${AGENT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="tipe-kavling" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Pricelist Resmi Makam Vertical Terbaru</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-[#0D2A4A] tracking-tight">
            Pilihan Tipe Kavling & Tabel Price List{' '}
            <span className="text-gold-gradient block sm:inline">
              Al Azhar Memorial Garden
            </span>
          </h2>

          <p className="text-gray-600 font-normal text-base leading-relaxed">
            Daftar lengkap 22 jenis tipe kavling makam Muslim dari Tipe Single hingga Royal Family lengkap dengan skema Cash Keras (20%+2%) dan Promo Tunai.
          </p>

          {/* View Toggle & Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* View Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-gray-100 border border-gray-200 text-xs font-bold">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'cards'
                    ? 'bg-[#0F4C3A] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Tampilan Kartu Ringkas</span>
              </button>

              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'table'
                    ? 'bg-[#0F4C3A] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Tabel Price List 22 Tipe</span>
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'all'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Semua Tipe
              </button>
              <button
                onClick={() => setFilter('single-double')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'single-double'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Single & Double
              </button>
              <button
                onClick={() => setFilter('family')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'family'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Family & Super Family
              </button>
              <button
                onClick={() => setFilter('royal')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'royal'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Royal Family
              </button>
            </div>

          </div>
        </div>

        {/* MODE 1: Cards View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlots.map((plot) => (
              <div
                key={plot.id}
                className="rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={plot.image}
                    alt={plot.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-white text-[11px] font-bold shadow-md border border-yellow-200">
                    {plot.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif-header text-2xl font-bold leading-tight drop-shadow-md">
                      {plot.name}
                    </h3>
                    <p className="text-xs text-yellow-200 font-medium">
                      {plot.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="grid grid-cols-1 gap-2.5 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs">
                    <div className="flex items-center gap-2 text-gray-800">
                      <Maximize2 className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                      <span><strong>Luas Lahan:</strong> {plot.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-800">
                      <Users className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                      <span><strong>Kapasitas:</strong> {plot.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-800">
                      <Footprints className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                      <span><strong>Akses Walkway:</strong> {plot.walkway}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Rincian Skema Harga:
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-700 font-sans">
                      {plot.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#0F4C3A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-gray-500 font-medium">Cash Keras (20%+2%):</span>
                      <span className="text-sm font-extrabold text-[#0D2A4A]">{plot.priceEst}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectPlotForCalc(plot.id)}
                        className="py-2.5 px-3 rounded-lg bg-emerald-50 text-[#0F4C3A] text-xs font-bold border border-emerald-200 hover:bg-emerald-100 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Simulasi</span>
                      </button>

                      <button
                        onClick={() => handleInquireWa(plot.name, `Estimasi: ${plot.priceEst}`)}
                        className="py-2.5 px-3 rounded-lg bg-[#0F4C3A] text-white text-xs font-bold hover:bg-[#083327] transition-all shadow-sm flex items-center justify-center gap-1.5 border border-[#D4AF37]/30"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#F4D068]" />
                        <span>Brosur WA</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODE 2: Full Price List Table (22 Items) */}
        {viewMode === 'table' && (
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200">
              <span className="text-xs font-bold text-[#0D2A4A]">
                Menampilkan {filteredTable.length} Tipe Makam (Price List Resmi Terbaru)
              </span>
              <input
                type="text"
                placeholder="Cari tipe kavling (misal: Double B / Royal Family)..."
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-300 text-xs w-full sm:w-72 focus:ring-2 focus:ring-[#0F4C3A] focus:outline-none"
              />
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] text-white uppercase text-[11px] font-bold tracking-wider">
                  <tr>
                    <th className="py-4 px-3 text-center">No</th>
                    <th className="py-4 px-4">Tipe Kavling</th>
                    <th className="py-4 px-3 text-center">Kap Max</th>
                    <th className="py-4 px-4">Ukuran (M²)</th>
                    <th className="py-4 px-4">Harga Normal Tunai</th>
                    <th className="py-4 px-4 text-[#F4D068]">Cash Keras (20%+2%)</th>
                    <th className="py-4 px-4">Promo Tunai (20%)</th>
                    <th className="py-4 px-4">Booking Fee</th>
                    <th className="py-4 px-4 text-center">Aksi WA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredTable.map((row) => (
                    <tr key={row.no} className="hover:bg-emerald-50/50 transition-colors">
                      <td className="py-3.5 px-3 text-center font-bold text-gray-500">{row.no}</td>
                      <td className="py-3.5 px-4 font-bold text-[#0D2A4A]">{row.name}</td>
                      <td className="py-3.5 px-3 text-center font-semibold">{row.capacity} Orang</td>
                      <td className="py-3.5 px-4 text-gray-600 font-mono text-[11px]">{row.area}</td>
                      <td className="py-3.5 px-4 text-gray-500 line-through">{formatRupiah(row.normal)}</td>
                      <td className="py-3.5 px-4 font-extrabold text-[#0F4C3A] bg-emerald-50/70">{formatRupiah(row.cashKeras)}</td>
                      <td className="py-3.5 px-4 text-gray-800 font-bold">{formatRupiah(row.promoTunai)}</td>
                      <td className="py-3.5 px-4 text-amber-800 font-semibold">{formatRupiah(row.bookingFee)}</td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => handleInquireWa(row.name, `Cash Keras: ${formatRupiah(row.cashKeras)}`)}
                          className="px-3 py-1.5 rounded-lg bg-[#0F4C3A] text-white font-bold text-[11px] hover:bg-[#083327] transition-all shadow-xs flex items-center justify-center gap-1 mx-auto"
                        >
                          <Phone className="w-3 h-3 text-[#F4D068]" />
                          <span>Pesan WA</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* Additional Mandatory & Optional Expenses Summary Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#0F4C3A] via-[#0D2A4A] to-[#07172A] text-white shadow-2xl border border-[#D4AF37]/40 space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <ShieldCheck className="w-6 h-6 text-[#F4D068]" />
            <div>
              <h3 className="font-serif-header text-2xl font-bold text-white">Rincian Biaya Lain & Pemulasaraan</h3>
              <p className="text-xs text-[#F4D068] font-medium">Berdasarkan Ketentuan Resmi Al Azhar Memorial Garden Karawang</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            
            {/* Box 1: Wajib */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-2">
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-[#F4D068] font-bold uppercase text-[10px]">
                Wajib Saat Pemakaman
              </span>
              <h4 className="font-bold text-sm text-white">{ADDITIONAL_COSTS.mandatory.title}</h4>
              <p className="text-lg font-extrabold text-[#F4D068]">{formatRupiah(ADDITIONAL_COSTS.mandatory.price)}</p>
              <p className="text-gray-300 leading-relaxed">
                Sudah termasuk ustadz pendamping syar'i, liang lahat, tenda, kursi, papan ari, sound system, & nisan granit solid permanen.
              </p>
            </div>

            {/* Box 2: Optional */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-2">
              <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-bold uppercase text-[10px]">
                Opsional / Sesuai Kebutuhan
              </span>
              <h4 className="font-bold text-sm text-white">Layanan Ambulans & Pemulasaraan</h4>
              <ul className="space-y-1 text-gray-300">
                {ADDITIONAL_COSTS.optional.map((opt, i) => (
                  <li key={i}>&bull; <strong>{opt.name}:</strong> {opt.desc}</li>
                ))}
              </ul>
            </div>

            {/* Box 3: Tomb & Landscape */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-2">
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase text-[10px]">
                Pembatas Tomb & Lanskap
              </span>
              <h4 className="font-bold text-sm text-white">Estimasi Pembatas & Gazebo</h4>
              <ul className="space-y-1 text-gray-300">
                {ADDITIONAL_COSTS.tombLandscape.map((tl, i) => (
                  <li key={i}>&bull; <strong>{tl.type}:</strong> {tl.range}</li>
                ))}
              </ul>
            </div>

          </div>

          <div className="pt-2 text-center text-xs text-gray-300">
            <p>
              Hubungi Memorial Partner Resmi <strong>Ibu {AGENT_INFO.salesAgent} ({AGENT_INFO.salesCode})</strong> di <strong>{AGENT_INFO.phoneFormatted}</strong> untuk rincian lengkap brosur PDF.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
