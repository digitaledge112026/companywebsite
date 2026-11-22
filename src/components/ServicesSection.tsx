"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Palette, 
  TrendingUp, 
  Laptop, 
  Search, 
  Video, 
  BarChart, 
  ArrowUpRight, 
  CheckCircle, 
  ChevronRight,
  Sparkles,
  Layers
} from "lucide-react";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      id: "branding",
      category: "branding",
      icon: Palette,
      title: "Brand Strategy & Visual Identity",
      tagline: "Unforgettable prestige and market authority.",
      description:
        "We build iconic visual identities, distinctive monogram logos, and brand architectures that command premium pricing and stand above commoditized competitors.",
      features: [
        "Bespoke Monogram & Logo System Design",
        "Brand Narrative & Positioning Frameworks",
        "Complete Multi-Platform Design Systems",
        "Luxury Packaging & Editorial Art Direction",
        "Voice, Tone & Executive Messaging Guidelines",
      ],
      metric: "+42% Pricing Power Lift",
    },
    {
      id: "performance",
      category: "marketing",
      icon: TrendingUp,
      title: "Performance Marketing & Paid Acquisition",
      tagline: "Hyper-profitable customer acquisition engines.",
      description:
        "We deploy data-engineered media campaigns across Google, Meta, TikTok, and LinkedIn with continuous algorithmic optimization and relentless focus on ROAS.",
      features: [
        "Google Ads & AI Performance Max Campaigns",
        "Meta (Instagram & Facebook) High-ROAS Funnels",
        "TikTok & Short-Form Paid Video Media",
        "B2B LinkedIn Enterprise Account Targeting",
        "Omni-Channel Retargeting & Attribution",
      ],
      metric: "4.8x Average Return on Ad Spend",
    },
    {
      id: "web-dev",
      category: "development",
      icon: Laptop,
      title: "High-Conversion Web & UX Engineering",
      tagline: "Lightning-fast platforms designed to convert.",
      description:
        "Crafted with modern Next.js, React, and micro-interactions, we engineer digital experiences that captivate high-value visitors and maximize conversion rates.",
      features: [
        "Modern Next.js & Server-Rendered Web Apps",
        "Conversion-Focused UX Wireframing & Prototyping",
        "Sub-Second Page Speeds & 99+ Core Web Vitals",
        "Headless Shopify & Custom eCommerce Systems",
        "Interactive Calculators & Dynamic Lead Magnets",
      ],
      metric: "+180% Lead-to-Customer Velocity",
    },
    {
      id: "seo",
      category: "marketing",
      icon: Search,
      title: "Search Engine & AI Engine Optimization (GEO)",
      tagline: "Dominate traditional search and AI discovery.",
      description:
        "Beyond traditional SEO, we optimize your brand to become the definitive cited authority inside Google, Perplexity, ChatGPT, and AI answer engines.",
      features: [
        "Generative Engine Optimization (GEO for AI Answers)",
        "Enterprise Technical SEO Audits & Remediation",
        "High-Intent Programmatic Content Clusters",
        "High-Tier Digital PR & Tier-1 Authority Backlinks",
        "Local, National & Global Search Domination",
      ],
      metric: "Top Cited Source in AI Models",
    },
    {
      id: "creative",
      category: "branding",
      icon: Video,
      title: "Creative Production & Motion Studio",
      tagline: "Scroll-stopping creative engineered for conversion.",
      description:
        "Creative is the #1 targeting lever in modern digital marketing. Our in-house studio produces high-velocity UGC, 3D animations, and cinematic brand reels.",
      features: [
        "High-Converting UGC & Direct-Response Video Ads",
        "3D Product Visualizations & Motion Graphics",
        "Cinematic Brand Storytelling & Commercials",
        "Multi-Variant Ad Creative Batching (100+ Hooks/mo)",
        "Psychological Copywriting & Scripting",
      ],
      metric: "10x Creative Testing Velocity",
    },
    {
      id: "analytics",
      category: "development",
      icon: BarChart,
      title: "Growth Analytics & CRO Lab",
      tagline: "Turn raw behavioral data into exponential profit.",
      description:
        "Stop guessing where your money goes. We install multi-touch attribution, custom user journey telemetry, and run weekly iterative A/B tests.",
      features: [
        "First-Party Server-Side Tracking (CAPI & GA4)",
        "Weekly Scientific A/B & Multivariate Testing",
        "Full-Funnel Friction Audits & Heatmap Telemetry",
        "Customer Lifetime Value (LTV) Optimization",
        "Real-Time Executive ROI Dashboards",
      ],
      metric: "+34% Average Conversion Lift",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070B18]">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#C5A059]/30 text-xs font-semibold text-[#DFC794]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Full-Spectrum Growth Capabilities
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Integrated Solutions Built for{" "}
            <span className="gold-gradient-text">Dominant Brands</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            We don’t believe in fragmented efforts. We unite prestigious brand storytelling, hyper-focused performance media, and elite web technology into one unified growth engine.
          </p>

          {/* Category Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-6 shadow-xl">
            {[
              { id: "all", label: "All Capabilities" },
              { id: "branding", label: "Brand & Creative" },
              { id: "marketing", label: "Performance & SEO" },
              { id: "development", label: "Web Engineering & CRO" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#C5A059] text-[#070B18] shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-8 bg-gradient-to-b from-slate-900/90 via-[#0B132B]/80 to-[#070B18] border border-slate-800 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059]/20 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-[#111C38] text-[#DFC794] border border-[#C5A059]/30">
                      {service.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#DFC794] transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="text-xs font-medium text-[#C5A059] mt-1 mb-3">
                    {service.tagline}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-slate-800/60">
                  <Link
                    href="#audit"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-300 hover:text-[#C5A059] group-hover:underline transition-colors"
                  >
                    <span>Request Strategy Briefing</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#111C38] to-[#0B132B] border border-[#C5A059]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">
              Not sure which service mix drives maximum ROI for your stage?
            </h4>
            <p className="text-sm text-slate-400">
              Run our interactive Growth Edge Simulator or speak directly with our senior growth partners.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="#calculator"
              className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#070B18] bg-[#C5A059] hover:bg-[#DFC794] transition-colors"
            >
              Test ROI Simulator
            </Link>
            <Link
              href="#audit"
              className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
            >
              Book Strategy Session
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
