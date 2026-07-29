import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import PlotCatalog from './components/PlotCatalog';
import CalculatorModal from './components/CalculatorModal';
import IslamicSyariah from './components/IslamicSyariah';
import FacilitiesAndServices from './components/FacilitiesAndServices';
import RouteGuide from './components/RouteGuide';
import KnowledgeHub from './components/KnowledgeHub';
import Testimonials from './components/Testimonials';
import LeadCaptureForm from './components/LeadCaptureForm';
import CloudflareDevDrawer from './components/CloudflareDevDrawer';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [calcOpen, setCalcOpen] = useState(false);
  const [calcInitialPlot, setCalcInitialPlot] = useState('single');

  const handleOpenCalculator = (plotId = 'single') => {
    setCalcInitialPlot(plotId);
    setCalcOpen(true);
  };

  const handleOpenSurvey = () => {
    const el = document.getElementById('hubungi-kami');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9FAF7] text-[#1A1F1C] font-sans antialiased">
      {/* 1. Header Navigation */}
      <Navbar
        onOpenCalculator={() => handleOpenCalculator('single')}
        onOpenSurvey={handleOpenSurvey}
      />

      {/* 2. Hero Section */}
      <Hero
        onOpenCalculator={() => handleOpenCalculator('single')}
        onOpenSurvey={handleOpenSurvey}
      />

      {/* 3. Executive Summary & 12 Advantages */}
      <ExecutiveSummary />

      {/* 4. Interactive Product Catalog & Plots */}
      <PlotCatalog
        onOpenCalculator={() => handleOpenCalculator('single')}
        onSelectPlotForCalc={(plotId) => handleOpenCalculator(plotId)}
      />

      {/* 5. Islamic Syariah Standard & Fatwa Compliance */}
      <IslamicSyariah />

      {/* 6. Comprehensive Facilities & UPJ 24 Jam */}
      <FacilitiesAndServices />

      {/* 7. Strategic Route Guide & Map Navigation */}
      <RouteGuide />

      {/* 8. News & Knowledge Hub Articles */}
      <KnowledgeHub />

      {/* 9. Testimonials & Endorsements */}
      <Testimonials />

      {/* 10. PwC-Style Lead Capture Form */}
      <LeadCaptureForm />

      {/* Cloudflare Workers Backend Drawer & Setup Spec */}
      <CloudflareDevDrawer />

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Multi-Step Interactive Price & Plot Calculator Modal */}
      <CalculatorModal
        isOpen={calcOpen}
        onClose={() => setCalcOpen(false)}
        initialPlotId={calcInitialPlot}
      />
    </div>
  );
}
