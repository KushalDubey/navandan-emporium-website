
import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { processData } from '../../data/processData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline = () => {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="OUR METHODOLOGY"
          badgeVariant="blue"
          title="From Strategic Vision to"
          highlight="Engineered Reality."
          subtitle="A systematic, milestone-driven delivery process designed to eliminate ambiguity, de-risk execution, and maintain rigorous quality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">
          {processData.map((phase, idx) => (
            <div
              key={phase.step}
              className="relative p-8 rounded-3xl bg-[#141B2B] border border-white/[0.1] hover:border-[#3898FF]/60 hover:shadow-[0_20px_45px_-10px_rgba(56,152,255,0.25)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Counter & Connector Arrow */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] to-[#8B5CF6]">
                  {phase.step}
                </span>
                {idx < processData.length - 1 && (
                  <ArrowRight className="hidden lg:block w-5 h-5 text-[#A8B1C2] group-hover:text-[#3898FF] group-hover:translate-x-1.5 transition-all" />
                )}
              </div>

              {/* Phase Title & Tagline */}
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-bold text-[#F5F7FC] group-hover:text-[#3898FF] transition-colors leading-snug">
                  {phase.phase}
                </h3>
                <p className="text-xs font-mono text-[#3898FF] leading-tight font-semibold">
                  {phase.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#A8B1C2] leading-relaxed mb-6">
                {phase.description}
              </p>

              {/* Phase Activities */}
              <div className="pt-5 border-t border-white/[0.08] space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#F5F7FC] font-bold">
                  Sprint Actions:
                </div>
                {phase.activities.map((act) => (
                  <div key={act} className="flex items-start gap-2.5 text-xs text-[#F5F7FC]">
                    <CheckCircle2 className="w-4 h-4 text-[#3898FF] shrink-0 mt-0.5" />
                    <span className="leading-snug">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
