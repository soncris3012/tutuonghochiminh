import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DocumentView from './components/DocumentView';
import SlideView from './components/SlideView';
import LectureExtras from './components/LectureExtras';
import ImageModal from './components/ImageModal';
import QuizModal from './components/QuizModal';
import Footer from './components/Footer';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeMode, setActiveMode] = useState('document'); // 'document' | 'slide'
  const [selectedImage, setSelectedImage] = useState(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const REPO_URL = "https://github.com/soncris3012/tutuonghochiminh";

  // Trigger Revolutionary Red & Gold Flag Confetti Fireworks on Site Load
  useEffect(() => {
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      
      // Fire Red & Gold Flag Confetti from left and right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#DA251D', '#C8102E', '#FFCD00', '#F59E0B']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#DA251D', '#C8102E', '#FFCD00', '#F59E0B']
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0e13] text-amber-50 selection:bg-red-700 selection:text-amber-200">
      
      {/* Navigation Header */}
      <Navbar
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        onOpenQuiz={() => setIsQuizOpen(true)}
        repoUrl={REPO_URL}
      />

      {/* Hero Banner with Quotes and Timeline */}
      <HeroSection
        onStartSlide={() => setActiveMode('slide')}
        onSelectPoint={() => setActiveMode('document')}
      />

      {/* Main View Area */}
      <main className="flex-1 space-y-10">
        {activeMode === 'document' ? (
          <>
            <DocumentView onOpenImage={(img) => setSelectedImage(img)} />
            <LectureExtras />
          </>
        ) : (
          <SlideView onOpenImage={(img) => setSelectedImage(img)} />
        )}
      </main>

      {/* Footer */}
      <Footer repoUrl={REPO_URL} />

      {/* Modals */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

    </div>
  );
}
