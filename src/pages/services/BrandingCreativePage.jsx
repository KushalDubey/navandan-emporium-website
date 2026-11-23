import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Palette, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Sliders, 
  Copy, 
  Check, 
  Eye, 
  Box, 
  FileText, 
  Compass, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { siteConfig } from '../../config/siteConfig';

export const BrandingCreativePage = () => {
  const [copiedColor, setCopiedColor] = useState(null);
  const [activeArchetype, setActiveArchetype] = useState(0);
  const [beforeAfterToggle, setBeforeAfterToggle] = useState('after');
  const [openFaq, setOpenFaq] = useState(null);

  const colorTokens = [
    { name: 'Obsidian Dark', hex: '#090B12', role: 'Base Background Canvas' },
    { name: 'Electric Blue', hex: '#3898FF', role: 'Primary Accent & Action' },
    { name: 'Electric Violet', hex: '#8B5CF6', role: 'Secondary Accent & Mood' },
    { name: 'Cyan Highlight', hex: '#00F0FF', role: 'Telemetry & Micro-Badges' },
    { name: 'Pure Contrast', hex: '#F5F7FC', role: 'Primary Typographic Text' },
    { name: 'Slate Neutral', hex: '#A8B1C2', role: 'Secondary Body & Narrative' },
  ];

  const brandArchetypes = [
    {
      id: 'minimal-tech',
      name: 'Architectural Tech',
      tagline: 'Engineered Precision for Enterprise SaaS & High-Growth Systems',
      font: 'Plus Jakarta Sans + JetBrains Mono',
      ratio: '1.25 Major Third Scale',
      colorSample: 'from-[#3898FF] to-[#101522]',
      principles: ['Zero visual clutter', 'Mathematical line heights', 'Monospaced metric indicators'],
    },
    {
      id: 'luxury-prestige',
      name: 'Modern Prestige',
      tagline: 'High-Contrast Editorial Drama for Specialized Consultancies & Luxury',
      font: 'Syne Display + Inter',
      ratio: '1.414 Augmented Fourth',
      colorSample: 'from-[#8B5CF6] to-[#090B12]',
      principles: ['Generous negative space', 'High-contrast typography', 'Restrained electric glows'],
    },
    {
      id: 'kinetic-bold',
      name: 'Kinetic Disruptor',
      tagline: 'High-Impact Brand Storytelling for Next-Gen FinTech & AI Platforms',
      font: 'Space Grotesk + Plus Jakarta Sans',
      ratio: '1.333 Perfect Fourth',
      colorSample: 'from-[#00F0FF] to-[#3898FF]',
      principles: ['Bold editorial kickers', 'Dynamic gradient text', 'Interactive micro-interactions'],
    },
  ];

  const deliverables = [
    { title: 'Master Vector Identity Kit', desc: 'Scalable SVG, AI, EPS, and high-res PNG formats for print, digital, and vector signage.' },
    { title: 'Cross-Platform Token Repository', desc: 'Figma styles synchronized directly with CSS variables, Tailwind classes, and JSON design tokens.' },
    { title: 'Comprehensive Brand Bible (PDF)', desc: '100+ page master manual covering logo clear space, forbidden variations, and tone of voice.' },
    { title: 'Digital & Social Template Suite', desc: 'Production-ready editable templates for executive presentations, LinkedIn decks, and campaign creative.' },
    { title: 'Custom 3D & Vector Asset Library', desc: 'Bespoke geometric glyphs, abstract 3D tokens, and micro-illustrations in brand colors.' },
    { title: 'Merchandise & Environmental Guidelines', desc: 'Pre-flighted layouts for corporate stationery, physical packaging, badges, and spatial signage.' },
  ];

  const faqs = [
    { q: 'Who owns the intellectual property and copyright of the created branding?', a: 'You receive 100% full intellectual property transfer and master vector source files upon final milestone delivery.' },
    { q: 'How do you bridge the brand design system into our engineering codebase?', a: 'We do not simply provide static PDF guidelines. We export Figma design tokens directly into Tailwind CSS configuration files, CSS variables, and component variables for your developers.' },
    { q: 'Can we request packaging and 3D promotional assets as part of the brand sprint?', a: 'Yes. Our creative team develops 3D packaging renders, physical collateral mockups, and corporate merchandise layouts ready for high-resolution manufacturing.' },
    { q: 'What is the typical timeline for an enterprise brand identity system?', a: 'A standard brand identity sprint spans 3 to 5 weeks from initial archetype discovery to master token delivery.' },
  ];

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="pt-32 pb-24 bg-[#090B12] min-h-screen text-[#F5F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 01. DISTINCTIVE HERO: Studio Aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="blue" dot={true}>
                SERVICE PILLAR 01 // BRANDING & CREATIVE STUDIO
              </Badge>
              <span className="text-xs font-mono text-[#3898FF]">DESIGN-LED SYSTEM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F7FC] leading-[1.06]">
              Visual Distinction That Commands{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#7B96FF] to-[#8B5CF6] glow-text-blue">
                Enterprise Prestige.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#A8B1C2] leading-relaxed max-w-2xl font-normal">
              We design brand systems that elevate positioning, articulate technical sophistication, and provide complete mathematical design tokens ready for direct code integration.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
                Commission Brand System
              </Button>
              <a
                href={siteConfig.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#141B2B] hover:bg-[#1C253B] text-[#F5F7FC] text-sm font-semibold border border-white/12 transition-all shadow-sm"
              >
                Discuss Creative Brief via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Hero Graphic: Studio Type Specimen & Geometry */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-3xl bg-[#141B2B] border border-white/[0.12] shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-[#3898FF]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F7FC]">
                    Mathematical Brand Engine
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#3898FF] bg-[#3898FF]/15 px-2.5 py-0.5 rounded-full border border-[#3898FF]/30 font-bold">
                  GOLDEN RATIO: 1.618
                </span>
              </div>

              {/* Large Type Glyph */}
              <div className="text-center py-6 border-b border-white/[0.08] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-extrabold text-white/[0.03] select-none font-mono">
                  &Phi;
                </div>
                <div className="text-6xl font-extrabold text-[#F5F7FC] tracking-tighter glow-text-blue">
                  Aa Bb Gg
                </div>
                <div className="text-xs font-mono text-[#A8B1C2] mt-2">
                  Display Grotesque • Geometric Optical Weights
                </div>
              </div>

              {/* Live Metric Points */}
              <div className="grid grid-cols-2 gap-3 pt-6 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#101522] border border-white/[0.08]">
                  <span className="text-[#A8B1C2] block text-[10px]">COLOR SPACE</span>
                  <span className="text-[#3898FF] font-bold">P3 Wide Gamut</span>
                </div>
                <div className="p-3 rounded-xl bg-[#101522] border border-white/[0.08]">
                  <span className="text-[#A8B1C2] block text-[10px]">EXPORT COMPLIANCE</span>
                  <span className="text-emerald-400 font-bold">WCAG AAA Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 02. INTERACTIVE BRAND ARCHETYPE INSPECTOR */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.12] shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3898FF] font-bold block mb-2">
              INTERACTIVE ARCHETYPE STUDIO
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Calibrated Brand Typologies
            </h2>
            <p className="text-sm text-[#A8B1C2] mt-2">
              Select an archetype to inspect how typography, optical ratios, and color palettes harmonize.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {brandArchetypes.map((arch, idx) => (
              <button
                key={arch.id}
                onClick={() => setActiveArchetype(idx)}
                className={`p-5 rounded-2xl text-left transition-all border ${
                  activeArchetype === idx
                    ? 'bg-[#141B2B] border-[#3898FF] shadow-[0_0_30px_rgba(56,152,255,0.3)]'
                    : 'bg-[#141B2B]/40 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="text-xs font-mono font-bold text-[#3898FF]">ARCHETYPE 0{idx + 1}</div>
                <h3 className="text-lg font-bold text-[#F5F7FC] mt-1">{arch.name}</h3>
                <p className="text-xs text-[#A8B1C2] mt-1 line-clamp-2">{arch.tagline}</p>
              </button>
            ))}
          </div>

          {/* Archetype Detail Viewer */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141B2B] border border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#3898FF] font-bold uppercase">
                Active Specification: {brandArchetypes[activeArchetype].name}
              </div>
              <h4 className="text-2xl font-bold text-[#F5F7FC]">
                {brandArchetypes[activeArchetype].tagline}
              </h4>
              <div className="space-y-2 text-xs font-mono text-[#A8B1C2]">
                <div>Typography Spec: <span className="text-[#F5F7FC]">{brandArchetypes[activeArchetype].font}</span></div>
                <div>Modular Ratio: <span className="text-[#3898FF] font-bold">{brandArchetypes[activeArchetype].ratio}</span></div>
              </div>
              <ul className="space-y-1.5 pt-2">
                {brandArchetypes[activeArchetype].principles.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-[#F5F7FC]">
                    <CheckCircle2 className="w-4 h-4 text-[#3898FF] shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#090B12] border border-white/[0.08] text-center space-y-4">
              <span className="text-[10px] font-mono text-[#A8B1C2] uppercase">Live Optical Sample</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
                NAVANDAN
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#3898FF]">
                ENTERPRISE SYSTEM
              </div>
              <div className="pt-2 text-[11px] text-[#A8B1C2]">
                Tested for digital interfaces, app icons, vector merchandise & executive decks.
              </div>
            </div>
          </div>
        </div>

        {/* 03. COLOR TOKEN PALETTE BOARD WITH CLICK-TO-COPY */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3898FF] font-bold block mb-2">
              DESIGN SYSTEM CODING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Tokenized Palette Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B1C2] mt-2">
              Click any color swatch to copy its production hexadecimal value to your clipboard.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {colorTokens.map((token) => (
              <button
                key={token.hex}
                onClick={() => copyToClipboard(token.hex)}
                className="p-4 rounded-2xl bg-[#141B2B] border border-white/[0.08] hover:border-[#3898FF] hover:shadow-[0_0_25px_rgba(56,152,255,0.25)] transition-all text-left flex flex-col justify-between group h-44"
              >
                <div 
                  className="w-full h-16 rounded-xl border border-white/10 shadow-inner mb-3 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: token.hex }}
                />
                <div>
                  <div className="text-xs font-bold text-[#F5F7FC] truncate">{token.name}</div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#3898FF] font-bold mt-1">
                    <span>{token.hex}</span>
                    {copiedColor === token.hex ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#A8B1C2] opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 04. BEFORE AND AFTER CONCEPT PRESENTATION */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#141B2B] border border-white/[0.12] shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#3898FF] font-bold block mb-1">
                CONCEPT EVOLUTION STUDY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">
                Generic Vendor vs. Engineered Brand Authority
              </h2>
            </div>
            
            <div className="flex items-center p-1 rounded-xl bg-[#090B12] border border-white/[0.08]">
              <button
                onClick={() => setBeforeAfterToggle('before')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  beforeAfterToggle === 'before' ? 'bg-rose-500/20 text-rose-300' : 'text-[#A8B1C2]'
                }`}
              >
                Generic Vendor
              </button>
              <button
                onClick={() => setBeforeAfterToggle('after')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  beforeAfterToggle === 'after' ? 'bg-[#3898FF] text-white shadow-md' : 'text-[#A8B1C2]'
                }`}
              >
                Navandan Brand Architecture
              </button>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#090B12] border border-white/[0.08] min-h-[220px] flex items-center justify-center">
            {beforeAfterToggle === 'before' ? (
              <div className="space-y-3 text-center opacity-70">
                <div className="text-sm font-sans text-slate-400">Standard Generic Presentation:</div>
                <div className="text-2xl font-normal text-slate-500 font-serif">
                  TechSolutions Global Enterprise Services Inc.
                </div>
                <div className="text-xs text-rose-400 font-mono">
                  Weak positioning • Diluted typography • Zero mathematical token integration
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-center">
                <Badge variant="blue">NAVANDAN SYSTEM ENGINE</Badge>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight glow-text-blue">
                  NAVANDAN EMPORIUM
                </div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  High-Impact Contrast • Precision Type Scales • Enterprise Trust
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 05. MASTER DELIVERABLES MATRIX */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3898FF] font-bold block mb-2">
              CONCRETE OUTPUTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Master Deliverables Included
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B1C2] mt-2">
              Every branding sprint yields complete, production-grade assets ready for instant deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#141B2B] border border-white/[0.08] hover:border-[#3898FF]/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-[#3898FF]/15 text-[#3898FF] w-fit">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7FC]">{item.title}</h3>
                  <p className="text-xs text-[#A8B1C2] leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[10px] font-mono text-emerald-400">
                  EXPORT READY
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 06. SERVICE-SPECIFIC FAQS */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3898FF] font-bold block mb-2">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">
              Branding & Creative FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#141B2B] border border-white/[0.08] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#F5F7FC]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#3898FF] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#A8B1C2] leading-relaxed border-t border-white/[0.06] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 07. RELEVANT CONSULTATION CTA */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-blue-950/30 via-[#101522] to-violet-950/30 border border-white/[0.12] text-center space-y-6">
          <Badge variant="blue">DISCUSS YOUR BRAND ARCHITECTURE</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FC]">
            Ready to Build an Unforgettable Identity?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B1C2] max-w-2xl mx-auto">
            Connect directly with our creative directors to define your archetype, color tokens, and visual strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
              Launch Brand Discovery
            </Button>
            <a
              href={siteConfig.whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg"
            >
              <span>Instant WhatsApp Discussion</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
