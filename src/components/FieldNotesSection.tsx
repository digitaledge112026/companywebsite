"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FieldNotesSection() {
  const notes = [
    {
      title: "Why First-Party CAPI Attribution Slashes Blended CAC by 38%",
      date: "Q4 2026 AUDIT",
      category: "PAID MEDIA",
      summary:
        "A forensic breakdown of how server-side telemetry uncovered $180,000 in monthly ad waste across Google Performance Max and Meta Advantage+ campaigns.",
      metric: "-38.4% CAC",
      trend: "+142% ROAS",
    },
    {
      title: "The Creative Testing Sprint: Scaling DTC Ad Spend to $250k/mo",
      date: "CASE STUDY",
      category: "CREATIVE STRATEGY",
      summary:
        "How rotating 24 weekly UGC angles with 3-second hook variations unlocked a 5.4x blended return on ad spend without creative fatigue.",
      metric: "5.4x BLENDED ROAS",
      trend: "$1.2M REVENUE",
    },
    {
      title: "Google Search Arbitrage & Negative Keyword Conquesting",
      date: "METHODOLOGY",
      category: "SEARCH & PMAX",
      summary:
        "The exact negative keyword exclusion scripts and smart bidding architectures we use to defend branded queries and conquer competitor search volume.",
      metric: "94% SHARE OF VOICE",
      trend: "ZERO BUDGET WASTE",
    },
  ];

  return (
    <section
      id="insights"
      className="py-20 sm:py-28 bg-neutral-50 dark:bg-[#0B0C0E] border-t border-black/[0.08] dark:border-white/[0.08] relative overflow-hidden text-neutral-900 dark:text-white transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#059669] dark:text-[#5BE18E] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#5BE18E]" />
              <span>PERFORMANCE TEARDOWNS</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.92] text-neutral-900 dark:text-white">
              PROVEN INSIGHTS & CASE STUDIES.
            </h2>
          </div>

          <Link
            href="/insights"
            className="font-mono text-xs text-neutral-500 dark:text-neutral-400 hover:text-[#059669] dark:hover:text-[#5BE18E] transition-colors flex items-center gap-1.5 uppercase tracking-wider shrink-0"
          >
            <span>View all teardowns</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {notes.map((note, index) => (
            <Link
              key={index}
              href="/insights"
              className="group rounded-2xl bg-white dark:bg-[#121418] border border-neutral-200 dark:border-white/[0.08] hover:border-[#059669]/50 dark:hover:border-[#5BE18E]/50 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-md dark:hover:shadow-[0_20px_50px_rgba(91,225,142,0.1)]"
            >
              <div>
                {/* Simulated Monitor / Analytics Graph Graphic */}
                <div className="w-full h-40 rounded-xl bg-neutral-100 dark:bg-[#0B0C0E] border border-neutral-200 dark:border-white/[0.06] p-4 relative overflow-hidden flex flex-col justify-between mb-6 group-hover:border-[#059669]/20 dark:group-hover:border-[#5BE18E]/20 transition-colors">
                  {/* Monitor Header */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#5BE18E] animate-ping" />
                      LIVE AUDIT
                    </span>
                    <span className="text-[#059669] dark:text-[#5BE18E] font-bold">
                      {note.metric}
                    </span>
                  </div>

                  {/* Sparkline Graph Bars */}
                  <div className="flex items-end gap-1.5 h-16 pt-3">
                    {[25, 38, 30, 55, 45, 68, 60, 82, 75, 92, 85, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-neutral-300 dark:bg-white/10 group-hover:bg-[#059669] dark:group-hover:bg-[#5BE18E] rounded-t transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ),
                    )}
                  </div>

                  {/* Monitor Status */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                    <span>TELEMETRY: VERIFIED</span>
                    <span className="text-[#059669] dark:text-[#5BE18E] font-medium">
                      {note.trend}
                    </span>
                  </div>
                </div>

                {/* Date & Category */}
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 dark:text-neutral-400 mb-2.5">
                  <span>{note.date}</span>
                  <span className="text-[#059669] dark:text-[#5BE18E] font-semibold">
                    {note.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-[#059669] dark:group-hover:text-[#5BE18E] transition-colors leading-tight uppercase">
                  {note.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {note.summary}
                </p>
              </div>

              {/* Bottom Arrow */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-white/[0.08] flex items-center justify-between font-mono text-xs text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                <span>Read Full Teardown</span>
                <ArrowUpRight className="w-4 h-4 text-[#059669] dark:text-[#5BE18E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
