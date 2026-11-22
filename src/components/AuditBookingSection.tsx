"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function AuditBookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    spend: "$25k - $50k / mo",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="audit" className="py-20 sm:py-28 bg-white dark:bg-[#0B0C0E] border-t border-black/[0.08] dark:border-white/[0.08] relative overflow-hidden text-neutral-900 dark:text-white transition-colors duration-200">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#5BE18E] animate-ping" />
              <span>FREE STRATEGY SESSION</span>
            </div>

            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.90] text-neutral-900 dark:text-white">
              READY FOR <br />
              MORE GROWTH?
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              We review your Meta, Google, and TikTok ad accounts, identify hidden budget leaks, and deliver a tailored 90-day scale blueprint. Zero pitch, 100% actionable performance math.
            </p>

            <div className="space-y-3 pt-4 border-t border-black/[0.08] dark:border-white/[0.08] font-mono text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#5BE18E]" />
                <span>Full-funnel attribution audit (Meta CAPI + Google PMax)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#5BE18E]" />
                <span>Creative fatigue analysis & winning hook benchmarks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#5BE18E]" />
                <span>Guaranteed delivery within 48 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-10 bg-neutral-50 dark:bg-[#121418] border border-neutral-200 dark:border-white/[0.08] shadow-md dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-colors">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#059669]/15 dark:bg-[#5BE18E]/20 text-[#059669] dark:text-[#5BE18E] border border-[#059669] dark:border-[#5BE18E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
                    Audit Request Confirmed
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-md mx-auto">
                    Our lead performance strategist is analyzing <strong className="text-neutral-900 dark:text-white">{formData.company || "your brand"}</strong>. You will receive your teardown video and roadmap at <span className="text-[#059669] dark:text-[#5BE18E] font-bold">{formData.email}</span> within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-mono text-xs text-[#059669] dark:text-[#5BE18E] hover:underline pt-2 cursor-pointer"
                  >
                    Submit another domain →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 font-mono text-xs">
                      <label className="text-neutral-600 dark:text-neutral-400 uppercase">Your Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#0B0C0E] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-[#059669] dark:focus:border-[#5BE18E] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <label className="text-neutral-600 dark:text-neutral-400 uppercase">Work Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="alex@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#0B0C0E] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-[#059669] dark:focus:border-[#5BE18E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 font-mono text-xs">
                      <label className="text-neutral-600 dark:text-neutral-400 uppercase">Brand / Company *</label>
                      <input
                        required
                        type="text"
                        placeholder="Apex DTC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#0B0C0E] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-[#059669] dark:focus:border-[#5BE18E] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <label className="text-neutral-600 dark:text-neutral-400 uppercase">Website URL *</label>
                      <input
                        required
                        type="text"
                        placeholder="https://apexdtc.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#0B0C0E] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-[#059669] dark:focus:border-[#5BE18E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-neutral-600 dark:text-neutral-400 uppercase">Monthly Paid Media Spend</label>
                    <select
                      value={formData.spend}
                      onChange={(e) => setFormData({ ...formData, spend: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#0B0C0E] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#059669] dark:focus:border-[#5BE18E] transition-colors"
                    >
                      <option value="Under $10k / mo">Under $10,000 / mo</option>
                      <option value="$10k - $25k / mo">$10,000 - $25,000 / mo</option>
                      <option value="$25k - $50k / mo">$25,000 - $50,000 / mo</option>
                      <option value="$50k - $150k / mo">$50,000 - $150,000 / mo</option>
                      <option value="$150k+ / mo">$150,000+ / mo (Aggressive Scale)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-md font-bold text-sm sm:text-base text-white dark:text-[#0A0C10] bg-[#059669] dark:bg-[#5BE18E] hover:bg-[#047857] dark:hover:bg-[#4ADE80] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md dark:shadow-[0_0_25px_rgba(91,225,142,0.35)] hover:scale-[1.01] active:scale-[0.99] font-sans"
                  >
                    {loading ? (
                      <span>Analyzing Ad Accounts...</span>
                    ) : (
                      <>
                        <span>Get your free audit</span>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.8]" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-neutral-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#059669] dark:text-[#5BE18E]" />
                    <span>100% Confidential • We never share your account data</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
