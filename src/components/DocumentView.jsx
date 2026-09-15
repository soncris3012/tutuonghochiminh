import React, { useState } from 'react';
import { CREATIVE_POINTS } from '../data/content';
import { ChevronDown, ChevronUp, Quote, CheckCircle2, Award, ExternalLink, Image as ImageIcon, Sparkles, BookOpen, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DocumentView({ onOpenImage }) {
  const [expandedId, setExpandedId] = useState(1); // Default first point expanded
  const [filterMode, setFilterMode] = useState('all');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-red-900/30">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Phân Cấp Nội Dung Chi Tiết</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 font-serif-title">
            6 Luận Điểm Sáng Tạo Đỉnh Cao Về Độc Lập Dân Tộc
          </h2>
        </div>

        {/* Quick jump menu */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-stone-400">Chọn mục:</span>
          {CREATIVE_POINTS.map((point) => (
            <button
              key={point.id}
              onClick={() => {
                setExpandedId(point.id);
                const el = document.getElementById(`point-${point.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                expandedId === point.id
                  ? 'bg-amber-500 text-stone-950 font-black shadow-md shadow-amber-500/30'
                  : 'bg-stone-900 text-stone-300 border border-red-900/40 hover:bg-red-900/40 hover:text-amber-200'
              }`}
            >
              {point.id}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions List of 6 Points */}
      <div className="space-y-6">
        {CREATIVE_POINTS.map((point) => {
          const isExpanded = expandedId === point.id;

          return (
            <div
              key={point.id}
              id={`point-${point.id}`}
              className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                isExpanded
                  ? 'glass-panel border-amber-500/50 shadow-2xl shadow-red-950/50'
                  : 'bg-stone-900/40 border-red-900/30 hover:border-red-700/50 hover:bg-stone-900/60'
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleExpand(point.id)}
                className="w-full p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-800 to-red-950 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold text-lg font-serif-title shadow-md">
                    {point.id}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        {point.badge}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-amber-100 font-serif-title leading-snug">
                      {point.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-stone-400 hidden sm:inline">
                    {isExpanded ? 'Thu gọn' : 'Chi tiết'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-stone-800/80 flex items-center justify-center text-amber-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </button>

              {/* Accordion Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-red-900/30 p-6 pt-4 space-y-6"
                  >
                    {/* Summary Callout */}
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/30 text-amber-100/90 text-sm leading-relaxed">
                      <strong className="text-amber-300">Tóm tắt luận điểm: </strong>
                      {point.summary}
                    </div>

                    {/* Historical Quote Box */}
                    <div className="relative p-5 rounded-xl bg-gradient-to-r from-amber-950/40 via-red-950/30 to-stone-900/40 border-l-4 border-amber-400 text-amber-50 shadow-md">
                      <Quote className="absolute top-2 right-3 w-8 h-8 text-amber-500/15" />
                      <p className="text-base sm:text-lg font-serif-title font-semibold italic mb-2 leading-relaxed">
                        "{point.quote}"
                      </p>
                      <p className="text-xs text-amber-400 font-medium">
                        — {point.quoteSource}
                      </p>
                    </div>

                    {/* Real Historical Photo Section */}
                    {point.image && (() => {
                      const resolveImgSrc = (path) => {
                        if (!path) return '';
                        if (path.startsWith('http')) return path;
                        const base = import.meta.env.BASE_URL || './';
                        const cleanBase = base.endsWith('/') ? base : base + '/';
                        const cleanPath = path.startsWith('./') ? path.slice(2) : path.startsWith('/') ? path.slice(1) : path;
                        return `${cleanBase}${cleanPath}`;
                      };
                      const imgSrc = resolveImgSrc(point.image.url);

                      return (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-black/25 backdrop-blur-md p-4 rounded-2xl shadow-xl">
                          <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-black/30 flex items-center justify-center p-2 aspect-[4/3] shadow-lg" onClick={() => onOpenImage({ ...point.image, url: imgSrc })}>
                            <img
                              src={imgSrc}
                              alt={point.image.title}
                              loading="eager"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = resolveImgSrc('images/bac_ho_tuyen_ngon.jpg');
                              }}
                              className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105 filter drop-shadow-md"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2.5 text-amber-200 text-xs font-semibold gap-1.5">
                              <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                              <span>Xem Ảnh Lớn</span>
                            </div>
                          </div>

                          <div className="md:col-span-2 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-amber-400 font-medium">{point.image.date}</span>
                            </div>
                            <h4 className="text-sm font-bold text-amber-200">{point.image.title}</h4>
                            <p className="text-xs text-stone-300 leading-relaxed">{point.image.caption}</p>
                            <p className="text-[11px] text-stone-400 italic">Địa điểm: {point.image.location}</p>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Comparative Analysis: Western vs Ho Chi Minh */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-stone-950/60 border border-red-900/30">
                        <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <span>Quan điểm Phương Tây / Giáo điều cũ</span>
                        </h4>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          {point.historicalComparison.western}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                        <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Sự Sáng Tạo Của Hồ Chí Minh</span>
                        </h4>
                        <p className="text-xs text-amber-100/90 leading-relaxed">
                          {point.historicalComparison.hoChiMinh}
                        </p>
                      </div>
                    </div>

                    {/* Detailed Analysis Paragraphs */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-amber-200 font-serif-title flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-amber-400" />
                        <span>Phân Tích Chi Tiết Nội Dung</span>
                      </h4>
                      {point.detailedAnalysis.map((para, idx) => (
                        <p key={idx} className="text-xs sm:text-sm text-stone-300 leading-relaxed pl-3 border-l-2 border-red-800/40">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Key Takeaway Banner */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-red-900/50 to-amber-950/40 border border-amber-500/40 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                          Giá Trị Cốt Lõi
                        </span>
                        <p className="text-xs sm:text-sm text-amber-100 font-medium">
                          {point.keyTakeaway}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </div>
  );
}
