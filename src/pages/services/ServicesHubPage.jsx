
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Layers,
  TrendingUp,
  Code2,
  Cpu,
  CheckCircle2
} from 'lucide-react';

import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { servicesData } from '../../data/servicesData';
import { siteConfig } from '../../config/siteConfig';

export const ServicesHubPage = () => {
  const serviceIcons = {
    'branding-creative': Layers,
    'digital-marketing': TrendingUp,
    'web-app-development': Code2,
    'business-automation': Cpu,
  };

  return (
    <div className="pt-32 pb-24 bg-[#090B12] min-h-screen text-[#F5F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="blue" dot={true}>
            WHAT WE DO
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F5F7FC] tracking-tight leading-[1.08]">
            Everything Your Business Needs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#7B96FF] to-[#8B5CF6] glow-text-blue">
              to Grow.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A8B1C2] leading-relaxed max-w-2xl mx-auto">
            From building your brand and reaching more customers to developing
            websites and simplifying daily operations, we bring creative and
            technology solutions together to help your business move forward.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.id] || Layers;

            return (
              <div
                key={service.id}
                className="p-8 sm:p-10 rounded-3xl bg-[#141B2B] border border-white/[0.12] hover:border-[#3898FF]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#3898FF] uppercase">
                      {service.kicker}
                    </span>

                    <div className="p-3 rounded-2xl bg-[#3898FF]/15 text-[#3898FF] border border-[#3898FF]/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC] group-hover:text-[#3898FF] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#3898FF] mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#A8B1C2] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-4 border-t border-white/[0.08] space-y-2">
                    <div className="text-xs uppercase tracking-wider text-[#A8B1C2] font-bold">
                      What We Offer
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F5F7FC]">
                      {service.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3898FF] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <span className="text-xs text-[#A8B1C2]">
                    Explore our services
                  </span>

                  <Button
                    to={service.path}
                    variant="primary"
                    size="sm"
                    icon={ArrowUpRight}
                  >
                    Explore Service
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#101522] border border-white/[0.12] text-center space-y-6">
          <Badge variant="blue">
            LET'S WORK TOGETHER
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FC]">
            {siteConfig.ctaHeadline}
          </h2>

          <p className="text-sm sm:text-base text-[#A8B1C2] max-w-2xl mx-auto">
            Have a business idea, a project to launch or a process you'd like
            to improve? Tell us what you have in mind. We'd love to explore
            how we can help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
            >
              Discuss Your Project
            </Button>

            <a
              href={siteConfig.whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg"
            >
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
