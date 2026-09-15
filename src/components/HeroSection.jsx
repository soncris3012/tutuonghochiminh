import React, { useState, useEffect } from 'react';
import { KEY_QUOTES, OVERVIEW_DATA } from '../data/content';
import { Star, Quote, Award, Sparkles, BookOpen, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection({ onStartSlide, onSelectPoint }) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % KEY_QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentQuote = KEY_QUOTES[currentQuoteIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#18090d] via-[#12080a] to-[#0f0e13] border-b border-red-900/30 pt-8 pb-12">
      
      {/* Revolutionary Red Atmosphere & Ambient Star Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-red-700/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Title */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 star-animated" />
            <span>Chuyên Đề Lý Luận Lịch Sử Lớn</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 star-animated" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-amber-100 font-serif-title leading-tight tracking-tight mb-4">
            LÀM RÕ SỰ SÁNG TẠO TRONG TƯ TƯỞNG HỒ CHÍ MINH VỀ <span className="gold-gradient-text">ĐỘC LẬP DÂN TỘC</span>
          </h1>

          <p className="text-base sm:text-lg text-amber-200/80 leading-relaxed font-normal max-w-3xl mx-auto">
            {OVERVIEW_DATA.subtitle}
          </p>
        </div>

        {/* Rotating Historical Quotes Banner */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative p-6 sm:p-8 rounded-2xl glass-panel border border-amber-500/30 shadow-xl overflow-hidden">
            <Quote className="absolute top-3 left-3 w-12 h-12 text-red-600/20 -rotate-12 pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg sm:text-xl font-semibold text-amber-100 italic mb-3 font-serif-title leading-snug">
                  "{currentQuote.quote}"
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-medium">
                  <span className="w-6 h-[1px] bg-amber-500/50" />
                  <span>{currentQuote.author}</span>
                  <span className="w-6 h-[1px] bg-amber-500/50" />
                </div>
                <p className="text-[11px] text-stone-400 mt-1">{currentQuote.context}</p>
              </motion.div>
            </AnimatePresence>
            
            {/* Quote indicator dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {KEY_QUOTES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuoteIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentQuoteIndex ? 'w-6 bg-amber-400' : 'bg-red-900/50 hover:bg-red-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Historical Timeline Milestones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {OVERVIEW_DATA.historicalContext.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-stone-900/60 border border-red-900/30 hover:border-amber-500/40 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-amber-400 font-serif-title">{item.year}</span>
                <Clock className="w-4 h-4 text-red-500/70" />
              </div>
              <h3 className="text-xs font-bold text-stone-200 mb-1 leading-snug">{item.event}</h3>
              <p className="text-[11px] text-stone-400 leading-normal">{item.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
