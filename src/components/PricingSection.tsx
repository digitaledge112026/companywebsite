import Link from "next/link";
import { Check, Sparkles, ArrowRight, Shield } from "lucide-react";

export default function PricingSection() {
  const tiers = [
    {
      name: "Growth Catalyst",
      idealFor: "Ideal for emerging brands scaling past $50k/mo revenue",
      price: "$4,500",
      period: "per month",
      highlighted: false,
      badge: "Fast-Mover",
      features: [
        "Brand Identity Polish & Narrative Alignment",
        "2 Primary Paid Media Channels (Meta & Google)",
        "20+ High-Conversion Ad Creatives / Month",
        "Bi-Weekly Scientific Funnel & CRO Audits",
        "Next.js High-Converting Landing Page Setup",
        "Dedicated Growth Strategist & Monthly Review",
      ],
      ctaText: "Apply For Growth Catalyst",
    },
    {
      name: "Edge Dominance",
      idealFor: "For scaling market leaders targeting category dominance",
      price: "$8,500",
      period: "per month",
      highlighted: true,
      badge: "MOST POPULAR",
      features: [
        "Complete Brand Re-Architecture & Visual Identity",
        "Omni-Channel Paid Media (Meta, Google, TikTok, LinkedIn)",
        "60+ High-Impact Ad Creatives, UGC & 3D Motion",
        "Custom Next.js Web Engineering & Continuous CRO Lab",
        "Generative AI SEO (GEO) & Authority Backlinks",
        "First-Party Server Attribution & GA4 Telemetry",
        "Private Slack Channel & Weekly Strategy War-Rooms",
      ],
      ctaText: "Scale With Edge Dominance",
    },
    {
      name: "Enterprise Bespoke",
      idealFor: "For high-volume brands demanding an elite dedicated squad",
      price: "Custom",
      period: "starting at $18k/mo",
      highlighted: false,
      badge: "Dedicated Squad",
      features: [
        "Full Dedicated Growth Unit (Strategists, Devs, Designers, Buyers)",
        "Unlimited Creative Production & Multi-Variant Angles",
        "Multi-Geo International Expansion & Localization",
        "Proprietary Predictive LTV Attribution Modeling",
        "Executive Quarterly Business Reviews & Board Reporting",
        "Guaranteed ROAS Guardrails & Strict SLA Commitments",
      ],
      ctaText: "Request Enterprise Consultation",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#C5A059]/30 text-xs font-semibold text-[#DFC794]">
            Transparent Partnerships
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable Investment. <br />
            <span className="gold-gradient-text">Disproportionate Return.</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            No hidden charges or vanity retainers. Every dollar deployed is tied to measurable commercial acceleration and enterprise valuation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                tier.highlighted
                  ? "bg-gradient-to-b from-[#0F1D40] via-[#0B132B] to-[#070B18] border-2 border-[#C5A059] lg:-translate-y-3"
                  : "bg-slate-900/90 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-extrabold bg-[#C5A059] text-[#070B18] shadow-md uppercase tracking-wider">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                      {tier.idealFor}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      /{tier.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3.5">
                  <div className="text-xs font-bold text-[#DFC794] uppercase tracking-wider">
                    What's Included:
                  </div>
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-800/80">
                <Link
                  href="#audit"
                  className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all ${
                    tier.highlighted
                      ? "text-[#070B18] bg-gradient-to-r from-[#E5D2A6] via-[#C5A059] to-[#A3813B] shadow-[0_8px_25px_rgba(197,160,89,0.35)] hover:scale-[1.02]"
                      : "text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Seal */}
        <div className="mt-16 text-center max-w-xl mx-auto flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-400">
          <Shield className="w-5 h-5 text-[#C5A059] shrink-0" />
          <span>
            Every partnership is backed by transparent KPI checkpoints. Month-to-month contracts after the initial 90-day growth sprint.
          </span>
        </div>

      </div>
    </section>
  );
}
