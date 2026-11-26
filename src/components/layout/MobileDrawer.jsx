import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  ArrowUpRight, 
  Layers, 
  TrendingUp, 
  Code2, 
  Cpu, 
  Mail, 
  Phone, 
  MessageSquare 
} from 'lucide-react';
import { navigationData } from '../../data/navigationData';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui/Button';

export const MobileDrawer = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  const serviceIcons = {
    'Branding & Creative': Layers,
    'Digital Marketing & Growth': TrendingUp,
    'Website & App Development': Code2,
    'ERP, CRM & Business Automation': Cpu,
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#08090D]/98 backdrop-blur-2xl">
      {/* Drawer Top Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
        <Link to="/" onClick={onClose} className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-800 p-0.5">
            <div className="w-full h-full bg-[#08090D] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-blue-400 text-xs">NE</span>
            </div>
          </div>
          <span className="font-bold text-sm tracking-tight text-white">NAVANDAN DIGITAL</span>
        </Link>

        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        
        {/* Quick Contact Buttons on Mobile */}
        <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/[0.08]">
          <a
            href={siteConfig.whatsappChatLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href={siteConfig.telLink}
            onClick={onClose}
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
            Navigation
          </div>
          {navigationData.links.map((link) => {
            if (link.children) return null;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Services Section */}
        <div className="space-y-2 pt-4 border-t border-white/[0.08]">
          <Link to="/services" onClick={onClose} className="block px-3 py-2 text-sm font-semibold text-blue-400 hover:text-white">All Services â†’</Link>
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
            Service Verticals
          </div>
          {navigationData.links.find(l => l.children)?.children.map((sub) => {
            const Icon = serviceIcons[sub.label] || Layers;
            const isActive = location.pathname === sub.path;
            return (
              <Link
                key={sub.path}
                to={sub.path}
                onClick={onClose}
                className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-500/15 border border-blue-500/30 text-white'
                    : 'hover:bg-white/[0.04] text-slate-300'
                }`}
              >
                <div className="mt-0.5 p-1.5 rounded-md bg-blue-500/10 text-blue-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{sub.label}</div>
                  <p className="text-xs text-slate-400 mt-0.5">{sub.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Direct Contacts Info */}
        <div className="space-y-2 pt-4 border-t border-white/[0.08] text-xs font-mono text-slate-400">
          <div>Email: <a href={siteConfig.emailLink} className="text-slate-300 underline">{siteConfig.contactEmail}</a></div>
          <div>Phone: <a href={siteConfig.telLink} className="text-slate-300 underline">{siteConfig.phoneDisplay}</a></div>
        </div>
      </div>

      {/* Drawer Bottom CTA */}
      <div className="p-6 border-t border-white/[0.08] bg-[#0E1017]">
        <Button
          to="/contact"
          onClick={onClose}
          variant="primary"
          size="lg"
          className="w-full"
          icon={ArrowUpRight}
        >
          Let's Build Something Great
        </Button>
      </div>
    </div>
  );
};
