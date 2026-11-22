"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Meta Ads",
    sub: "Facebook & Instagram advertising",
    desc: "Lead generation campaigns targeted by location, age and interests.",
    points: ["WhatsApp & call campaigns", "Retargeting audiences", "Ad creatives & copywriting"],
  },
  {
    title: "Google Ads",
    sub: "Search & PPC",
    desc: "Pay-per-click ads that appear the moment buyers search for your service.",
    points: ["Keyword research & bidding", "Conversion tracking", "Negative keyword filtering"],
  },
  {
    title: "Social Media Management",
    sub: "Content & community",
    desc: "Consistent posting that builds brand awareness and customer trust.",
    points: ["Monthly content calendar", "Reels, posts & stories", "Comment & DM replies"],
  },
  {
    title: "SEO",
    sub: "Search engine optimisation",
    desc: "Higher Google rankings and steady organic website traffic.",
    points: ["On-page & technical SEO", "Blog & landing page content", "Monthly ranking reports"],
  },
  {
    title: "Google Business Profile",
    sub: "Local SEO & Maps",
    desc: "Appear in the Maps 3-pack when nearby customers search.",
    points: ["Profile optimisation", "Review management", "Photo & offer posts"],
  },
];

const arrowClass =
  "w-10 h-10 rounded-full border border-black/15 dark:border-white/20 flex items-center justify-center transition-colors enabled:hover:border-[#55D98A] enabled:hover:text-[#059669] dark:enabled:hover:text-[#55D98A] disabled:opacity-30 cursor-pointer disabled:cursor-default";

export default function SolutionsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#FAF9F5] dark:bg-[#0D1927] text-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-[#059669] dark:text-[#55D98A] mb-3">What we do</p>
            <h2 className="font-clash text-3xl sm:text-5xl font-bold tracking-tight leading-[1] max-w-2xl">
              Five services, one goal: more enquiries.
            </h2>
          </div>
          <div className="flex gap-2 shrink-0">
            <button type="button" onClick={() => slide(-1)} disabled={!canPrev} aria-label="Previous services" className={arrowClass}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button type="button" onClick={() => slide(1)} disabled={!canNext} aria-label="Next services" className={arrowClass}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={trackRef} className="mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="snap-start shrink-0 w-[85%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] p-7 rounded-xl bg-white dark:bg-[#13273D] border border-black/[0.08] dark:border-white/10"
            >
              <h3 className="font-clash text-xl font-bold">{svc.title}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{svc.sub}</p>
              <p className="mt-5 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{svc.desc}</p>
              <ul className="mt-5 pt-5 border-t border-black/[0.06] dark:border-white/[0.08] space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                {svc.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#059669] dark:bg-[#55D98A] shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
