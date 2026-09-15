import React from 'react';
import { Star, Heart } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer({ repoUrl }) {
  return (
    <footer className="w-full bg-[#0a090c] border-t border-red-900/40 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <div className="flex items-center justify-center gap-2">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400 star-animated" />
          <span className="text-sm font-bold text-amber-100 tracking-wider font-serif-title">
            TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐỘC LẬP DÂN TỘC
          </span>
          <Star className="w-5 h-5 text-amber-400 fill-amber-400 star-animated" />
        </div>

        <p className="text-xs text-stone-400 max-w-2xl mx-auto leading-relaxed">
          Trang web chuyên đề nghiên cứu lý luận chính trị - Xây dựng dựa trên nội dung phân tích chuyên sâu về sự vận dụng và phát triển sáng tạo Chủ nghĩa Mác - Lênin của Chủ tịch Hồ Chí Minh.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-2 border-t border-stone-900">
          <span>&copy; {new Date().getFullYear()} Nguồn tài liệu chính thức</span>
          <span>•</span>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400/80 hover:text-amber-300 flex items-center gap-1 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Repository GitHub: tutuonghochiminh</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
