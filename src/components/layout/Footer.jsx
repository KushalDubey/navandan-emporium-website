
import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { navigationData } from '../../data/navigationData';
import {
  Mail,
  Phone,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  MoveUpRight
} from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => {
  const serviceLinks =
    navigationData.links.find((link) => link.children)?.children || [];

  return (
    <footer className="relative overflow-hidden bg-[#070912] text-slate-300 border-t border-white/[0.08]">

      {/* Background atmosphere */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[350px] rounded-full bg-[#3898FF]/[0.08] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[300px] rounded-full bg-[#8B5CF6]/[0.07] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">

               {/* Main Footer */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pt-6 pb-20">
          {/* Brand and Contact */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-[17px] p-[1.5px] bg-gradient-to-br from-[#3898FF] via-[#5865F2] to-[#9B5CFF] shadow-[0_0_25px_rgba(56,152,255,0.2)] group-hover:shadow-[0_0_30px_rgba(56,152,255,0.4)] transition-all">
                <div className="w-full h-full rounded-[15px] bg-[#090C16] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] to-[#A78BFA] text-lg">
                    ND
                  </span>
                </div>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  NAVANDAN
                </span>
                <span className="mt-1 text-[10px] font-mono font-semibold tracking-[0.22em] text-slate-400">
                  DIGITAL
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm sm:text-[15px] leading-7 text-slate-400">
              {siteConfig.shortDescription}
            </p>

            <div className="mt-7 space-y-3.5">
              <a
                href={siteConfig.emailLink}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#70B5FF] transition-colors group"
              >
                <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#3898FF]/10 border border-[#3898FF]/15 text-[#70B5FF] group-hover:bg-[#3898FF]/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <span>{siteConfig.contactEmail}</span>
              </a>

              <a
                href={siteConfig.telLink}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#A78BFA] transition-colors group"
              >
                <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/15 text-[#A78BFA] group-hover:bg-[#8B5CF6]/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={siteConfig.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/15 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <span>WhatsApp: +91-8989267327</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              Explore
            </h3>

            <ul className="space-y-4">
              {navigationData.links.map((link) => (
                <li key={link.path || link.label}>
                  <Link
                    to={link.path || '/services'}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <span>{link.label}</span>
                    <MoveUpRight className="w-3.5 h-3.5 text-[#70B5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              What We Do
            </h3>

            <ul className="space-y-4">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#70B5FF] transition-colors group"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#70B5FF] hover:text-white transition-colors"
            >
              Discuss your project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
<div className="border-t border-white/[0.09] pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            <p>&copy; 2026 Navandan Digital. All rights reserved.</p>
          </p>

          <p className="text-xs text-slate-400 text-center">
            <span className="text-[#70B5FF] font-semibold">
              Creative. Marketing. Technology.
            </span>
            <span className="mx-2 text-slate-700">|</span>
            Based in India
          </p>
        </div>
      </div>
    </footer>
  );
};
