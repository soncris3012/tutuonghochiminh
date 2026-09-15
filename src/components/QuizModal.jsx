import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/content';
import { X, CheckCircle2, XCircle, Award, RotateCcw, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuizModal({ isOpen, onClose }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setIsFinished(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-2xl w-full glass-panel border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-950/90"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-amber-300 hover:bg-red-900 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {!isFinished ? (
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-red-900/40 pb-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold text-amber-100 uppercase tracking-wider">
                    Kiểm Tra Kiến Thức Chuyên Đề
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  Câu {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Question */}
              <h3 className="text-base sm:text-lg font-bold text-amber-100 font-serif-title leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  let btnStyle = "bg-stone-900/80 border-stone-700/80 text-stone-200 hover:border-amber-500/50 hover:bg-stone-800";
                  
                  if (isAnswered) {
                    if (idx === currentQ.correctAnswer) {
                      btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-red-950/80 border-red-500 text-red-200";
                    } else {
                      btnStyle = "bg-stone-950/40 border-stone-800 text-stone-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-xl text-xs sm:text-sm text-left border transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                    >
                      <span className="flex-1">{option}</span>
                      {isAnswered && idx === currentQ.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQ.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 pt-2"
                >
                  <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-100 leading-relaxed">
                    <strong className="text-amber-400">Giải thích: </strong>
                    {currentQ.explanation}
                  </div>

                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-900 text-amber-200 font-bold text-xs uppercase tracking-wider border border-amber-500/40 hover:from-red-600 hover:to-red-800 shadow-md shadow-red-900/60 transition-all"
                  >
                    {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả'}
                  </button>
                </motion.div>
              )}

            </div>
          ) : (
            /* Quiz Completion Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-400">
                <Award className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-100 font-serif-title mb-2">
                  Hoàn Thành Bài Trắc Nghiệm!
                </h3>
                <p className="text-sm text-stone-300">
                  Bạn đã đạt <strong className="text-amber-400 text-lg">{score} / {QUIZ_QUESTIONS.length}</strong> điểm.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/40 text-xs text-amber-200">
                {score === QUIZ_QUESTIONS.length
                  ? "Xuất sắc! Bạn đã nắm vững toàn bộ sự sáng tạo trong Tư tưởng Hồ Chí Minh về Độc lập Dân tộc."
                  : "Rất tốt! Hãy xem lại tài liệu phân cấp để củng cố thêm kiến thức."}
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={resetQuiz}
                  className="px-5 py-2.5 rounded-xl bg-stone-900 text-amber-200 text-xs font-bold border border-stone-700 hover:bg-stone-800 flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Làm Lại Quiz</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-red-900 text-amber-200 text-xs font-bold border border-amber-500/40 hover:bg-red-800"
                >
                  Đóng
                </button>
              </div>
            </div>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
