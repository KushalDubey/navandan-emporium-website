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
// const AboutPage = () => (
//   <div className="pt-32 pb-24 bg-[#090B12] min-h-screen text-[#F5F7FC]">
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
//       <div className="text-center space-y-4">
//         {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3898FF]/15 text-[#3898FF] font-mono text-xs border border-[#3898FF]/30 font-bold"> */}
//           {/* <Sparkles className="w-3.5 h-3.5" />
//           ABOUT NAVANDAN DIGITAL
//         </div> */}


// <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
//   bg-gradient-to-r from-[#3898FF]/15 via-[#5865F2]/15 to-[#8B5CF6]/15
//   border border-[#5865F2]/40
//   font-mono text-xs font-bold tracking-wider">

//   <Sparkles className="w-3.5 h-3.5 text-[#70B5FF]" />

//   <span className="bg-gradient-to-r from-[#70B5FF] via-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">
//     ABOUT NAVANDAN DIGITAL
//   </span>
// </div>


//         {/* <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F5F7FC] tracking-tight">
//           About Navandan Digital
//         </h1> */}
//         <p className="text-base sm:text-xl text-[#A8B1C2] max-w-2xl mx-auto leading-relaxed">
//           We help businesses build a strong brand, connect with the right audience and use technology to work more efficiently.
//         </p>
//       </div>

//       <div className="p-8 sm:p-12 rounded-3xl bg-[#141B2B] border border-white/[0.12] space-y-6">
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">
//           Creative, Marketing and Technology Together
//         </h2>
//         <p className="text-[#A8B1C2] leading-relaxed text-sm sm:text-base">
//           Businesses often have to work with separate providers for branding, marketing, websites and business software. Navandan Digital brings these services together, making it easier to plan and manage the digital side of a business with one point of contact.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
//           <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2">
//             <span className="text-xs font-mono text-[#3898FF] font-bold">DISCIPLINE 01</span>
//             <div className="text-base font-bold text-white">Connected Services</div>
//             <p className="text-xs text-[#A8B1C2]">From brand identity and marketing to websites and business tools.</p>
//           </div>
//           <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2">
//             <span className="text-xs font-mono text-[#8B5CF6] font-bold">DISCIPLINE 02</span>
//             <div className="text-base font-bold text-white">Clear Communication</div>
//             <p className="text-xs text-[#A8B1C2]">A clear point of contact, agreed priorities and transparent project updates.</p>
//           </div>
//           <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2">
//             <span className="text-xs font-mono text-[#00F0FF] font-bold">DISCIPLINE 03</span>
//             <div className="text-base font-bold text-white">Design That Works</div>
//             <p className="text-xs text-[#A8B1C2]">Consistent design across your brand and digital products, with usability and performance in mind.</p>
//           </div>
//         </div>
//       </div>

//       <div className="p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.12] text-center space-y-4">
//         <h3 className="text-2xl font-bold text-white">Have a Project in Mind?</h3>
//         <p className="text-sm text-[#A8B1C2] max-w-xl mx-auto">
//           Tell us what you are looking to build or improve. We can discuss the next steps together.
//         </p>
//         <div className="pt-2 flex justify-center gap-4">
//           <Button to="/contact" variant="primary" size="md" icon={ArrowUpRight}>
//             Discuss Your Project
//           </Button>
//         </div>
//       </div>
//     </div>
//   </div>
// );


// Structured view for About Us
const AboutPage = () => (
  <div className="relative pt-36 pb-24 bg-[#090B12] min-h-screen text-[#F5F7FC] overflow-hidden">

    {/* Ambient Background */}
    <div className="absolute top-20 left-1/4 w-[500px] h-[400px] bg-[#3898FF]/10 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute top-[550px] right-0 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 space-y-24">

      {/* 01. HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center space-y-8">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
          bg-gradient-to-r from-[#3898FF]/15 via-[#5865F2]/15 to-[#8B5CF6]/15
          border border-[#5865F2]/40 font-mono text-xs font-bold tracking-wider">

          <Sparkles className="w-4 h-4 text-[#70B5FF]" />

          <span className="bg-gradient-to-r from-[#70B5FF] via-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">
            ABOUT NAVANDAN DIGITAL
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold
          tracking-tight leading-[1.1]">

          Where Creativity Meets
          <span className="block mt-2 bg-gradient-to-r from-[#3898FF] via-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">
            Technology.
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#A8B1C2] leading-relaxed">
          We help businesses build meaningful brands, connect with the right
          audiences and use technology to create smarter digital experiences.
        </p>

        <div className="flex justify-center items-center gap-3 pt-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#3898FF]" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-slate-500 uppercase">
            Creative Thinking. Digital Execution.
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#8B5CF6]" />
        </div>

      </section>


      {/* 02. OUR STORY */}
      <section className="relative">

        <div className="absolute inset-0 bg-gradient-to-br from-[#3898FF]/10 via-transparent to-[#8B5CF6]/10 rounded-[2rem] blur-2xl" />

        <div className="relative p-7 sm:p-12 lg:p-16 rounded-[2rem]
          bg-[#141B2B]/95 border border-white/[0.1]">

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

            <div className="space-y-6">

              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#70B5FF] uppercase">
                Who We Are
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                One Partner.
                <span className="block bg-gradient-to-r from-[#3898FF] to-[#A78BFA] bg-clip-text text-transparent">
                  Connected Possibilities.
                </span>
              </h2>

              <p className="text-[#A8B1C2] leading-relaxed text-sm sm:text-base">
                Businesses often work with separate providers for branding,
                marketing, websites and business software. Bringing these
                areas together can make planning and execution more connected.
              </p>

              <p className="text-[#A8B1C2] leading-relaxed text-sm sm:text-base">
                Navandan Digital brings creative services, digital growth
                and technology solutions under one roof, helping businesses
                manage their digital journey through a unified approach.
              </p>

            </div>


            {/* Three Core Disciplines */}
            <div className="grid grid-cols-1 gap-4">

              <div className="group flex items-center gap-5 p-5 rounded-2xl
                bg-[#0D1422] border border-white/[0.08]
                hover:border-[#3898FF]/40 hover:-translate-y-1 transition-all duration-300">

                <div className="w-12 h-12 shrink-0 rounded-xl
                  bg-[#3898FF]/10 border border-[#3898FF]/20
                  flex items-center justify-center text-[#70B5FF] text-xl font-bold">
                  01
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">
                    Branding & Creativity
                  </h3>
                  <p className="text-sm text-[#A8B1C2] mt-1">
                    Build a distinctive and consistent brand identity.
                  </p>
                </div>

              </div>


              <div className="group flex items-center gap-5 p-5 rounded-2xl
                bg-[#0D1422] border border-white/[0.08]
                hover:border-[#8B5CF6]/40 hover:-translate-y-1 transition-all duration-300">

                <div className="w-12 h-12 shrink-0 rounded-xl
                  bg-[#8B5CF6]/10 border border-[#8B5CF6]/20
                  flex items-center justify-center text-[#A78BFA] text-xl font-bold">
                  02
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">
                    Digital Marketing
                  </h3>
                  <p className="text-sm text-[#A8B1C2] mt-1">
                    Reach audiences and build meaningful connections.
                  </p>
                </div>

              </div>


              <div className="group flex items-center gap-5 p-5 rounded-2xl
                bg-[#0D1422] border border-white/[0.08]
                hover:border-[#00F0FF]/40 hover:-translate-y-1 transition-all duration-300">

                <div className="w-12 h-12 shrink-0 rounded-xl
                  bg-[#00F0FF]/10 border border-[#00F0FF]/20
                  flex items-center justify-center text-[#00F0FF] text-xl font-bold">
                  03
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">
                    Technology & Automation
                  </h3>
                  <p className="text-sm text-[#A8B1C2] mt-1">
                    Develop digital products and smarter business workflows.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 03. OUR APPROACH */}
      <section className="space-y-10">

        <div className="text-center space-y-4">

          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#70B5FF] uppercase">
            Our Approach
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Built Around What Matters.
          </h2>

          <p className="text-[#A8B1C2] max-w-2xl mx-auto text-sm sm:text-base">
            Every business has different goals. Our approach focuses on
            understanding those needs and connecting the right capabilities.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="group relative p-7 sm:p-8 rounded-3xl
            bg-[#141B2B] border border-white/[0.08]
            hover:border-[#3898FF]/40 hover:-translate-y-2
            transition-all duration-300 overflow-hidden">

            <div className="absolute -top-16 -right-16 w-40 h-40
              bg-[#3898FF]/10 rounded-full blur-3xl
              group-hover:bg-[#3898FF]/20 transition-all" />

            <div className="relative space-y-5">

              <span className="text-xs font-mono font-bold text-[#70B5FF] tracking-widest">
                DISCIPLINE 01
              </span>

              <h3 className="text-xl font-bold text-white">
                Connected Services
              </h3>

              <p className="text-sm text-[#A8B1C2] leading-relaxed">
                From brand identity and creative production to marketing,
                websites and business technology.
              </p>

              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#3898FF] to-[#5865F2]
                group-hover:w-24 transition-all duration-300" />

            </div>
          </div>


          {/* Card 2 */}
          <div className="group relative p-7 sm:p-8 rounded-3xl
            bg-[#141B2B] border border-white/[0.08]
            hover:border-[#8B5CF6]/40 hover:-translate-y-2
            transition-all duration-300 overflow-hidden">

            <div className="absolute -top-16 -right-16 w-40 h-40
              bg-[#8B5CF6]/10 rounded-full blur-3xl
              group-hover:bg-[#8B5CF6]/20 transition-all" />

            <div className="relative space-y-5">

              <span className="text-xs font-mono font-bold text-[#A78BFA] tracking-widest">
                DISCIPLINE 02
              </span>

              <h3 className="text-xl font-bold text-white">
                Clear Communication
              </h3>

              <p className="text-sm text-[#A8B1C2] leading-relaxed">
                A clear point of contact, aligned priorities and transparent
                communication throughout the project.
              </p>

              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]
                group-hover:w-24 transition-all duration-300" />

            </div>
          </div>


          {/* Card 3 */}
          <div className="group relative p-7 sm:p-8 rounded-3xl
            bg-[#141B2B] border border-white/[0.08]
            hover:border-[#00F0FF]/40 hover:-translate-y-2
            transition-all duration-300 overflow-hidden">

            <div className="absolute -top-16 -right-16 w-40 h-40
              bg-[#00F0FF]/10 rounded-full blur-3xl
              group-hover:bg-[#00F0FF]/20 transition-all" />

            <div className="relative space-y-5">

              <span className="text-xs font-mono font-bold text-[#00F0FF] tracking-widest">
                DISCIPLINE 03
              </span>

              <h3 className="text-xl font-bold text-white">
                Design That Works
              </h3>

              <p className="text-sm text-[#A8B1C2] leading-relaxed">
                Consistent design across brands and digital products,
                with usability and performance in mind.
              </p>

              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#3898FF]
                group-hover:w-24 transition-all duration-300" />

            </div>
          </div>

        </div>
      </section>


      {/* 04. CLOSING CTA */}
      <section className="relative overflow-hidden rounded-[2rem]
        border border-white/[0.1] bg-[#111827]">

        <div className="absolute inset-0 bg-gradient-to-r
          from-[#3898FF]/10 via-transparent to-[#8B5CF6]/15 pointer-events-none" />

        <div className="absolute -top-32 left-1/2 -translate-x-1/2
          w-96 h-64 bg-[#5865F2]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative px-6 py-16 sm:px-12 sm:py-20 text-center space-y-6">

          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#70B5FF] uppercase">
            Let's Create Something Meaningful
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Have a Project in Mind?
          </h2>

          <p className="text-sm sm:text-base text-[#A8B1C2]
            max-w-2xl mx-auto leading-relaxed">
            Tell us what you want to build, improve or achieve.
            Let's explore how Navandan Digital can help.
          </p>

          <div className="pt-3 flex justify-center">

            <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
              Discuss Your Project
            </Button>

          </div>

        </div>
      </section>

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

            {/* 03. Dedicated work Page */}
            <Route path="/work" element={<PortfolioPage />} />

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
                <span className="text-sm font-mono font-bold tracking-widest text-[#3898FF]">404 - PAGE NOT FOUND</span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#F5F7FC]">This page isn't here.</h1>
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
