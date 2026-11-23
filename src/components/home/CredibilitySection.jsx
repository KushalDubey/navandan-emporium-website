import React from 'react';
import { Layers, Sparkles, Network, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const CredibilitySection = () => {
  const structuralMetrics = [
    {
      metric: "04",
      label: "Core Service Pillars",
      highlight: "Comprehensive Disciplines",
      description: "Covering the full spectrum of modern digital enterprise: Branding & Creative, Growth Marketing, Web/App Engineering, and ERP Automation.",
      icon: Layers,
      color: "from-[#3898FF] to-[#2563EB]",
      accent: "text-[#3898FF]",
      borderGlow: "group-hover:border-[#3898FF]/50",
      points: [
        "Branding & Visual Identity Systems",
        "Performance Marketing & Growth Loops",
        "Modern Web & Application Engineering",
        "ERP, CRM & Operations Automation",
      ],
    },
    {
      metric: "07",
      label: "Capability Categories",
      highlight: "Deep Specialized Verticals",
      description: "Dedicated execution frameworks tailored for specific commercial requirements—from mobile UX and brand systems to high-intent lead engines.",
      icon: Sparkles,
      color: "from-[#8B5CF6] to-[#6D28D9]",
      accent: "text-[#8B5CF6]",
      borderGlow: "group-hover:border-[#8B5CF6]/50",
      points: [
        "Brand Identity & Creative Design",
        "Digital Marketing & E-Commerce Web",
        "Mobile Apps & Business Automation",
        "Content Production & Performance Lead Gen",
      ],
    },
    {
      metric: "01",
      label: "Integrated Partner",
      highlight: "Unified Single Accountability",
      description: "One senior multidisciplinary team managing strategy, creative design, and software engineering with zero vendor fragmentation or handoff friction.",
      icon: Network,
      color: "from-[#00F0FF] to-[#3898FF]",
      accent: "text-[#00F0FF]",
      borderGlow: "group-hover:border-[#00F0FF]/50",
      points: [
        "Single point of strategic contact",
        "Design systems synchronized directly with code",
        "Continuous alignment from blueprint to launch",
      ],
    },
  ];

  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]">
      {/* Background Accent Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#3898FF]/12 via-[#8B5CF6]/12 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="STRUCTURAL BREADTH & CREDIBILITY"
          badgeVariant="blue"
          title="Factual Architectural Depth."
          highlight="Zero Compromises."
          subtitle="Our credibility is rooted in operational breadth, rigorous engineering discipline, and singular accountability rather than inflated claims."
        />

        {/* 3 Large Structural Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {structuralMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.metric}
                className={`relative p-8 sm:p-10 rounded-3xl bg-[#141B2B] border border-white/[0.1] ${item.borderGlow} hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 flex flex-col justify-between group`}
              >
                {/* Internal Ambient Accent */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Top Metric Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-6xl sm:text-7xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${item.color} leading-none block`}>
                        {item.metric}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FC] tracking-tight mt-4">
                        {item.label}
                      </h3>
                      <div className={`text-xs font-mono font-semibold uppercase tracking-wider ${item.accent} mt-1`}>
                        {item.highlight}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#101522] border border-white/[0.08] text-[#F5F7FC] group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm text-[#A8B1C2] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Structural Points */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                    {item.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5 text-xs text-[#F5F7FC]">
                        <CheckCircle2 className={`w-4 h-4 ${item.accent} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Architectural Note */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A8B1C2]">
                  <span>CAPABILITY METRIC</span>
                  <span className="text-emerald-400 font-semibold">VERIFIED SCOPE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factual Integrity Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-[#101522] border border-white/[0.08] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#3898FF] shrink-0" />
            <p className="text-[#A8B1C2] leading-relaxed">
              <span className="font-bold text-[#F5F7FC]">Factual Integrity Notice:</span> The structural metrics above describe Navandan Emporium's internal operational capabilities and service architecture. In adherence to strict commercial transparency, historical client project volumes remain unpublished until verified audits are completed.
            </p>
          </div>
          <div className="shrink-0 font-mono text-[11px] text-[#3898FF] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#3898FF]/15 border border-[#3898FF]/30 font-semibold">
            Factual Operations
          </div>
        </div>

      </div>
    </section>
  );
};
