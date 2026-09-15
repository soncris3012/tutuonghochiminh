import React, { useState, useEffect, useMemo } from 'react';
import { EXPANDED_SLIDE_CHAPTERS, CHAPTER_THEMES } from '../data/expandedSlides';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, RotateCcw, Play, Pause, 
  Layers, Star, Sparkles 
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

  // Slide-level page transitions
  const slideVariants = {
    initial: (dir) => ({
      x: dir > 0 ? 250 : -250,
      opacity: 0,
      scale: 0.98
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
      scale: 0.98,
      transition: { duration: 0.25, ease: 'easeIn' }
    })
  };

  // Dynamic animation variant generator for bullets
  const getBulletAnimation = (animType, isVisible) => {
    switch (animType) {
      case 'slide-right':
        return {
          initial: { opacity: 0, x: 30 },
          animate: { opacity: isVisible ? 1 : 0.15, x: isVisible ? 0 : 15 },
          transition: { duration: 0.28 }
        };
      case 'scale-pop':
        return {
          initial: { opacity: 0, scale: 0.88 },
          animate: { opacity: isVisible ? 1 : 0.15, scale: isVisible ? 1 : 0.94 },
          transition: { duration: 0.28 }
        };
      case 'flip-3d':
        return {
          initial: { opacity: 0, rotateX: 25 },
          animate: { opacity: isVisible ? 1 : 0.15, rotateX: isVisible ? 0 : 15 },
          transition: { duration: 0.3 }
        };
      case 'diagonal-in':
        return {
          initial: { opacity: 0, x: -20, y: 20 },
          animate: { opacity: isVisible ? 1 : 0.15, x: isVisible ? 0 : -10, y: isVisible ? 0 : 10 },
          transition: { duration: 0.28 }
        };
      case 'slide-up':
      default:
        return {
          initial: { opacity: 0, y: 25 },
          animate: { opacity: isVisible ? 1 : 0.15, y: isVisible ? 0 : 12 },
          transition: { duration: 0.25 }
        };
    }
  };

  // Render Image Box with 100% natural aspect ratio (object-contain, no cropping)
  // Completely borderless, seamless blending with the slide's ambient background tone
  const renderImageBox = (imgSrc, altText, className = "h-56") => (
    <div
      className={`relative group rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center p-2 transition-all duration-300 bg-black/25 backdrop-blur-md shadow-2xl hover:bg-black/40 ${className}`}
      onClick={() => onOpenImage({
        url: resolveImgSrc(imgSrc),
        title: currentSlide.subtitle,
        caption: altText,
        date: "Tư liệu lịch sử",
        location: "Việt Nam"
      })}
    >
      <img
        src={resolveImgSrc(imgSrc)}
        alt={altText}
        loading="eager"
        className="max-h-full max-w-full object-contain rounded-xl transition-all duration-500 group-hover:scale-[1.03] filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.65)]"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = resolveImgSrc('images/bac_ho_portrait_color.jpg');
        }}
      />
      {/* Soft subtle ambient vignette overlay blending the edges into the slide gradient */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-t from-black/45 via-transparent to-black/15 opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
      
      {/* Discreet zoom badge indicator appearing smoothly on hover */}
      <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-amber-200/90 text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5 shadow-lg pointer-events-none">
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span>Xem tư liệu</span>
      </div>
    </div>
  );

  // Render Bullet Points list with dynamic animation
  const renderBullets = (bullets, startIndex = 0) => (
    <div className="space-y-2.5">
      {bullets.map((bullet, localIdx) => {
        const globalIdx = startIndex + localIdx;
        const isVisible = globalIdx < revealedBulletCount;
        const anim = getBulletAnimation(currentSlide.animType, isVisible);

        return (
          <motion.div
            key={globalIdx}
            initial={anim.initial}
            animate={anim.animate}
            transition={anim.transition}
            className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all ${
              isVisible
                ? 'bg-black/55 border-amber-500/35 text-stone-100 shadow-md backdrop-blur-sm'
                : 'bg-black/10 border-transparent text-stone-600'
            }`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5 ${
              isVisible ? 'bg-amber-400 text-stone-950 shadow-sm' : 'bg-stone-800 text-stone-600'
            }`}>
              {globalIdx + 1}
            </div>
            <p className="text-xs sm:text-sm font-medium leading-relaxed">
              {bullet}
            </p>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div className={`transition-all ${
      isFullscreen 
        ? 'fixed inset-0 z-50 bg-[#070204] p-3 sm:p-6 flex flex-col justify-between w-full h-full overflow-hidden' 
        : 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4'
    }`}>
      
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3 p-3 rounded-2xl glass-panel border border-red-900/40 w-full">
        
        {/* Chapter & Slide Index Selector */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setShowChapterMenu(!showChapterMenu)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-red-950 text-amber-300 text-xs font-bold border border-red-700 hover:bg-red-900 transition-all shadow-sm"
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
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-900 text-amber-300 hover:bg-red-900 border border-stone-700 text-xs font-bold transition-all shadow-sm"
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
            className="mb-3 p-4 rounded-2xl glass-panel border border-amber-500/40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs w-full"
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

      {/* Main Slide Presentation Stage - Dynamic Background & Fullscreen Adaptability */}
      <div 
        className={`relative rounded-3xl p-5 sm:p-9 flex flex-col justify-between shadow-2xl overflow-hidden border-2 transition-all duration-700 bg-gradient-to-br ${currentTheme.bgGradient} ${currentTheme.accentBorder} ${
          isFullscreen ? 'flex-1 h-full w-full' : 'min-h-[580px]'
        }`}
        style={{
          boxShadow: `0 25px 60px -15px ${currentTheme.glowColor}`
        }}
      >
        
        {/* Dynamic Ambient Background Aura & Decorative Star */}
        <div 
          className="absolute -top-16 -right-16 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700" 
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
            className="flex-1 flex flex-col justify-center my-auto"
          >
            
            {/* ============================================================ */}
            {/* LAYOUT 1: LEFT TEXT - RIGHT DUAL IMAGES                      */}
            {/* ============================================================ */}
            {currentSlide.layoutType === 'left-text-right-img' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase tracking-widest inline-block mb-2 shadow-sm ${currentTheme.badgeBg}`}>
                      {currentSlide.chapterTitle}
                    </span>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-amber-100 font-serif-title leading-snug">
                      {currentSlide.subtitle}
                    </h2>
                  </div>
                  {currentSlide.quote && (
                    <div className="p-3.5 rounded-xl bg-black/40 border-l-4 border-amber-400 text-amber-100 text-xs sm:text-sm italic font-serif-title shadow-sm">
                      "{currentSlide.quote}"
                    </div>
                  )}
                  {renderBullets(currentSlide.bullets)}
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {renderImageBox(currentSlide.primaryImage, currentSlide.subtitle, "h-48 sm:h-56")}
                  {renderImageBox(currentSlide.secondaryImage, currentSlide.subtitle, "h-36 sm:h-44")}
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* LAYOUT 2: LEFT DUAL IMAGES - RIGHT TEXT                      */}
            {/* ============================================================ */}
            {currentSlide.layoutType === 'left-img-right-text' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {renderImageBox(currentSlide.primaryImage, currentSlide.subtitle, "h-48 sm:h-56")}
                  {renderImageBox(currentSlide.secondaryImage, currentSlide.subtitle, "h-36 sm:h-44")}
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase tracking-widest inline-block mb-2 shadow-sm ${currentTheme.badgeBg}`}>
                      {currentSlide.chapterTitle}
                    </span>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-amber-100 font-serif-title leading-snug">
                      {currentSlide.subtitle}
                    </h2>
                  </div>
                  {currentSlide.quote && (
                    <div className="p-3.5 rounded-xl bg-black/40 border-l-4 border-amber-400 text-amber-100 text-xs sm:text-sm italic font-serif-title shadow-sm">
                      "{currentSlide.quote}"
                    </div>
                  )}
                  {renderBullets(currentSlide.bullets)}
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* LAYOUT 3: BENTO GRID                                         */}
            {/* ============================================================ */}
            {currentSlide.layoutType === 'bento-grid' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Large Portrait Box on Left */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
                  {renderImageBox(currentSlide.primaryImage, currentSlide.subtitle, "flex-1 min-h-[220px]")}
                  {renderImageBox(currentSlide.secondaryImage, currentSlide.subtitle, "h-36")}
                </div>

                {/* Right Bento Cards */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase tracking-widest inline-block mb-2 shadow-sm ${currentTheme.badgeBg}`}>
                      {currentSlide.chapterTitle}
                    </span>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-amber-100 font-serif-title leading-snug">
                      {currentSlide.subtitle}
                    </h2>
                  </div>

                  {currentSlide.quote && (
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/60 to-black/60 border border-amber-500/40 text-amber-100 text-xs sm:text-sm italic font-serif-title shadow-md">
                      "{currentSlide.quote}"
                    </div>
                  )}

                  {renderBullets(currentSlide.bullets)}
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* LAYOUT 4: TOP BANNER - BOTTOM SPLIT COLUMNS                  */}
            {/* ============================================================ */}
            {currentSlide.layoutType === 'top-banner-bottom-split' && (
              <div className="space-y-4">
                {/* Top Wide Banner */}
                <div className="p-4 rounded-2xl bg-black/45 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-widest inline-block mb-1 ${currentTheme.badgeBg}`}>
                      {currentSlide.chapterTitle}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-amber-100 font-serif-title">
                      {currentSlide.subtitle}
                    </h2>
                  </div>
                  {currentSlide.quote && (
                    <div className="max-w-md text-right text-xs italic text-amber-300 font-serif-title border-l-2 sm:border-l-0 sm:border-r-2 border-amber-400 pr-2 pl-2 sm:pl-0">
                      "{currentSlide.quote}"
                    </div>
                  )}
                </div>

                {/* Bottom 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                  <div className="lg:col-span-7">
                    {renderBullets(currentSlide.bullets)}
                  </div>
                  <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                    {renderImageBox(currentSlide.primaryImage, currentSlide.subtitle, "h-56")}
                    {renderImageBox(currentSlide.secondaryImage, currentSlide.subtitle, "h-56")}
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* LAYOUT 5: SPOTLIGHT CENTER                                   */}
            {/* ============================================================ */}
            {currentSlide.layoutType === 'spotlight-center' && (
              <div className="space-y-4">
                <div className="text-center max-w-2xl mx-auto">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase tracking-widest inline-block mb-1.5 ${currentTheme.badgeBg}`}>
                    {currentSlide.chapterTitle}
                  </span>
                  <h2 className="text-xl sm:text-3xl font-extrabold text-amber-100 font-serif-title leading-snug">
                    {currentSlide.subtitle}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                  {/* Left 2 bullets */}
                  <div className="lg:col-span-4">
                    {renderBullets(currentSlide.bullets.slice(0, 2), 0)}
                  </div>

                  {/* Center Prominent Photo */}
                  <div className="lg:col-span-4">
                    {renderImageBox(currentSlide.primaryImage, currentSlide.subtitle, "h-64 sm:h-72")}
                  </div>

                  {/* Right remaining bullets */}
                  <div className="lg:col-span-4">
                    {renderBullets(currentSlide.bullets.slice(2), 2)}
                  </div>
                </div>

                {currentSlide.quote && (
                  <div className="text-center p-2.5 rounded-xl bg-black/35 border border-amber-500/20 text-xs italic text-amber-200 font-serif-title max-w-2xl mx-auto">
                    "{currentSlide.quote}"
                  </div>
                )}
              </div>
            )}

            {/* ============================================================ */}
            {/* LAYOUT 6: GRID CARDS DUAL                                    */}
            {/* ============================================================ */}
            {currentSlide.layoutType === 'grid-cards-dual' && (
              <div className="space-y-4">
                {/* Header & 2 Photos Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  <div className="lg:col-span-6 space-y-2">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase tracking-widest inline-block mb-1 ${currentTheme.badgeBg}`}>
                      {currentSlide.chapterTitle}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-amber-100 font-serif-title leading-snug">
                      {currentSlide.subtitle}
                    </h2>
                    {currentSlide.quote && (
                      <p className="text-xs italic text-amber-300 font-serif-title pl-2 border-l-2 border-amber-400">
                        "{currentSlide.quote}"
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                    {renderImageBox(currentSlide.primaryImage, currentSlide.subtitle, "h-40")}
                    {renderImageBox(currentSlide.secondaryImage, currentSlide.subtitle, "h-40")}
                  </div>
                </div>

                {/* 4 Cards Grid Bottom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {currentSlide.bullets.map((bullet, idx) => {
                    const isVisible = idx < revealedBulletCount;
                    const anim = getBulletAnimation(currentSlide.animType, isVisible);

                    return (
                      <motion.div
                        key={idx}
                        initial={anim.initial}
                        animate={anim.animate}
                        transition={anim.transition}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all ${
                          isVisible
                            ? 'bg-black/55 border-amber-500/35 text-stone-100 shadow-md backdrop-blur-sm'
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
            )}

          </motion.div>
        </AnimatePresence>

        {/* Bottom Slide Controls Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-5 z-10 w-full">
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
