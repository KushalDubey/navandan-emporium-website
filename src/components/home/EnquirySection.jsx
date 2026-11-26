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
  MessageSquare,
  Palette,
  BarChart3,
  Monitor,
  Smartphone,
  Settings,
  Clapperboard,
  Target
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { siteConfig } from '../../config/siteConfig';

export const EnquirySection = ({ showQuickContacts = true }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

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
    { id: 'startup', label: 'Startup / New Business', desc: 'Building a brand, website or first marketing plan' },
    { id: 'smb', label: 'Growing Business', desc: 'Reaching more customers and improving operations' },
    { id: 'enterprise', label: 'Established Company', desc: 'Improving digital presence, systems or workflows' },
    { id: 'agency', label: 'Agency / Business Partner', desc: 'Looking for a specialist to work with' },
  ];

  const serviceOptions = [
    { id: 'branding', label: 'Brand Identity & Creative Design', icon: Palette },
    { id: 'digital-marketing', label: 'Digital Marketing Campaigns', icon: BarChart3 },
    { id: 'web-ecommerce', label: 'Website & E-commerce Development', icon: Monitor },
    { id: 'mobile', label: 'Mobile Applications', icon: Smartphone },
    { id: 'erp-automation', label: 'ERP & Business Automation', icon: Settings },
    { id: 'social-content', label: 'Social Media & Content Production', icon: Clapperboard },
    { id: 'performance', label: 'Performance Marketing & Lead Gen', icon: Target },
  ];

  const timelineOptions = [
    'Immediate (< 30 days)',
    'Standard (1 - 3 months)',
    'Strategic Initiative (3 - 6 months)',
    'Long-Term Retainer / Ongoing',
  ];

  const budgetOptions = [
    'I have a budget in mind',
    'I need help estimating a budget',
    'Prefer to discuss this first',
    'Not decided yet',
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
    if (currentStep === 1 && !formData.businessType) {
      setFormError('Please select the option that best describes your business.');
      return;
    }
    if (currentStep === 2 && formData.services.length === 0) {
      setFormError('Please select at least one service to continue.');
      return;
    }
    setFormError('');
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setFormError('');
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const isValidPhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your name.';
    }

    if (formData.preferredContact === 'Email' && !isValidEmail(formData.workEmail)) {
      errors.workEmail = 'Please enter a valid email address.';
    } else if (formData.workEmail.trim() && !isValidEmail(formData.workEmail)) {
      errors.workEmail = 'Please enter a valid email address.';
    }

    if (
      ['Phone', 'WhatsApp'].includes(formData.preferredContact) &&
      !isValidPhone(formData.phone)
    ) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    } else if (formData.phone && !isValidPhone(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFormError('Please correct the highlighted details before continuing.');
      return;
    }

    setFormError('');
    setSubmitted(true);
  };

  const selectedServiceNames = serviceOptions
    .filter((service) => formData.services.includes(service.id))
    .map((service) => service.label);
  const enquiryMessage = [
    'Hello Navandan Digital, I would like to discuss a project.',
    `Name: ${formData.fullName}`,
    `Email: ${formData.workEmail || 'Not provided'}`,
    `Preferred contact: ${formData.preferredContact}`,
    `Business: ${formData.businessType || 'Not specified'}`,
    `Company: ${formData.companyName || 'Not specified'}`,
    `Phone: ${formData.phone ? `+91-${formData.phone}` : 'Not specified'}`,
    `Services: ${selectedServiceNames.join(', ') || 'Not specified'}`,
    `Timeline: ${formData.timeline || 'Not specified'}`,
    `Budget: ${formData.budgetRange || 'Not specified'}`,
    `Project details: ${formData.projectScope || 'Not provided'}`,
  ].join('\n');
  const whatsappEnquiryLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(enquiryMessage)}`;

  const handleReset = () => {
    setSubmitted(false);
    setFormError('');
    setFieldErrors({});
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
          subtitle="Tell us what you need help with. You can also contact us directly by email, phone or WhatsApp."
        />

        {/* Official Quick Contact Strip */}
        {showQuickContacts && <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
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
        </div>}

        {/* Multi-Step Wizard Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141B2B] border border-white/[0.14] shadow-2xl relative">
          
          {/* Progress Header */}
          {!submitted && (
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-[#3898FF] font-bold tracking-wider">
                  PROJECT ENQUIRY - STEP 0{currentStep} OF 05
                </span>
                <span className="text-[#A8B1C2] font-semibold">
                  {currentStep === 1 && 'About Your Business'}
                  {currentStep === 2 && 'Services You Need'}
                  {currentStep === 3 && 'Project Details & Timeline'}
                  {currentStep === 4 && 'Budget Preference (Optional)'}
                  {currentStep === 5 && 'Your Contact Details'}
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
                    Which Best Describes Your Business?
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
                    Which Services Are You Interested In?
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
                            <span className="w-9 h-9 rounded-xl bg-[#3898FF]/10 border border-[#3898FF]/20 flex items-center justify-center text-[#3898FF] shrink-0">
                              <service.icon className="w-4 h-4" aria-hidden="true" />
                            </span>
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
                    Project Timeline & Details
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
                      maxLength={500}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      placeholder="Tell us what you're trying to achieve, what isn't working today, or any features you need..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/[0.12] focus:border-[#3898FF] focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                    />
                    <p className="mt-1.5 text-right text-[11px] text-[#6B7A99]" aria-live="polite">
                      {formData.projectScope.length}/500 characters
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Budget Allocation */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FC] mb-2 flex items-center gap-2.5">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                    Budget Preference (Optional)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8B1C2]">
                    You do not need to share an exact amount. Choose the option that best describes where you are.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {budgetOptions.map((b) => {
                      const isSelected = formData.budgetRange === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: b })}
                          className={`p-5 rounded-2xl text-left text-sm font-bold leading-relaxed border transition-all ${
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
                    Your Contact Details
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
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          setFieldErrors((prev) => ({ ...prev, fullName: '' }));
                        }}
                        placeholder="Your name"
                        aria-invalid={Boolean(fieldErrors.fullName)}
                        className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/[0.12] focus:border-[#3898FF] focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                      />
                      {fieldErrors.fullName && (
                        <p className="mt-1.5 text-xs text-rose-300" role="alert">{fieldErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2 font-bold">
                        Email Address {formData.preferredContact === 'Email' ? '*' : '(Optional)'}
                      </label>
                      <input
                        type="email"
                        autoComplete="email"
                        value={formData.workEmail}
                        onBlur={() => {
                          const invalid = formData.workEmail.trim() && !isValidEmail(formData.workEmail);
                          setFieldErrors((prev) => ({
                            ...prev,
                            workEmail: invalid ? 'Please enter a valid email address.' : '',
                          }));
                        }}
                        onChange={(e) => {
                          setFormData({ ...formData, workEmail: e.target.value });
                          setFieldErrors((prev) => ({ ...prev, workEmail: '' }));
                        }}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(fieldErrors.workEmail)}
                        className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/[0.12] focus:border-[#3898FF] focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                      />
                      {fieldErrors.workEmail && (
                        <p className="mt-1.5 text-xs text-rose-300" role="alert">{fieldErrors.workEmail}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2 font-bold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Your business name (optional)"
                        className="w-full px-4 py-3 rounded-xl bg-[#090B12] border border-white/[0.12] focus:border-[#3898FF] focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2 font-bold">
                        How Would You Prefer Us to Contact You? *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Email', 'Phone', 'WhatsApp'].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, preferredContact: method });
                              setFieldErrors((prev) => ({ ...prev, phone: '', workEmail: '' }));
                            }}
                            aria-pressed={formData.preferredContact === method}
                            className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-colors ${
                              formData.preferredContact === method
                                ? 'bg-[#3898FF]/20 border-[#3898FF] text-[#F5F7FC]'
                                : 'bg-[#090B12] border-white/[0.12] text-[#A8B1C2] hover:border-white/30'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#A8B1C2] block mb-2 font-bold">
                        Phone / WhatsApp Number {['Phone', 'WhatsApp'].includes(formData.preferredContact) ? '*' : '(Optional)'}
                      </label>
                      <div className="flex w-full rounded-xl bg-[#090B12] border border-white/[0.12] focus-within:border-[#3898FF] focus-within:ring-1 focus-within:ring-[#3898FF]/30 overflow-hidden">
                        <span className="flex items-center px-4 text-sm font-semibold text-[#F5F7FC] border-r border-white/[0.12] bg-[#101522]">
                          +91
                        </span>
                        <input
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          maxLength={10}
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => {
                            const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setFormData({ ...formData, phone: digitsOnly });
                            setFieldErrors((prev) => ({ ...prev, phone: '' }));
                          }}
                          placeholder="10-digit mobile number"
                          aria-label="10-digit mobile number"
                          aria-invalid={Boolean(fieldErrors.phone)}
                          className="w-full min-w-0 px-4 py-3 bg-transparent focus:outline-none text-sm text-[#F5F7FC] placeholder-[#6B7A99]"
                        />
                      </div>
                      <p className="mt-1.5 text-[11px] text-[#6B7A99]">
                        Enter 10 digits. The +91 country code is added automatically.
                      </p>
                      {fieldErrors.phone && (
                        <p className="mt-1.5 text-xs text-rose-300" role="alert">{fieldErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-[11px] leading-relaxed text-[#A8B1C2]">
                    Privacy: Your contact details will be used to respond to this enquiry. Please avoid sharing passwords, payment details or other sensitive information.
                  </p>

                  <div className="p-4 rounded-xl bg-[#3898FF]/15 border border-[#3898FF]/30 text-xs text-[#F5F7FC]">
                    <span className="font-bold text-[#3898FF]">Review Protocol:</span> {siteConfig.reviewNote} Direct communications may also be addressed to <a href={siteConfig.emailLink} className="text-[#3898FF] underline font-bold">{siteConfig.contactEmail}</a>.
                  </div>
                </div>
              )}

              {/* Step Navigation Controls */}
              {formError && <p role="alert" className="mt-6 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">{formError}</p>}

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
                    Prepare WhatsApp Enquiry
                  </Button>
                )}
              </div>
            </div>
          ) : (
            /* Enquiry summary and WhatsApp handoff */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(16,185,129,0.4)]">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC] tracking-tight">
                  Your Enquiry Summary Is Ready
                </h3>
                <p className="text-sm text-[#A8B1C2] max-w-md mx-auto mt-2 leading-relaxed">
                  Your details have been prepared. Continue to WhatsApp to review the message and send it to Navandan Digital.
                </p>
              </div>

              <div className="max-w-xl mx-auto rounded-2xl border border-white/[0.10] bg-[#090B12] p-5 text-left space-y-3">
                <h4 className="text-sm font-bold text-[#F5F7FC]">Review your details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-[#6B7A99] mb-1">Name</p>
                    <p className="text-[#F5F7FC]">{formData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-[#6B7A99] mb-1">Preferred contact</p>
                    <p className="text-[#F5F7FC]">{formData.preferredContact}</p>
                  </div>
                  <div>
                    <p className="text-[#6B7A99] mb-1">Email</p>
                    <p className="text-[#F5F7FC] break-words">{formData.workEmail || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-[#6B7A99] mb-1">Phone</p>
                    <p className="text-[#F5F7FC]">{formData.phone ? `+91-${formData.phone}` : 'Not provided'}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-[#6B7A99] mb-1">Services</p>
                    <p className="text-[#F5F7FC]">{selectedServiceNames.join(', ') || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-[#6B7A99] mb-1">Timeline</p>
                    <p className="text-[#F5F7FC]">{formData.timeline || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-[#6B7A99] mb-1">Budget</p>
                    <p className="text-[#F5F7FC]">{formData.budgetRange || 'Not specified'}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-[#6B7A99] mb-1">Project details</p>
                    <p className="text-[#F5F7FC] whitespace-pre-wrap break-words">{formData.projectScope || 'Not provided'}</p>
                  </div>
                </div>
              </div>

              {/* Explicit Frontend Simulation Disclaimer */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-amber-500/15 border border-amber-500/30 text-left text-xs text-amber-200 leading-relaxed flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#F5F7FC] block mb-0.5">Please note:</span>
                  This website does not store or email form submissions. Your message will open in WhatsApp; check the details and tap Send there. Nothing is sent automatically.
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappEnquiryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Review & Send on WhatsApp</span>
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
