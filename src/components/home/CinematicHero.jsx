
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import {
  ArrowUpRight,
  Sparkles,
  Layers,
  TrendingUp,
  Code2,
  Cpu,
  ShieldCheck,
  Zap,
  Globe2,
} from 'lucide-react';

import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const pillars = [
  {
    id: 'brand',
    title: 'Branding & Creative',
    kicker: 'PILLAR 01 // IDENTITY',
    desc: 'Distinctive brand identities, visual storytelling and creative experiences.',
    icon: Layers,
    color: 'from-[#3898FF] to-[#2563EB]',
    borderGlow: 'border-[#3898FF]/50 shadow-[0_0_30px_rgba(56,152,255,0.25)]',
    accentColor: '#3898FF',
  },
  {
    id: 'growth',
    title: 'Digital Marketing & Growth',
    kicker: 'PILLAR 02 // PERFORMANCE',
    desc: 'Digital campaigns, social media and strategies designed to grow businesses.',
    icon: TrendingUp,
    color: 'from-[#8B5CF6] to-[#6D28D9]',
    borderGlow: 'border-[#8B5CF6]/50 shadow-[0_0_30px_rgba(139,92,246,0.25)]',
    accentColor: '#8B5CF6',
  },
  {
    id: 'tech',
    title: 'Website & Application Development',
    kicker: 'PILLAR 03 // TECHNOLOGY',
    desc: 'Modern websites, web applications and custom digital products.',
    icon: Code2,
    color: 'from-[#00F0FF] to-[#0284C7]',
    borderGlow: 'border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.25)]',
    accentColor: '#00F0FF',
  },
  {
    id: 'automation',
    title: 'ERP & Business Automation',
    kicker: 'PILLAR 04 // OPERATIONS',
    desc: 'Connected business systems, ERP, CRM and intelligent workflows.',
    icon: Cpu,
    color: 'from-[#F59E0B] to-[#EA580C]',
    borderGlow: 'border-[#F59E0B]/50 shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    accentColor: '#F59E0B',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const CinematicHero = () => {
  const [activePillar, setActivePillar] = useState('brand');
  const reduceMotion = useReducedMotion();

  const entrance = reduceMotion
    ? { opacity: 1, y: 0 }
    : 'hidden';

  const visible = reduceMotion
    ? { opacity: 1, y: 0 }
    : 'visible';

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">

      {/* Cinematic animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.45, 0.8, 0.45],
                  x: [0, 45, 0],
                  y: [0, -25, 0],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#3898FF]/25 via-[#8B5CF6]/20 to-transparent rounded-full blur-[150px]"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -50, 0],
                  y: [0, 45, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#8B5CF6]/15 rounded-full blur-[140px]"
        />

        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090B12]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Hero content */}
          <motion.div
            variants={containerVariants}
            initial={entrance}
            animate={visible}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >

            {/* Eyebrow badge */}
            <motion.div variants={revealVariants} className="flex justify-center lg:justify-start">
              <Badge variant="blue" dot={true}>
                Full-Service Digital Marketing, Branding & IT Agency
              </Badge>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={revealVariants}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F7FC] leading-[1.06]"
            >
              Building Brands.
              <br />

              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#7B96FF] to-[#8B5CF6]">
                Driving Growth.
              </span>

              <br />

              Engineering the Future.
            </motion.h1>

            {/* Positioning statement */}
            <motion.p
              variants={revealVariants}
              className="text-base sm:text-xl text-[#A8B1C2] max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Navandan Digital brings branding, digital marketing,
              website development and business technology together
              to help businesses build, grow and operate smarter.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={revealVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.div
                whileHover={reduceMotion ? {} : { scale: 1.04, y: -3 }}
                whileTap={reduceMotion ? {} : { scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowUpRight}
                  className="w-full sm:w-auto"
                >
                  Discuss Your Project
                </Button>
              </motion.div>

              <motion.div
                whileHover={reduceMotion ? {} : { scale: 1.04, y: -3 }}
                whileTap={reduceMotion ? {} : { scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  to="/services"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Structural trust indicators */}
            <motion.div
              variants={revealVariants}
              className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 text-xs font-mono text-[#A8B1C2]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3898FF]" />
                <span className="text-[#F5F7FC] font-semibold">
                  01 Integrated Partner
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#8B5CF6]" />
                <span className="text-[#F5F7FC] font-semibold">
                  04 Core Pillars
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-[#F5F7FC] font-semibold">
                  07 Capability Categories
                </span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right: Interactive service showcase */}
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: reduceMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 relative"
          >

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : { y: [0, -8, 0] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >

              <div className="relative p-5 sm:p-8 rounded-3xl bg-[#101522]/95 border border-white/[0.12] shadow-2xl backdrop-blur-2xl overflow-hidden group">

                {/* Visual header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">

                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={reduceMotion ? {} : { opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2.5 h-2.5 rounded-full bg-[#3898FF]"
                    />

                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F7FC]">
                      Unified Capabilities
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#3898FF] bg-[#3898FF]/10 border border-[#3898FF]/20 px-2.5 py-1 rounded-full font-bold">
                    FOUR SERVICE PILLARS
                  </span>

                </div>

                {/* Animated service cards */}
                <motion.div
                  variants={containerVariants}
                  initial={reduceMotion ? false : 'hidden'}
                  animate="visible"
                  className="space-y-3"
                >
                  {pillars.map((pillar, index) => {
                    const Icon = pillar.icon;
                    const isActive = activePillar === pillar.id;

                    return (
                      <motion.div
                        key={pillar.id}
                        variants={revealVariants}
                        whileHover={
                          reduceMotion
                            ? {}
                            : { x: 5, scale: 1.015 }
                        }
                        onMouseEnter={() => setActivePillar(pillar.id)}
                        onFocus={() => setActivePillar(pillar.id)}
                        tabIndex={0}
                        className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border outline-none focus-visible:ring-2 focus-visible:ring-[#3898FF] ${
                          isActive
                            ? `bg-[#141B2B] ${pillar.borderGlow}`
                            : 'bg-[#141B2B]/50 border-white/[0.06] hover:bg-[#141B2B] hover:border-white/20'
                        }`}
                      >

                        <div className="flex items-start gap-4">

                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-[#F5F7FC] shrink-0 shadow-md`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>

                          <div className="flex-1 min-w-0">

                            <div className="flex items-center justify-between gap-2">

                              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#3898FF]">
                                {pillar.kicker}
                              </span>

                              {isActive && (
                                <motion.span
                                  layoutId="active-pillar-indicator"
                                  className="w-2 h-2 rounded-full bg-[#3898FF] shrink-0"
                                  style={{
                                    boxShadow: `0 0 12px ${pillar.accentColor}`,
                                  }}
                                />
                              )}

                            </div>

                            <h3 className="font-display text-sm sm:text-base font-bold text-[#F5F7FC] mt-1">
                              {pillar.title}
                            </h3>

                            <p className="text-xs text-[#A8B1C2] mt-1 leading-relaxed">
                              {pillar.desc}
                            </p>

                          </div>
                        </div>

                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Bottom synergy indicator */}
                <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-[#3898FF]/15 via-[#8B5CF6]/15 to-transparent border border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">

                  <div className="flex items-center gap-2 text-[#F5F7FC]">
                    <Sparkles className="w-4 h-4 text-[#3898FF]" />
                    <span>Integrated Strategy & Execution</span>
                  </div>

                  <span className="text-[#3898FF] font-semibold">
                    One Unified Team
                  </span>

                </div>

              </div>

              {/* Floating decorative badge */}
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, -7, 0], rotate: [0, 1, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-[#141B2B] border border-white/[0.12] shadow-2xl backdrop-blur-xl hidden sm:flex items-center gap-3 text-xs font-mono text-[#F5F7FC]"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#3898FF]" />
                <span>BRANDING â€¢ MARKETING â€¢ TECHNOLOGY</span>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
