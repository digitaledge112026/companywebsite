"use client";

import { 
  Layers, 
  TrendingUp, 
  Sparkles, 
  Palette, 
  Laptop, 
  ArrowUpRight, 
  CheckCircle2, 
  Zap,
  Shield,
  Gauge
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#DFC794]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            BUILT FOR CATEGORY DISRUPTORS
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered For Speed. <br />
            <span className="gold-gradient-text">Architected For Scale.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Every layer of the Digital Edge stack is purpose-built to eliminate marketing waste and maximize commercial valuation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 2-Column Wide Card */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-[#0B101C] via-[#090D18] to-[#070912] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-[90px] pointer-events-none" />

            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-[#DFC794] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                    10X VELOCITY
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#DFC794] transition-colors">
                  High-Frequency Creative Studio
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                  Creative fatigue kills ad performance. Our in-house production unit delivers 40–100+ fresh ad angles, UGC variations, and 3D motion pieces monthly to continually feed algorithmic auction platforms.
                </p>
              </div>

              {/* Graphic snippet */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08]">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400">WEEKLY ASSETS</div>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">25+ Units</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400">HOOK TEST RATE</div>
                  <div className="text-lg font-bold font-mono text-[#DFC794] mt-0.5">3-Second Lock</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400">AVG AD FATIGUE</div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">Zero Burnout</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Performance Media Pillar */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#0B101C] to-[#070912] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  4.8X BLENDED
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#DFC794] transition-colors">
                Autonomous Paid Media
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Algorithmic budget allocation across Meta, Google Search, TikTok, and LinkedIn with continuous multi-touch attribution and strict ROAS guardrails.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Google Performance Max & Search</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Meta AI Advantage+ Scaling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>LinkedIn Enterprise ABM</span>
              </div>
            </div>
          </div>

          {/* Card 3: Brand Architecture & Monograms */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#0B101C] to-[#070912] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#DFC794] bg-[#C5A059]/10 px-2.5 py-0.5 rounded-full border border-[#C5A059]/20">
                  TIER-1 PRESTIGE
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#DFC794] transition-colors">
                Prestige Brand Identity
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Distinctive monogram logos, bespoke typography, and luxury brand narratives that allow you to command premium prices and stand immune to commodity discounting.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Monogram & Visual Mark Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Tone of Voice & Executive Narrative</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>+42% Average Margin Expansion</span>
              </div>
            </div>
          </div>

          {/* Card 4: Generative Engine Optimization (GEO) - 2 Column */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-[#0B101C] via-[#090D18] to-[#070912] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    AI SEARCH DOMINANCE
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#DFC794] transition-colors">
                  Generative Engine Optimization (GEO)
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                  Traditional SEO is dead. Over 40% of search traffic now routes through LLMs. We engineer your digital footprint so that ChatGPT, Perplexity, and Google AI Overviews cite your company as the authoritative choice.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.08]">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400">CHATGPT CITATIONS</div>
                  <div className="text-base font-bold text-white mt-0.5">Top Recommendation</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400">PERPLEXITY SHARE</div>
                  <div className="text-base font-bold text-[#DFC794] mt-0.5">#1 Sourced</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400">AUTHORITY PR</div>
                  <div className="text-base font-bold text-white mt-0.5">Tier-1 Digital Footprint</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400">ORGANIC HIGH-INTENT</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">+380% Lift</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
