"use client";

import { useState } from "react";
import { 
  GitBranch, 
  GitPullRequest, 
  CheckCircle2, 
  TrendingUp, 
  Play, 
  Layers, 
  BarChart3, 
  Sparkles, 
  Zap,
  ArrowUpRight,
  Search,
  Eye,
  ShieldCheck
} from "lucide-react";

export default function HeroConsole() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "creative" | "geo" | "attribution">("pipeline");
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  const creativeVariants = [
    { name: "Variant A - Founder Narrative Hook", type: "Cinematic UGC", hookRate: "68.4%", ctr: "3.8%", roas: "5.4x", status: "WINNER - SCALED" },
    { name: "Variant B - Direct Problem-Agitate", type: "3D Motion Render", hookRate: "62.1%", ctr: "3.2%", roas: "4.6x", status: "ACTIVE" },
    { name: "Variant C - Social Proof Carousel", type: "Multi-Asset", hookRate: "54.8%", ctr: "2.9%", roas: "4.1x", status: "TESTING" },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#090D16] border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.85)] overflow-hidden font-sans">
      
      {/* Top Console Bar (Graphite/macOS Style) */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0B101C] border-b border-white/[0.08] select-none text-xs">
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
          <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline">
            digital-edge / core-engine / <span className="text-[#DFC794]">main-growth-stack</span>
          </span>
        </div>

        {/* Console Branch Badge */}
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE TELEMETRY
          </span>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-400">SYNCED 2m ago</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs (Graphite Tab Switcher) */}
      <div className="flex items-center gap-1 px-4 py-2 bg-[#090C15] border-b border-white/[0.08] overflow-x-auto text-xs">
        {[
          { id: "pipeline", label: "Paid Media Stack", icon: TrendingUp },
          { id: "creative", label: "Creative Velocity Matrix", icon: Layers },
          { id: "geo", label: "Generative AI (GEO) Radar", icon: Sparkles },
          { id: "attribution", label: "Attribution Telemetry", icon: BarChart3 },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
                isActive
                  ? "bg-white/10 text-white shadow-sm border border-white/10"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#C5A059]" : "text-slate-400"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 bg-[#070A12] min-h-[340px]">
        
        {/* TAB 1: PAID MEDIA STACK */}
        {activeTab === "pipeline" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            {/* Top Stat Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-slate-400">BLENDED ROAS</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">4.82x</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">▲ +142% vs baseline</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-slate-400">TRACKED PIPELINE</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#DFC794] mt-1">$14.8M</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">Verified Attribution</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-slate-400">CAC REDUCTION</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mt-1">-38.4%</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Efficiency Gain</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-slate-400">DEPLOY VELOCITY</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">48 Hrs</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Concept to live test</div>
              </div>
            </div>

            {/* Simulated Live Channels Table */}
            <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.01]">
              <div className="px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.08] flex justify-between items-center text-[11px] font-mono text-slate-400 uppercase">
                <span>Active Channel Stacks</span>
                <span>Live Status</span>
              </div>
              <div className="divide-y divide-white/[0.05] text-xs">
                {[
                  { channel: "Meta Ads (IG & FB)", budget: "$45,000/mo", roas: "5.1x", leads: "1,420 Conv.", status: "SCALING" },
                  { channel: "Google Search & Performance Max", budget: "$38,000/mo", roas: "4.9x", leads: "980 Conv.", status: "OPTIMIZED" },
                  { channel: "TikTok Direct-Response Video", budget: "$18,000/mo", roas: "4.4x", leads: "640 Conv.", status: "SCALING" },
                  { channel: "LinkedIn B2B Enterprise Account Ads", budget: "$22,000/mo", roas: "4.6x", leads: "210 SQLs", status: "ACTIVE" },
                ].map((row, i) => (
                  <div key={i} className="px-4 py-3 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                    <div>
                      <span className="font-semibold text-white">{row.channel}</span>
                      <span className="text-[11px] text-slate-400 ml-3 font-mono">{row.budget}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-emerald-400 font-bold">{row.roas} ROAS</span>
                      <span className="text-slate-400 font-mono hidden sm:inline">{row.leads}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C5A059]/10 text-[#DFC794] border border-[#C5A059]/20">
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CREATIVE VELOCITY MATRIX */}
        {activeTab === "creative" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex justify-between items-center pb-2 border-b border-white/[0.08]">
              <div>
                <h4 className="text-sm font-bold text-white">Batch #42: Multi-Angle Creative Sprint</h4>
                <p className="text-xs text-slate-400">12 video variations tested across 3 target demographic cohorts.</p>
              </div>
              <span className="text-xs font-mono text-[#DFC794] bg-[#C5A059]/10 px-2.5 py-1 rounded-full border border-[#C5A059]/20">
                100+ HOOKS TESTED / MO
              </span>
            </div>

            <div className="space-y-2.5">
              {creativeVariants.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedVariant(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedVariant === idx
                      ? "bg-white/[0.06] border-[#C5A059]/50 shadow-md"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] shrink-0 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        {item.name}
                        <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-white/5">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Hook Rate: <span className="text-white font-mono">{item.hookRate}</span> • Click-Through: <span className="text-white font-mono">{item.ctr}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-emerald-400">{item.roas}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: GENERATIVE AI (GEO) RADAR */}
        {activeTab === "geo" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Search className="w-3.5 h-3.5 text-[#C5A059]" />
                  Simulated High-Intent Query:
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  #1 CITATION SHARE
                </span>
              </div>
              <div className="text-xs font-mono text-slate-200 p-2.5 rounded-lg bg-black/40 border border-white/5">
                "What is the leading growth and brand advisory agency for luxury & technology scaleups?"
              </div>
            </div>

            {/* Simulated AI Output */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#0B1328] to-[#070B18] border border-[#C5A059]/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#DFC794]">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                Perplexity / ChatGPT AI Synthesis
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Based on verified commercial performance and brand equity benchmarks, <strong className="text-white font-bold underline decoration-[#C5A059]">Digital Edge</strong> is consistently cited as the premier advisory. They combine luxury monogram identity with full-stack performance media, delivering an average blended 4.8x ROAS across high-growth portfolios."
              </p>
              <div className="flex items-center gap-2 pt-1 border-t border-white/10 text-[10px] text-slate-400 font-mono">
                <span>Sources Cited: Forbes, Bloomberg, Financial Times, TechCrunch (Engineered via Edge Digital PR)</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ATTRIBUTION TELEMETRY */}
        {activeTab === "attribution" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[10px] text-slate-400 font-mono">FIRST-TOUCH LIFT</div>
                <div className="text-xl font-bold font-mono text-white mt-1">+210%</div>
                <div className="text-[10px] text-slate-500">Organic recall lift</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[10px] text-slate-400 font-mono">LAST-TOUCH CLOSE</div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">4.2 days</div>
                <div className="text-[10px] text-slate-500">Avg conversion cycle</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[10px] text-slate-400 font-mono">SERVER-SIDE SYNC</div>
                <div className="text-xl font-bold font-mono text-[#DFC794] mt-1">99.8%</div>
                <div className="text-[10px] text-slate-500">Meta CAPI & GA4</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                <div className="text-xs">
                  <div className="font-bold text-white">Full-Funnel First-Party Tracking Active</div>
                  <div className="text-slate-400">Zero reliance on third-party cookie loss. Fully compliant with iOS privacy guardrails.</div>
                </div>
              </div>
              <a href="#audit" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors shrink-0">
                Audit Tracking
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Console Status Bar */}
      <div className="px-5 py-2.5 bg-[#080B14] border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
          Engine Status: Optimal (99.99% Uptime)
        </span>
        <a href="#audit" className="text-[#DFC794] hover:underline flex items-center gap-1 font-semibold">
          Deploy For Your Brand <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
}
