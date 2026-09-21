import React, { useState } from 'react';
import ThreeCanvasBG from './components/ThreeCanvasBG';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SubjectsShowcase from './components/SubjectsShowcase';
import CurriculumTimeline from './components/CurriculumTimeline';
import PracticeLab3D from './components/PracticeLab3D';
import ScoreBoosterCalc from './components/ScoreBoosterCalc';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import MotivationalQuotes from './components/MotivationalQuotes';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('demo'); // 'demo' or 'enroll'

  const handleOpenModal = (mode = 'demo') => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#FFFFFF', color: '#0F172A' }}>
      {/* 3D Animated Background (Three.js with Math/Science/Commerce floating geometry) */}
      <ThreeCanvasBG />

      {/* Main UI Overlay Container */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onOpenModal={handleOpenModal} />
        
        <main>
          <HeroSection onOpenModal={handleOpenModal} />
          <SubjectsShowcase onOpenModal={handleOpenModal} />
          <CurriculumTimeline onOpenModal={handleOpenModal} />
          <PracticeLab3D onOpenModal={handleOpenModal} />
          <ScoreBoosterCalc onOpenModal={handleOpenModal} />
          <PricingSection onOpenModal={handleOpenModal} />
          <TestimonialsSection />
          <FAQSection onOpenModal={handleOpenModal} />
          <MotivationalQuotes />
        </main>

        <Footer onOpenModal={handleOpenModal} />
        <FloatingWhatsApp onOpenModal={handleOpenModal} />
        <MobileStickyBar onOpenModal={handleOpenModal} />

        <RegistrationModal 
          isOpen={modalOpen}
          mode={modalMode}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
}
