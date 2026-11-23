
import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Palette,
  FileText,
  Image as ImageIcon,
  Layers,
  Megaphone,
  Package,
  PenTool,
} from 'lucide-react';

import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { siteConfig } from '../../config/siteConfig';

export const BrandingCreativePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: Palette,
      title: 'Logo & Brand Identity',
      description:
        'Create a distinctive logo and visual identity that makes your business recognisable and memorable.',
    },
    {
      icon: Layers,
      title: 'Brand Guidelines',
      description:
        'Establish consistent colours, typography, logo usage and visual rules across your business.',
    },
    {
      icon: PenTool,
      title: 'Graphic Design & Creatives',
      description:
        'Design professional brochures, business cards, presentations, banners and promotional materials.',
    },
    {
      icon: Package,
      title: 'Packaging & Print Design',
      description:
        'Present your products professionally through packaging, labels and print-ready designs.',
    },
    {
      icon: ImageIcon,
      title: 'Photography & Visual Content',
      description:
        'Create attractive visual content for your website, social media and marketing campaigns.',
    },
    {
      icon: Megaphone,
      title: 'Campaign & Advertising Design',
      description:
        'Develop creative visuals for promotions, advertisements, product launches and campaigns.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Understand',
      description:
        'We learn about your business, audience, competitors and creative requirements.',
    },
    {
      number: '02',
      title: 'Plan',
      description:
        'We define the visual direction, brand personality and design approach.',
    },
    {
      number: '03',
      title: 'Create',
      description:
        'We develop the logo, graphics and other agreed brand materials.',
    },
    {
      number: '04',
      title: 'Deliver',
      description:
        'We share the approved designs and agreed final files for your use.',
    },
  ];

  const deliverables = [
    'Logo and brand identity designs',
    'Colour palette and typography selection',
    'Brand guidelines',
    'Business cards and stationery',
    'Social media design templates',
    'Brochures and promotional graphics',
    'Packaging and label designs',
    'Digital advertising creatives',
  ];

  const faqs = [
    {
      question: 'What is included in a branding project?',
      answer:
        'The scope can include logo design, colour selection, typography, brand guidelines, stationery, social media templates and other creative materials depending on your requirements.',
    },
    {
      question: 'Can you redesign an existing logo?',
      answer:
        'Yes. We can refresh an existing identity or develop a new visual direction while considering your current brand recognition.',
    },
    {
      question: 'Can you design social media posts and advertisements?',
      answer:
        'Yes. We create graphics and campaign creatives for platforms such as Instagram, Facebook and LinkedIn, based on your campaign requirements.',
    },
    {
      question: 'Will I receive the final design files?',
      answer:
        'Yes. The final file formats and editable source files will be agreed as part of the project scope before work begins.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Contact us with a brief description of your business and what you need. We will discuss the requirements and suggest a suitable approach.',
    },
  ];

  return (
    <main className="pt-28 pb-24 min-h-screen bg-[#090B12] text-[#F5F7FC]">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-7">
            <Badge variant="blue" dot={true}>
              BRANDING & CREATIVE
            </Badge>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Make Your Brand
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] to-[#8B5CF6]">
                  Stand Out.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#A8B1C2] mt-5 leading-relaxed">
                Thoughtful branding and creative design that help your
                business build recognition, communicate clearly and leave
                a lasting impression.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#A8B1C2] leading-relaxed">
              From logos and brand identity to packaging, marketing
              creatives and promotional designs, we help bring your
              business vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#141B2B] hover:bg-[#1C253B] text-white text-sm font-semibold border border-white/10 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* BRANDING IMAGE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141B2B] shadow-2xl">
              <img
                src="/images/branding-showcase.png"
                alt="Brand identity design showcase with stationery, packaging and creative materials"
                className="w-full h-[320px] sm:h-[430px] object-cover"
                loading="eager"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />

              <div className="p-5 sm:p-6">
                <p className="text-xs uppercase tracking-widest text-[#3898FF] font-bold">
                  Creative identity
                </p>
                <h2 className="text-xl sm:text-2xl font-bold mt-2">
                  Your Business. Your Identity.
                </h2>
                <p className="text-sm text-[#A8B1C2] mt-2">
                  Consistent design across every customer touchpoint.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <Badge variant="blue">OUR APPROACH</Badge>

        <h2 className="text-3xl sm:text-4xl font-extrabold mt-5">
          Good Design Builds
          <span className="text-[#3898FF]"> Strong Brands.</span>
        </h2>

        <p className="text-[#A8B1C2] text-base sm:text-lg leading-relaxed mt-5 max-w-3xl mx-auto">
          Your brand is more than a logo. It is the way people recognise
          your business and remember their experience with it. We bring
          together strategy, creativity and consistency to create a
          professional brand presence.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-2xl mb-12">
          <Badge variant="blue">WHAT WE OFFER</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">
            Creative Services for Every Stage of Your Brand
          </h2>
          <p className="text-[#A8B1C2] mt-4 leading-relaxed">
            Whether you are starting a new business or refreshing an
            existing identity, we can help with the creative work your
            brand needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="p-7 rounded-2xl bg-[#141B2B] border border-white/10 hover:border-[#3898FF]/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3898FF]/15 text-[#3898FF] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold">
                  {service.title}
                </h3>

                <p className="text-sm text-[#A8B1C2] leading-relaxed mt-3">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img
              src="/images/branding-showcase.png"
              alt="Creative brand identity and stationery presentation"
              className="w-full h-[300px] sm:h-[420px] object-cover"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div>
            <Badge variant="blue">A CONSISTENT BRAND PRESENCE</Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold mt-5 leading-tight">
              Every Detail
              <span className="text-[#3898FF]"> Matters.</span>
            </h2>

            <p className="text-[#A8B1C2] mt-5 leading-relaxed">
              From your business card to your website and social media,
              every interaction contributes to how customers see your
              brand. Consistent design helps create a recognisable and
              professional experience.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                'A recognisable visual identity',
                'Consistent colours and typography',
                'Professional marketing materials',
                'Designs suited to digital and print use',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3898FF] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#F5F7FC]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="blue">PROJECT DELIVERABLES</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">
            What You Can Receive
          </h2>
          <p className="text-[#A8B1C2] mt-4">
            Deliverables are selected according to your project scope
            and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 p-5 rounded-xl bg-[#141B2B] border border-white/10"
            >
              <FileText className="w-5 h-5 text-[#3898FF] shrink-0" />
              <span className="text-sm text-[#F5F7FC]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <Badge variant="blue">HOW WE WORK</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">
            From Idea to Identity
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#141B2B] border border-white/10"
            >
              <span className="text-3xl font-extrabold text-[#3898FF]">
                {step.number}
              </span>

              <h3 className="text-xl font-bold mt-4">
                {step.title}
              </h3>

              <p className="text-sm text-[#A8B1C2] mt-3 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-10">
          <Badge variant="blue">FREQUENTLY ASKED QUESTIONS</Badge>
          <h2 className="text-3xl font-extrabold mt-4">
            Branding Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl bg-[#141B2B] border border-white/10 overflow-hidden"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                aria-expanded={openFaq === index}
                className="w-full p-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-sm sm:text-base">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-[#3898FF] shrink-0 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="px-5 pb-5 text-sm text-[#A8B1C2] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#141B2B] to-violet-950/40 border border-white/10 text-center">
          <Badge variant="blue">LET'S CREATE TOGETHER</Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold mt-5">
            Ready to Build Your Brand?
          </h2>

          <p className="text-sm sm:text-base text-[#A8B1C2] max-w-2xl mx-auto mt-5 leading-relaxed">
            Tell us about your business and your creative goals.
            Let's discuss how we can help build a brand identity
            that represents you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
            >
              Get a Quote
            </Button>

            <a
              href={siteConfig.whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};
