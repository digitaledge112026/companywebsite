"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly do we see measurable results after partnering?",
      a: "Our 4-D Edge Engine is structured for velocity. In the first 14 days, we complete the forensic audit, brand alignment, and technical tracking setup. First creative sprint batches and campaign launches go live in weeks 3–4. Typically, clients see meaningful ROAS improvements and conversion lift between days 30 and 45.",
    },
    {
      q: "What differentiates Digital Edge from traditional marketing agencies?",
      a: "Traditional agencies silo design from media buying, creating fragmented campaigns that burn money. At Digital Edge, our brand strategists, performance media buyers, and Next.js engineers work in a unified cell. Every visual asset we produce is engineered for conversion; every media dollar we spend reinforces long-term brand equity.",
    },
    {
      q: "Do you integrate with our existing in-house team or operate independently?",
      a: "Both models are fully supported. We often operate as an end-to-end outsourced CMO & growth squad for fast-scaling companies, or as an elite specialized accelerator working alongside your existing marketing directors and creatives to unlock channels they lack bandwidth for.",
    },
    {
      q: "What technologies and ad channels do you specialize in?",
      a: "On the digital acquisition front, we manage Meta (Instagram/Facebook), Google Ads (Search, YouTube, Performance Max), TikTok Ads, and LinkedIn B2B. On the engineering side, we build with Next.js, React, Tailwind CSS, headless Shopify, and integrate first-party Conversions API (CAPI) and GA4 telemetry.",
    },
    {
      q: "What is Generative Engine Optimization (GEO) and why does it matter?",
      a: "Over 40% of high-intent search queries now happen inside or are summarized by AI models like Google AI Overviews, ChatGPT, and Perplexity. GEO is our proprietary methodology for structuring your brand's digital presence and authority so that AI models consistently cite and recommend your company as the premier choice.",
    },
    {
      q: "What are your contract terms and commitment lengths?",
      a: "We believe long-term retention must be earned through commercial performance, not restrictive multi-year lock-ins. All partnerships start with a 90-day initial sprint to achieve baseline targets, followed by flexible month-to-month terms with a simple 30-day notice period.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#060913]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#C5A059]/30 text-xs font-semibold text-[#DFC794]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            Frequently Answered Questions
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Clear Answers. <br />
            <span className="gold-gradient-text">Complete Transparency.</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about partnering with Digital Edge.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:text-[#DFC794] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
