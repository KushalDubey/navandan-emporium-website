import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2,
  Zap,
  Globe2
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const CinematicHero = () => {
  const [activePillar, setActivePillar] = useState('brand');

  const pillars = [
    {
      id: 'brand',
      title: 'Branding & Creative',
      kicker: 'PILLAR 01 // IDENTITY',
      desc: 'Distinctive visual systems, mathematical type scales & brand prestige.',
      icon: Layers,
      color: 'from-[#3898FF] to-[#2563EB]',
      borderGlow: 'border-[#3898FF]/50 shadow-[0_0_30px_rgba(56,152,255,0.35)]',
      accentColor: '#3898FF',
    },
    {
      id: 'growth',
      title: 'Digital Marketing & Growth',
      kicker: 'PILLAR 02 // PERFORMANCE',
      desc: 'Predictable pipeline, multi-channel media buying & conversion loops.',
      icon: TrendingUp,
      color: 'from-[#8B5CF6] to-[#6D28D9]',
      borderGlow: 'border-[#8B5CF6]/50 shadow-[0_0_30px_rgba(139,92,246,0.35)]',
      accentColor: '#8B5CF6',
    },
    {
      id: 'tech',
      title: 'IT & Web Engineering',
      kicker: 'PILLAR 03 // ARCHITECTURE',
      desc: 'High-throughput web platforms, custom ERP & cloud microservices.',
      icon: Code2,
      color: 'from-[#00F0FF] to-[#0284C7]',
      borderGlow: 'border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.35)]',
      accentColor: '#00F0FF',
    },
  ];

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
      
      {/* Background Animated Gradient Aurora */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#3898FF]/20 via-[#8B5CF6]/15 to-transparent rounded-full blur-[160px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#8B5CF6]/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Narrative & Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Eyebrow Category Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="blue" dot={true}>
                Full-Service Digital Marketing, Branding & IT Agency
              </Badge>
            </div>

            {/* Cinematic Large Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F7FC] leading-[1.06]">
              Architecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#7B96FF] to-[#8B5CF6] glow-text-blue">
                Digital Dominance
              </span>{' '}
              at the Nexus of Brand & Technology.
            </h1>

            {/* High-Contrast Positioning Statement */}
            <p className="text-lg sm:text-xl text-[#A8B1C2] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Navandan Emporium bridges strategic brand storytelling, performance media growth, and enterprise-grade software engineering under a single, unified partnership.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
                className="w-full sm:w-auto"
              >
                Launch Project Enquiry
              </Button>
              <Button
                to="/services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Capabilities
              </Button>
            </div>

            {/* Factual Trust Indicators */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono text-[#A8B1C2]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3898FF]" />
                <span className="text-[#F5F7FC] font-semibold">01 Integrated Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#8B5CF6]" />
                <span className="text-[#F5F7FC] font-semibold">04 Core Pillars</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-[#F5F7FC] font-semibold">07 Capability Categories</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Representing Branding, Marketing & Technology Working Together */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Central Glowing Nexus Canvas */}
              <div className="relative p-7 sm:p-9 rounded-3xl bg-[#101522] border border-white/[0.12] shadow-2xl backdrop-blur-2xl overflow-hidden group">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3898FF]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F7FC]">
                      Unified Capabilities
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#3898FF] bg-[#3898FF]/10 border border-[#3898FF]/20 px-2.5 py-0.5 rounded-full font-bold">
                    FULL-SERVICE AGENCY
                  </span>
                </div>

                {/* Central Interactive Diagram: 3 Pillars Connected to Core */}
                <div className="space-y-4">
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon;
                    const isActive = activePillar === pillar.id;

                    return (
                      <div
                        key={pillar.id}
                        onMouseEnter={() => setActivePillar(pillar.id)}
                        className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${
                          isActive
                            ? `bg-[#141B2B] ${pillar.borderGlow}`
                            : 'bg-[#141B2B]/50 border-white/[0.06] hover:bg-[#141B2B] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-[#F5F7FC] shrink-0 shadow-md`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#3898FF]">
                                {pillar.kicker}
                              </span>
                              {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3898FF] animate-ping" />
                              )}
                            </div>
                            
                            <h3 className="text-sm font-bold text-[#F5F7FC] mt-0.5">
                              {pillar.title}
                            </h3>
                            
                            <p className="text-xs text-[#A8B1C2] mt-1 leading-relaxed line-clamp-2">
                              {pillar.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Synergy Indicator */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#3898FF]/15 via-[#8B5CF6]/15 to-transparent border border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#F5F7FC]">
                    <Sparkles className="w-4 h-4 text-[#3898FF]" />
                    <span>Integrated Strategy & Execution</span>
                  </div>
                  <span className="text-[#3898FF] font-semibold">Single Team Partnership</span>
                </div>

              </div>

              {/* Floating Ambient Badge Elements */}
              <div className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-[#141B2B] border border-white/[0.12] shadow-2xl backdrop-blur-xl hidden sm:flex items-center gap-3 text-xs font-mono text-[#F5F7FC]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3898FF]" />
                <span>BRANDING • MARKETING • TECHNOLOGY</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
