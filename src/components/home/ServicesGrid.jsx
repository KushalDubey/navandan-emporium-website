import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Layers, 
  TrendingUp, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Palette,
  BarChart3,
  Globe,
  Terminal,
  Activity,
  Workflow
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { servicesData } from '../../data/servicesData';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

// Distinct Visual Illustration Components for each of the 4 Pillars
const BrandingIllustration = () => (
  <div className="relative w-full h-64 sm:h-80 rounded-2xl bg-[#0E1320] border border-white/[0.08] p-5 flex flex-col justify-between overflow-hidden shadow-inner">
    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
      <div className="flex items-center gap-2">
        <Palette className="w-4 h-4 text-[#3898FF]" />
        <span className="text-xs font-mono font-bold text-[#F5F7FC]">Visual Identity Studio</span>
      </div>
      <span className="text-[10px] font-mono text-[#3898FF] bg-[#3898FF]/15 px-2.5 py-0.5 rounded-full border border-[#3898FF]/30 font-semibold">
        BRAND GUIDELINES
      </span>
    </div>

    {/* Color Palette & Visual System */}
    <div className="grid grid-cols-3 gap-3 my-auto">
      <div className="p-3 rounded-xl bg-[#090B12] border border-[#3898FF]/40 space-y-1">
        <span className="text-[9px] font-mono text-[#A8B1C2]">OBSIDIAN BASE</span>
        <div className="text-xs font-mono font-bold text-[#F5F7FC]">#090B12</div>
        <div className="w-full h-1.5 rounded-full bg-[#090B12] border border-white/20 mt-1" />
      </div>

      <div className="p-3 rounded-xl bg-[#141B2B] border border-blue-400/50 space-y-1">
        <span className="text-[9px] font-mono text-[#A8B1C2]">ELECTRIC BLUE</span>
        <div className="text-xs font-mono font-bold text-[#3898FF]">#3898FF</div>
        <div className="w-full h-1.5 rounded-full bg-[#3898FF] mt-1" />
      </div>

      <div className="p-3 rounded-xl bg-[#141B2B] border border-violet-400/50 space-y-1">
        <span className="text-[9px] font-mono text-[#A8B1C2]">ELECTRIC VIOLET</span>
        <div className="text-xs font-mono font-bold text-[#8B5CF6]">#8B5CF6</div>
        <div className="w-full h-1.5 rounded-full bg-[#8B5CF6] mt-1" />
      </div>
    </div>

    {/* Typography Pairing Preview */}
    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs font-mono text-[#A8B1C2]">
      <div className="flex items-center gap-2">
        <span className="text-[#3898FF] font-bold">Aa</span>
        <span className="text-[#F5F7FC]">Display Headlines & Editorial Body Pairing</span>
      </div>
      <span className="text-[10px] text-emerald-400 font-semibold">CONSISTENT HIERARCHY</span>
    </div>
  </div>
);

const MarketingIllustration = () => (
  <div className="relative w-full h-64 sm:h-80 rounded-2xl bg-[#0E1320] border border-white/[0.08] p-5 flex flex-col justify-between overflow-hidden shadow-inner">
    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
      <div className="flex items-center gap-2">
        <BarChart3 className="w-4 h-4 text-[#8B5CF6]" />
        <span className="text-xs font-mono font-bold text-[#F5F7FC]">Performance Growth Overview</span>
      </div>
      <span className="text-[10px] font-mono text-[#8B5CF6] bg-[#8B5CF6]/15 px-2.5 py-0.5 rounded-full border border-[#8B5CF6]/30 font-semibold">
        FULL-FUNNEL STRATEGY
      </span>
    </div>

    {/* Conversion Funnel Simulation */}
    <div className="space-y-2.5 my-auto">
      <div>
        <div className="flex justify-between text-[11px] font-mono text-[#A8B1C2] mb-1">
          <span>01 / Targeted Multi-Channel Reach</span>
          <span className="text-[#F5F7FC] font-semibold">Audience Awareness</span>
        </div>
        <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#3898FF] to-[#8B5CF6] w-full rounded-full" />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[11px] font-mono text-[#A8B1C2] mb-1">
          <span>02 / High-Intent Consideration</span>
          <span className="text-[#3898FF] font-semibold">Engaged Prospects</span>
        </div>
        <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#3898FF] to-[#8B5CF6] w-[64%] rounded-full" />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[11px] font-mono text-[#A8B1C2] mb-1">
          <span>03 / Conversion & Inquiries</span>
          <span className="text-emerald-400 font-semibold">Qualified Leads</span>
        </div>
        <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
          <div className="h-full bg-emerald-500 w-[32%] rounded-full" />
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between text-[10px] font-mono text-[#A8B1C2] pt-2 border-t border-white/[0.04]">
      <span>MULTI-CHANNEL MEDIA ALLOCATION</span>
      <span className="text-emerald-400">MEASURABLE ROI</span>
    </div>
  </div>
);

const WebDevIllustration = () => (
  <div className="relative w-full h-64 sm:h-80 rounded-2xl bg-[#0E1320] border border-white/[0.08] p-5 flex flex-col justify-between overflow-hidden shadow-inner">
    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
      <div className="flex items-center gap-2">
        <Terminal className="w-4 h-4 text-[#00F0FF]" />
        <span className="text-xs font-mono font-bold text-[#F5F7FC]">Modern Platform Architecture</span>
      </div>
      <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/15 px-2.5 py-0.5 rounded-full border border-[#00F0FF]/30 font-semibold">
        CLEAN ARCHITECTURE
      </span>
    </div>

    {/* Platform Standards Matrix */}
    <div className="grid grid-cols-3 gap-2.5 my-auto">
      <div className="p-3 rounded-xl bg-[#141B2B] border border-white/[0.08] text-center">
        <span className="text-[9px] font-mono text-[#A8B1C2] block mb-1">SPEED</span>
        <span className="text-xs font-mono font-bold text-[#00F0FF]">Fast Loading</span>
      </div>
      <div className="p-3 rounded-xl bg-[#141B2B] border border-white/[0.08] text-center">
        <span className="text-[9px] font-mono text-[#A8B1C2] block mb-1">SECURITY</span>
        <span className="text-xs font-mono font-bold text-emerald-400">Hardened</span>
      </div>
      <div className="p-3 rounded-xl bg-[#141B2B] border border-white/[0.08] text-center">
        <span className="text-[9px] font-mono text-[#A8B1C2] block mb-1">RESPONSIVE</span>
        <span className="text-xs font-mono font-bold text-[#3898FF]">Mobile Ready</span>
      </div>
    </div>

    {/* Platform Standards Indicator */}
    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs font-mono text-[#A8B1C2]">
      <span>MODERN COMPONENT STACK</span>
      <span className="text-[#00F0FF]">CLEAN & MAINTAINABLE</span>
    </div>
  </div>
);

const AutomationIllustration = () => (
  <div className="relative w-full h-64 sm:h-80 rounded-2xl bg-[#0E1320] border border-white/[0.08] p-5 flex flex-col justify-between overflow-hidden shadow-inner">
    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
      <div className="flex items-center gap-2">
        <Workflow className="w-4 h-4 text-[#8B5CF6]" />
        <span className="text-xs font-mono font-bold text-[#F5F7FC]">Business Workflow Automation</span>
      </div>
      <span className="text-[10px] font-mono text-[#8B5CF6] bg-[#8B5CF6]/15 px-2.5 py-0.5 rounded-full border border-[#8B5CF6]/30 font-semibold">
        SYSTEM INTEGRATION
      </span>
    </div>

    {/* Node Pipeline Diagram */}
    <div className="grid grid-cols-3 gap-3 items-center my-auto">
      <div className="p-3 rounded-xl bg-[#141B2B] border border-white/[0.08] text-center space-y-1">
        <div className="text-[9px] font-mono text-[#3898FF]">STEP 01</div>
        <div className="text-xs font-bold text-[#F5F7FC]">Order Ingest</div>
      </div>

      <div className="p-3 rounded-xl bg-[#141B2B] border border-[#8B5CF6]/40 text-center space-y-1 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
        <div className="text-[9px] font-mono text-[#8B5CF6]">STEP 02</div>
        <div className="text-xs font-bold text-[#F5F7FC]">Automated Logic</div>
      </div>

      <div className="p-3 rounded-xl bg-[#141B2B] border border-emerald-500/40 text-center space-y-1">
        <div className="text-[9px] font-mono text-emerald-400">STEP 03</div>
        <div className="text-xs font-bold text-[#F5F7FC]">Instant Sync</div>
      </div>
    </div>

    <div className="flex items-center justify-between text-[10px] font-mono text-[#A8B1C2] pt-2 border-t border-white/[0.04]">
      <span>ADMINISTRATIVE WORKFLOWS</span>
      <span className="text-emerald-400">STREAMLINED EXECUTION</span>
    </div>
  </div>
);

export const ServicesGrid = () => {
  const illustrations = {
    'branding-creative': BrandingIllustration,
    'digital-marketing': MarketingIllustration,
    'web-app-development': WebDevIllustration,
    'business-automation': AutomationIllustration,
  };

  const serviceIcons = {
    'branding-creative': Layers,
    'digital-marketing': TrendingUp,
    'web-app-development': Code2,
    'business-automation': Cpu,
  };

  return (
    <section id="services" className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="OUR FOUR CORE PILLARS"
          badgeVariant="blue"
          title="Specialized Capabilities."
          highlight="Singular Standards."
          subtitle="We eliminate disjointed vendors by uniting branding, growth marketing, web engineering, and enterprise automation under one unified team."
        />

        {/* Asymmetrical Editorial Showcases (Non-repetitive layouts) */}
        <div className="space-y-16 mt-16">
          {servicesData.map((service, idx) => {
            const Illustration = illustrations[service.id] || BrandingIllustration;
            const Icon = serviceIcons[service.id] || Layers;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={service.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.1] hover:border-[#3898FF]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Luminous Ambient Accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3898FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Narrative & Capabilities */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#3898FF]/15 text-[#3898FF] border border-[#3898FF]/30 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#3898FF]">
                        {service.kicker}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight group-hover:text-[#3898FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-[#3898FF] mt-1.5">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#A8B1C2] leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Deliverables & Capabilities */}
                    <div className="pt-4 border-t border-white/[0.08]">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#A8B1C2] mb-3">
                        Included Execution Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2.5 text-xs text-[#F5F7FC]">
                            <CheckCircle2 className="w-4 h-4 text-[#3898FF] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-4">
                      <Button
                        to={service.path}
                        variant="primary"
                        size="sm"
                        icon={ArrowUpRight}
                      >
                        Explore Pillar Specifications
                      </Button>
                      <span className="text-xs font-mono text-[#A8B1C2]">
                        {service.deliverables.length} Master Deliverables Included
                      </span>
                    </div>
                  </div>

                  {/* Bespoke Visual Mockup Illustration */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Illustration />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
