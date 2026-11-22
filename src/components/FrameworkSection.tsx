import { 
  Search, 
  Compass, 
  Rocket, 
  Crown, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export default function FrameworkSection() {
  const steps = [
    {
      num: "01",
      title: "Discover & Audit",
      subtitle: "Uncovering Hidden Levers & Blindspots",
      desc: "We perform a forensic audit of your existing brand equity, unit economics, paid funnels, and competitor positioning to identify immediate multi-million dollar growth opportunities.",
      points: [
        "Full-funnel leakage & attribution audit",
        "Competitor creative & spend intelligence",
        "Audience psychographic & persona mapping",
      ],
      icon: Search,
    },
    {
      num: "02",
      title: "Design & Architect",
      subtitle: "Engineering The Growth Blueprint",
      desc: "We construct the visual identity, persuasive messaging frameworks, high-converting web architecture, and multi-channel acquisition roadmap tailored specifically to your margins.",
      points: [
        "High-authority brand design & visual systems",
        "Full-funnel paid media architecture",
        "Conversion-rate-optimized wireframes & copy",
      ],
      icon: Compass,
    },
    {
      num: "03",
      title: "Deploy & Accelerate",
      subtitle: "High-Velocity Media & Tech Execution",
      desc: "Our production studio and media buyers deploy batches of high-impact creative, live campaigns, and lightning-fast web infrastructure into the market with strict ROAS guardrails.",
      points: [
        "Rapid creative testing (50+ angles weekly)",
        "Precision algorithmic ad management",
        "Sub-second Next.js web deployments",
      ],
      icon: Rocket,
    },
    {
      num: "04",
      title: "Dominate & Scale",
      subtitle: "Defensible Category Leadership",
      desc: "With proven winners in hand, we aggressively scale budgets, expand into new international geos and secondary channels, and lock in long-term enterprise valuation.",
      points: [
        "Dynamic multi-channel budget scaling",
        "Continuous scientific CRO testing",
        "Brand prestige & pricing power expansion",
      ],
      icon: Crown,
    },
  ];

  return (
    <section id="framework" className="py-24 relative overflow-hidden bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#C5A059]/30 text-xs font-semibold text-[#DFC794]">
            Proprietary Growth Methodology
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The 4-D <span className="gold-gradient-text">Edge Engine</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            A battle-tested blueprint developed across hundreds of hyper-growth campaigns. No guessing, no vanity metrics—just engineered market leadership.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-7 bg-slate-900/80 border border-slate-800 hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-[#C5A059]/40 group-hover:text-[#C5A059] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#DFC794] transition-colors">
                    {step.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#C5A059] mt-1 mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
