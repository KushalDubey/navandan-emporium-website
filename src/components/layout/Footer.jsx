import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { navigationData } from '../../data/navigationData';
import { Mail, Phone, MessageSquare, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080E] text-[#A8B1C2] pt-20 pb-14 overflow-hidden">
      
      {/* Ambient Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#3898FF]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prominent Pre-Footer CTA Banner */}
        <div className="mb-20 p-8 sm:p-14 rounded-3xl bg-[#101522] border border-white/[0.12] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3.5 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3898FF]/15 text-[#3898FF] text-xs font-mono font-bold border border-[#3898FF]/30">
              <Sparkles className="w-3.5 h-3.5" />
              ENTERPRISE ENGAGEMENT
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FC] tracking-tight">
              {siteConfig.ctaHeadline}
            </h2>
            
            <p className="text-sm sm:text-base text-[#A8B1C2] leading-relaxed">
              {siteConfig.ctaSubheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={siteConfig.whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={ArrowUpRight}
            >
              Get a Detailed Quote
            </Button>
          </div>
        </div>

        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          
          {/* Brand Info & Official Contacts */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="flex items-center gap-3.5">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#3898FF] to-[#8B5CF6] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#090B12] rounded-[14px] flex items-center justify-center">
                  <span className="font-extrabold text-[#3898FF] text-sm">NE</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-[#F5F7FC]">NAVANDAN</span>
                <span className="text-[10px] font-mono tracking-widest text-[#A8B1C2] uppercase -mt-1 font-semibold">
                  EMPORIUM
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#A8B1C2] leading-relaxed max-w-sm">
              {siteConfig.shortDescription}
            </p>

            {/* Direct Official Contact Links */}
            <div className="pt-2 space-y-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#3898FF]/15 text-[#3898FF]">
                  <Mail className="w-4 h-4 shrink-0" />
                </div>
                <a
                  href={siteConfig.emailLink}
                  className="text-[#F5F7FC] hover:text-[#3898FF] font-semibold transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#8B5CF6]/15 text-[#A78BFA]">
                  <Phone className="w-4 h-4 shrink-0" />
                </div>
                <a
                  href={siteConfig.telLink}
                  className="text-[#F5F7FC] hover:text-[#A78BFA] font-semibold transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400">
                  <MessageSquare className="w-4 h-4 shrink-0" />
                </div>
                <a
                  href={siteConfig.whatsappChatLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  WhatsApp: +91-7024777327
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-[#A8B1C2]">
              <span className="text-[#3898FF] font-bold">Review Protocol:</span> {siteConfig.reviewNote}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#F5F7FC] font-bold">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs">
              {navigationData.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#3898FF] text-[#A8B1C2] transition-colors inline-flex items-center gap-1.5 font-medium"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Directory & Factual Metrics */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-xs font-mono uppercase tracking-wider text-[#F5F7FC] font-bold">
              Core Capabilities
            </div>
            
            <ul className="space-y-2.5 text-xs">
              {navigationData.links.find(l => l.children)?.children.map((sub) => (
                <li key={sub.path}>
                  <Link
                    to={sub.path}
                    className="hover:text-[#3898FF] text-[#A8B1C2] transition-colors inline-flex items-center justify-between w-full group font-medium"
                  >
                    <span>{sub.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3898FF]" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Factual Structural Metrics Summary */}
            <div className="p-4 rounded-2xl bg-[#101522] border border-white/[0.08] text-xs font-mono space-y-1.5">
              <div className="text-[#A8B1C2] uppercase tracking-widest text-[9px] font-bold mb-1">
                Factual Architecture Metrics
              </div>
              <div className="flex justify-between text-[#F5F7FC]">
                <span>Core Service Pillars:</span>
                <span className="text-[#3898FF] font-bold">04</span>
              </div>
              <div className="flex justify-between text-[#F5F7FC]">
                <span>Capability Categories:</span>
                <span className="text-[#8B5CF6] font-bold">07</span>
              </div>
              <div className="flex justify-between text-[#F5F7FC]">
                <span>Integrated Solutions Partner:</span>
                <span className="text-emerald-400 font-bold">01</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8B1C2]">
          <div>
            © {siteConfig.year} Navandan Emporium. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold">
              Enterprise Standards • Secure & Accessible
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-[#F5F7FC]">HQ: India • Serving Visionary Clients</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
