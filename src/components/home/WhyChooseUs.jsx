import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { whyUsData } from '../../data/whyUsData';
import { Check } from 'lucide-react';

export const WhyChooseUs = () => {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="THE NAVANDAN ADVANTAGE"
          badgeVariant="cyan"
          title="Engineered for Clarity."
          highlight="Proven by Rigor."
          subtitle="Why ambitious businesses choose Navandan Emporium to spearhead their brand presence and digital infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {whyUsData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative p-8 rounded-3xl bg-[#141B2B] border border-white/[0.1] hover:border-[#3898FF]/60 hover:shadow-[0_20px_45px_-10px_rgba(56,152,255,0.25)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#3898FF]/15 text-[#3898FF] border border-[#3898FF]/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#A8B1C2] uppercase font-semibold">
                      {item.kicker}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FC] group-hover:text-[#3898FF] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8B1C2] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-2.5">
                  {item.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs text-[#F5F7FC]">
                      <Check className="w-4 h-4 text-[#3898FF] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
