import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  const serviceIcons = {
    'Branding & Creative': Layers,
    'Digital Marketing & Growth': TrendingUp,
    'Website & App Development': Code2,
    'ERP, CRM & Business Automation': Cpu,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090B12]/92 backdrop-blur-2xl border-b border-white/[0.1] shadow-[0_10px_35px_rgba(0,0,0,0.6)] py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#3898FF] via-[#4F75FF] to-[#8B5CF6] p-0.5 shadow-[0_0_25px_rgba(56,152,255,0.45)] group-hover:shadow-[0_0_35px_rgba(56,152,255,0.7)] transition-all duration-300">
              <div className="w-full h-full bg-[#090B12] rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] to-[#8B5CF6] text-sm tracking-wider">
                  NE
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-[#F5F7FC] group-hover:text-[#3898FF] transition-colors">
                NAVANDAN
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#A8B1C2] uppercase -mt-1 font-semibold">
                EMPORIUM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navigationData.links.map((link) => {
              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                        location.pathname.startsWith('/services')
                          ? 'text-[#3898FF] bg-[#3898FF]/15 shadow-sm'
                          : 'text-[#A8B1C2] hover:text-[#F5F7FC] hover:bg-white/[0.06]'
                      }`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180 text-[#3898FF]' : 'text-[#A8B1C2]'
                        }`}
                      />
                    </button>

                    {/* Services Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-88 pt-2.5 transition-all duration-200">
                        <div className="p-3 rounded-2xl bg-[#101522] border border-white/[0.12] backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] space-y-1">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-[#A8B1C2] px-3 py-1.5 font-bold">
                            Core Capabilities
                          </div>
                          <div className="space-y-1">
                            {link.children.map((sub) => {
                              const IconComponent = serviceIcons[sub.label] || Sparkles;
                              const isActive = location.pathname === sub.path;
                              return (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  className={`flex items-start gap-3.5 p-3 rounded-xl transition-all group ${
                                    isActive
                                      ? 'bg-[#3898FF]/20 border border-[#3898FF]/40 text-[#F5F7FC]'
                                      : 'hover:bg-[#141B2B] text-[#A8B1C2] hover:text-[#F5F7FC]'
                                  }`}
                                >
                                  <div className="mt-0.5 p-2 rounded-lg bg-[#3898FF]/15 text-[#3898FF] group-hover:bg-[#3898FF]/25 transition-colors">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-bold text-[#F5F7FC] group-hover:text-[#3898FF] transition-colors flex items-center justify-between">
                                      <span>{sub.label}</span>
                                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3898FF]" />
                                    </div>
                                    <p className="text-[11px] text-[#A8B1C2] line-clamp-1 mt-0.5">
                                      {sub.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-[#3898FF] bg-[#3898FF]/15 shadow-sm'
                      : 'text-[#A8B1C2] hover:text-[#F5F7FC] hover:bg-white/[0.06]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Action Button & Contacts */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Quick Icon */}
            <a
              href={siteConfig.whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Phone Link */}
            <a
              href={siteConfig.telLink}
              aria-label="Call Navandan Emporium"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141B2B] hover:bg-white/[0.1] text-[#F5F7FC] border border-white/[0.1] text-xs font-mono font-semibold transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#3898FF]" />
              <span>+91-7024777327</span>
            </a>

            <Button
              to={navigationData.cta.path}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              icon={ArrowUpRight}
            >
              {navigationData.cta.label}
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={onOpenMobileMenu}
              className="md:hidden p-2.5 text-[#A8B1C2] hover:text-[#F5F7FC] hover:bg-white/[0.08] rounded-xl transition-colors border border-white/[0.08]"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
