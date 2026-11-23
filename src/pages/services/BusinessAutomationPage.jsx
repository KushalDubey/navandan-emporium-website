
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Database,
  Users,
  Package,
  Receipt,
  Workflow,
  BarChart3,
  Plug,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Settings,
} from 'lucide-react';

import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { siteConfig } from '../../config/siteConfig';

const businessServices = [
  {
    title: 'ERP Solutions',
    description:
      'Bring essential business functions together in a connected system designed around your operational requirements.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Business management software and reporting on a computer',
    icon: Database,
    points: ['Centralised business information', 'Connected business processes'],
  },
  {
    title: 'CRM & Customer Management',
    description:
      'Organise customer information, enquiries and sales activities so your team can manage relationships more effectively.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
    alt: 'Business team discussing customer relationships',
    icon: Users,
    points: ['Customer and lead records', 'Enquiry and sales tracking'],
  },
  {
    title: 'Inventory & Stock Management',
    description:
      'Keep track of products, stock movement and essential inventory information through organised digital workflows.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Organised warehouse inventory and stock management',
    icon: Package,
    points: ['Stock and product records', 'Inventory movement tracking'],
  },
  {
    title: 'Billing & Invoicing',
    description:
      'Simplify everyday billing activities with organised invoices, transaction records and payment tracking.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Business finance and invoicing documents',
    icon: Receipt,
    points: ['Invoice generation', 'Payment and billing records'],
  },
  {
    title: 'Workflow Automation',
    description:
      'Reduce repetitive administrative work by connecting routine tasks, approvals, notifications and business processes.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    alt: 'Team collaborating on digital business workflows',
    icon: Workflow,
    points: ['Task and approval workflows', 'Automated notifications'],
  },
  {
    title: 'Dashboards & Reporting',
    description:
      'Bring important business information into organised reports and dashboards to support everyday decisions.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    alt: 'Business reporting and data dashboard',
    icon: BarChart3,
    points: ['Business performance reports', 'Operational dashboards'],
  },
];

const additionalCapabilities = [
  {
    icon: Plug,
    title: 'System Integrations',
    description:
      'Connect compatible business tools, applications and data sources.',
  },
  {
    icon: Settings,
    title: 'IT & Process Consulting',
    description:
      'Identify practical opportunities to improve existing business processes.',
  },
  {
    icon: Database,
    title: 'Data Organisation',
    description:
      'Structure business records and information for easier access and management.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about your existing operations, systems, challenges and business requirements.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We identify suitable tools, features, integrations and workflows for the agreed scope.',
  },
  {
    number: '03',
    title: 'Build & Configure',
    description:
      'We develop or configure the solution and connect the agreed business processes.',
  },
  {
    number: '04',
    title: 'Test & Support',
    description:
      'We review the solution, address agreed issues and discuss ongoing support requirements.',
  },
];

const deliverables = [
  'Business process assessment',
  'ERP and CRM configuration',
  'Inventory management workflows',
  'Billing and invoicing features',
  'System and API integrations',
  'Reports and dashboards',
];

const faqs = [
  {
    q: 'What is an ERP system?',
    a: 'An ERP system brings different business functions, such as inventory, purchasing, sales and finance, into a connected platform. The exact modules depend on the business and its requirements.',
  },
  {
    q: 'Can you build a custom ERP for my business?',
    a: 'We can discuss custom business software and ERP requirements based on your workflows, users, features and budget. The recommended approach will depend on the complexity of the project.',
  },
  {
    q: 'Can you help with CRM and lead management?',
    a: 'Yes. CRM solutions can help organise customer details, enquiries, sales activities, follow-ups and communication records.',
  },
  {
    q: 'Can you automate our existing processes?',
    a: 'We can review repetitive tasks and explore suitable automation options, including approvals, notifications, data updates and integrations between compatible systems.',
  },
  {
    q: 'Can you integrate existing software?',
    a: 'Integration possibilities depend on the software, available APIs, access permissions and technical requirements. We can assess compatibility before recommending an approach.',
  },
  {
    q: 'Do you provide support after implementation?',
    a: 'Maintenance, troubleshooting, updates and further improvements can be discussed as part of the project or a separate support arrangement.',
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

export const BusinessAutomationPage = () => {
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
            <Badge variant="blue" dot>
              ERP & BUSINESS AUTOMATION
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]">
              Simplify Your Business.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#00C8E8] to-emerald-400">
                Work Smarter.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A8B1C2] leading-relaxed max-w-xl">
              Manage everyday operations with connected business systems.
              From ERP and CRM solutions to inventory, billing and workflow
              automation, we help bring your business processes together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
              >
                Discuss Your Requirements
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
            <div className="absolute -inset-5 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-emerald-500/15 blur-3xl rounded-full" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141B2B] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=90"
                alt="Modern business office and collaborative workspace"
                className="w-full h-[360px] sm:h-[470px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090B12] via-[#090B12]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
                  SYSTEMS · PROCESSES · AUTOMATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  Better-connected business operations.
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
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
            WHAT WE DO
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
            Bring Your Business Processes{' '}
            <span className="text-[#67E8F9]">Together.</span>
          </h2>

          <p className="text-[#A8B1C2] leading-relaxed mt-5">
            Managing customers, stock, billing and daily tasks across
            disconnected tools can make business operations harder than
            they need to be. We help identify practical ways to organise
            information and connect the systems your business uses.
          </p>
        </motion.div>
      </section>

      {/* CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Business Solutions
            </h2>
          </div>

          <p className="text-sm text-[#A8B1C2] max-w-md leading-relaxed">
            Choose the capabilities your business needs. Solutions can
            be planned individually or as part of a connected system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessServices.map((service, index) => {
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

      {/* ADDITIONAL CAPABILITIES */}
      <section className="py-24 bg-[#101522] border-y border-white/[0.07] mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#67E8F9] font-bold">
              MORE WAYS WE CAN HELP
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Connected Business Technology.
            </h2>

            <p className="text-sm text-[#A8B1C2] mt-4 leading-relaxed">
              Supporting capabilities that help your systems and
              everyday processes work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalCapabilities.map((item, index) => {
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
            From Business Needs to Better Systems.
          </h2>

          <p className="text-sm text-[#A8B1C2] mt-4 leading-relaxed">
            A practical process to understand your operations,
            plan the solution and implement the agreed requirements.
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
              What Your Solution Can Include.
            </h2>

            <p className="text-[#A8B1C2] leading-relaxed mt-5">
              Each business has different processes and priorities.
              We define the final scope around your requirements,
              existing systems and budget.
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
            ERP & Business Automation FAQs
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
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#102B3C] via-[#141B2B] to-[#102D29] border border-white/[0.12] text-center">
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-cyan-500/15 blur-[90px] rounded-full" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-emerald-500/15 blur-[90px] rounded-full" />

          <div className="relative z-10 space-y-6">
            <Badge variant="blue">LET'S IMPROVE YOUR OPERATIONS</Badge>

            <h2 className="text-3xl sm:text-5xl font-extrabold">
              Ready to Make Your Business Work Smarter?
            </h2>

            <p className="text-sm sm:text-base text-[#A8B1C2] max-w-2xl mx-auto leading-relaxed">
              Tell us about your current processes and the challenges
              you want to solve. Let's explore a practical technology
              solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
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
