import React from 'react';
import { PortfolioSection } from '../components/home/PortfolioSection';
// import { CredibilitySection } from '../components/home/CredibilitySection';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioPage = () => {
  return (
    <div className="pt-32 pb-24 bg-[#090B12] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Updated Business-Friendly Language */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="violet" dot={true}>
            OUR WORK & CREATIVE SHOWCASE
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F5F7FC] tracking-tight leading-[1.08]">
            Creative Work.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#7B96FF] to-[#8B5CF6] glow-text-blue">
              Digital Experiences.
            </span>{' '}
            Smart Solutions.
          </h1>

          <p className="text-base sm:text-lg text-[#A8B1C2] leading-relaxed max-w-2xl mx-auto">
            Explore our curated portfolio of concept projects and agency demonstrations across branding, digital marketing, web applications, and business automation.
          </p>
        </div>

      </div>

      {/* Main Filterable Portfolio Section with Updated Mockups and Language */}
      <PortfolioSection />

      {/* Structural Credibility */}
      {/* <CredibilitySection /> */}

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.12] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-[#F5F7FC]">Have a Specific Project in Mind?</h3>
            <p className="text-sm text-[#A8B1C2]">
              Tell us what you would like to create or improve. We can discuss a practical approach for your business.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="md" icon={ArrowUpRight}>
            Let's Build Something Great
          </Button>
        </div>
      </div>
    </div>
  );
};
