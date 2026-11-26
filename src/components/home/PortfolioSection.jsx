
import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

import {
  Layers,
  TrendingUp,
  Code2,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

import { SectionHeader } from '../ui/SectionHeader';
import { servicesData } from '../../data/servicesData';
import { Button } from '../ui/Button';

import {
  portfolioData,
  portfolioCategories,
} from '../../data/portfolioData';

// Illustrative photography for each portfolio category.
const projectImages = {
  'lumina-brand-system': {
    src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85',
    alt: 'Brand identity and graphic design',
  },
  'strata-omnichannel-campaign': {
    src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Digital marketing and creative campaign',
  },
  'vanguard-commerce-platform': {
    src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Website and e-commerce design',
  },
  'orbit-enterprise-mobile': {
    src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85',
    alt: 'Smartphone and mobile application',
  },
  'nexus-erp-automation': {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
    alt: 'Business operations and team collaboration',
  },
  'kinetic-social-studio': {
    src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Social media and digital content',
  },
};

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Capabilities');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All Capabilities'
      ? portfolioData
      : portfolioData.filter(
          (project) => project.category === activeCategory
        );

  return (


    <section
      id="work"
      className="relative py-24 md:py-32 border-t border-white/[0.08] overflow-hidden bg-[#090B12]"
    
    >
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600/[0.07] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

       <div className="flex justify-center mb-10">
  <span className="inline-flex items-center px-5 py-2 rounded-full border border-[#3898FF]/30 bg-[#3898FF]/10 text-[#8DBEFF] text-[30px] font-bold uppercase tracking-[0.2em]">
    Our Work
  </span>
</div>

        {/* Equal-width category filters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-14">
          {portfolioCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`min-h-[52px] px-3 py-3 rounded-xl border text-center text-xs font-semibold leading-snug flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-[#3898FF]/20 text-white border-[#3898FF] shadow-[0_0_20px_rgba(56,152,255,0.2)]'
                    : 'bg-[#101522] text-[#A8B1C2] border-white/[0.08] hover:text-white hover:border-[#3898FF]/50 hover:bg-[#141B2B]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Portfolio cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">

          {filteredProjects.map((project, index) => {
            const visual = projectImages[project.id];

            const centreLastCard =
              filteredProjects.length % 3 === 1 &&
              index === filteredProjects.length - 1;

            return (
              <article
                key={project.id}
                className={`group flex flex-col overflow-hidden rounded-2xl bg-[#141B2B] border border-white/[0.1] hover:border-[#3898FF]/60 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(0,0,0,0.4)] transition-all duration-500 ${
                  centreLastCard ? 'lg:col-start-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101522]">
                  {visual && (
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090B12]/70 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                  <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                      {project.category}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#3898FF] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Information */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F7FC] group-hover:text-[#3898FF] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#A8B1C2] leading-relaxed mt-3 line-clamp-3 flex-1">
                    {project.summary}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-[#3898FF] hover:text-white transition-colors"
                  >
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}

        </div>

        {/* Project details */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-modal-title"
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#141B2B] border border-white/[0.16] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={projectImages[selectedProject.id]?.src}
                  alt={projectImages[selectedProject.id]?.alt || selectedProject.title}
                  className="w-full h-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-black/60 text-white hover:bg-[#3898FF] transition-colors"
                  aria-label="Close project details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-9 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#3898FF] font-semibold">
                    {selectedProject.category}
                  </p>

                  <h3
                    id="portfolio-modal-title"
                    className="text-2xl sm:text-3xl font-extrabold text-white mt-3"
                  >
                    {selectedProject.title}
                  </h3>

                  <p className="text-sm text-[#A8B1C2] leading-relaxed mt-4">
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    The Objective
                  </h4>
                  <p className="text-sm text-[#A8B1C2] leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    Our Approach
                  </h4>
                  <p className="text-sm text-[#A8B1C2] leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/[0.08]">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3898FF] text-white text-sm font-semibold hover:bg-blue-500 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    Discuss Your Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
