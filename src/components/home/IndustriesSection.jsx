import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { industriesData } from '../../data/industriesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);
  const activeIndustry = industriesData.find((i) => i.id === activeTab) || industriesData[0];
  const ActiveIcon = activeIndustry.icon;

  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="SECTORS OF EXPERTISE"
          badgeVariant="cyan"
          title="Tailored Solutions for"
          highlight="Demanding Industries."
          subtitle="Every industry possesses unique regulatory constraints, buyer psychology, and technical dynamics. We engineer solutions specific to your commercial reality."
        />

        {/* Tab Navigation (Responsive High-Contrast Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {industriesData.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#3898FF]/20 text-[#F5F7FC] border-[#3898FF] shadow-[0_0_20px_rgba(56,152,255,0.35)]'
                    : 'bg-[#101522] text-[#A8B1C2] border-white/[0.08] hover:text-[#F5F7FC] hover:bg-[#141B2B] hover:border-white/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#3898FF]' : 'text-[#A8B1C2]'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Spotlight Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#141B2B] border border-white/[0.12] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3898FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3.5 rounded-2xl bg-[#3898FF]/15 text-[#3898FF] border border-[#3898FF]/30">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">
                    {activeIndustry.name}
                  </h3>
                  <p className="text-xs font-mono text-[#3898FF] font-semibold mt-0.5">
                    {activeIndustry.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#A8B1C2] leading-relaxed pt-2">
                {activeIndustry.description}
              </p>

              <div className="pt-4">
                <Button to="/contact" variant="primary" size="sm" icon={ArrowRight}>
                  Discuss Your Sector Needs
                </Button>
              </div>
            </div>

            <div className="md:col-span-5 p-6 rounded-2xl bg-[#090B12] border border-white/[0.08] space-y-3.5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#F5F7FC] font-bold mb-2">
                Tailored Architecture Highlights:
              </div>
              {activeIndustry.capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-2.5 text-xs text-[#F5F7FC]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{cap}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
