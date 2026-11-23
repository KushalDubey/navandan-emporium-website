
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Globe,
  ShoppingCart,
  Smartphone,
  Layout,
  Code2,
  Palette,
  Database,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Layers,
} from 'lucide-react';

import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { siteConfig } from '../../config/siteConfig';

const developmentServices = [
  {
    title: 'Business Websites',
    description:
      'Professional, responsive websites that introduce your business, communicate your services and help customers get in touch.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern business website displayed on a computer',
    icon: Globe,
    points: ['Company and service websites', 'Landing pages', 'Responsive layouts'],
  },
  {
    title: 'E-commerce Websites',
    description:
      'Online stores designed to present products clearly and make browsing, shopping and checkout straightforward.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Online shopping and e-commerce experience',
    icon: ShoppingCart,
    points: ['Product catalogues', 'Shopping cart and checkout', 'Payment integration'],
  },
  {
    title: 'Web Applications',
    description:
      'Interactive web-based tools and platforms built around the way your business and customers need to work.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    alt: 'Web application interface and data visualisation',
    icon: Code2,
    points: ['Custom business applications', 'User accounts and portals', 'API integrations'],
  },
  {
    title: 'Mobile Applications',
    description:
      'Mobile app experiences planned around usability, essential features and the needs of your target users.',
    image:
  'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Smartphone displaying a mobile application',
    icon: Smartphone,
    points: ['App UI/UX design', 'iOS and Android solutions', 'Mobile-friendly experiences'],
  },
  {
    title: 'UI/UX & Interface Design',
    description:
      'Clear, consistent interfaces that make digital products easier to understand, navigate and use.',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Digital product interface and design workspace',
    icon: Palette,
    points: ['Wireframes and prototypes', 'User journeys', 'Visual interface design'],
  },
  {
    title: 'Maintenance & Improvements',
    description:
      'Keep your website or application updated with practical improvements, technical support and ongoing maintenance.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    alt: 'Developer working on a website at a computer',
    icon: ShieldCheck,
    points: ['Website updates', 'Bug fixes and improvements', 'Performance reviews'],
  },
];

const projectTypes = [
  {
    icon: Globe,
    title: 'Corporate Websites',
    description: 'Professional online presence for companies and organisations.',
  },
  {
    icon: ShoppingCart,
    title: 'Online Stores',
    description: 'Product discovery, shopping experiences and online transactions.',
  },
  {
    icon: Layout,
    title: 'Business Portals',
    description: 'Useful digital spaces for customers, employees and partners.',
  },
  {
    icon: Database,
    title: 'Custom Platforms',
    description: 'Purpose-built web solutions for specific business requirements.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We discuss your business, audience, objectives and the problems your website or application should solve.',
  },
  {
    number: '02',
    title: 'Plan & Design',
    description:
      'We organise the pages, features, user journeys and visual direction before development begins.',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'We build the agreed solution with responsive layouts and the functionality defined for your project.',
  },
  {
    number: '04',
    title: 'Test & Launch',
    description:
      'We review the experience across devices, address agreed issues and prepare the project for launch.',
  },
];

const deliverables = [
  'Responsive website pages',
  'Mobile-friendly layouts',
  'User interface design',
  'Agreed website functionality',
  'Forms and integrations',
  'Testing and launch support',
];

const faqs = [
  {
    q: 'What types of websites do you develop?',
    a: 'We work on business websites, company websites, landing pages, e-commerce stores, web portals and custom web applications.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. We can review your existing website and discuss improvements to its appearance, navigation, content structure, responsiveness and functionality.',
  },
  {
    q: 'Can you build an e-commerce website?',
    a: 'Yes. E-commerce requirements can include product catalogues, shopping carts, checkout flows and payment integrations, depending on the project scope.',
  },
  {
    q: 'Will my website work on mobile phones?',
    a: 'Responsive design is considered as part of the development process so the website can adapt to mobile, tablet and desktop screens.',
  },
  {
    q: 'Can you maintain the website after launch?',
    a: 'We can discuss ongoing maintenance, content updates, technical support and further improvements based on your requirements.',
  },
  {
    q: 'How much does a website or application cost?',
    a: 'The cost depends on the design, number of pages, features, integrations and overall complexity. Contact us with your requirements for a project discussion.',
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

export const WebAppDevPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-28 pb-24 min-h-screen bg-[#090B12] text-[#F5F7FC]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={reveal}
            className="space-y-7"
          >
            <Badge variant="cyan" dot>
              WEBSITE & APPLICATION DEVELOPMENT
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]">
              Digital Experiences
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#3898FF] to-[#8B5CF6]">
                Built Around You.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A8B1C2] leading-relaxed max-w-xl">
              From professional business websites to custom web and mobile
              applications, we create digital experiences that bring your
              ideas to life and make everyday interactions easier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
              >
                Discuss Your Project
              </Button>

              <a
                href={siteConfig.whatsappChatLink}
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
            <div className="absolute -inset-5 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/15 blur-3xl rounded-full" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141B2B] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=90"
                alt="Web developer designing and building a digital product"
                className="w-full h-[360px] sm:h-[470px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090B12] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
                  DESIGN · DEVELOPMENT · EXPERIENCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  From an idea to a digital product.
                </h2>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
            WHAT WE BUILD
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
            Technology That Works for{' '}
            <span className="text-[#67E8F9]">Your Business.</span>
          </h2>

          <p className="text-[#A8B1C2] leading-relaxed mt-5">
            Your website is often the first place customers experience
            your business. We bring design, usability and development
            together to create digital solutions that are useful,
            accessible and aligned with your goals.
          </p>
        </motion.div>
      </section>

      {/* DEVELOPMENT SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              What We Develop
            </h2>
          </div>

          <p className="text-sm text-[#A8B1C2] max-w-md leading-relaxed">
            Choose a specific development service or combine capabilities
            to create a solution suited to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentServices.map((service, index) => {
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
                className="group rounded-3xl overflow-hidden bg-[#141B2B] border border-white/[0.09] hover:border-[#3898FF]/50 transition-colors duration-300"
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
                    <Icon className="w-5 h-5 text-[#67E8F9]" />
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
                        <CheckCircle2 className="w-4 h-4 text-[#67E8F9] shrink-0" />
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

      {/* PROJECT TYPES */}
      <section className="py-24 bg-[#101522] border-y border-white/[0.07] mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
              DIGITAL SOLUTIONS
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Different Needs.{' '}
              <span className="text-[#67E8F9]">The Right Solution.</span>
            </h2>

            <p className="text-sm text-[#A8B1C2] mt-4 leading-relaxed">
              Whether you need a simple online presence or a more
              involved digital platform, we can discuss the right
              approach for your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projectTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.1 }}
                  whileHover={reduceMotion ? {} : { y: -6 }}
                  className="p-7 rounded-2xl bg-[#141B2B] border border-white/[0.08] hover:border-[#67E8F9]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#67E8F9]" />
                  </div>

                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-[#A8B1C2] leading-relaxed mt-3">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
            HOW WE WORK
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            From Concept to Launch.
          </h2>

          <p className="text-sm text-[#A8B1C2] mt-4 leading-relaxed">
            A clear and collaborative process keeps the project organised
            from the first discussion through to launch.
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
              <span className="text-4xl font-extrabold text-[#67E8F9]/35 font-mono">
                {step.number}
              </span>

              <h3 className="text-lg font-bold mt-5">{step.title}</h3>

              <p className="text-sm text-[#A8B1C2] leading-relaxed mt-3">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
              PROJECT SCOPE
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              What Your Project Can Include.
            </h2>

            <p className="text-[#A8B1C2] leading-relaxed mt-5">
              Every project is different. The final scope is agreed
              according to your requirements, features and budget.
              Typical project components can include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#141B2B] border border-white/[0.08]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#67E8F9] shrink-0" />
                <span className="text-sm text-[#E1E6F0]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-28">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
            COMMON QUESTIONS
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Website & App Development FAQs
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
                    className={`w-5 h-5 text-[#67E8F9] shrink-0 transition-transform duration-300 ${
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
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#102B3C] via-[#141B2B] to-[#20163D] border border-white/[0.12] text-center">
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-cyan-500/15 blur-[90px] rounded-full" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-violet-500/15 blur-[90px] rounded-full" />

          <div className="relative z-10 space-y-6">
            <Badge variant="cyan">LET'S BUILD SOMETHING USEFUL</Badge>

            <h2 className="text-3xl sm:text-5xl font-extrabold">
              Have an Idea for a Website or App?
            </h2>

            <p className="text-sm sm:text-base text-[#A8B1C2] max-w-2xl mx-auto leading-relaxed">
              Tell us what you want to build. Let's discuss the design,
              features and development approach that make sense for
              your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
              >
                Start a Project
              </Button>

              <a
                href={siteConfig.whatsappChatLink}
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
