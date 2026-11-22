import { Check, X, Sparkles, ArrowRight } from "lucide-react";

export default function ComparisonSection() {
  const comparisonRows = [
    {
      feature: "Creative Testing Velocity",
      legacy: "2–4 static ads per month, slow approvals",
      edge: "40–100+ creative angles, UGC & 3D motion monthly",
    },
    {
      feature: "Media Buying Alignment",
      legacy: "Outsourced media buyers disconnected from design",
      edge: "Unified growth squad (designers, copywriters & buyers in 1 cell)",
    },
    {
      feature: "Attribution & Reporting",
      legacy: "Bloated monthly PDF slide decks with vanity metrics",
      edge: "Real-time 24/7 executive telemetry & server-side CAPI tracking",
    },
    {
      feature: "AI Search & GEO Readiness",
      legacy: "Outdated keyword stuffing with no AI LLM optimization",
      edge: "Proprietary GEO protocols dominating Perplexity & ChatGPT answers",
    },
    {
      feature: "Web & Tech Engineering",
      legacy: "Slow, bloated WordPress themes with 4s+ load times",
      edge: "Sub-second Next.js server-rendered platforms with 99+ Core Web Vitals",
    },
    {
      feature: "Commercial Track Record",
      legacy: "Struggles to sustain 1.5x–2.0x blended ROAS",
      edge: "4.8x average verified return on ad spend across active portfolio",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#06080F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#DFC794]">
            ARCHITECTURAL ADVANTAGE
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Old Agency Model Is Broken. <br />
            <span className="gold-gradient-text">Here Is The Modern Alternative.</span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg">
            See how Digital Edge compares to legacy marketing retainers.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="rounded-3xl border border-white/10 bg-[#090C16] shadow-2xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-[#0B101C] p-4 sm:p-6 text-sm font-bold">
            <div className="md:col-span-4 text-slate-400 font-mono text-xs uppercase tracking-wider">
              Dimension
            </div>
            <div className="md:col-span-4 text-slate-500 font-mono text-xs uppercase tracking-wider mt-2 md:mt-0">
              Legacy Retainer Agencies
            </div>
            <div className="md:col-span-4 text-[#DFC794] font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 mt-2 md:mt-0">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Digital Edge Integrated Cell
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/[0.06] text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 items-center hover:bg-white/[0.02] transition-colors gap-2 md:gap-0"
              >
                <div className="md:col-span-4 font-bold text-white pr-4">
                  {row.feature}
                </div>

                <div className="md:col-span-4 text-slate-400 flex items-center gap-2 pr-4">
                  <div className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0">
                    <X className="w-3 h-3" />
                  </div>
                  <span>{row.legacy}</span>
                </div>

                <div className="md:col-span-4 text-slate-200 font-semibold flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-white">{row.edge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Callout */}
          <div className="p-6 bg-[#0B101C] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Ready to replace guesswork with high-velocity precision growth?
            </div>
            <a
              href="#audit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-[#07090E] bg-gradient-to-r from-[#E5D2A6] via-[#C5A059] to-[#A3813B] shadow-md hover:scale-[1.02] transition-all"
            >
              <span>Switch To Digital Edge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
