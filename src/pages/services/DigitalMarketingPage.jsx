
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Search,
  Megaphone,
  Share2,
  Mail,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  Target,
  PenTool,
  BarChart3,
} from 'lucide-react';

import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { siteConfig } from '../../config/siteConfig';

const marketingServices = [
  {
    title: 'Social Media Management',
    description:
      'Build a consistent social presence with thoughtful content, creative posts and an organised publishing strategy.',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1100&q=85',
    alt: 'Social media content and creative planning',
    icon: Share2,
    points: ['Content planning', 'Post and reel creation', 'Page management'],
  },
  {
    title: 'SEO & Search Visibility',
    description:
      'Help potential customers discover your business through useful content, search optimisation and a better website experience.',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1100&q=85',
    alt: 'Search engine optimisation and website analysis',
    icon: Search,
    points: ['On-page SEO', 'Keyword research', 'Website optimisation'],
  },
  {
    title: 'Paid Advertising',
    description:
      'Plan and manage focused advertising campaigns to reach relevant audiences across search and social platforms.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85',
    alt: 'Digital advertising campaign planning',
    icon: Megaphone,
    points: ['Google Ads', 'Meta Ads', 'Campaign optimisation'],
  },
  {
    title: 'Content & Creative Production',
    description:
      'Create engaging visual and written content that communicates your brand clearly across digital channels.',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1100&q=85',
    alt: 'Creative design and content production',
    icon: PenTool,
    points: ['Graphics and creatives', 'Copywriting', 'Short-form video concepts'],
  },
  {
    title: 'Email & WhatsApp Marketing',
    description:
      'Communicate with your audience through relevant updates, promotional messages and planned follow-up campaigns.',
    image:
      'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1100&q=85',
    alt: 'Email marketing and communication',
    icon: Mail,
    points: ['Email campaigns', 'WhatsApp campaign planning', 'Customer follow-ups'],
  },
  {
    title: 'Influencer & UGC Campaigns',
    description:
      'Explore creator collaborations and user-generated content to introduce your products and services to new audiences.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=85',
    alt: 'Content creator and influencer photography',
    icon: Target,
    points: ['Creator research', 'UGC content planning', 'Campaign coordination'],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about your business, audience, goals and current digital presence.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We recommend suitable channels, content themes and campaign activities.',
  },
  {
    number: '03',
    title: 'Create & Launch',
    description:
      'We prepare the agreed creative assets and put the marketing activities into action.',
  },
  {
    number: '04',
    title: 'Review & Improve',
    description:
      'We review available campaign results and identify practical improvements.',
  },
];

const deliverables = [
  'Digital marketing strategy',
  'Social media content calendar',
  'Creative designs and ad copy',
  'SEO recommendations',
  'Advertising campaign setup',
  'Campaign reporting and review',
];

const faqs = [
  {
    q: 'Which businesses can work with Navandan Emporium?',
    a: 'We work with startups, small and medium businesses, growing brands and established organisations across different industries.',
  },
  {
    q: 'Can I choose only one marketing service?',
    a: 'Yes. You can enquire about an individual service such as social media management, SEO, paid advertising or content creation. Services can also be combined based on your requirements.',
  },
  {
    q: 'Do you manage Google Ads and Meta Ads?',
    a: 'Yes. We offer campaign planning and management for Google Ads and Meta advertising, depending on your business goals and requirements.',
  },
  {
    q: 'Do I need to provide the advertising budget?',
    a: 'Advertising platform spend is separate from service fees. The budget and management requirements can be discussed before a campaign begins.',
  },
  {
    q: 'How do we get started?',
    a: 'Contact us with a brief description of your business and goals. We can discuss your requirements and suggest a suitable starting point.',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const DigitalMarketingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const reduceMotion = useReducedMotion();

  const whatsappLink = siteConfig.whatsappChatLink;

  return (
    <main className="pt-28 pb-24 bg-[#090B12] min-h-screen text-[#F5F7FC]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={reveal}
            className="space-y-7"
          >
            <Badge variant="violet" dot>
              DIGITAL MARKETING & GROWTH
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]">
              Make Your Brand
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#3898FF]">
                Impossible to Ignore.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A8B1C2] leading-relaxed max-w-xl">
              Build your online presence, reach the right audience and
              communicate your value through thoughtful digital marketing,
              creative content and focused campaigns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
              >
                Discuss Your Marketing Goals
              </Button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141B2B] hover:bg-[#1C253B] text-[#F5F7FC] text-sm font-semibold border border-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-5 bg-gradient-to-br from-violet-600/20 via-blue-500/10 to-transparent blur-3xl rounded-full" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141B2B] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=90"
                alt="Marketing team planning a creative campaign"
                className="w-full h-[360px] sm:h-[470px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090B12] via-[#090B12]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
                  Strategy · Creativity · Growth
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  Marketing with a clear purpose.
                </h2>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
            WHAT WE DO
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
            Your Digital Presence,{' '}
            <span className="text-[#A78BFA]">Thoughtfully Managed.</span>
          </h2>

          <p className="text-[#A8B1C2] leading-relaxed mt-5">
            From the first impression on social media to the moment a
            potential customer contacts your business, every interaction
            matters. We bring creative work and digital marketing together
            to help your brand communicate consistently.
          </p>
        </motion.div>
      </section>

      {/* SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Marketing Services
            </h2>
          </div>

          <p className="text-sm text-[#A8B1C2] max-w-md leading-relaxed">
            Choose the services that fit your business today. They can
            also be combined into a coordinated marketing plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={reduceMotion ? false : 'hidden'}
                whileInView="visible"
                variants={reveal}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: reduceMotion ? 0 : index * 0.07 }}
                whileHover={reduceMotion ? {} : { y: -8 }}
                className="group rounded-3xl overflow-hidden bg-[#141B2B] border border-white/[0.09] hover:border-[#8B5CF6]/50 transition-colors duration-300"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090B12]/70 to-transparent" />

                  <div className="absolute bottom-4 left-5 w-11 h-11 rounded-xl bg-[#090B12]/80 backdrop-blur-md border border-white/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#A78BFA]" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#F5F7FC]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#A8B1C2] leading-relaxed mt-3 min-h-[72px]">
                    {service.description}
                  </p>

                  <div className="border-t border-white/[0.08] mt-5 pt-5 space-y-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2.5 text-sm text-[#D5DBE7]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-[#101522] border-y border-white/[0.07] mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              A Clear Path from Idea to Execution.
            </h2>
            <p className="text-sm text-[#A8B1C2] mt-4 leading-relaxed">
              A straightforward process that keeps your business goals
              at the centre of every marketing activity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: reduceMotion ? 0 : index * 0.12 }}
                className="relative p-7 rounded-2xl bg-[#141B2B] border border-white/[0.08]"
              >
                <span className="text-4xl font-extrabold text-[#8B5CF6]/35 font-mono">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold mt-5">{step.title}</h3>
                <p className="text-sm text-[#A8B1C2] leading-relaxed mt-3">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
              WHAT YOU CAN EXPECT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Practical Marketing Deliverables.
            </h2>
            <p className="text-[#A8B1C2] leading-relaxed mt-5">
              The exact deliverables depend on the services and scope
              agreed for your business. We focus on useful creative
              assets, organised campaigns and clear communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#141B2B] border border-white/[0.08]"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm text-[#E1E6F0]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-28">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Digital Marketing FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#141B2B] border border-white/[0.08] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#F5F7FC]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A78BFA] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#A8B1C2] leading-relaxed border-t border-white/[0.06] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#20163D] via-[#141B2B] to-[#10223C] border border-white/[0.12] text-center">
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-violet-500/15 blur-[90px] rounded-full" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-blue-500/15 blur-[90px] rounded-full" />

          <div className="relative z-10 space-y-6">
            <Badge variant="violet">LET'S WORK TOGETHER</Badge>

            <h2 className="text-3xl sm:text-5xl font-extrabold">
              Ready to Grow Your Digital Presence?
            </h2>

            <p className="text-sm sm:text-base text-[#A8B1C2] max-w-2xl mx-auto leading-relaxed">
              Tell us about your business, your audience and what you
              want to achieve. Let's discuss a marketing approach
              that makes sense for your goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
              >
                Get in Touch
              </Button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};
