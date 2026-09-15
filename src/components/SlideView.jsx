import React, { useState, useEffect } from 'react';
import { CREATIVE_POINTS, OVERVIEW_DATA, HISTORICAL_IMAGES } from '../data/content';
import { ChevronLeft, ChevronRight, Maximize2, Quote, Sparkles, Star, Play, Pause, RotateCcw, Volume2, VolumeX, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SlideView({ onOpenImage }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  // Total slides: 0 (Cover), 1 (Intro/Context), 2..7 (6 Creative Points), 8 (Summary/Conclusion)
  const totalSlides = 9;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, totalSlides]);

  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: 'easeIn' }
    })
  };

  const [direction, setDirection] = useState(0);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Slide Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 p-4 rounded-2xl glass-panel border border-red-900/40">
        
        {/* Slide Counter & Title */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-lg bg-red-900/60 text-amber-300 text-xs font-bold border border-red-700">
            Slide {currentSlide + 1} / {totalSlides}
          </div>
          <span className="text-xs text-stone-300 font-medium hidden sm:inline">
            Sử dụng phím mũi tên <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-600 text-amber-400">←</kbd> <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-600 text-amber-400">→</kbd> trên bàn phím
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              autoPlay
                ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/30'
                : 'bg-stone-900 text-stone-300 border border-stone-700 hover:text-white'
            }`}
          >
            {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{autoPlay ? 'Đang Tự Động' : 'Tự Động Phát'}</span>
          </button>

          <button
            onClick={() => goToSlide(0)}
            className="p-1.5 rounded-lg bg-stone-900 text-stone-400 hover:text-amber-200 border border-stone-800"
            title="Về slide đầu tiên"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Main Slide Deck Stage */}
      <div className="relative min-h-[520px] rounded-3xl glass-panel border-2 border-red-900/50 p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl shadow-red-950/70">
        
        {/* Background Decorative Gold Star */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-700/5 rounded-full blur-3xl pointer-events-none" />
        <Star className="absolute top-6 right-6 w-16 h-16 text-red-900/20 pointer-events-none" />

        <AnimatePresence custom={direction} mode="wait">
          
          {/* SLIDE 0: COVER SLIDE */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col justify-center items-center text-center space-y-6 my-auto"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-700 via-red-800 to-red-950 border-2 border-amber-400 flex items-center justify-center shadow-xl shadow-red-900/80">
                <Star className="w-12 h-12 text-amber-400 fill-amber-400 star-animated" />
              </div>

              <div className="max-w-3xl">
                <span className="px-3 py-1 rounded-full bg-red-950 text-amber-400 text-xs font-bold border border-red-700 uppercase tracking-widest block w-fit mx-auto mb-3">
                  BÁO CÁO CHUYÊN ĐỀ LÝ LUẬN
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-100 font-serif-title leading-tight mb-4">
                  LÀM RÕ SỰ SÁNG TẠO TRONG TƯ TƯỞNG HỒ CHÍ MINH VỀ <span className="gold-gradient-text">ĐỘC LẬP DÂN TỘC</span>
                </h1>
                <p className="text-sm sm:text-base text-amber-200/80 leading-relaxed font-medium">
                  Vận dụng & phát triển sáng tạo Chủ nghĩa Mác - Lênin vào hoàn cảnh Việt Nam
                </p>
              </div>

              <button
                onClick={nextSlide}
                className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-900 text-amber-200 font-bold text-sm border border-amber-500/50 shadow-lg shadow-red-900/60 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Bắt Đầu Trình Chiếu</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* SLIDE 1: INTRODUCTION & CONTEXT */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold border border-amber-500/30">
                  Bối Cảnh Lịch Sử & Tính Cấp Thiết
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 font-serif-title">
                  Bước Ngoặt Tìm Đường Cứu Nước
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Tư tưởng Hồ Chí Minh về độc lập dân tộc không phải là sự tiếp thu máy móc hay sao chép giáo điều, mà là kết quả của quá trình tư duy độc lập, tự chủ, bám sát thực tiễn cách mạng Việt Nam.
                </p>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-stone-900/80 border-l-4 border-amber-500 text-xs text-amber-100">
                    <strong>Thất bại tiền bối:</strong> Các phong trào Cần Vương, Việt Nam Quốc dân Đảng đều bế tắc về đường lối.
                  </div>
                  <div className="p-3 rounded-lg bg-stone-900/80 border-l-4 border-red-600 text-xs text-amber-100">
                    <strong>Đóng góp lịch sử:</strong> Đã tìm thấy con đường cách mạng vô sản và vận dụng sáng tạo vào thuộc địa.
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl border border-amber-500/30 shadow-xl cursor-pointer" onClick={() => onOpenImage(HISTORICAL_IMAGES.bacHoTuyenNgon)}>
                <img
                  src={HISTORICAL_IMAGES.bacHoTuyenNgon.url}
                  alt={HISTORICAL_IMAGES.bacHoTuyenNgon.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-xs font-bold text-amber-200">{HISTORICAL_IMAGES.bacHoTuyenNgon.title}</p>
                  <p className="text-[11px] text-stone-300">{HISTORICAL_IMAGES.bacHoTuyenNgon.date}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDES 2 TO 7: THE 6 CREATIVE POINTS */}
          {currentSlide >= 2 && currentSlide <= 7 && (() => {
            const pointIndex = currentSlide - 2;
            const point = CREATIVE_POINTS[pointIndex];

            return (
              <motion.div
                key={`slide-${currentSlide}`}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-700 to-red-950 border border-amber-400 flex items-center justify-center text-amber-300 font-bold text-sm">
                      0{point.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      {point.badge}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-amber-100 font-serif-title leading-snug">
                    {point.title}
                  </h2>

                  {/* Quote highlight */}
                  <div className="p-3.5 rounded-xl bg-amber-950/40 border-l-4 border-amber-400 text-amber-100 text-xs italic font-serif-title">
                    "{point.quote}"
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {point.summary}
                  </p>

                  <div className="p-3 rounded-lg bg-stone-950/80 border border-red-900/40 text-xs space-y-1">
                    <span className="text-amber-400 font-bold block">Sự sáng tạo đột phá:</span>
                    <span className="text-stone-300">{point.historicalComparison.hoChiMinh}</span>
                  </div>
                </div>

                {/* Historical Photo display */}
                {point.image && (
                  <div className="relative group overflow-hidden rounded-2xl border border-red-800/40 shadow-xl cursor-pointer" onClick={() => onOpenImage(point.image)}>
                    <img
                      src={point.image.url}
                      alt={point.image.title}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-900 text-amber-300">Ảnh Tư Liệu Thật</span>
                        <span className="text-[11px] text-stone-300">{point.image.date}</span>
                      </div>
                      <p className="text-xs font-bold text-amber-200">{point.image.title}</p>
                      <p className="text-[11px] text-stone-300 line-clamp-2">{point.image.caption}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })()}

          {/* SLIDE 8: SUMMARY & CONCLUSION */}
          {currentSlide === 8 && (
            <motion.div
              key="slide-8"
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col justify-center space-y-6 my-auto text-center max-w-4xl mx-auto"
            >
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold border border-amber-500/30 w-fit mx-auto">
                TỔNG KẾT VÀ GIÁ TRỊ LỊCH SỬ
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-serif-title">
                Di Sản Tư Tưởng Trường Tồn Của Dân Tộc Việt Nam
              </h2>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl mx-auto">
                Sự sáng tạo giá trị Tư tưởng Hồ Chí Minh về độc lập dân tộc đã bổ sung vào kho tàng lý luận Mác - Lênin một hệ thống các luận điểm mới xuất sắc, mở ra con đường độc lập tự do cho Việt Nam và truyền cảm hứng mạnh mẽ cho phong trào giải phóng dân tộc trên toàn thế giới.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-stone-900/80 border border-amber-500/30">
                  <span className="text-xs font-bold text-amber-300 block mb-1">1. Độc lập Tự chủ</span>
                  <p className="text-[11px] text-stone-400">Không bao giờ giáo điều, luôn bám sát thực tiễn cách mạng đất nước.</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-900/80 border border-amber-500/30">
                  <span className="text-xs font-bold text-amber-300 block mb-1">2. Vì Hạnh Phúc Nhân Dân</span>
                  <p className="text-[11px] text-stone-400">Gắn chặt độc lập quốc gia với ấm no, tự do của từng người dân.</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-900/80 border border-amber-500/30">
                  <span className="text-xs font-bold text-amber-300 block mb-1">3. Tầm Vóc Thời Đại</span>
                  <p className="text-[11px] text-stone-400">Nguồn cảm hứng vô tận cho các dân tộc bị áp bức đứng lên tự giải phóng.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => goToSlide(0)}
                  className="px-5 py-2.5 rounded-xl bg-red-900 text-amber-200 text-xs font-bold border border-amber-500/40 hover:bg-red-800 transition-all inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Xem Lại Từ Đầu</span>
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Slide Controls Navigation Bottom Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-red-900/30 mt-6 z-10">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              currentSlide === 0
                ? 'opacity-40 cursor-not-allowed text-stone-600 bg-stone-900'
                : 'bg-stone-900 text-amber-200 border border-stone-700 hover:bg-red-900 hover:border-amber-400'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Slide Trước</span>
          </button>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-7 bg-amber-400 shadow-md shadow-amber-400/50'
                    : 'bg-stone-800 hover:bg-red-800'
                }`}
                title={`Chuyển tới Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              currentSlide === totalSlides - 1
                ? 'opacity-40 cursor-not-allowed text-stone-600 bg-stone-900'
                : 'bg-gradient-to-r from-red-800 to-red-900 text-amber-200 border border-amber-500/50 hover:from-red-700 hover:to-red-800 shadow-md shadow-red-900/50'
            }`}
          >
            <span>Slide Tiếp</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
