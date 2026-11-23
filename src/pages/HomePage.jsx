import React from 'react';
import { CinematicHero } from '../components/home/CinematicHero';
import { AgencyIntro } from '../components/home/AgencyIntro';
import { ServicesGrid } from '../components/home/ServicesGrid';
{/*import { CredibilitySection } from '../components/home/CredibilitySection';*/}
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { EnquirySection } from '../components/home/EnquirySection';

export const HomePage = () => {
  return (
    <div className="space-y-0">
      {/* 01. Cinematic Hero Section */}
      <CinematicHero />

      {/* 02. Introduction to Navandan Emporium */}
      <AgencyIntro />

      {/* 03. Four Core Service Verticals */}
      <ServicesGrid />

      {/* 04. Experience & Factual Structural Credibility Section */}
     {/* <CredibilitySection /> */}

      {/* 05. Why Choose Us */}
      <WhyChooseUs />

      {/* 06. Selected Work & Concept Showcases across 07 Categories */}
      <PortfolioSection featured />

      {/* 07. Our Approach & Process */}
      <ProcessTimeline />

      {/* 08. Industries We Serve */}
      <IndustriesSection />

      {/* 09. Official Contact Channels & Project Enquiry Wizard */}
      <EnquirySection />
    </div>
  );
};
