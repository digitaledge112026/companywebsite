import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Compass, Rocket, Crown, Search } from "lucide-react";

export const metadata = {
  title: "Vision | Digital Edge Analytics & Branding",
  description:
    "The foundational thesis behind Digital Edge. Why fragmented agency retainers are obsolete and how our unified growth cell powers market leaders.",
};

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-[#0A0C10] text-neutral-900 dark:text-[#EDE8DC] selection:bg-[#5BE18E] selection:text-[#0A0C10] transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-white dark:bg-[#0A0C10] border-b border-black/[0.08] dark:border-white/[0.08] relative transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E] mb-4">
              DIGITAL EDGE / FOUNDATIONAL THESIS
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-neutral-900 dark:text-[#EDE8DC] uppercase tracking-tight max-w-4xl leading-[1.02] font-display">
              THE PHILOSOPHY OF <br />
              <span className="text-[#059669] dark:text-[#5BE18E]">UNIFIED GROWTH</span>
            </h1>

            <p className="mt-6 font-mono text-xs sm:text-base text-neutral-600 dark:text-[#8F9CAE] max-w-3xl leading-relaxed">
              Why the traditional marketing agency model is mathematically broken, and how we engineered an integrated system uniting data telemetry, creative velocity, and brand authority.
            </p>
          </div>
        </section>

        {/* Section 1: The Thesis */}
        <section className="py-20 bg-neutral-50 dark:bg-[#080A0E] border-b border-black/[0.08] dark:border-white/[0.08] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E]">
                  CRITICAL PERSPECTIVE
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-[#EDE8DC] uppercase tracking-tight font-display">
                  THE FATAL FLAW IN MODERN MARKETING
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-6 font-mono text-xs sm:text-sm text-neutral-600 dark:text-[#8F9CAE] leading-relaxed">
                <p>
                  For two decades, companies hired five different vendors to grow: a branding agency for logos, a media agency for ad buys, an SEO firm for organic rankings, a PR firm for press releases, and a development shop for their website.
                </p>
                <p className="text-neutral-900 dark:text-[#EDE8DC] font-semibold">
                  The result? Chaos. The media buyers blame the creatives for low CTRs; the creatives blame the web team for poor conversion rates; and the executive team watches millions vanish into opaque monthly PDF retainers with zero revenue accountability.
                </p>
                <p>
                  At Digital Edge, we believe marketing cannot be fragmented. A brand identity that does not convert on a mobile ad is useless. An ad campaign that burns margin without building long-term pricing power is negligence. We operate as a single, unified growth cell.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The 4-D Edge Engine */}
        <section className="py-20 bg-white dark:bg-[#0A0C10] border-b border-black/[0.08] dark:border-white/[0.08] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E] mb-4">
              PROPRIETARY FRAMEWORK
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-[#EDE8DC] uppercase tracking-tight mb-14 font-display">
              THE 4-D GROWTH ARCHITECTURE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "DISCOVER & AUDIT",
                  desc: "Forensic analysis of your unit economics, attribution blindspots, and competitor positioning to identify immediate multi-million dollar growth levers.",
                  icon: Search,
                },
                {
                  step: "02",
                  title: "DESIGN & ARCHITECT",
                  desc: "Engineering the monogram identity, persuasive messaging frameworks, high-converting web architecture, and multi-channel acquisition roadmap.",
                  icon: Compass,
                },
                {
                  step: "03",
                  title: "DEPLOY & ACCELERATE",
                  desc: "High-velocity media buying, continuous creative testing (50+ angles weekly), and lightning-fast web infrastructure with strict ROAS guardrails.",
                  icon: Rocket,
                },
                {
                  step: "04",
                  title: "DOMINATE & SCALE",
                  desc: "Aggressively scaling winning campaigns, capturing generative AI search presence, expanding into international geos, and cementing market dominance.",
                  icon: Crown,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-neutral-50 dark:bg-[#0D1117] border border-neutral-200 dark:border-white/[0.08] hover:border-[#059669]/40 dark:hover:border-[#5BE18E]/40 transition-colors space-y-4 shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-4xl font-bold text-neutral-300 dark:text-white/15">
                        {item.step}
                      </span>
                      <Icon className="w-5 h-5 text-[#059669] dark:text-[#5BE18E]" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-[#EDE8DC] tracking-tight uppercase font-display">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-neutral-600 dark:text-[#8F9CAE] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Technical Integrity & Global Hubs */}
        <section className="py-20 bg-neutral-50 dark:bg-[#080A0E] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0D1117] border border-neutral-200 dark:border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm dark:shadow-2xl">
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E]">
                  GLOBAL GOVERNANCE
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-[#EDE8DC] uppercase tracking-tight font-display">
                  OPERATIONAL COMMITMENTS
                </h3>
                <p className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-[#8F9CAE] max-w-xl leading-relaxed">
                  Every engagement is protected by mutual NDAs, strict SOC-2 compliance, first-party data sovereignty, and month-to-month contracts after the initial 90-day growth sprint.
                </p>
              </div>

              <Link
                href="/#audit"
                className="px-8 py-4 rounded-lg font-bold text-sm text-white dark:text-[#0A0C10] bg-[#059669] dark:bg-[#5BE18E] hover:bg-[#047857] dark:hover:bg-[#4ADE80] transition-colors font-sans uppercase tracking-wider shrink-0 shadow-md"
              >
                Schedule Executive Briefing ↗
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
