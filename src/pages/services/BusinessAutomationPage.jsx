import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Cpu, 
  Workflow, 
  Database, 
  FileSpreadsheet, 
  Receipt, 
  CheckCircle2, 
  ChevronDown, 
  Zap, 
  Sliders, 
  Layers, 
  ShieldCheck, 
  Clock, 
  BarChart2
} from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { siteConfig } from '../../config/siteConfig';

export const BusinessAutomationPage = () => {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);

  const workflowSteps = [
    {
      step: '01',
      title: 'Event Trigger: Order Ingestion',
      system: 'E-Commerce / B2B Contract Node',
      desc: 'An enterprise purchase order or digital contract is signed. Webhook captures metadata and client verification tokens.',
      status: 'AUTONOMOUS TRIGGER',
    },
    {
      step: '02',
      title: 'Logic & Compliance Verification',
      system: 'Rule-Based Decision Gate',
      desc: 'System automatically checks inventory allocation, tax/GST compliance, and payment authorization in under 150ms.',
      status: 'INSTANT RECONCILIATION',
    },
    {
      step: '03',
      title: 'Automated Invoicing & ERP Sync',
      system: 'Financial & Accounting Ledger',
      desc: 'Generates compliant PDF invoice, updates inventory balances, and logs immutable entry into core database.',
      status: 'DOCUMENT DISPATCHED',
    },
    {
      step: '04',
      title: 'Stakeholder Telemetry & Dispatch',
      system: 'Logistics & Communication Node',
      desc: 'Notifies fulfillment warehouse, updates CRM pipeline status, and triggers automated WhatsApp receipt to client.',
      status: 'EXECUTION COMPLETE',
    },
  ];

  const deliverables = [
    { title: 'Custom ERP & Operations Control Plane', desc: 'Bespoke web dashboard designed specifically for your internal workflows, eliminating bloated generic software fees.' },
    { title: 'Unified CRM & Lifecycle Database', desc: 'Single source of truth for all client records, communication histories, contracts, and deal stages.' },
    { title: 'Automated Billing & Invoicing Engine', desc: 'Auto-generation of tax-compliant invoices, automated recurring payment reminders, and reconciliation scripts.' },
    { title: 'Event-Driven Webhook Integration Mesh', desc: 'Seamlessly synchronizes data between legacy SQL databases, third-party APIs, Slack, and WhatsApp.' },
    { title: 'Executive BI & Reporting Dashboards', desc: 'Real-time visibility into inventory velocity, operational cash flow, and departmental efficiency benchmarks.' },
    { title: 'Comprehensive Integration Runbooks', desc: 'Step-by-step technical documentation, database schemas, and rollback procedures for internal teams.' },
  ];

  const faqs = [
    { q: 'Can you integrate with our existing legacy databases and accounting tools?', a: 'Yes. We construct secure API wrappers and ETL data pipelines that bridge legacy SQL/on-premise systems with modern cloud interfaces without operational disruption.' },
    { q: 'How does a custom ERP compare to off-the-shelf software like SAP or Salesforce?', a: 'Custom systems are tailored strictly to your exact operational logic—eliminating recurring per-seat subscription licenses, bloated unneeded modules, and endless plugin maintenance.' },
    { q: 'How do you ensure data security and role-based permissions?', a: 'We implement granular role-based access control (RBAC), encrypted database fields, comprehensive audit logging, and automated daily backups.' },
    { q: 'What is the deployment process for an operations automation pipeline?', a: 'We run parallel pilot staging to verify mathematical reconciliation against your live data before executing a zero-downtime cutover.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#090B12] min-h-screen text-[#F5F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 01. DISTINCTIVE HERO: Operations Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="blue" dot={true}>
                SERVICE PILLAR 04 // ERP, CRM & BUSINESS AUTOMATION
              </Badge>
              <span className="text-xs font-mono text-[#3898FF]">OPERATIONS ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F7FC] leading-[1.06]">
              Eliminate Bottlenecks.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898FF] via-[#00F0FF] to-emerald-400 glow-text-blue">
                Automate Operations.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#A8B1C2] leading-relaxed max-w-2xl font-normal">
              We design custom ERP cockpits, unified CRM pipelines, and automated business workflows that eliminate manual data reconciliation and streamline multi-departmental execution.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
                Schedule Automation Discovery
              </Button>
              <a
                href={siteConfig.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#141B2B] hover:bg-[#1C253B] text-[#F5F7FC] text-sm font-semibold border border-white/12 transition-all shadow-sm"
              >
                Inquire ERP Architecture via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Hero: Live Operations Status Matrix */}
          <div className="lg:col-span-5 relative">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#141B2B] border border-white/[0.12] shadow-2xl relative overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#3898FF]" />
                  <span className="text-white font-bold">ERP Control Plane Telemetry</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                  24/7 RUNNING
                </span>
              </div>

              {/* Data Pipeline Telemetry Preview */}
              <div className="space-y-3 py-2 text-[#A8B1C2]">
                <div className="p-3 rounded-xl bg-[#090B12] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#3898FF] block">PROCUREMENT QUEUE</span>
                    <span className="text-white font-bold text-sm">Automated PO Matching</span>
                  </div>
                  <span className="text-emerald-400 font-bold">Synced (0.0s)</span>
                </div>

                <div className="p-3 rounded-xl bg-[#090B12] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#8B5CF6] block">FINANCIAL LEDGER</span>
                    <span className="text-white font-bold text-sm">Tax & Invoice Generation</span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% Reconciled</span>
                </div>

                <div className="p-3 rounded-xl bg-[#090B12] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#00F0FF] block">LOGISTICS WEBHOOK</span>
                    <span className="text-white font-bold text-sm">Warehouse Event Bus</span>
                  </div>
                  <span className="text-[#3898FF] font-bold">Active Stream</span>
                </div>
              </div>

              {/* Status Footer */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08] text-[11px]">
                <div className="text-[#A8B1C2]">
                  <span>HOURLY RECONCILIATIONS:</span>
                  <span className="text-white font-bold block">Autonomous</span>
                </div>
                <div className="text-[#A8B1C2]">
                  <span>DATA ACCURACY RATE:</span>
                  <span className="text-emerald-400 font-bold block">99.99% Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 02. INTERACTIVE VISUAL WORKFLOW BUILDER SIMULATION */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.12] shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3898FF] font-bold block mb-2">
              AUTOMATION PIPELINE ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Event-Driven Operations Workflow
            </h2>
            <p className="text-sm text-[#A8B1C2] mt-2">
              Click any stage in the pipeline to inspect how autonomous data orchestration functions without manual touchpoints.
            </p>
          </div>

          {/* Workflow Stage Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {workflowSteps.map((wf, idx) => (
              <button
                key={wf.step}
                onClick={() => setActiveWorkflowStep(idx + 1)}
                className={`p-5 rounded-2xl text-left transition-all border ${
                  activeWorkflowStep === idx + 1
                    ? 'bg-[#141B2B] border-[#3898FF] shadow-[0_0_25px_rgba(56,152,255,0.3)]'
                    : 'bg-[#141B2B]/50 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#3898FF] font-bold mb-1">
                  <span>STAGE {wf.step}</span>
                  {activeWorkflowStep === idx + 1 && (
                    <span className="w-2 h-2 rounded-full bg-[#3898FF] animate-ping" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-[#F5F7FC]">{wf.title}</h3>
                <span className="text-[10px] font-mono text-emerald-400 block mt-2">{wf.status}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Deep Inspector */}
          <div className="p-7 sm:p-9 rounded-2xl bg-[#141B2B] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-[#3898FF] font-bold uppercase">
                Active Process: {workflowSteps[activeWorkflowStep - 1].system}
              </span>
              <h4 className="text-2xl font-bold text-[#F5F7FC]">
                {workflowSteps[activeWorkflowStep - 1].title}
              </h4>
              <p className="text-sm text-[#A8B1C2] leading-relaxed">
                {workflowSteps[activeWorkflowStep - 1].desc}
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Zero Manual Overhead Required</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-2xl bg-[#090B12] border border-white/[0.08] space-y-3 font-mono text-xs">
              <div className="text-[#A8B1C2] border-b border-white/[0.06] pb-2">
                Webhook Event Payload
              </div>
              <div className="text-[#3898FF]">
                event: "procurement.order_reconciled"<br/>
                status: "200_OK"<br/>
                latency: "112ms"<br/>
                hash: "0x89fa...2c11"
              </div>
              <div className="text-[10px] text-slate-500 pt-1">
                Encrypted with AES-256 GCM
              </div>
            </div>
          </div>
        </div>

        {/* 03. BUSINESS PROBLEMS SOLVED & OPERATIONAL ROI */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3898FF] font-bold block mb-2">
              MEASURABLE ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Operational Impact & Efficiency
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B1C2] mt-2">
              Transforming manual administrative overhead into high-velocity automated precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#141B2B] border border-white/[0.08] text-center space-y-3">
              <Clock className="w-8 h-8 text-[#3898FF] mx-auto" />
              <h3 className="text-xl font-bold text-white">120+ Hours Saved Monthly</h3>
              <p className="text-xs text-[#A8B1C2] leading-relaxed">
                Eliminating repetitive manual data entry between procurement, invoicing, and logistics.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#141B2B] border border-white/[0.08] text-center space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Zero Reconciliation Errors</h3>
              <p className="text-xs text-[#A8B1C2] leading-relaxed">
                Automated logic gates prevent mismatched quantities, incorrect billing rates, or lost orders.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#141B2B] border border-white/[0.08] text-center space-y-3">
              <BarChart2 className="w-8 h-8 text-[#8B5CF6] mx-auto" />
              <h3 className="text-xl font-bold text-white">Real-Time Executive Visibility</h3>
              <p className="text-xs text-[#A8B1C2] leading-relaxed">
                Instant operational dashboards delivering live cash-flow telemetry and departmental KPIs.
              </p>
            </div>
          </div>
        </div>

        {/* 04. DELIVERABLES MATRIX */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3898FF] font-bold block mb-2">
              OUTPUT SPECIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FC] tracking-tight">
              Enterprise Deliverables Included
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B1C2] mt-2">
              Production-ready operations software, database schemas, and custom API runbooks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#141B2B] border border-white/[0.08] hover:border-[#3898FF]/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-[#3898FF]/15 text-[#3898FF] w-fit">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7FC]">{item.title}</h3>
                  <p className="text-xs text-[#A8B1C2] leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[10px] font-mono text-emerald-400">
                  SYSTEM VALIDATED
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 05. FAQS */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3898FF] font-bold block mb-2">
              ENTERPRISE QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">
              ERP & Business Automation FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#141B2B] border border-white/[0.08] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#F5F7FC]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#3898FF] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#A8B1C2] leading-relaxed border-t border-white/[0.06] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 06. AUTOMATION CTA */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-blue-950/30 via-[#101522] to-emerald-950/30 border border-white/[0.12] text-center space-y-6">
          <Badge variant="blue">MODERNIZE YOUR OPERATIONS</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FC]">
            Ready to Automate Your Business Architecture?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B1C2] max-w-2xl mx-auto">
            Schedule an operational discovery audit with our enterprise architects to map your data silos and streamline workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
              Schedule Automation Discovery
            </Button>
            <a
              href={siteConfig.whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg"
            >
              <span>Instant WhatsApp Discussion</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
