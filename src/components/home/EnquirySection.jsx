import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Send, 
  RotateCcw, 
  Info, 
  Building, 
  Briefcase, 
  DollarSign, 
  Calendar, 
  User,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { siteConfig } from '../../config/siteConfig';

export const EnquirySection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    businessType: '',
    services: [],
    timeline: '',
    projectScope: '',
    budgetRange: '',
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    preferredContact: 'Email',
  });

  const businessTypes = [
    { id: 'startup', label: 'Seed / Early-Stage Startup', desc: 'Seeking rapid go-to-market architecture' },
    { id: 'smb', label: 'Growing SMB', desc: 'Expanding market presence & scaling operations' },
    { id: 'enterprise', label: 'Established Enterprise', desc: 'Complex infrastructure, security & brand transformation' },
    { id: 'agency', label: 'Agency / Strategic Partner', desc: 'Specialized capability co-development' },
  ];

  const serviceOptions = [
    { id: 'branding', label: 'Brand Identity & Creative Design', icon: '🎨' },
    { id: 'digital-marketing', label: 'Digital Marketing Campaigns', icon: '📈' },
    { id: 'web-ecommerce', label: 'Website & E-commerce Development', icon: '💻' },
    { id: 'mobile', label: 'Mobile Applications', icon: '📱' },
    { id: 'erp-automation', label: 'ERP & Business Automation', icon: '⚙️' },
    { id: 'social-content', label: 'Social Media & Content Production', icon: '🎬' },
    { id: 'performance', label: 'Performance Marketing & Lead Gen', icon: '🎯' },
  ];

  const timelineOptions = [
    'Immediate (< 30 days)',
    'Standard (1 – 3 months)',
    'Strategic Initiative (3 – 6 months)',
    'Long-Term Retainer / Ongoing',
  ];

  const budgetOptions = [
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000 – $100,000',
    '$100,000+',
  ];

  const toggleService = (id) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData({
      businessType: '',
      services: [],
      timeline: '',
      projectScope: '',
      budgetRange: '',
      fullName: '',
      workEmail: '',
      companyName: '',
      phone: '',
      preferredContact: 'Email',
    });
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 border-t border-white/[0.08] overflow-hidden bg-[#090B12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="GET IN TOUCH"
          badgeVariant="blue"
          title={siteConfig.ctaHeadline}
          highlight=""
          subtitle="Whether you prefer an immediate direct message via WhatsApp, a phone consultation, or our guided project enquiry wizard, our leadership team is ready to connect."
        />

        {/* Official Quick Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* Email Direct */}
          <a
            href={siteConfig.emailLink}
            className="p-6 rounded-2xl bg-[#141B2B] border border-white/[0.1] hover:border-[#3898FF]/60 hover:shadow-[0_15px_35px_rgba(56,152,255,0.2)] transition-all flex items-center gap-4 group"
          >
            <div className="p-3.5 rounded-xl bg-[#3898FF]/15 text-[#3898FF] border border-[#3898FF]/30 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A8B1C2] block font-semibold">
                Official Email
              </span>
              <span className="text-sm font-bold text-[#F5F7FC] group-hover:text-[#3898FF] transition-colors truncate block">
                {siteConfig.contactEmail}
              </span>
            </div>
          </a>

          {/* Telephone Direct */}
          <a
            href={siteConfig.telLink}
            className="p-6 rounded-2xl bg-[#141B2B] border border-white/[0.1] hover:border-[#8B5CF6]/60 hover:shadow-[0_15px_35px_rgba(139,92,246,0.2)] transition-all flex items-center gap-4 group"
          >
            <div className="p-3.5 rounded-xl bg-[#8B5CF6]/15 text-[#A78BFA] border border-[#8B5CF6]/30 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A8B1C2] block font-semibold">
                Direct Telephone
              </span>
              <span className="text-sm font-bold text-[#F5F7FC] group-hover:text-[#A78BFA] transition-colors truncate block">
                {siteConfig.phoneDisplay}
              </span>
            </div>
          </a>

          {/* WhatsApp Quick Chat */}
          <a
            href={siteConfig.whatsappChatLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#141B2B] border border-emerald-500/30 hover:border-emerald-500 hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)] transition-all flex items-center gap-4 group"
          >
            <div className="p-3.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block font-bold">
                Instant Messaging
              </span>
              <span className="text-sm font-bold text-[#F5F7FC] group-hover:text-emerald-300 transition-colors truncate block">
                Chat on WhatsApp &rarr;
              </span>
            </div>
          </a>
        </div>

        {/* Multi-Step Wizard Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141B2B] border border-white/[0.14] shadow-2xl relative">
          
          {/* Progress Header */}
          {!submitted && (
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-[#3898FF] font-bold tracking-wider">
                  ENQUIRY WIZARD — STEP 0{currentStep} OF 05
                </span>
                <span className="text-[#A8B1C2] font-semibold">
                  {currentStep === 1 && 'Organization Profile'}
                  {currentStep === 2 && 'Required Services (07 Disciplines)'}
                  {currentStep === 3 && 'Scope & Delivery Timeline'}
                  {currentStep === 4 && 'Budget Allocation'}
                  {currentStep === 5 && 'Contact Verification'}
                </span>
              </div>
              <div className="w-full h-2 bg-[#090B12] rounded-full overflow-hidden border border-white/[0.06]">
                <div
                  className="h-full bg-gradient-to-r from-[#3898FF] via-[#7B96FF] to-[#8B5CF6] transition-all duration-300"
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Form Content */}
          {!submitted ? (
            <div>
              {/* Step 1: Business Type */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FC] mb-2 flex items-center gap-2.5">
                    <Building className="w-5 h-5 text-[#3898FF]" />
                    Select Your Organization Profile
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {businessTypes.map((type) => {
                      const isSelected = formData.businessType === type.label;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, businessType: type.label })}
                          className={`p-5 rounded-2xl text-left transition-all border ${
                            isSelected
                              ? 'bg-[#3898FF]/20 border-[#3898FF] shadow-[0_0_25px_rgba(56,152,255,0.3)]'
                              : 'bg-[#101522] border-white/[0.08] hover:bg-[#101522]/80 hover:border-white/20'
                          }`}
                        >
                          <div className="text-base font-bold text-[#F5F7FC]">{type.label}</div>
                          <div className="text-xs text-[#A8B1C2] mt-1.5 leading-relaxed">{type.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Required Services */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FC] mb-2 flex items-center gap-2.5">
                    <Briefcase className="w-5 h-5 text-[#8B5CF6]" />
                    Which Capabilities Do You Require? (Select all that apply)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {serviceOptions.map((service) => {
                      const isSelected = formData.services.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          className={`p-4 rounded-2xl text-left flex items-center justify-between transition-all border ${
                            isSelected
                              ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                              : 'bg-[#101522] border-white/[0.08] hover:bg-[#101522]/80 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0 pr-2">
                            <span className="text-xl">{service.icon}</span>
                            <span className="text-sm font-bold text-[#F5F7FC] truncate">{service.label}</span>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#8B5CF6] border-[#8B5CF6] text-white'
                                : 'border-white/20'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Scope & Timeline */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FC] mb-2 flex items-center gap-2.5">
                    <Calendar className="w-5 h-5 text-[#00F0FF]" />
                    Project Timeline & Scope Overview
                  </h3>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2.5 font-bold">
                      Estimated Delivery Window
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelineOptions.map((t) => {
                        const isSelected = formData.timeline === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: t })}
                            className={`p-3.5 rounded-xl text-left text-xs font-semibold border transition-all ${
                              isSelected
                                ? 'bg-[#00F0FF]/20 border-[#00F0FF] text-[#F5F7FC] shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                                : 'bg-[#101522] border-white/[0.08] text-[#A8B1C2] hover:bg-[#101522]/80'
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2.5 font-bold">
                      High-Level Scope Summary (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      placeholder="Outline your core objectives, key challenges, or existing stack..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/[0.12] focus:border-[#3898FF] focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Budget Allocation */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FC] mb-2 flex items-center gap-2.5">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                    Anticipated Investment Bracket
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8B1C2]">
                    Assisting us with resource allocation, deliverable depth, and senior team orchestration.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {budgetOptions.map((b) => {
                      const isSelected = formData.budgetRange === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: b })}
                          className={`p-5 rounded-2xl text-left font-mono text-base font-bold border transition-all ${
                            isSelected
                              ? 'bg-emerald-500/20 border-emerald-500 text-[#F5F7FC] shadow-[0_0_25px_rgba(16,185,129,0.3)]'
                              : 'bg-[#101522] border-white/[0.08] text-[#A8B1C2] hover:bg-[#101522]/80'
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 5: Contact Verification */}
              {currentStep === 5 && (
                <div className="space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FC] mb-2 flex items-center gap-2.5">
                    <User className="w-5 h-5 text-[#3898FF]" />
                    Point of Contact & Verification
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/[0.12] focus:border-[#3898FF] focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2 font-bold">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/[0.12] focus:border-[#3898FF] focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2 font-bold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Organization / Enterprise"
                        className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/[0.12] focus:border-[#3898FF] focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2 font-bold">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91-7024777327"
                        className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/[0.12] focus:border-[#3898FF] focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#3898FF]/15 border border-[#3898FF]/30 text-xs text-[#F5F7FC]">
                    <span className="font-bold text-[#3898FF]">Review Protocol:</span> {siteConfig.reviewNote} Direct communications may also be addressed to <a href={siteConfig.emailLink} className="text-[#3898FF] underline font-bold">{siteConfig.contactEmail}</a>.
                  </div>
                </div>
              )}

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/[0.08]">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#A8B1C2] hover:text-[#F5F7FC] rounded-xl bg-[#101522] hover:bg-[#101522]/80 transition-colors border border-white/[0.08]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <Button
                    onClick={handleNext}
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    size="md"
                    icon={Send}
                  >
                    Submit Project Enquiry
                  </Button>
                )}
              </div>
            </div>
          ) : (
            /* Simulation Submission Complete State */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(16,185,129,0.4)]">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC] tracking-tight">
                  Enquiry Form Simulation Complete
                </h3>
                <p className="text-sm text-[#A8B1C2] max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you for testing the interactive project enquiry workflow.
                </p>
              </div>

              {/* Explicit Frontend Simulation Disclaimer */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-amber-500/15 border border-amber-500/30 text-left text-xs text-amber-200 leading-relaxed flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#F5F7FC] block mb-0.5">Frontend Demonstration Notice:</span>
                  This interface operates in frontend demonstration mode. Submissions are not currently stored in a persistent database or dispatched to an email inbox until backend API integration is deployed. {siteConfig.reviewNote}
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={siteConfig.whatsappChatLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect via WhatsApp Now</span>
                </a>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#101522] hover:bg-white/[0.08] text-xs font-mono text-[#F5F7FC] transition-colors border border-white/[0.08]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Wizard</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
