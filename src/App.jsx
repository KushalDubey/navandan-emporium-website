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
          ABOUT NAVANDAN EMPORIUM
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F5F7FC] tracking-tight">
          About Navandan Emporium
        </h1>
        <p className="text-base sm:text-xl text-[#A8B1C2] max-w-2xl mx-auto leading-relaxed">
          We help businesses build a strong brand, connect with the right audience and use technology to work more efficiently.
        </p>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-[#141B2B] border border-white/[0.12] space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">
          Creative, Marketing and Technology — Together
        </h2>
        <p className="text-[#A8B1C2] leading-relaxed text-sm sm:text-base">
          Businesses often have to work with separate providers for branding, marketing, websites and business software. Navandan Emporium brings these services together, making it easier to plan and manage the digital side of a business with one point of contact.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2">
            <span className="text-xs font-mono text-[#3898FF] font-bold">DISCIPLINE 01</span>
            <div className="text-base font-bold text-white">Connected Services</div>
            <p className="text-xs text-[#A8B1C2]">From brand identity and marketing to websites and business tools.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2">
            <span className="text-xs font-mono text-[#8B5CF6] font-bold">DISCIPLINE 02</span>
            <div className="text-base font-bold text-white">Clear Communication</div>
            <p className="text-xs text-[#A8B1C2]">A clear point of contact, agreed priorities and transparent project updates.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2">
            <span className="text-xs font-mono text-[#00F0FF] font-bold">DISCIPLINE 03</span>
            <div className="text-base font-bold text-white">Design That Works</div>
            <p className="text-xs text-[#A8B1C2]">Consistent design across your brand and digital products, with usability and performance in mind.</p>
          </div>
        </div>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.12] text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Have a Project in Mind?</h3>
        <p className="text-sm text-[#A8B1C2] max-w-xl mx-auto">
          Tell us what you are looking to build or improve. We can discuss the next steps together.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Button to="/contact" variant="primary" size="md" icon={ArrowUpRight}>
            Discuss Your Project
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

            {/* Friendly fallback for unknown URLs */}
            <Route path="*" element={(
              <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
                <span className="text-sm font-mono font-bold tracking-widest text-[#3898FF]">404 — PAGE NOT FOUND</span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#F5F7FC]">This page isn’t here.</h1>
                <p className="mt-4 max-w-lg text-[#A8B1C2]">The link may be outdated or the page may have moved. You can return to the homepage or explore our services.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button to="/" variant="primary">Back to Home</Button>
                  <Button to="/services" variant="secondary">Explore Services</Button>
                </div>
              </div>
            )} />
          </Routes>
        </main>

        {/* Enterprise Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
