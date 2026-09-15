import React from 'react';
import { Layout, Presentation, HelpCircle, Sparkles, Star, ScrollText } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Navbar({ activeMode, setActiveMode, onOpenQuiz, repoUrl }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-red-900/40 bg-[#0f0e13]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-red-700 via-red-800 to-red-950 border border-amber-500/50 shadow-md shadow-red-900/50">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400 star-animated" />
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold text-amber-100 tracking-wide font-serif-title block leading-tight">
              TƯ TƯỞNG HỒ CHÍ MINH
            </span>
            <span className="text-[11px] text-amber-400/80 font-medium block">
              Sự Sáng Tạo Về Độc Lập Dân Tộc
            </span>
          </div>
        </div>

        {/* View Switchers */}
        <div className="flex items-center gap-1 sm:gap-2 bg-black/40 p-1 rounded-xl border border-red-900/30">
          <button
            onClick={() => setActiveMode('document')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeMode === 'document'
                ? 'bg-gradient-to-r from-red-800 to-red-900 text-amber-200 border border-amber-500/40 shadow-sm shadow-red-900/50'
                : 'text-stone-400 hover:text-amber-100 hover:bg-white/5'
            }`}
            title="Xem dạng tài liệu phân cấp chi tiết"
          >
            <ScrollText className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Phân Cấp Nội Dung</span>
            <span className="sm:hidden">Nội dung</span>
          </button>

          <button
            onClick={() => setActiveMode('slide')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeMode === 'slide'
                ? 'bg-gradient-to-r from-red-800 to-red-900 text-amber-200 border border-amber-500/40 shadow-sm shadow-red-900/50'
                : 'text-stone-400 hover:text-amber-100 hover:bg-white/5'
            }`}
            title="Xem dạng slide trình chiếu chuyển động"
          >
            <Presentation className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Slide Trình Chiếu</span>
            <span className="sm:hidden">Slide</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-all"
            title="Thử sức kiểm tra kiến thức"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">Trắc Nghiệm</span>
          </button>

          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-900/80 text-stone-300 border border-stone-700/50 hover:text-white hover:bg-stone-800 transition-all"
            title="Xem mã nguồn trên GitHub"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden lg:inline">GitHub Repo</span>
          </a>
        </div>

      </div>
    </header>
  );
}
