"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  TrendingUp, 
  BarChart3, 
  Sparkles, 
  ExternalLink,
  Award
} from "lucide-react";

export default function CaseStudiesSection() {
  const [filter, setFilter] = useState<string>("all");

  const caseStudies = [
    {
      title: "Aura Haute Horlogerie",
      client: "Luxury Swiss Timepieces & Fine Jewelry",
      category: "branding",
      badge: "Brand Re-Architecture & Headless UX",
      headline: "Elevating a Century-Old Watchmaker for Digital-First High-Net-Worth Buyers",
      description:
        "Redesigned their visual prestige identity, authored a provocative editorial narrative, and built a Next.js immersive 3D timepiece configurator that drove record-breaking VIP consultations.",
      stats: [
        { label: "Online Sales Lift", value: "+285%" },
        { label: "Blended ROAS", value: "4.8x" },
        { label: "Average Order Value", value: "$4,200" },
      ],
      tags: ["Luxury Branding", "Next.js 3D UX", "Private Client Funnels"],
    },
    {
      title: "Nexus FinTech Cloud",
      client: "Enterprise Financial Infrastructure",
      category: "performance",
      badge: "B2B Demand Gen & Paid Acquisition",
      headline: "Scaling From $40k to $380k MRR in 8 Months Through Laser B2B Targeting",
      description:
        "Engineered an account-based advertising engine across LinkedIn and Google Search, paired with high-converting interactive ROI demos that slashed sales cycle length by 60%.",
      stats: [
        { label: "MRR Growth", value: "9.5x" },
        { label: "Enterprise Pipeline", value: "$18.4M" },
        { label: "CAC Reduction", value: "-48%" },
      ],
      tags: ["B2B SaaS Growth", "Account-Based Ads", "Demo Funnel CRO"],
    },
    {
      title: "Verde Organics",
      client: "Global Premium Health & Nutrition",
      category: "seo",
      badge: "Programmatic SEO & Paid Social",
      headline: "Capturing 450,000+ Monthly Organic Buyers via Generative Search Domination",
      description:
        "Constructed an AI-resistant programmatic SEO content architecture and paired it with viral TikTok/Meta UGC video sprints that positioned Verde as the undisputed category authority.",
      stats: [
        { label: "Monthly Organic Visits", value: "450k+" },
        { label: "Omni-Channel ROAS", value: "5.2x" },
        { label: "Repeat Purchase Rate", value: "+74%" },
      ],
      tags: ["Programmatic SEO", "GEO AI Search", "Direct-to-Consumer"],
    },
    {
      title: "Kinetix AI Intelligence",
      client: "Machine Learning Automation Suite",
      category: "branding",
      badge: "Complete Identity, Web App & Series A Narrative",
      headline: "Positioning an Emerging DeepTech Lab for a Category-Defining $14M Series A",
      description:
        "Created an authoritative, futuristic brand identity, comprehensive design token library, and high-performance Next.js flagship web experience that captivated Tier-1 Silicon Valley VCs.",
      stats: [
        { label: "Funding Round", value: "$14M" },
        { label: "Demo Conversion Rate", value: "64%" },
        { label: "Global Brand Reach", value: "1.2M+" },
      ],
      tags: ["DeepTech Brand", "Next.js App", "Investor Narrative"],
    },
  ];

  const filtered =
    filter === "all" ? caseStudies : caseStudies.filter((c) => c.category === filter);

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-[#070B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#C5A059]/30 text-xs font-semibold text-[#DFC794]">
              <Award className="w-3.5 h-3.5 text-[#C5A059]" />
              Proven Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Numbers Don’t Lie. <br />
              <span className="gold-gradient-text">Here Is The Evidence.</span>
            </h2>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "branding", label: "Branding & Identity" },
              { id: "performance", label: "Performance Ads" },
              { id: "seo", label: "SEO & Scale" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === item.id
                    ? "bg-[#C5A059] text-[#070B18] shadow-lg font-bold"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl p-8 bg-gradient-to-b from-slate-900/90 via-[#0B132B]/70 to-[#070B18] border border-slate-800 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C5A059]/10 text-[#DFC794] border border-[#C5A059]/30">
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {item.client}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#DFC794] transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-sm font-medium text-slate-300 mt-2">
                  {item.headline}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mt-3">
                  {item.description}
                </p>

                {/* Stat Highlights Bar */}
                <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg sm:text-xl font-extrabold text-white font-mono">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="#audit"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#C5A059] hover:underline"
                >
                  <span>Replicate These Results</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
