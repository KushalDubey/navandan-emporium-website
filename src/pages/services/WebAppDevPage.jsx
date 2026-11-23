import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Code2, 
  Terminal, 
  Cpu, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  Layers, 
  GitBranch, 
  Workflow
} from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { siteConfig } from '../../config/siteConfig';

export const WebAppDevPage = () => {
  const [viewportMode, setViewportMode] = useState('desktop');
  const [openFaq, setOpenFaq] = useState(null);

  const techStack = [
    { category: 'Frontend Architecture', tech: ['React 18', 'Vite', 'Tailwind CSS', 'Motion', 'Next.js'], icon: Code2 },
    { category: 'Backend & APIs', tech: ['Node.js', 'Python', 'FastAPI', 'GraphQL', 'REST Microservices'], icon: Cpu },
    { category: 'Cloud Infrastructure', tech: ['Cloudflare Edge', 'Docker', 'AWS / Vercel', 'PostgreSQL', 'Redis'], icon: Workflow },
    { category: 'QA & Compliance', tech: ['WCAG 2.1 AA', 'ESLint / Prettier', 'CI/CD GitHub Actions', 'OWASP Hardening'], icon: ShieldCheck },
  ];

  const deliverables = [
    { title: 'Modular Production-Ready Codebase', desc: 'Strict separation of concerns, zero legacy bloat, reusable component design systems, and full source code ownership.' },
    { title: 'Automated CI/CD Deployment Pipeline', desc: 'Automated testing and zero-downtime deployment workflows configured for GitHub, Cloudflare Edge, or AWS.' },
    { title: 'Core Web Vitals 95+ Score Audit', desc: 'Guaranteed sub-second First Contentful Paint (FCP), zero Cumulative Layout Shift (CLS), and optimal caching.' },
    { title: 'API & Component Documentation', desc: 'Interactive Storybook component catalogs and OpenAPI/Swagger documentation for internal development teams.' },
    { title: 'Cross-Browser & Cross-Device QA Suite', desc: 'Rigorous manual and automated testing across Chrome, Safari, Firefox, iOS, and Android viewports.' },
    { title: 'Enterprise Security Hardening', desc: 'Content Security Policy (CSP) headers, rate limiting, sanitization, and OWASP Top 10 compliance audits.' },
  ];

  const faqs = [
    { q: 'Do we own the full source code and intellectual property upon project completion?', a: 'Yes. You receive 100% intellectual property ownership, clean Git repositories, and complete administrative control with zero vendor lock-in.' },
    { q: 'How do you guarantee sub-second load times and high Core Web Vitals?', a: 'We architect frontend platforms with zero unnecessary runtime dependencies, modern image encoding (WebP/AVIF), edge server rendering, and atomic CSS.' },
    { q: 'Can you integrate with our existing backend or headless CMS?', a: 'Yes. Our frontends decouple cleanly to connect with Strapi, Contentful, Sanity, Shopify Storefront API, or custom internal REST/GraphQL backends.' },
    { q: 'What is the handoff and maintenance protocol after launch?', a: 'We provide structured developer runbooks, architecture walkthrough recordings, and optional ongoing retainer sprints for continuous feature iteration.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#090B12] min-h-screen text-[#F5F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 01. DISTINCTIVE HERO: Terminal & Engineering Aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="cyan" dot={true}>
                SERVICE PILLAR 03 // WEBSITE & APPLICATION ENGINEERING
              </Badge>
              <span className="text-xs font-mono text-[#00F0FF]">PRODUCT-ENGINEERING</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F7FC] leading-[1.06]">
              Sub-Second Speed.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#3898FF] to-[#8B5CF6] glow-text-blue">
                Infinite Scalability.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#A8B1C2] leading-relaxed max-w-2xl font-normal">
              We engineer custom web platforms, bespoke SaaS applications, and responsive product interfaces with clean component architectures, zero bloat, and enterprise security.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
                Scope Platform Architecture
              </Button>
              <a
                href={siteConfig.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#141B2B] hover:bg-[#1C253B] text-[#F5F7FC] text-sm font-semibold border border-white/12 transition-all shadow-sm"
              >
                Inquire Technical Stack via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Hero: Live Terminal Engine */}
          <div className="lg:col-span-5 relative">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#141B2B] border border-white/[0.12] shadow-2xl relative overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00F0FF]" />
                  <span className="text-white font-bold">engine.architecture.sh</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                  TESTS: 48/48 PASSING
                </span>
              </div>

              {/* Terminal Code Simulation */}
              <div className="space-y-2 text-[#A8B1C2] leading-relaxed">
                <div><span className="text-[#3898FF]">$</span> npx vite build --platform=edge</div>
                <div className="text-emerald-400">✓ 1,605 modules transformed in 4.12s.</div>
                <div><span className="text-[#8B5CF6]">&gt;</span> First Contentful Paint: <span className="text-white font-bold">0.42s</span></div>
                <div><span className="text-[#8B5CF6]">&gt;</span> Cumulative Layout Shift: <span className="text-white font-bold">0.00</span></div>
                <div><span className="text-[#8B5CF6]">&gt;</span> WCAG Accessibility Audit: <span className="text-emerald-400 font-bold">100/100 AA</span></div>
                <div><span className="text-[#8B5CF6]">&gt;</span> Bundle Size (gzip): <span className="text-[#00F0FF] font-bold">81.03 kB</span></div>
              </div>

              {/* Live Status Row */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/[0.08]">
                <div className="p-3 rounded-xl bg-[#090B12] border border-white/[0.08]">
                  <span className="text-[#A8B1C2] block text-[10px]">TIME TO FIRST BYTE</span>
                  <span className="text-[#00F0FF] font-bold">&lt; 45ms Global</span>
                </div>
                <div className="p-3 rounded-xl bg-[#090B12] border border-white/[0.08]">
                  <span className="text-[#A8B1C2] block text-[10px]">SECURITY AUDIT</span>
                  <span className="text-emerald-400 font-bold">OWASP Hardened</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 02. INTERACTIVE DEVICE VIEWPORT SIMULATOR */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.12] shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-1">
                RESPONSIVE ENGINEERING
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
                Cross-Device Viewport Calibration
              </h2>
            </div>

            {/* Viewport Toggles */}
            <div className="flex items-center p-1 rounded-xl bg-[#090B12] border border-white/[0.08]">
              <button
                onClick={() => setViewportMode('desktop')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  viewportMode === 'desktop' ? 'bg-[#3898FF] text-white shadow-md' : 'text-[#A8B1C2]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop (1920)</span>
              </button>
              <button
                onClick={() => setViewportMode('tablet')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  viewportMode === 'tablet' ? 'bg-[#3898FF] text-white shadow-md' : 'text-[#A8B1C2]'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet (768)</span>
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  viewportMode === 'mobile' ? 'bg-[#3898FF] text-white shadow-md' : 'text-[#A8B1C2]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile (375)</span>
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview Container */}
          <div className="p-6 sm:p-10 rounded-2xl bg-[#090B12] border border-white/[0.08] flex items-center justify-center min-h-[380px] overflow-hidden">
            {viewportMode === 'desktop' && (
              <div className="w-full max-w-4xl p-5 rounded-2xl bg-[#141B2B] border border-white/[0.1] space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono text-[#A8B1C2]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-white font-bold">Desktop Enterprise Portal</span>
                  </div>
                  <span className="text-[#3898FF]">1920 x 1080 (100% Scale)</span>
                </div>
                <div className="grid grid-cols-4 gap-3 py-4">
                  <div className="p-4 rounded-xl bg-[#101522] border border-white/[0.06] space-y-1">
                    <div className="h-2 w-12 rounded bg-[#3898FF]/40" />
                    <div className="h-4 w-16 rounded bg-white/20" />
                  </div>
                  <div className="p-4 rounded-xl bg-[#101522] border border-white/[0.06] space-y-1">
                    <div className="h-2 w-12 rounded bg-[#8B5CF6]/40" />
                    <div className="h-4 w-16 rounded bg-white/20" />
                  </div>
                  <div className="p-4 rounded-xl bg-[#101522] border border-white/[0.06] space-y-1">
                    <div className="h-2 w-12 rounded bg-emerald-500/40" />
                    <div className="h-4 w-16 rounded bg-white/20" />
                  </div>
                  <div className="p-4 rounded-xl bg-[#101522] border border-white/[0.06] space-y-1">
                    <div className="h-2 w-12 rounded bg-[#00F0FF]/40" />
                    <div className="h-4 w-16 rounded bg-white/20" />
                  </div>
                </div>
              </div>
            )}

            {viewportMode === 'tablet' && (
              <div className="w-[580px] p-5 rounded-2xl bg-[#141B2B] border-2 border-white/[0.14] space-y-3 shadow-2xl">
                <div className="flex items-center justify-between text-xs font-mono text-[#A8B1C2] border-b border-white/[0.06] pb-2">
                  <span className="text-white font-bold">Tablet Viewport Frame</span>
                  <span className="text-[#3898FF]">768 x 1024</span>
                </div>
                <div className="grid grid-cols-2 gap-3 py-3">
                  <div className="p-3.5 rounded-xl bg-[#101522] border border-white/[0.06] space-y-1">
                    <div className="h-2 w-16 rounded bg-[#3898FF]/40" />
                    <div className="h-3 w-24 rounded bg-white/20" />
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#101522] border border-white/[0.06] space-y-1">
                    <div className="h-2 w-16 rounded bg-[#8B5CF6]/40" />
                    <div className="h-3 w-24 rounded bg-white/20" />
                  </div>
                </div>
              </div>
            )}

            {viewportMode === 'mobile' && (
              <div className="w-[320px] p-4 rounded-3xl bg-[#141B2B] border-2 border-white/[0.2] space-y-3 shadow-2xl">
                <div className="flex justify-between items-center text-[9px] font-mono text-[#A8B1C2] px-1">
                  <span>09:41</span>
                  <div className="w-12 h-2.5 bg-black rounded-full" />
                  <span className="text-emerald-400">100%</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#101522] border border-white/[0.06] space-y-2">
                  <div className="h-2 w-20 rounded bg-[#3898FF]/60" />
                  <div className="h-3 w-32 rounded bg-white/30" />
                  <div className="h-2 w-24 rounded bg-[#A8B1C2]/40" />
                </div>
                <div className="h-1 w-16 bg-white/20 rounded-full mx-auto" />
              </div>
            )}
          </div>
        </div>

        {/* 03. ENTERPRISE TECHNOLOGY ARCHITECTURE STACK */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
              STACK TRANSPARENCY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Production Architecture Stack
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B1C2] mt-2">
              Modern, decoupled technologies selected for high performance, developer ergonomics, and rock-solid security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.category}
                  className="p-6 rounded-2xl bg-[#141B2B] border border-white/[0.08] hover:border-[#3898FF]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 rounded-xl bg-[#3898FF]/15 text-[#3898FF] w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#F5F7FC] mb-3">{tier.category}</h3>
                    <ul className="space-y-2">
                      {tier.tech.map((t) => (
                        <li key={t} className="flex items-center gap-2 text-xs text-[#A8B1C2]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3898FF] shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#00F0FF]">
                    PRODUCTION TESTED
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 04. DELIVERABLES MATRIX */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
              DELIVERABLE SPECIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Software Deliverables Included
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B1C2] mt-2">
              Every development milestone includes verified code, automated CI/CD pipelines, and comprehensive documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#141B2B] border border-white/[0.08] hover:border-[#3898FF]/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-[#00F0FF]/15 text-[#00F0FF] w-fit">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7FC]">{item.title}</h3>
                  <p className="text-xs text-[#A8B1C2] leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[10px] font-mono text-emerald-400">
                  ENTERPRISE CERTIFIED
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 05. FAQS */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
              TECHNICAL QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">
              Web & App Engineering FAQs
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
                  <ChevronDown className={`w-4 h-4 text-[#00F0FF] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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

        {/* 06. ARCHITECTURE CTA */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950/30 via-[#101522] to-blue-950/30 border border-white/[0.12] text-center space-y-6">
          <Badge variant="cyan">DEPLOY YOUR WEB PLATFORM</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FC]">
            Ready to Build an Enterprise-Grade Digital Product?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B1C2] max-w-2xl mx-auto">
            Schedule an architecture scoping session with our lead engineers to map your database schema, component tree, and deployment pipeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
              Scope Platform Architecture
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
