import React, { useState } from 'react';
import { CLASSIC_WORKS, CASE_STUDIES, FLASHCARDS } from '../data/content';
import { BookMarked, MessageSquare, RotateCw, Lightbulb, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LectureExtras() {
  const [activeTab, setActiveTab] = useState('works'); // 'works' | 'cases' | 'flashcards'
  const [flippedCards, setFlippedCards] = useState({});
  const [openCaseId, setOpenCaseId] = useState(1);

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-red-900/30">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold border border-amber-500/30 uppercase tracking-wider mb-2">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>Góc Giảng Dạy & Tương Tác Sinh Viên</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-100 font-serif-title">
          Tư Liệu Bài Giảng & Case Studies Thảo Luận
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-2">
          Hệ thống tác phẩm kinh điển, câu hỏi thảo luận hội thảo và thẻ ghi nhớ kiến thức lý luận.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex justify-center gap-2 mb-8 bg-black/40 p-1.5 rounded-2xl w-fit mx-auto border border-stone-800">
        <button
          onClick={() => setActiveTab('works')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'works'
              ? 'bg-gradient-to-r from-red-800 to-red-900 text-amber-200 shadow-md shadow-red-900/50 border border-amber-500/40'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <BookMarked className="w-4 h-4 text-amber-400" />
          <span>6 Tác Phẩm Kinh Điển</span>
        </button>

        <button
          onClick={() => setActiveTab('cases')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'cases'
              ? 'bg-gradient-to-r from-red-800 to-red-900 text-amber-200 shadow-md shadow-red-900/50 border border-amber-500/40'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <MessageSquare className="w-4 h-4 text-amber-400" />
          <span>Case Studies Thảo Luận</span>
        </button>

        <button
          onClick={() => setActiveTab('flashcards')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'flashcards'
              ? 'bg-gradient-to-r from-red-800 to-red-900 text-amber-200 shadow-md shadow-red-900/50 border border-amber-500/40'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span>Thẻ Ghi Nhớ (Flashcards)</span>
        </button>
      </div>

      {/* Tab Content 1: Classic Works Timeline */}
      {activeTab === 'works' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {CLASSIC_WORKS.map((work, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-red-900/30 hover:border-amber-500/40 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-extrabold text-amber-400 font-serif-title">
                  {work.year}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-950 text-red-300 border border-red-800">
                  Tác Phẩm Kinh Điển
                </span>
              </div>
              <h3 className="text-base font-bold text-amber-100 font-serif-title group-hover:text-amber-300 transition-colors">
                {work.title}
              </h3>
              <p className="text-xs text-amber-300 font-medium">
                {work.importance}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed pt-2 border-t border-stone-800/80">
                {work.summary}
              </p>
            </div>
          ))}
        </motion.div>
      )}

      {/* Tab Content 2: Case Studies Seminar Discussion */}
      {activeTab === 'cases' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          {CASE_STUDIES.map((c) => {
            const isOpen = openCaseId === c.id;

            return (
              <div
                key={c.id}
                className="p-5 rounded-2xl glass-panel border border-amber-500/30 space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-red-900 text-amber-300 font-bold text-xs flex items-center justify-center border border-amber-500/30">
                      0{c.id}
                    </span>
                    <h3 className="text-base font-bold text-amber-100 font-serif-title">
                      {c.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setOpenCaseId(isOpen ? null : c.id)}
                    className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20"
                  >
                    {isOpen ? 'Thu gọn' : 'Gợi ý phân tích'}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 font-medium italic pl-11">
                  "{c.question}"
                </p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-11 pt-3 border-t border-red-900/30"
                    >
                      <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-100 leading-relaxed">
                        <strong className="text-amber-300 block mb-1">Gợi ý trả lời cho thảo luận:</strong>
                        {c.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      )}

      {/* Tab Content 3: Flashcards interactive card flip */}
      {activeTab === 'flashcards' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {FLASHCARDS.map((card, idx) => {
            const isFlipped = flippedCards[idx];

            return (
              <div
                key={idx}
                onClick={() => toggleFlip(idx)}
                className="cursor-pointer min-h-[160px] p-6 rounded-2xl glass-panel border border-amber-500/40 flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
                  <span>{isFlipped ? 'Đáp án / Đút kết' : 'Câu hỏi ghi nhớ'}</span>
                  <RotateCw className="w-4 h-4 text-stone-400" />
                </div>

                <div className="flex-1 flex items-center justify-center text-center my-2">
                  <p className={`text-sm font-semibold font-serif-title ${isFlipped ? 'text-emerald-300' : 'text-amber-100'}`}>
                    {isFlipped ? card.back : card.front}
                  </p>
                </div>

                <div className="text-[10px] text-stone-400 text-center uppercase tracking-wider">
                  {isFlipped ? 'Bấm để xem lại câu hỏi' : 'Bấm vào thẻ để lật đáp án'}
                </div>
              </div>
            );
          })}
        </motion.div>
      )}

    </section>
  );
}
