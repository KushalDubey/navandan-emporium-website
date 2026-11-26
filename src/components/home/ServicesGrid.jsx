
import React from 'react';
import {
  ArrowUpRight,
  Layers,
  TrendingUp,
  Code2,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

import { SectionHeader } from '../ui/SectionHeader';
import { servicesData } from '../../data/servicesData';
import { Button } from '../ui/Button';

// Real photographic visuals for the four service pillars
const serviceVisuals = {
  'branding-creative': {
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85',
    alt: 'Creative brand identity and graphic design workspace',
    label: 'BRAND IDENTITY & CREATIVE DESIGN',
  },

  'digital-marketing': {
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=85',
    alt: 'Creative digital marketing and campaign planning',
    label: 'DIGITAL MARKETING & GROWTH',
  },

  'web-app-development': {
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=85',
    alt: 'Modern website and application interface displayed on a screen',
    label: 'WEBSITE & APPLICATION DEVELOPMENT',
  },

  'business-automation': {
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85',
    alt: 'Business technology, planning and workflow management',
    label: 'ERP & BUSINESS AUTOMATION',
  },
};

const serviceIcons = {
  'branding-creative': Layers,
  'digital-marketing': TrendingUp,
  'web-app-development': Code2,
  'business-automation': Cpu,
};

const ServiceImage = ({ service }) => {
  const visual = serviceVisuals[service.id] || serviceVisuals['branding-creative'];

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-[390px] rounded-2xl overflow-hidden bg-[#141B2B] border border-white/10 group/image">
      <img
        src={visual.image}
        alt={visual.alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-110"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090B12]/90 via-[#090B12]/10 to-[#090B12]/10" />

      {/* Subtle blue and violet lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3898FF]/15 via-transparent to-[#8B5CF6]/20 opacity-70" />

      {/* Bottom image label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#3898FF]" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] text-white/80">
            NAVANDAN DIGITAL
          </span>
        </div>

        <p className="text-sm sm:text-base font-semibold tracking-wide text-white">
          {visual.label}
        </p>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <ArrowUpRight className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

export const ServicesGrid = () => {
  return (
    <section
      id="services"
      className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          badge="OUR FOUR CORE PILLARS"
          badgeVariant="blue"
          title="Specialized Capabilities."
          highlight="Singular Standards."
          subtitle="We eliminate disjointed vendors by uniting branding, growth marketing, web engineering, and enterprise automation under one unified team."
        />

        <div className="space-y-16 mt-16">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Layers;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={service.id}
                className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#101522] border border-white/[0.1] hover:border-[#3898FF]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background lighting */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3898FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    isEven ? '' : ''
                  }`}
                >

                  {/* Service description */}
                  <div
                    className={`lg:col-span-7 space-y-6 relative z-10 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#3898FF]/15 text-[#3898FF] border border-[#3898FF]/30 group-hover:scale-110 transition-transform duration-300">
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

                      <p className="text-sm sm:text-base font-medium text-[#3898FF] mt-2">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#A8B1C2] leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Included capabilities */}
                    <div className="pt-4 border-t border-white/[0.08]">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#A8B1C2] mb-3">
                        Included Execution Capabilities:
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-center gap-2.5 text-xs text-[#F5F7FC]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#3898FF] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service button */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
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

                  {/* Actual photographic image */}
                  <div
                    className={`lg:col-span-5 relative z-10 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <ServiceImage service={service} />
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
