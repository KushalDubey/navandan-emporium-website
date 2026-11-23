import React from 'react';
import { EnquirySection } from '../components/home/EnquirySection';
import { Mail, Phone, MessageSquare, MapPin, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Badge } from '../components/ui/Badge';

export const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 bg-[#090B12] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue" dot={true}>
            OFFICIAL CONSULTATION & DIRECTORY
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F5F7FC] tracking-tight leading-[1.08]">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#7B96FF] to-[#8B5CF6] glow-text-blue">
              Great Together.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A8B1C2] leading-relaxed max-w-2xl mx-auto">
            Reach out through our direct communication channels or initiate a comprehensive project discovery with our multi-step wizard.
          </p>
        </div>

        {/* 3 Prominent Official Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {/* WhatsApp Direct */}
          <a
            href={siteConfig.whatsappChatLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-3xl bg-[#141B2B] border border-emerald-500/30 hover:border-emerald-500 hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)] transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 w-fit group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1 font-bold">
                  Instant Messaging
                </span>
                <h3 className="text-2xl font-bold text-[#F5F7FC] group-hover:text-emerald-300 transition-colors">
                  WhatsApp Direct
                </h3>
                <p className="text-xs text-[#A8B1C2] mt-2 leading-relaxed">
                  Start a direct chat with our leadership team for urgent inquiries or immediate consultations.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
              <span>+91-7024777327</span>
              <span className="underline">Open Chat &rarr;</span>
            </div>
          </a>

          {/* Email Direct */}
          <a
            href={siteConfig.emailLink}
            className="p-8 rounded-3xl bg-[#141B2B] border border-[#3898FF]/30 hover:border-[#3898FF] hover:shadow-[0_15px_40px_rgba(56,152,255,0.25)] transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#3898FF]/15 text-[#3898FF] border border-[#3898FF]/30 w-fit group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#3898FF] uppercase tracking-widest block mb-1 font-bold">
                  Official Inquiries
                </span>
                <h3 className="text-2xl font-bold text-[#F5F7FC] group-hover:text-[#3898FF] transition-colors">
                  Direct Email
                </h3>
                <p className="text-xs text-[#A8B1C2] mt-2 leading-relaxed">
                  Send detailed project briefs, RFP specifications, or schedule an executive discovery call.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#3898FF] font-bold">
              <span className="truncate pr-2">{siteConfig.contactEmail}</span>
              <span className="underline shrink-0">Send Email &rarr;</span>
            </div>
          </a>

          {/* Phone Direct */}
          <a
            href={siteConfig.telLink}
            className="p-8 rounded-3xl bg-[#141B2B] border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-[0_15px_40px_rgba(139,92,246,0.25)] transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#8B5CF6]/15 text-[#A78BFA] border border-[#8B5CF6]/30 w-fit group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-widest block mb-1 font-bold">
                  Telephone Consultation
                </span>
                <h3 className="text-2xl font-bold text-[#F5F7FC] group-hover:text-[#A78BFA] transition-colors">
                  Direct Line
                </h3>
                <p className="text-xs text-[#A8B1C2] mt-2 leading-relaxed">
                  Speak directly with an enterprise solutions architect regarding project scope and timelines.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8B5CF6] font-bold">
              <span>{siteConfig.phoneDisplay}</span>
              <span className="underline">Call Now &rarr;</span>
            </div>
          </a>
        </div>

        {/* Policy & Review Note Strip */}
        <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-[#101522] border border-white/[0.08] flex items-center justify-between gap-4 text-xs font-mono text-[#A8B1C2] mb-12">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#3898FF] shrink-0" />
            <span>Review Standard: {siteConfig.reviewNote}</span>
          </div>
          <span className="text-[#3898FF] font-semibold hidden sm:inline">Direct Consultations Welcome</span>
        </div>

      </div>

      {/* Embedded 5-Step Project Wizard */}
      <EnquirySection />
    </div>
  );
};
