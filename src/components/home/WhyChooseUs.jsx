
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { whyUsData } from '../../data/whyUsData';
import { Check } from 'lucide-react';

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const WhyChooseUs = () => {
  const reduceMotion = useReducedMotion();

  const variants = reduceMotion
    ? {
        hidden: {},
        visible: {},
      }
    : cardVariants;

  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]">

      {/* Ambient background lighting */}
      <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-[#3898FF]/[0.07] blur-[150px] pointer-events-none" />

      <div className="absolute bottom-0 -left-40 w-[450px] h-[450px] rounded-full bg-[#8B5CF6]/[0.06] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Animated section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeader
            badge="THE NAVANDAN ADVANTAGE"
            badgeVariant="cyan"
            title="Engineered for Clarity."
            highlight="Proven by Rigor."
            subtitle="Why ambitious businesses choose Navandan Digital to spearhead their brand presence and digital infrastructure."
          />
        </motion.div>

        {/* Animated advantage cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.16,
          }}
        >
          {whyUsData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={variants}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -10,
                        scale: 1.02,
                        transition: { duration: 0.25 },
                      }
                }
                className="relative p-8 rounded-3xl bg-[#141B2B] border border-white/[0.1] hover:border-[#3898FF]/60 hover:shadow-[0_20px_45px_-10px_rgba(56,152,255,0.25)] transition-colors duration-300 flex flex-col justify-between group overflow-hidden"
              >

                {/* Subtle animated card glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#3898FF]/0 group-hover:bg-[#3898FF]/[0.08] blur-3xl transition-colors duration-500 pointer-events-none" />

                <div className="relative space-y-4">

                  {/* Card header */}
                  <div className="flex items-center justify-between gap-3">

                    <motion.div
                      whileHover={
                        reduceMotion
                          ? {}
                          : {
                              rotate: 10,
                              scale: 1.15,
                            }
                      }
                      transition={{ duration: 0.25 }}
                      className="p-3 rounded-2xl bg-[#3898FF]/15 text-[#3898FF] border border-[#3898FF]/30"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>

                    <span className="text-[10px] font-mono tracking-widest text-[#A8B1C2] uppercase font-semibold">
                      {item.kicker}
                    </span>
                  </div>

                  {/* Card title */}
                  <h3 className="font-display text-xl font-bold text-[#F5F7FC] group-hover:text-[#3898FF] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A8B1C2] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Animated checklist */}
                <div className="relative pt-6 mt-6 border-t border-white/[0.08] space-y-3">
                  {item.points.map((pt, pointIndex) => (
                    <motion.div
                      key={pt}
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, x: -12 }
                      }
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: reduceMotion ? 0 : pointIndex * 0.1,
                      }}
                      className="flex items-start gap-2.5 text-xs text-[#F5F7FC]"
                    >
                      <Check className="w-4 h-4 text-[#3898FF] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Small decorative index */}
                <span className="absolute bottom-5 right-7 text-[10px] font-mono text-white/[0.12] group-hover:text-[#3898FF]/40 transition-colors">
                  0{index + 1}
                </span>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
