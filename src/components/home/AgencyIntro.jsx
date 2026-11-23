import React from 'react';
import { 
  Palette, 
  Globe, 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Users2,
  Zap
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export const AgencyIntro = () => {
  const capabilityCards = [
    {
      id: 'creative',
      title: 'Creative Excellence',
      badge: 'BUILDS INSTANT TRUST',
      icon: Palette,
      accentColor: 'from-[#3898FF] to-[#2563EB]',
      borderHover: 'hover:border-[#3898FF]/60 hover:shadow-[0_15px_40px_-10px_rgba(56,152,255,0.25)]',
      textColor: 'text-[#3898FF]',
      description: 'Stand out from competitors with memorable logos, polished brand identities, and professional presentation materials that immediately inspire confidence in your customers.',
      keyTakeaways: [
        'Distinctive logo and brand identity',
        'Clean, consistent visual guidelines',
        'Professional marketing collateral',
      ],
    },
    {
      id: 'technology',
      title: 'Technology That Works',
      badge: 'FAST & RELIABLE',
      icon: Globe,
      accentColor: 'from-[#00F0FF] to-[#0284C7]',
      borderHover: 'hover:border-[#00F0FF]/60 hover:shadow-[0_15px_40px_-10px_rgba(0,240,255,0.25)]',
      textColor: 'text-[#00F0FF]',
      description: 'Fast, secure websites and mobile applications built to give your customers a seamless experience on any device, with zero technical headaches for you or your team.',
      keyTakeaways: [
        'Lightning-fast loading on mobile and desktop',
        'Intuitive navigation that visitors enjoy',
        'Secure, stable and easy to maintain',
      ],
    },
    {
      id: 'growth',
      title: 'Digital Growth',
      badge: 'BRINGS NEW CUSTOMERS',
      icon: TrendingUp,
      accentColor: 'from-[#8B5CF6] to-[#6D28D9]',
      borderHover: 'hover:border-[#8B5CF6]/60 hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.25)]',
      textColor: 'text-[#8B5CF6]',
      description: 'Attract high-intent buyers through smart online advertising, Google search visibility, and focused campaigns designed to bring steady inquiries and predictable revenue.',
      keyTakeaways: [
        'Targeted Google and social media ads',
        'Higher search engine visibility (SEO)',
        'Clear reports showing what brings revenue',
      ],
    },
    {
      id: 'automation',
      title: 'Business Automation',
      badge: 'SAVES TIME & MONEY',
      icon: Clock,
      accentColor: 'from-emerald-500 to-teal-600',
      borderHover: 'hover:border-emerald-500/60 hover:shadow-[0_15px_40px_-10px_rgba(16,185,129,0.25)]',
      textColor: 'text-emerald-400',
      description: 'Save dozens of valuable hours every week by connecting your tools, automating daily administrative tasks, and getting clear reports on how your business is running.',
      keyTakeaways: [
        'Automated billing and customer follow-ups',
        'Eliminates duplicate manual data entry',
        'Real-time dashboards for business metrics',
      ],
    },
  ];

  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]">
      {/* Background Subtle Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#3898FF]/10 via-[#8B5CF6]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple, Professional Section Header */}
        <SectionHeader
          badge="OUR APPROACH TO YOUR SUCCESS"
          badgeVariant="blue"
          title="Everything Your Business Needs to Thrive,"
          highlight="Under One Roof."
          subtitle="You shouldn't have to manage four different agencies just to build your brand, launch your website, attract customers, and run your daily operations. We unite all four essential capabilities into one reliable team."
        />

        {/* Narrative Split: The Single-Partner Advantage */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-[#101522] border border-white/[0.1] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#3898FF] uppercase tracking-wider">
              <Users2 className="w-4 h-4" />
              <span>The Single-Partner Advantage</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC] tracking-tight">
              One Accountable Partner. Zero Miscommunication.
            </h3>
            <p className="text-sm sm:text-base text-[#A8B1C2] leading-relaxed">
              When design, marketing, and technology work together from the start, you get faster results, consistent branding, and significantly lower overhead. You have one senior contact person who understands your business goals inside and out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="p-4 rounded-2xl bg-[#141B2B] border border-white/[0.08] text-center min-w-[140px]">
              <span className="text-2xl font-extrabold text-[#3898FF] block font-mono">100%</span>
              <span className="text-xs text-[#A8B1C2] mt-0.5 block">Coordinated Team</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#141B2B] border border-white/[0.08] text-center min-w-[140px]">
              <span className="text-2xl font-extrabold text-emerald-400 block font-mono">01</span>
              <span className="text-xs text-[#A8B1C2] mt-0.5 block">Accountable Partner</span>
            </div>
          </div>
        </div>

        {/* The Four Core Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilityCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className={`p-7 sm:p-8 rounded-3xl bg-[#141B2B] border border-white/[0.1] ${card.borderHover} transition-all duration-300 flex flex-col justify-between group shadow-lg`}
              >
                <div className="space-y-5">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${card.accentColor} text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#101522] border border-white/[0.08] text-[#A8B1C2]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F7FC] group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8B1C2] mt-2.5 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Concrete Benefits Checklist */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-2">
                    {card.keyTakeaways.map((point) => (
                      <div key={point} className="flex items-start gap-2.5 text-xs text-[#F5F7FC]">
                        <CheckCircle2 className={`w-4 h-4 ${card.textColor} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Assurance */}
                <div className="pt-5 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A8B1C2]">Standard:</span>
                  <span className={`${card.textColor} font-semibold flex items-center gap-1`}>
                    <Sparkles className="w-3 h-3" />
                    Turnkey Delivery
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Welcoming Action Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#3898FF]/10 via-[#141B2B] to-[#8B5CF6]/10 border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#F5F7FC]">Unsure where to begin?</h4>
            <p className="text-xs sm:text-sm text-[#A8B1C2] mt-1">
              Tell us about your business goals and we will suggest the most practical starting point.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button to="/contact" variant="primary" size="md" icon={ArrowUpRight}>
              Let's Discuss Your Project
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
