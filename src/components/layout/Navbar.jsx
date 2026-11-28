
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  ChevronDown,
  Sparkles,
  Layers,
  TrendingUp,
  Code2,
  Cpu,
  ArrowUpRight,
  MessageSquare,
  Phone
} from 'lucide-react';
import { navigationData } from '../../data/navigationData';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui/Button';

export const Navbar = ({ onOpenMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  const serviceIcons = {
    'Branding & Creative': Layers,
    'Digital Marketing & Growth': TrendingUp,
    'Website & App Development': Code2,
    'ERP, CRM & Business Automation': Cpu
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080B14]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.4)]'
          : 'bg-[#080B14]/75 backdrop-blur-xl'
      }`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3898FF]/50 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-5 transition-all duration-500 ${
          scrolled ? 'h-[72px]' : 'h-[88px]'
        }`}>

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-12 h-12 rounded-[17px] p-[1.5px] bg-gradient-to-br from-[#3898FF] via-[#5865F2] to-[#9B5CFF] shadow-[0_0_25px_rgba(56,152,255,0.22)] group-hover:shadow-[0_0_35px_rgba(56,152,255,0.5)] transition-all duration-300">
              <div className="w-full h-full rounded-[15px] bg-[#090C16] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] to-[#A78BFA] text-lg tracking-wide">
                  ND
                </span>
              </div>
            </div>


<div className="flex flex-col leading-none">
  <span className="text-[17px] font-extrabold tracking-tight text-white group-hover:text-[#70B5FF] transition-colors">
    NAVANDAN
  </span>
  <span className="mt-1 text-[10px] font-mono font-semibold tracking-[0.22em] text-slate-400">
    DIGITAL
  </span>
</div>


          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigationData.links.map((link) => {
              if (link.children) {
                const active = location.pathname.startsWith('/services');

                return (
                  <div
                    key={link.label}
                    className="relative py-3"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((value) => !value)}
                      onFocus={() => setServicesOpen(true)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        active || servicesOpen
                          ? 'text-[#70B5FF] bg-[#3898FF]/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        servicesOpen ? 'rotate-180 text-[#70B5FF]' : ''
                      }`} />
                    </button>

                   {servicesOpen && (
  <div className="absolute top-full left-0 w-[22rem] pt-2 z-[100]">
    <div
      className="rounded-2xl p-3 border border-[#34415A] shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
      style={{
        backgroundColor: '#080D18',
        opacity: 1,
        backdropFilter: 'none',
      }}
    >
                          <div className="flex items-center gap-2 px-3 py-2 mb-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#70B5FF]" />
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold">
                              Explore Our Services
                            </span>
                          </div>

                          {link.children.map((sub) => {
                            const Icon = serviceIcons[sub.label] || Sparkles;
                            const activeSub = location.pathname === sub.path;

                            return (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                                  activeSub
                                    ? 'bg-[#3898FF]/15 border border-[#3898FF]/20'
                                    : 'border border-transparent hover:bg-white/[0.06] hover:border-white/[0.07]'
                                }`}
                              >
                                <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#3898FF]/20 to-[#8B5CF6]/15 text-[#70B5FF] group-hover:from-[#3898FF]/30 group-hover:to-[#8B5CF6]/25 transition-all">
                                  <Icon className="w-5 h-5" />
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="text-xs font-bold text-white group-hover:text-[#70B5FF] transition-colors">
                                      {sub.label}
                                    </span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-[#70B5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </div>
                                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                                    {sub.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    active
                      ? 'text-[#70B5FF] bg-[#3898FF]/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-gradient-to-r from-[#3898FF] to-[#8B5CF6]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={siteConfig.whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/[0.09] border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/[0.17] hover:border-emerald-400/50 transition-all duration-300 text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>

            <a
              href={siteConfig.telLink}
              aria-label="Call Navandan Digital"
              className="hidden xl:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.045] border border-white/[0.09] text-slate-200 hover:border-[#3898FF]/40 hover:text-white transition-all duration-300 text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-[#70B5FF]" />
              +91-8989267327
            </a>

            <Link
  to="/contact"
  className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-xl
  bg-gradient-to-r from-[#287FE8] to-[#7655E8]
  text-white text-sm font-bold
  hover:shadow-[0_0_25px_rgba(56,152,255,0.35)]
  hover:-translate-y-0.5 transition-all duration-300"
>
  Get a Quote
  <ArrowUpRight className="w-4 h-4" />
</Link>

            <button
              type="button"
              onClick={() => onOpenMobileMenu?.()}
              aria-label="Open mobile menu"
              className="md:hidden p-2.5 rounded-xl border border-white/10 bg-white/[0.05] text-slate-200 hover:text-white hover:border-[#3898FF]/40 transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
