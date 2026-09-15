import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DocumentView from './components/DocumentView';
import SlideView from './components/SlideView';
import LectureExtras from './components/LectureExtras';
import ImageModal from './components/ImageModal';
import QuizModal from './components/QuizModal';
import Footer from './components/Footer';

export default function App() {
  const [activeMode, setActiveMode] = useState('document'); // 'document' | 'slide'
  const [selectedImage, setSelectedImage] = useState(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const REPO_URL = "https://github.com/soncris3012/tutuonghochiminh";

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
