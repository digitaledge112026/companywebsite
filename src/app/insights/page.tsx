import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Insights & Field Notes | Digital Edge Analytics",
  description:
    "Quarterly intelligence reports, forensic attribution teardowns, and actionable growth frameworks from the Digital Edge engineering unit.",
};

export default function InsightsPage() {
  const allNotes = [
    {
      title: "Why Multi-Touch Attribution Slashes CAC by 38%",
      date: "OCTOBER 2026",
      category: "ATTRIBUTION",
      readTime: "7 MIN READ",
      summary:
        "A forensic teardown of how first-party server telemetry revealed $180,000 in monthly ad spend waste across Google Performance Max and Meta Advantage+ campaigns.",
      metric: "-38.4% CAC",
      statLabel: "Average Client Savings",
    },
    {
      title: "The Architecture of a $14M Series A Brand Narrative",
      date: "NOVEMBER 2026",
      category: "BRAND EQUITY",
      readTime: "9 MIN READ",
      summary:
        "How aligning high-precision monogram identity with B2B programmatic search transformed an obscure deep-tech startup into the undisputed category leader.",
      metric: "$14M Series A",
      statLabel: "Venture Capital Round",
    },
    {
      title: "Optimizing for AI Answer Engines (The GEO Protocol)",
      date: "DECEMBER 2026",
      category: "GEO / AI SEARCH",
      readTime: "6 MIN READ",
      summary:
        "The step-by-step engineering protocol we used to capture 82% citation share across ChatGPT, Perplexity, and Google AI Overviews for high-ticket brands.",
      metric: "#1 AI Citation",
      statLabel: "Recommendation Share",
    },
    {
      title: "The Death of Third-Party Pixels: First-Party CAPI Deployments",
      date: "JANUARY 2026",
      category: "DATA TELEMETRY",
      readTime: "11 MIN READ",
      summary:
        "How browser privacy lockouts destroy ad signal quality, and the exact server-side container architecture required to restore 99.8% event match quality.",
      metric: "99.8% Match",
      statLabel: "Server-Side Fidelity",
    },
    {
      title: "Scaling SaaS from $40k to $380k MRR via Precision ABM",
      date: "FEBRUARY 2026",
      category: "MEDIA BUYING",
      readTime: "8 MIN READ",
      summary:
        "Account-based advertising frameworks that combine LinkedIn executive targeting with interactive Next.js demo funnels to shorten sales cycles by 60%.",
      metric: "9.5x MRR",
      statLabel: "8-Month Growth Lift",
    },
    {
      title: "The Creative Fatigue Matrix: Testing 100+ Hooks Monthly",
      date: "MARCH 2026",
      category: "CREATIVE STUDIO",
      readTime: "5 MIN READ",
      summary:
        "Why algorithmic ad auctions penalize repetitive creative, and how our in-house batching pipeline produces 3D motion and UGC variants at scale.",
      metric: "10x Velocity",
      statLabel: "Creative Output",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-[#0A0C10] text-neutral-900 dark:text-[#EDE8DC] selection:bg-[#5BE18E] selection:text-[#0A0C10] transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="pt-20 pb-16 bg-white dark:bg-[#0A0C10] border-b border-black/[0.08] dark:border-white/[0.08] relative transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E] mb-4">
              DIGITAL EDGE / INTELLIGENCE ARCHIVE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-neutral-900 dark:text-[#EDE8DC] uppercase tracking-tight max-w-4xl leading-[1.02] font-display">
              FIELD NOTES & <br />
              <span className="text-[#059669] dark:text-[#5BE18E]">GROWTH TELEMETRY</span>
            </h1>

            <p className="mt-6 font-mono text-xs sm:text-base text-neutral-600 dark:text-[#8F9CAE] max-w-3xl leading-relaxed">
              Quarterly intelligence reports, forensic attribution teardowns, and actionable technical playbooks published directly by our senior growth partners.
            </p>
          </div>
        </section>

        {/* Notes Grid */}
        <section className="py-20 bg-neutral-50 dark:bg-[#080A0E] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNotes.map((note, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white dark:bg-[#0D1117] border border-neutral-200 dark:border-white/[0.08] hover:border-[#059669]/50 dark:hover:border-[#5BE18E]/50 transition-all duration-300 p-7 flex flex-col justify-between shadow-sm dark:shadow-2xl group"
                >
                  <div>
                    {/* Monitor Card Visual */}
                    <div className="w-full h-44 rounded-xl bg-neutral-100 dark:bg-[#080A10] border border-neutral-200 dark:border-white/[0.06] p-4 relative overflow-hidden flex flex-col justify-between mb-6 group-hover:border-neutral-300 dark:group-hover:border-white/20 transition-colors">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 dark:text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#5BE18E] animate-pulse" />
                          TELEMETRY
                        </span>
                        <span className="text-[#059669] dark:text-[#5BE18E] font-bold">{note.metric}</span>
                      </div>

                      {/* Sparkline Graphic */}
                      <div className="flex items-end gap-1.5 h-20 pt-4">
                        {[25, 40, 35, 60, 45, 75, 70, 85, 65, 95, 80, 100].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-neutral-300 dark:bg-white/10 group-hover:bg-[#059669]/40 dark:group-hover:bg-[#5BE18E]/40 rounded-t transition-all duration-300"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400 dark:text-slate-600">
                        <span>{note.statLabel}</span>
                        <span>CONFIDENCE 99.8%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 dark:text-slate-500 mb-2">
                      <span>{note.date}</span>
                      <span className="text-[#059669] dark:text-[#5BE18E] font-medium">{note.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 dark:text-[#EDE8DC] group-hover:text-[#059669] dark:group-hover:text-[#5BE18E] transition-colors leading-snug font-display">
                      {note.title}
                    </h3>

                    <p className="mt-3 font-mono text-xs text-neutral-600 dark:text-[#8F9CAE] leading-relaxed">
                      {note.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-white/[0.08] flex items-center justify-between font-mono text-xs text-neutral-500 dark:text-slate-400 group-hover:text-neutral-900 dark:group-hover:text-[#EDE8DC] transition-colors">
                    <span>{note.readTime}</span>
                    <Link
                      href="/#audit"
                      className="inline-flex items-center gap-1 text-[#059669] dark:text-[#5BE18E] hover:underline"
                    >
                      <span>Read Teardown</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / Subscription Box */}
        <section className="py-20 bg-white dark:bg-[#0A0C10] border-t border-black/[0.08] dark:border-white/[0.08] transition-colors">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E]">
              EXECUTIVE TELEMETRY DISPATCH
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-[#EDE8DC] uppercase tracking-tight font-display">
              Get Quarterly Teardowns Delivered Directly.
            </h3>
            <p className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-[#8F9CAE] max-w-xl mx-auto">
              Read by 14,000+ CMOs, founders, and growth directors. Zero fluff. Pure data and tactical execution.
            </p>
            <div className="pt-2">
              <Link
                href="/#audit"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white dark:text-[#0A0C10] bg-[#059669] dark:bg-[#5BE18E] hover:bg-[#047857] dark:hover:bg-[#4ADE80] transition-colors font-sans uppercase tracking-wider shadow-md"
              >
                <span>Request Executive Briefing</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
