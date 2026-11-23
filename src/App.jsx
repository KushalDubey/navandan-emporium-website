import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';
import { AmbientCanvas } from './components/ui/AmbientCanvas';

// Dedicated Page Views
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioPage } from './pages/PortfolioPage';

// Service Pillar Specialized Pages
import { ServicesHubPage } from './pages/services/ServicesHubPage';
import { BrandingCreativePage } from './pages/services/BrandingCreativePage';
import { DigitalMarketingPage } from './pages/services/DigitalMarketingPage';
import { WebAppDevPage } from './pages/services/WebAppDevPage';
import { BusinessAutomationPage } from './pages/services/BusinessAutomationPage';

import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from './components/ui/Button';

// Automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Structured view for About Us
const AboutPage = () => (
  <div className="pt-32 pb-24 bg-[#090B12] min-h-screen text-[#F5F7FC]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3898FF]/15 text-[#3898FF] font-mono text-xs border border-[#3898FF]/30 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          AGENCY PHILOSOPHY & LEADERSHIP
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F5F7FC] tracking-tight">
          About Navandan Emporium
        </h1>
        <p className="text-base sm:text-xl text-[#A8B1C2] max-w-2xl mx-auto leading-relaxed">
          A premium full-service Digital Marketing, Branding, and IT Solutions agency architecting digital dominance for visionary enterprises.
        </p>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-[#141B2B] border border-white/[0.12] space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">
          The Unified Agency Imperative
        </h2>
        <p className="text-[#A8B1C2] leading-relaxed text-sm sm:text-base">
          Navandan Emporium was created to bridge a glaring market divide. Traditional consultancies build powerful backend software with lackluster, generic branding. Creative design boutiques craft striking visuals with zero architectural scalability. We integrate brand strategy, performance marketing, and software engineering into a single disciplined partnership.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2">
            <span className="text-xs font-mono text-[#3898FF] font-bold">DISCIPLINE 01</span>
            <div className="text-base font-bold text-white">Full-Lifecycle Execution</div>
            <p className="text-xs text-[#A8B1C2]">From strategic brand identity to scalable websites and custom software applications.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2">
            <span className="text-xs font-mono text-[#8B5CF6] font-bold">DISCIPLINE 02</span>
            <div className="text-base font-bold text-white">Zero Vendor Blame</div>
            <p className="text-xs text-[#A8B1C2]">A single accountable leadership team across all milestones.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2">
            <span className="text-xs font-mono text-[#00F0FF] font-bold">DISCIPLINE 03</span>
            <div className="text-base font-bold text-white">Brand & Tech Harmony</div>
            <p className="text-xs text-[#A8B1C2]">Clean visual designs that translate seamlessly into reliable, fast-loading digital products.</p>
          </div>
        </div>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.12] text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Ready to Discuss Your Transformation?</h3>
        <p className="text-sm text-[#A8B1C2] max-w-xl mx-auto">
          Connect directly with our partners to discuss your brand positioning or technical architecture.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Button to="/contact" variant="primary" size="md" icon={ArrowUpRight}>
            Initiate Consultation
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#090B12] text-[#F5F7FC] flex flex-col justify-between selection:bg-[#3898FF]/30 selection:text-white">
        {/* Dynamic Background Atmosphere */}
        <AmbientCanvas />

        {/* Global Navigation */}
        <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
        <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

        {/* Main Content Area */}
        <main className="relative z-10 flex-1">
          <Routes>
            {/* 01. Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* 02. About Us Page */}
            <Route path="/about" element={<AboutPage />} />
            
            {/* 03. Dedicated Portfolio Page */}
            <Route path="/portfolio" element={<PortfolioPage />} />

            {/* 04. Dedicated Contact Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 05. Master Services Directory Hub */}
            <Route path="/services" element={<ServicesHubPage />} />
            
            {/* 06. Pillar 1: Branding & Creative (Design-Led Studio Experience) */}
            <Route path="/services/branding-creative" element={<BrandingCreativePage />} />
            
            {/* 07. Pillar 2: Digital Marketing & Growth (Performance Cockpit Experience) */}
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            
            {/* 08. Pillar 3: Website & App Development (Product Engineering Experience) */}
            <Route path="/services/web-app-development" element={<WebAppDevPage />} />
            
            {/* 09. Pillar 4: ERP & Business Automation (Enterprise Operations Experience) */}
            <Route path="/services/business-automation" element={<BusinessAutomationPage />} />
          </Routes>
        </main>

        {/* Enterprise Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
