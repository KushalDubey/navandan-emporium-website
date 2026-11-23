
import React from 'react';
import { EnquirySection } from '../components/home/EnquirySection';
import { Mail, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Badge } from '../components/ui/Badge';

const contactMethods = [
  {
    title: 'WhatsApp Direct',
    label: 'INSTANT MESSAGING',
    description: 'Message us to discuss your project, requirements or questions.',
    value: '+91-7024777327',
    action: 'Open WhatsApp',
    href: siteConfig.whatsappChatLink,
    icon: MessageSquare,
    color: 'emerald',
  },
  {
    title: 'Direct Email',
    label: 'OFFICIAL ENQUIRIES',
    description: 'Share your project details, ideas or business requirements by email.',
    value: siteConfig.contactEmail,
    action: 'Send Email',
    href: siteConfig.emailLink,
    icon: Mail,
    color: 'blue',
  },
  {
    title: 'Direct Line',
    label: 'PHONE CONSULTATION',
    description: 'Call us to discuss your requirements and possible next steps.',
    value: siteConfig.phoneDisplay,
    action: 'Call Now',
    href: siteConfig.telLink,
    icon: Phone,
    color: 'violet',
  },
];

const colorStyles = {
  emerald: {
    card: 'border-emerald-500/20 hover:border-emerald-500/50',
    icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    label: 'text-emerald-400',
    action: 'text-emerald-400',
  },
  blue: {
    card: 'border-blue-500/20 hover:border-blue-500/50',
    icon: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    label: 'text-blue-400',
    action: 'text-blue-400',
  },
  violet: {
    card: 'border-violet-500/20 hover:border-violet-500/50',
    icon: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    label: 'text-violet-400',
    action: 'text-violet-400',
  },
};

export const ContactPage = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-16 bg-[#090B12] min-h-screen">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Hero */}
        <section className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">

          <Badge variant="blue" dot={true}>
            GET IN TOUCH
          </Badge>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F7FC] tracking-tight leading-[1.08]">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#7B96FF] to-[#8B5CF6] glow-text-blue">
              Great Together.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#A8B1C2] leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Choose how you'd like to connect with us,
            or share your requirements through the enquiry form.
          </p>

        </section>

        {/* Contact Methods */}
        <section
          aria-label="Contact methods"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto mb-14"
        >

          {contactMethods.map((method) => {
            const Icon = method.icon;
            const styles = colorStyles[method.color];

            return (
              <a
                key={method.title}
                href={method.href}
                target={method.color === 'emerald' ? '_blank' : undefined}
                rel={method.color === 'emerald' ? 'noopener noreferrer' : undefined}
                className={`group min-w-0 min-h-[245px] p-5 sm:p-6 rounded-2xl bg-[#141B2B] border ${styles.card} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >

                <div>

                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${styles.icon} group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <p className={`mt-5 text-[11px] sm:text-xs font-mono tracking-[0.16em] font-bold ${styles.label}`}>
                    {method.label}
                  </p>

                  <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#F5F7FC] group-hover:text-white transition-colors">
                    {method.title}
                  </h2>

                  <p className="mt-2 text-sm text-[#A8B1C2] leading-relaxed">
                    {method.description}
                  </p>

                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">

                  <span className="text-xs sm:text-sm font-medium text-[#D5DCE8] truncate">
                    {method.value}
                  </span>

                  <span className={`shrink-0 flex items-center gap-1.5 text-xs font-semibold ${styles.action}`}>
                    {method.action}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>

                </div>

              </a>
            );
          })}

        </section>

      </div>

      {/* Existing Project Enquiry Form */}
      <EnquirySection showQuickContacts={false} />

    </main>
  );
};
