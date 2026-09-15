import React, { useState, useEffect, useMemo } from 'react';
import { EXPANDED_SLIDE_CHAPTERS, CHAPTER_THEMES } from '../data/expandedSlides';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, RotateCcw, Play, Pause, 
  Layers, Image as ImageIcon, Star, Quote, Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SlideView({ onOpenImage }) {
  // Flatten all slides into a single indexed list with chapter info
  const allSlides = useMemo(() => {
    const list = [];
    EXPANDED_SLIDE_CHAPTERS.forEach((chap) => {
      chap.slides.forEach((slide) => {
        list.push({
          ...slide,
          chapterId: chap.chapterId,
          chapterTitle: chap.title
        });
      });
    });
    return list;
  }, []);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [revealedBulletCount, setRevealedBulletCount] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showChapterMenu, setShowChapterMenu] = useState(false);

  const currentSlide = allSlides[currentSlideIndex];
  const totalSlides = allSlides.length;

  // Chapter dynamic theme
  const currentTheme = CHAPTER_THEMES[currentSlide.chapterId] || CHAPTER_THEMES[1];

  // Helper to resolve image paths reliably across both Vite dev and production builds
  const resolveImgSrc = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const base = import.meta.env.BASE_URL || './';
    const cleanBase = base.endsWith('/') ? base : base + '/';
    const cleanPath = path.startsWith('./') ? path.slice(2) : path.startsWith('/') ? path.slice(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

  // Reset revealed bullets when changing slides
  useEffect(() => {
    setRevealedBulletCount(1);
  }, [currentSlideIndex]);

  // Handle Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => console.log(err));
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Step-by-step forward action
  const handleStepForward = () => {
    if (currentSlide && revealedBulletCount < currentSlide.bullets.length) {
      setRevealedBulletCount((prev) => prev + 1);
    } else {
      if (currentSlideIndex < totalSlides - 1) {
        setDirection(1);
        setCurrentSlideIndex((prev) => prev + 1);
      }
    }
  };

  // Backward action
  const handleStepBackward = () => {
    if (revealedBulletCount > 1) {
      setRevealedBulletCount((prev) => prev - 1);
    } else {
      if (currentSlideIndex > 0) {
        setDirection(-1);
        setCurrentSlideIndex((prev) => prev - 1);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        handleStepForward();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleStepBackward();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, revealedBulletCount, currentSlide, totalSlides]);

  // Autoplay handler
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        handleStepForward();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, revealedBulletCount, currentSlideIndex]);

  const slideVariants = {
    initial: (dir) => ({
      x: dir > 0 ? 250 : -250,
      opacity: 0,
      scale: 0.96
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: 'easeOut' }
    },
    exit: (dir) => ({
      x: dir < 0 ? 250 : -250,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.25, ease: 'easeIn' }
    })
  };

  return (
    <div className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 transition-all ${isFullscreen ? 'fixed inset-0 z-50 bg-[#090305] p-4 flex flex-col justify-between overflow-y-auto' : ''}`}>
      
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 p-3.5 rounded-2xl glass-panel border border-red-900/40">
        
        {/* Chapter & Slide Index Selector */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setShowChapterMenu(!showChapterMenu)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950 text-amber-300 text-xs font-bold border border-red-700 hover:bg-red-900 transition-all shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentSlide.chapterTitle}</span>
          </button>

          <span className="text-xs text-amber-300 font-bold bg-amber-500/15 px-3 py-1 rounded-xl border border-amber-500/30">
            Slide {currentSlideIndex + 1} / {totalSlides}
          </span>
        </div>

        {/* Action Controls: Autoplay, Fullscreen, Restart */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              autoPlay
                ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/30'
                : 'bg-stone-900 text-stone-300 border border-stone-700 hover:text-white'
            }`}
          >
            {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{autoPlay ? 'Tự Động' : 'Tự Động Phát'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 text-amber-300 hover:bg-red-900 border border-stone-700 text-xs font-bold transition-all shadow-sm"
            title="Phóng to Fullscreen Trình Chiếu như PowerPoint (Phím F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span>{isFullscreen ? 'Thoát Toàn Màn Hình' : 'Toàn Màn Hình'}</span>
          </button>

          <button
            onClick={() => {
              setDirection(-1);
              setCurrentSlideIndex(0);
            }}
            className="p-1.5 rounded-xl bg-stone-900 text-stone-400 hover:text-amber-200 border border-stone-800"
            title="Về slide đầu tiên"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Dropdown Chapter Quick Selection Drawer */}
      <AnimatePresence>
        {showChapterMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-4 rounded-2xl glass-panel border border-amber-500/40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs"
          >
            {EXPANDED_SLIDE_CHAPTERS.map((chap) => (
              <button
                key={chap.chapterId}
                onClick={() => {
                  const targetIdx = allSlides.findIndex((s) => s.chapterId === chap.chapterId);
                  if (targetIdx !== -1) {
                    setDirection(targetIdx > currentSlideIndex ? 1 : -1);
                    setCurrentSlideIndex(targetIdx);
                    setShowChapterMenu(false);
                  }
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  currentSlide.chapterId === chap.chapterId
                    ? 'bg-red-900/80 border-amber-400 text-amber-200 font-bold shadow-md'
                    : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:border-red-700 hover:text-white'
                }`}
              >
                <div className="text-[10px] text-amber-400 font-bold font-serif-title">Chương 0{chap.chapterId}</div>
                <div className="line-clamp-1 font-medium mt-0.5">{chap.title}</div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Slide Presentation Stage - Dynamic Background Tone based on Chapter Theme */}
      <div 
        className={`relative min-h-[560px] rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl overflow-hidden border-2 transition-all duration-700 bg-gradient-to-br ${currentTheme.bgGradient} ${currentTheme.accentBorder}`}
        style={{
          boxShadow: `0 20px 50px -10px ${currentTheme.glowColor}`
        }}
      >
        
        {/* Dynamic Ambient Background Aura & Decorative Star */}
        <div 
          className="absolute -top-10 -right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700" 
          style={{ background: currentTheme.glowColor }}
        />
        <Star className="absolute top-5 right-5 w-14 h-14 text-amber-400/10 pointer-events-none star-animated" />

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`slide-${currentSlideIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            
            {/* Left Content Area (Title, Quote, Step-by-Step Bullets) */}
            <div className="md:col-span-7 space-y-4">
              
              {/* Slide Header & Chapter Badge with dynamic chapter color */}
              <div>
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase tracking-widest inline-block mb-2 shadow-sm ${currentTheme.badgeBg}`}>
                  {currentSlide.chapterTitle}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-amber-100 font-serif-title leading-snug">
                  {currentSlide.subtitle}
                </h2>
              </div>

              {/* Quote Banner */}
              {currentSlide.quote && (
                <div className="p-3.5 rounded-xl bg-black/40 border-l-4 border-amber-400 text-amber-100 text-xs italic font-serif-title shadow-sm">
                  "{currentSlide.quote}"
                </div>
              )}

              {/* Bullet Points with Progressive Step-by-Step Reveal Animation */}
              <div className="space-y-2.5 pt-1">
                {currentSlide.bullets.map((bullet, idx) => {
                  const isVisible = idx < revealedBulletCount;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: isVisible ? 1 : 0.15, x: isVisible ? 0 : -8 }}
                      transition={{ duration: 0.25 }}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
                        isVisible
                          ? 'bg-black/50 border-amber-500/30 text-stone-100 shadow-md backdrop-blur-sm'
                          : 'bg-black/10 border-transparent text-stone-600'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5 ${
                        isVisible ? 'bg-amber-400 text-stone-950 shadow-sm' : 'bg-stone-800 text-stone-600'
                      }`}>
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">
                        {bullet}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* Right Media Area (Real Archival Photography with High Quality Local Image Loading) */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <div
                className="relative group overflow-hidden rounded-2xl border-2 border-amber-500/40 shadow-2xl bg-black/80 cursor-pointer aspect-[4/3]"
                onClick={() => onOpenImage({
                  url: resolveImgSrc(currentSlide.image),
                  title: currentSlide.subtitle,
                  caption: currentSlide.imageCaption,
                  date: "Tư liệu lịch sử thực tế",
                  location: "Việt Nam"
                })}
              >
                <img
                  src={resolveImgSrc(currentSlide.image)}
                  alt={currentSlide.subtitle}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to local default portrait if needed
                    e.target.onerror = null;
                    e.target.src = resolveImgSrc('images/bac_ho_tuyen_ngon.jpg');
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-800 text-amber-300 border border-red-600">
                      Ảnh Thật Lịch Sử
                    </span>
                  </div>
                  <p className="text-xs font-bold text-amber-200">{currentSlide.imageCaption}</p>
                  <span className="text-[10px] text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mt-1 font-medium">
                    <ImageIcon className="w-3 h-3 text-amber-400" />
                    <span>Bấm để xem ảnh lớn</span>
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Bottom Slide Controls Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-6 z-10">
          <button
            onClick={handleStepBackward}
            disabled={currentSlideIndex === 0 && revealedBulletCount === 1}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              currentSlideIndex === 0 && revealedBulletCount === 1
                ? 'opacity-30 cursor-not-allowed text-stone-600 bg-stone-900/50'
                : 'bg-black/60 text-amber-200 border border-amber-500/30 hover:bg-red-950'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Lùi lại</span>
          </button>

          {/* Progress dots for current slide bullets */}
          <div className="flex items-center gap-1.5">
            {currentSlide.bullets.map((_, idx) => (
              <div
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx < revealedBulletCount
                    ? 'w-7 bg-amber-400 shadow-md shadow-amber-400/50'
                    : 'bg-stone-800'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleStepForward}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-amber-200 border border-amber-400/50 hover:from-red-600 hover:to-red-800 shadow-xl shadow-red-950/80 transition-all"
          >
            <span>{revealedBulletCount < currentSlide.bullets.length ? 'Hiện ý tiếp theo' : 'Slide Tiếp theo'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
