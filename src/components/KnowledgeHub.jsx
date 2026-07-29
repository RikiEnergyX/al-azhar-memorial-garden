import React, { useState } from 'react';
import { KNOWLEDGE_ARTICLES, AGENT_INFO } from '../data/contentData';
import { BookOpen, Clock, ArrowRight, X, Share2, MessageCircle } from 'lucide-react';

export default function KnowledgeHub() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleShareWa = (article) => {
    const shareText = encodeURIComponent(
      `*${article.title}*\n\n` +
      `${article.summary}\n\n` +
      `----------------------------------------\n` +
      `Disebar dari Edukasi Al Azhar Memorial Garden Karawang\n` +
      `Informasi & Konsultasi Resmi:\n` +
      `Ibu ${AGENT_INFO.salesAgent} (${AGENT_INFO.salesCode}) - Memorial Partner\n` +
      `WhatsApp: https://wa.me/${AGENT_INFO.phone}?text=${encodeURIComponent(`Assalamu'alaikum Ibu Corina [AZHR-10306], saya membaca artikel "${article.title}" dan ingin berkonsultasi mengenai lahan makam.`)}`
    );
    window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank');
  };

  return (
    <section id="edukasi" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#0F4C3A] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Edukasi & Informasi Syariah</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-[#0D2A4A] tracking-tight">
            Artikel & Panduan Syariah Kedukaan{' '}
            <span className="text-gold-gradient block sm:inline">
              Al Azhar Memorial Garden
            </span>
          </h2>

          <p className="text-gray-600 font-normal text-base leading-relaxed">
            Wawasan seputar hukum wasiat, tata cara ziarah kubur sesuai Sunnah, serta pentingnya perencanaan rumah masa depan sejak dini.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KNOWLEDGE_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="p-6 rounded-2xl bg-[#F9FAF7] border border-gray-200 shadow-xs hover:shadow-xl hover:border-[#0F4C3A]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#0F4C3A] font-bold text-[10px]">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-gray-400" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="font-serif-header text-lg font-bold text-[#0D2A4A] group-hover:text-[#0F4C3A] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="w-full py-2 px-3 rounded-lg bg-white border border-gray-200 text-[#0F4C3A] text-xs font-bold hover:bg-[#0F4C3A] hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Baca Artikel Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleShareWa(art)}
                  className="w-full py-2 px-3 rounded-lg bg-emerald-50 text-[#0F4C3A] text-xs font-bold hover:bg-emerald-100 transition-all flex items-center justify-center gap-1.5 border border-emerald-200"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Sebar Artikel via WA</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/30 my-8 animate-fadeIn">
            
            <div className="bg-gradient-to-r from-[#0F4C3A] to-[#0D2A4A] text-white p-6 relative">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 text-gray-300 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold text-[#F4D068] uppercase tracking-wider">
                {selectedArticle.category} &bull; {selectedArticle.readTime}
              </span>
              <h3 className="font-serif-header text-2xl font-bold text-white mt-1">
                {selectedArticle.title}
              </h3>
            </div>

            <div className="p-6 md:p-8 space-y-4 max-h-[60vh] overflow-y-auto font-sans text-sm text-gray-700 leading-relaxed">
              {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.trim().startsWith('###')) {
                  return (
                    <h4 key={idx} className="font-serif-header text-lg font-bold text-[#0D2A4A] mt-4">
                      {paragraph.replace('###', '').trim()}
                    </h4>
                  );
                }
                return <p key={idx}>{paragraph.trim()}</p>;
              })}

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1 mt-6">
                <p className="font-bold flex items-center gap-1.5 text-[#0F4C3A]">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Konsultasi Artikel & Lahan Makam:
                </p>
                <p>
                  Ibu <strong>{AGENT_INFO.salesAgent} ({AGENT_INFO.salesCode})</strong> &bull; Memorial Partner Al Azhar Memorial Garden Karawang.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center text-xs">
              <button
                onClick={() => handleShareWa(selectedArticle)}
                className="px-4 py-2 rounded-lg bg-[#25D366] text-white font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Share2 className="w-4 h-4" />
                <span>Sebar Artikel via WhatsApp</span>
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-lg bg-gray-700 text-white font-bold hover:bg-gray-800"
              >
                Tutup Artikel
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
