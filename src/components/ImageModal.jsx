import React from 'react';
import { X, Calendar, MapPin, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-4xl w-full bg-[#140b0f] border border-red-900/50 rounded-2xl overflow-hidden shadow-2xl shadow-red-950/80"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-amber-300 hover:bg-red-900 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal content */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image viewer */}
            <div className="bg-black flex items-center justify-center p-2 min-h-[300px]">
              <img
                src={image.url}
                alt={image.title}
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Image metadata */}
            <div className="p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-amber-100 font-serif-title leading-snug">
                  {image.title}
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {image.caption}
                </p>

                <div className="pt-3 border-t border-stone-800/80 space-y-2 text-xs text-stone-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Thời gian: <strong>{image.date}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-400" />
                    <span>Địa điểm: <strong>{image.location}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 text-center">
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-stone-900 text-amber-200 text-xs font-bold border border-stone-700 hover:bg-stone-800 transition-all"
                >
                  Đóng Cửa Sổ
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
