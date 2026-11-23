import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  BarChart3, 
  Search, 
  Megaphone, 
  MessageSquare, 
  Mail, 
  Share2, 
  CheckCircle2, 
  ChevronDown, 
  Sliders, 
  Layers, 
  Target, 
  Globe
} from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { siteConfig } from '../../config/siteConfig';

export const DigitalMarketingPage = () => {
  const [activeAdFormat, setActiveAdFormat] = useState('meta');
  const [funnelBudget, setFunnelBudget] = useState(25000);
  const [openFaq, setOpenFaq] = useState(null);

  // Ad Creative Switcher Data
  const adFormats = [
    { id: 'meta', name: 'Meta & Instagram Story (9:16)', badge: 'HIGH-CONVERTING SOCIAL' },
    { id: 'google', name: 'Google High-Intent Search', badge: 'INTENT SEARCH AD' },
    { id: 'linkedin', name: 'LinkedIn Executive Sponsored Post', badge: 'B2B THOUGHT LEADERSHIP' },
    { id: 'display', name: 'Programmatic Retargeting', badge: 'MULTI-NETWORK DISPLAY' },
  ];

  const deliverables = [
    { title: 'Full-Funnel Media Blueprint', desc: 'Detailed budget allocation, flighting schedule, and channel pacing models across search and paid social.' },
    { title: 'Conversion Landing Page Blueprints', desc: 'Sub-second load time landing page architectures with dynamic intent headline injection.' },
    { title: 'Omnichannel Ad Creative Suite', desc: 'Complete creative variations (Static, Motion Loops, Carousels, and 9:16 vertical video story cuts).' },
    { title: 'Automated Lifecycle Email & WhatsApp Sequences', desc: 'Event-triggered nurturing workflows designed to convert qualified inquiries into scheduled consultations.' },
    { title: 'Attribution & Executive BI Dashboards', desc: 'Custom Looker/BI dashboards mapping true Customer Acquisition Cost (CAC) and conversion pathways.' },
    { title: 'Comprehensive SEO Cluster Map', desc: 'Technical SEO audits, high-intent keyword gap analysis, and authority backlink architecture.' },
  ];

  const faqs = [
    { q: 'How do you handle multi-touch attribution and privacy compliance?', a: 'We implement server-side tracking (Conversions API) paired with first-party attribution modeling to ensure full transparency while upholding strict data privacy standards.' },
    { q: 'Do you manage both paid acquisition and organic SEO under one strategy?', a: 'Yes. Our growth frameworks synchronize paid search keywords with organic cluster content to dominate search engine results pages and maximize ROI.' },
    { q: 'What creative formats do you produce for advertising campaigns?', a: 'We formulate complete creative suites: high-impact static banners, 9:16 vertical motion stories, carousel decks, and copy variants tested against buyer personas.' },
    { q: 'How does the WhatsApp marketing workflow integrate with our CRM?', a: 'We configure event-triggered webhooks that instantly alert your team on WhatsApp when an enterprise lead qualifies, while triggering polite follow-ups.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#090B12] min-h-screen text-[#F5F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 01. DISTINCTIVE HERO: Growth Engine Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="violet" dot={true}>
                SERVICE PILLAR 02 // DIGITAL MARKETING & GROWTH
              </Badge>
              <span className="text-xs font-mono text-[#8B5CF6]">PERFORMANCE ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F7FC] leading-[1.06]">
              Algorithmic Precision.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#00F0FF] glow-text-violet">
                Predictable Pipelines.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#A8B1C2] leading-relaxed max-w-2xl font-normal">
              We engineer full-funnel customer acquisition systems uniting high-intent paid media, technical search engine dominance, and automated lifecycle workflows to scale enterprise revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
                Audit Acquisition Funnel
              </Button>
              <a
                href={siteConfig.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#141B2B] hover:bg-[#1C253B] text-[#F5F7FC] text-sm font-semibold border border-white/12 transition-all shadow-sm"
              >
                Inquire Campaign Capabilities via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Hero: Growth Analytics Telemetry Cockpit */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-3xl bg-[#141B2B] border border-white/[0.12] shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F7FC]">
                    Telemetry Acquisition Radar
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">
                  SERVER-SIDE TRACKING
                </span>
              </div>

              {/* Multi-Channel Allocation Bars */}
              <div className="space-y-4 my-2">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#F5F7FC]">Paid Search & Intent SEO</span>
                    <span className="text-[#3898FF] font-bold">45% Allocation</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#090B12] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3898FF] to-blue-400 w-[45%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#F5F7FC]">Paid Social (Meta & LinkedIn)</span>
                    <span className="text-[#8B5CF6] font-bold">35% Allocation</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#090B12] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#8B5CF6] to-purple-400 w-[35%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#F5F7FC]">Lifecycle WhatsApp & Email</span>
                    <span className="text-emerald-400 font-bold">20% Nurturing</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#090B12] overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[20%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Bottom Live Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/[0.08] text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#101522] border border-white/[0.08]">
                  <span className="text-[#A8B1C2] block text-[10px]">ATTRIBUTION MODEL</span>
                  <span className="text-[#8B5CF6] font-bold">First-Party CAPI</span>
                </div>
                <div className="p-3 rounded-xl bg-[#101522] border border-white/[0.08]">
                  <span className="text-[#A8B1C2] block text-[10px]">CAC REDUCTION SLA</span>
                  <span className="text-emerald-400 font-bold">Optimized Pacing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 02. INTERACTIVE AD CREATIVE FORMAT SWITCHER */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.12] shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] font-bold block mb-2">
              OMNICHANNEL CREATIVE SUITE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Multi-Format Ad Execution
            </h2>
            <p className="text-sm text-[#A8B1C2] mt-2">
              Preview how our creative studio tailors messaging across high-performing advertising channels.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {adFormats.map((format) => (
              <button
                key={format.id}
                onClick={() => setActiveAdFormat(format.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                  activeAdFormat === format.id
                    ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-[#F5F7FC] shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                    : 'bg-[#141B2B] border-white/[0.08] text-[#A8B1C2] hover:text-[#F5F7FC]'
                }`}
              >
                {format.name}
              </button>
            ))}
          </div>

          {/* Ad Format Live Preview Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141B2B] border border-white/[0.08]">
            {activeAdFormat === 'meta' && (
              <div className="max-w-sm mx-auto p-4 rounded-3xl bg-[#090B12] border-2 border-white/20 shadow-2xl space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#A8B1C2]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#3898FF] to-[#8B5CF6] flex items-center justify-center text-[10px] text-white font-bold">
                      NE
                    </div>
                    <span className="font-bold text-white">navandan.emporium</span>
                  </div>
                  <span className="text-[10px] text-[#A8B1C2]">Sponsored</span>
                </div>

                <div className="h-56 rounded-2xl bg-gradient-to-br from-blue-900/40 via-[#101522] to-violet-900/40 border border-white/[0.08] p-4 flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-[#3898FF] bg-[#3898FF]/20 px-2 py-0.5 rounded-full w-fit">
                    ENTERPRISE DIGITAL SOLUTIONS
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-white">Scale Your Digital Infrastructure</h4>
                    <p className="text-xs text-[#A8B1C2] mt-1">Full-service branding, marketing, and IT solutions.</p>
                  </div>
                  <div className="py-2 px-3 rounded-xl bg-[#3898FF] text-white text-xs font-bold text-center">
                    Swipe Up / Learn More
                  </div>
                </div>
              </div>
            )}

            {activeAdFormat === 'google' && (
              <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#090B12] border border-white/[0.1] space-y-3 font-sans">
                <div className="flex items-center gap-2 text-xs text-[#A8B1C2]">
                  <span className="font-bold text-white">Ad</span>
                  <span>•</span>
                  <span>https://www.navandanemporium.com/solutions</span>
                </div>
                <h4 className="text-xl font-bold text-[#3898FF] hover:underline cursor-pointer">
                  Navandan Emporium™ | Full-Service Branding, Growth & IT Agency
                </h4>
                <p className="text-xs sm:text-sm text-[#A8B1C2] leading-relaxed">
                  Bridge strategic brand identity, multi-channel performance media, and enterprise software engineering. Consult with senior strategists today.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#3898FF]">
                  <div className="underline cursor-pointer">Brand Identity Systems</div>
                  <div className="underline cursor-pointer">ERP & Business Automation</div>
                  <div className="underline cursor-pointer">Web & App Engineering</div>
                  <div className="underline cursor-pointer">Direct WhatsApp Consultation</div>
                </div>
              </div>
            )}

            {activeAdFormat === 'linkedin' && (
              <div className="max-w-xl mx-auto p-5 rounded-2xl bg-[#090B12] border border-white/[0.1] space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3898FF] to-[#8B5CF6] flex items-center justify-center font-bold text-white">
                    NE
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Navandan Emporium</div>
                    <div className="text-[10px] text-[#A8B1C2]">1,200+ followers • Promoted</div>
                  </div>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  Why fragmented agencies cost enterprises more in the long run: Discover how unifying brand storytelling and custom software engineering eliminates handoff friction.
                </p>
                <div className="p-4 rounded-xl bg-[#141B2B] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">Read Executive Blueprint</div>
                    <div className="text-[10px] text-[#A8B1C2]">navandanemporium.com</div>
                  </div>
                  <Button to="/contact" variant="primary" size="sm">Learn More</Button>
                </div>
              </div>
            )}

            {activeAdFormat === 'display' && (
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#090B12] border border-white/[0.1] text-center space-y-3">
                <span className="text-[10px] font-mono text-[#00F0FF]">PROGRAMMATIC 300x250 RETARGETING</span>
                <div className="p-5 rounded-xl bg-gradient-to-tr from-[#3898FF]/20 via-[#141B2B] to-[#8B5CF6]/20 border border-white/[0.08] space-y-2">
                  <div className="text-base font-extrabold text-white">Architect Your Digital Advantage</div>
                  <p className="text-xs text-[#A8B1C2]">Zero e-commerce bloat. Pure enterprise solutions.</p>
                  <Button to="/contact" variant="primary" size="sm">Get a Detailed Quote</Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 03. AUTOMATED WHATSAPP & EMAIL LIFECYCLE WORKFLOW */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#141B2B] border border-white/[0.12] shadow-2xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
              CONVERSION AUTOMATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Event-Driven Nurturing Workflows
            </h2>
            <p className="text-sm text-[#A8B1C2] mt-2">
              We connect paid traffic directly into instant WhatsApp alerts and automated executive email sequences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-[#3898FF]/20 text-[#3898FF] flex items-center justify-center mx-auto text-xs font-mono font-bold">
                01
              </div>
              <div className="text-sm font-bold text-white">Lead Qualification</div>
              <p className="text-[11px] text-[#A8B1C2]">Visitor submits scope & budget via 5-step wizard.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#101522] border border-emerald-500/40 space-y-2 text-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xs font-mono font-bold">
                02
              </div>
              <div className="text-sm font-bold text-emerald-300">WhatsApp Alert</div>
              <p className="text-[11px] text-[#A8B1C2]">Instant webhook triggers direct notification to +91-7024777327.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center mx-auto text-xs font-mono font-bold">
                03
              </div>
              <div className="text-sm font-bold text-white">Executive Case Study</div>
              <p className="text-[11px] text-[#A8B1C2]">Automated delivery of sector-specific architecture blueprint.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#101522] border border-white/[0.08] space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto text-xs font-mono font-bold">
                04
              </div>
              <div className="text-sm font-bold text-white">Consultation Call</div>
              <p className="text-[11px] text-[#A8B1C2]">Calendar booking confirmation with lead architect.</p>
            </div>
          </div>
        </div>

        {/* 04. DELIVERABLES MATRIX */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] font-bold block mb-2">
              OUTPUT SPECIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Growth Deliverables Included
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B1C2] mt-2">
              Actionable campaign assets, tracking scripts, and dashboards engineered for sustained pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#141B2B] border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6] w-fit">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7FC]">{item.title}</h3>
                  <p className="text-xs text-[#A8B1C2] leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[10px] font-mono text-emerald-400">
                  PERFORMANCE CALIBRATED
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 05. DIGITAL MARKETING FAQS */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] font-bold block mb-2">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">
              Digital Marketing & Growth FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#141B2B] border border-white/[0.08] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#F5F7FC]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#8B5CF6] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#A8B1C2] leading-relaxed border-t border-white/[0.06] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 06. CONSULTATION CTA */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-violet-950/30 via-[#101522] to-blue-950/30 border border-white/[0.12] text-center space-y-6">
          <Badge variant="violet">ACCELERATE YOUR ACQUISITION</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FC]">
            Ready to Build an Enduring Growth Engine?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B1C2] max-w-2xl mx-auto">
            Schedule a confidential funnel audit with our media strategists to identify pipeline gaps and scale acquisition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
              Audit Acquisition Funnel
            </Button>
            <a
              href={siteConfig.whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg"
            >
              <span>Instant WhatsApp Discussion</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
