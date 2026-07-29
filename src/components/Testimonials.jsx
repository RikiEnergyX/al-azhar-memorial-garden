import React from 'react';
import { TESTIMONIALS } from '../data/contentData';
import { Quote, Star, CheckCircle, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F9FAF7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Testimoni Tokoh & Pemilik Kavling</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl font-extrabold text-[#0D2A4A] tracking-tight">
            Kepercayaan Tokoh Publik & Ribuan Keluarga{' '}
            <span className="text-gold-gradient block sm:inline">
              Al Azhar Memorial Garden
            </span>
          </h2>

          <p className="text-gray-600 font-normal text-base leading-relaxed">
            Pengalaman nyata keluarga yang merasakan ketenangan jiwa dan kenyamanan ziarah di taman pemakaman Muslim terbaik Indonesia.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-[#0F4C3A]/30 transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed font-serif italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-header text-base font-bold text-[#0D2A4A]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">{item.role}</p>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-[#0F4C3A] text-[10px] font-bold border border-emerald-200 shrink-0 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
