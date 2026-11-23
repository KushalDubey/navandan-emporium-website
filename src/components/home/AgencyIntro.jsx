
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Palette,
  Globe,
  TrendingUp,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Users2,
} from 'lucide-react';

import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const capabilityCards = [
  {
    id: 'creative',
    title: 'Creative Excellence',
    icon: Palette,
    accentColor: 'from-[#3898FF] to-[#2563EB]',
    borderHover: 'hover:border-[#3898FF]/60',
    textColor: 'text-[#3898FF]',
    description:
      'Build a distinctive brand identity that makes your business memorable and consistent.',
    keyTakeaways: [
      'Logo and visual identity',
      'Brand guidelines and creative design',
    ],
  },
  {
    id: 'technology',
    title: 'Technology That Works',
    icon: Globe,
    accentColor: 'from-[#00F0FF] to-[#0284C7]',
    borderHover: 'hover:border-[#00F0FF]/60',
    textColor: 'text-[#00F0FF]',
    description:
      'Create reliable digital experiences that help your business connect with customers.',
    keyTakeaways: [
      'Business websites and applications',
      'Responsive design and development',
    ],
  },
  {
    id: 'growth',
    title: 'Digital Growth',
    icon: TrendingUp,
    accentColor: 'from-[#8B5CF6] to-[#6D28D9]',
    borderHover: 'hover:border-[#8B5CF6]/60',
    textColor: 'text-[#8B5CF6]',
    description:
      'Reach the right audience through focused digital marketing and online visibility.',
    keyTakeaways: [
      'Digital advertising and SEO',
      'Social media and content strategy',
    ],
  },
  {
    id: 'automation',
    title: 'Business Automation',
    icon: Clock,
    accentColor: 'from-emerald-500 to-teal-600',
    borderHover: 'hover:border-emerald-500/60',
    textColor: 'text-emerald-400',
    description:
      'Simplify business operations with connected systems and automated workflows.',
    keyTakeaways: [
      'ERP and CRM solutions',
      'Workflow and reporting automation',
    ],
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const AgencyIntro = () => {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? { hidden: {}, visible: {} }
    : sectionReveal;

  const stagger = reduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer;

  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]">

      {/* Background atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#3898FF]/10 via-[#8B5CF6]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader
            badge="OUR APPROACH TO YOUR SUCCESS"
            badgeVariant="blue"
            title="Everything Your Business Needs to Thrive,"
            highlight="Under One Roof."
            subtitle="You shouldn't have to coordinate several providers to build your brand, reach customers, launch a website and improve daily operations. We bring these services together so your work can follow one clear plan."
          />
        </motion.div>

        {/* Single partner advantage */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={reduceMotion ? {} : { y: -5 }}
          transition={{ duration: 0.35 }}
          className="mb-14 p-8 sm:p-10 rounded-3xl bg-[#101522] border border-white/[0.1] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 hover:border-[#3898FF]/40 hover:shadow-[0_20px_55px_rgba(56,152,255,0.09)]"
        >
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#3898FF] uppercase tracking-wider">
              <Users2 className="w-4 h-4" />
              <span>The Single-Partner Advantage</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F7FC] tracking-tight">
              One Partner. Clear Communication.
            </h3>

            <p className="text-sm sm:text-base text-[#A8B1C2] leading-relaxed">
              When design, marketing and technology are planned together,
              your brand and digital tools can work more consistently.
              You have a clear point of contact who can understand your
              goals and coordinate the agreed work.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <motion.div
              whileHover={reduceMotion ? {} : { scale: 1.06 }}
              className="p-4 rounded-2xl bg-[#141B2B] border border-white/[0.08] text-center min-w-[140px]"
            >
              <span className="text-2xl font-extrabold text-[#3898FF] block font-mono">
                ONE
              </span>
              <span className="text-xs text-[#A8B1C2] mt-0.5 block">
                Connected Approach
              </span>
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? {} : { scale: 1.06 }}
              className="p-4 rounded-2xl bg-[#141B2B] border border-white/[0.08] text-center min-w-[140px]"
            >
              <span className="text-2xl font-extrabold text-emerald-400 block font-mono">
                01
              </span>
              <span className="text-xs text-[#A8B1C2] mt-0.5 block">
                Accountable Partner
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Four simplified capability cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilityCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                variants={reveal}
                whileHover={
                  reduceMotion ? {} : { y: -9, scale: 1.015 }
                }
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`p-7 sm:p-8 rounded-3xl bg-[#141B2B] border border-white/[0.1] ${card.borderHover} hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-colors duration-300 flex flex-col group shadow-lg`}
              >
                <div className="space-y-5">

                  {/* Icon */}
                  <motion.div
                    whileHover={
                      reduceMotion ? {} : { rotate: 8, scale: 1.12 }
                    }
                    className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${card.accentColor} text-white shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Title and concise description */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#F5F7FC]">
                      {card.title}
                    </h3>

                    <p className="text-sm text-[#A8B1C2] mt-3 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Two key capabilities */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-4">
                    {card.keyTakeaways.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: reduceMotion ? 0 : index * 0.08,
                        }}
                        className="flex items-start gap-2.5 text-sm text-[#F5F7FC]"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 ${card.textColor} shrink-0 mt-0.5`}
                        />
                        <span className="leading-snug">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enquiry strip */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#3898FF]/10 via-[#141B2B] to-[#8B5CF6]/10 border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg font-bold text-[#F5F7FC]">
              Unsure where to begin?
            </h4>

            <p className="text-xs sm:text-sm text-[#A8B1C2] mt-1">
              Tell us about your business goals and we will suggest
              the most practical starting point.
            </p>
          </div>

          <motion.div
            whileHover={reduceMotion ? {} : { scale: 1.04, y: -2 }}
            whileTap={reduceMotion ? {} : { scale: 0.97 }}
            className="flex items-center gap-3 shrink-0"
          >
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={ArrowUpRight}
            >
              Let's Discuss Your Project
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

